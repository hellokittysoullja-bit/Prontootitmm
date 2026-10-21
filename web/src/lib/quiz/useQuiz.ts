"use client";

import { useCallback, useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { keys, readJSON, writeJSON } from "@/lib/storage";
import { firstScreen, nextScreen } from "./engine";
import type { AnswerValue, Answers, QuestionId, ScreenId } from "./types";

export type QuizState = {
  answers: Answers;
  history: ScreenId[];
  seed: number;
  finished: boolean;
};

function freshState(): QuizState {
  return {
    answers: {},
    history: [firstScreen],
    seed: Math.floor(Math.random() * 2 ** 31),
    finished: false,
  };
}

export function loadQuiz(): QuizState | null {
  const saved = readJSON<QuizState | null>(keys.quiz, null);
  return saved && Array.isArray(saved.history) && saved.history.length ? saved : null;
}

export function useQuiz() {
  const [state, setState] = useState<QuizState | null>(null);

  useEffect(() => {
    const saved = loadQuiz();
    setState(saved && !saved.finished ? saved : freshState());
  }, []);

  useEffect(() => {
    if (state) writeJSON(keys.quiz, state);
  }, [state]);

  const current = state ? state.history[state.history.length - 1] : undefined;

  useEffect(() => {
    if (current) track("quiz_screen_view", { screen: current });
  }, [current]);

  const advance = useCallback(
    (id: QuestionId | null, value: AnswerValue | undefined, skipped = false) => {
      if (!state) return;
      const here = state.history[state.history.length - 1];
      const answers = { ...state.answers };
      if (id) {
        if (value === undefined) delete answers[id];
        else answers[id] = value;
        track(skipped ? "quiz_skip" : "quiz_answer", {
          screen: id,
          // Значения вариантов — это id, а не тексты. Свободный текст не отправляем.
          option: Array.isArray(value)
            ? value.join(",")
            : typeof value === "string" && id !== "reason"
              ? value
              : undefined,
        });
      }
      const next = nextScreen(here, answers);
      if (!next) {
        track("quiz_complete");
        setState({ ...state, answers, finished: true });
      } else {
        setState({ ...state, answers, history: [...state.history, next] });
      }
    },
    [state],
  );

  const back = useCallback(() => {
    setState((s) => (s && s.history.length > 1 ? { ...s, history: s.history.slice(0, -1) } : s));
  }, []);

  const restart = useCallback(() => setState(freshState()), []);

  return { state, current, advance, back, restart };
}
