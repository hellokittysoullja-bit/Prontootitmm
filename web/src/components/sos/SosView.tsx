"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/icons";
import { Button, Title } from "@/components/ui";
import { track } from "@/lib/analytics";
import { g, reason } from "@/lib/quiz/profile";
import type { Answers } from "@/lib/quiz/types";
import { loadQuiz } from "@/lib/quiz/useQuiz";
import { keys, readJSON, writeJSON } from "@/lib/storage";

// SOS «тянет прямо сейчас» (docs/BRIEF.md §7, research/01 §7.3).
// Бесплатно, без логина, работает офлайн. Не красный, без списка «последствий».

const PHASES = [
  { name: "Вдох", seconds: 4, scale: 1 },
  { name: "Пауза", seconds: 2, scale: 1 },
  { name: "Выдох", seconds: 6, scale: 0.56 },
] as const;

const ROUND_SECONDS = 60;

const plural = new Intl.PluralRules("ru-RU");

function wavesLabel(n: number): string {
  switch (plural.select(n)) {
    case "one":
      return "волна пережита";
    case "few":
      return "волны пережиты";
    default:
      return "волн пережито";
  }
}

type Stage = "breathing" | "rate" | "relief" | "still" | "relapse" | "noted";

type SosLog = { waves: number; relapses: { at: string; trigger?: string }[] };

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function Breathing({
  answers,
  onFinish,
  onRelief,
}: {
  answers: Answers;
  onFinish: () => void;
  onRelief: () => void;
}) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const [phaseLeft, setPhaseLeft] = useState<number>(PHASES[0].seconds);
  const [left, setLeft] = useState(ROUND_SECONDS);
  const [cycles, setCycles] = useState(0);
  const [ready, setReady] = useState(false);
  const tick = useRef<number | null>(null);

  // Первый кадр рисуем «выдохнутым», чтобы первый вдох был виден как расширение.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    tick.current = window.setInterval(() => {
      setLeft((s) => s - 1);
      setPhaseLeft((s) => s - 1);
    }, 1000);
    return () => {
      if (tick.current) window.clearInterval(tick.current);
    };
  }, []);

  useEffect(() => {
    if (phaseLeft > 0) return;
    const next = (phase + 1) % PHASES.length;
    if (next === 0) setCycles((c) => c + 1);
    setPhase(next);
    setPhaseLeft(PHASES[next].seconds);
    if ("vibrate" in navigator) navigator.vibrate?.(25);
  }, [phaseLeft, phase]);

  useEffect(() => {
    if (left <= 0) onFinish();
  }, [left, onFinish]);

  const current = PHASES[phase];
  const own = reason(answers);
  const minutes = Math.floor(Math.max(0, left) / 60);
  const seconds = String(Math.max(0, left) % 60).padStart(2, "0");

  return (
    <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col items-center px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <p className="tabular self-end text-fog" aria-label={`Осталось ${minutes} мин ${seconds} с`}>
        {minutes}:{seconds}
      </p>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="relative flex size-64 items-center justify-center sm:size-72" aria-hidden="true">
          {!reduced && (
            <div
              className="absolute inset-0 rounded-full ring-1 ring-dawn/30"
              style={{
                background:
                  "radial-gradient(circle, rgba(241,199,163,0.30) 0%, rgba(227,162,90,0.12) 55%, rgba(227,162,90,0) 72%)",
                transform: `scale(${ready ? current.scale : 0.56})`,
                transitionProperty: "transform",
                transitionDuration: `${current.seconds}s`,
                transitionTimingFunction: "cubic-bezier(0.37, 0, 0.63, 1)",
              }}
            />
          )}
          <div className="relative size-16 rounded-full bg-dawn shadow-[0_0_48px_rgba(241,199,163,0.45)]" />
        </div>
        <p className="mt-8 font-serif text-4xl text-paper" aria-live="polite">
          {current.name}
          {reduced && <span className="tabular ml-3 text-fog">{phaseLeft}</span>}
        </p>
        <p className="mt-2 text-fog">
          {current.name === "Выдох" ? "Медленно, через рот" : current.name === "Вдох" ? "Через нос, животом" : "Задержи дыхание"}
        </p>

        <div className="mt-10 max-w-sm text-center" aria-live="polite">
          {cycles >= 1 && (
            <p className="text-paper/90">Тяга — это волна. Обычно она спадает за 15–30 минут. Просто наблюдай за ней.</p>
          )}
          {cycles >= 2 && own && (
            <p className="mt-4 font-serif text-lg text-dawn">
              Ты {g(answers, "писал", "писала")}: «{own}»
            </p>
          )}
        </div>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-2">
        <Button type="button" variant="secondary" onClick={() => setLeft((s) => s + 60)}>
          Ещё минуту
        </Button>
        <Button type="button" variant="quiet" onClick={onRelief}>
          Уже отпустило
        </Button>
      </div>
    </div>
  );
}

export function SosView() {
  const [answers, setAnswers] = useState<Answers>({});
  const [stage, setStage] = useState<Stage>("breathing");
  const [round, setRound] = useState(0);
  const [log, setLog] = useState<SosLog>({ waves: 0, relapses: [] });

  useEffect(() => {
    setAnswers(loadQuiz()?.answers ?? {});
    setLog(readJSON<SosLog>(keys.waves, { waves: 0, relapses: [] }));
    track("sos_start");
  }, []);

  const save = useCallback((next: SosLog) => {
    setLog(next);
    writeJSON(keys.waves, next);
  }, []);

  const finishRound = useCallback(() => setStage("rate"), []);

  function relief() {
    save({ ...log, waves: log.waves + 1 });
    track("sos_complete", { outcome: "relief" });
    setStage("relief");
  }

  function rate(value: number) {
    track("sos_rate", { value });
    if (value <= 3) relief();
    else setStage("still");
  }

  function again() {
    setRound((r) => r + 1);
    setStage("breathing");
  }

  function relapse() {
    track("sos_complete", { outcome: "relapse" });
    setStage("relapse");
  }

  function noteTrigger(trigger?: string) {
    save({ ...log, relapses: [...log.relapses, { at: new Date().toISOString(), trigger }] });
    setStage("noted");
  }

  return (
    <div className="min-h-dvh bg-night">
      <header className="mx-auto flex h-14 w-full max-w-[34rem] items-center justify-between px-3 pt-[env(safe-area-inset-top)]">
        <span className="px-2 text-[0.9375rem] text-fog">Тянет прямо сейчас</span>
        <Link
          href="/"
          className="flex size-11 items-center justify-center rounded-full text-fog hover:bg-dusk hover:text-paper"
          aria-label="Закрыть SOS"
        >
          <CloseIcon className="size-6" />
        </Link>
      </header>

      <main className="mx-auto w-full max-w-[34rem]">
        {stage === "breathing" && (
          <Breathing key={round} answers={answers} onFinish={finishRound} onRelief={relief} />
        )}

        {stage === "rate" && (
          <section className="px-5 pt-8" aria-labelledby="rate-title">
            <Title>
              <span id="rate-title">Насколько тянет сейчас?</span>
            </Title>
            <p className="mt-2 text-fog">1 — почти не тянет, 10 — очень сильно</p>
            <div className="mt-6 grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => rate(n)}
                  className="tabular h-14 rounded-2xl border border-line bg-dusk text-lg text-paper hover:border-lamp"
                >
                  {n}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={relapse}
              className="mt-8 min-h-11 text-fog underline underline-offset-4 hover:text-paper"
            >
              Я уже {g(answers, "сорвался", "сорвалась")}
            </button>
          </section>
        )}

        {stage === "still" && (
          <section className="px-5 pt-8" aria-labelledby="still-title">
            <Title>
              <span id="still-title">Волна ещё не спала — это нормально</span>
            </Title>
            <p className="mt-3 text-paper/90">Смени обстановку прямо сейчас. Выбери одно и сделай, пока читаешь:</p>
            <ul className="mt-5 space-y-3 text-paper/90">
              {[
                "Выйди из комнаты, где сейчас находишься",
                "Умойся холодной водой, подержи запястья под краном",
                "Сделай 15 приседаний или отжиманий",
                "Положи телефон в другой комнате экраном вниз",
                "Напиши кому-нибудь — о чём угодно",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-dawn" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-2">
              <Button type="button" onClick={again}>
                Ещё минуту дыхания
              </Button>
              <Button type="button" variant="secondary" onClick={relief}>
                Отпустило
              </Button>
              <Button type="button" variant="quiet" onClick={relapse}>
                Я {g(answers, "сорвался", "сорвалась")}
              </Button>
            </div>
          </section>
        )}

        {stage === "relief" && (
          <section className="px-5 pt-8" aria-labelledby="relief-title">
            <Title>
              <span id="relief-title">Ты {g(answers, "переждал", "переждала")} волну. Это и есть навык</span>
            </Title>
            <p className="mt-3 text-paper/90">
              Каждый такой раз делает следующий немного легче. Можно гордиться — без шуток.
            </p>
            <p className="mt-6 rounded-2xl bg-dusk p-5">
              <span className="tabular font-serif text-3xl text-dawn">{log.waves}</span>
              <span className="ml-3 text-paper/90">
                {wavesLabel(log.waves)}
              </span>
            </p>
            <div className="mt-8 flex flex-col gap-2 sm:flex-row">
              <Button type="button" variant="secondary" onClick={again}>
                Подышать ещё
              </Button>
              <Link href="/quiz" className="inline-flex min-h-11 items-center justify-center px-2 text-fog underline underline-offset-4 hover:text-paper">
                Собрать план против таких моментов
              </Link>
            </div>
          </section>
        )}

        {stage === "relapse" && (
          <section className="px-5 pt-8" aria-labelledby="relapse-title">
            <Title>
              <span id="relapse-title">Бывает. Это данные, а не приговор</span>
            </Title>
            <p className="mt-3 text-paper/90">
              Дни до этого никуда не делись. Отметь, что было перед срывом, — так в следующий раз
              волна будет заметна раньше.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Ночь и телефон", "Скука", "Стресс", "Никого дома", "Алкоголь", "Другое"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => noteTrigger(t)}
                  className="min-h-11 rounded-full border border-line bg-dusk px-4 text-paper hover:border-lamp"
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => noteTrigger()}
              className="mt-6 min-h-11 text-fog underline underline-offset-4 hover:text-paper"
            >
              Не сейчас
            </button>
          </section>
        )}

        {stage === "noted" && (
          <section className="px-5 pt-8" aria-labelledby="noted-title">
            <Title>
              <span id="noted-title">Записано. Отдохни</span>
            </Title>
            <p className="mt-3 text-paper/90">
              Не нужно ничего доказывать себе прямо сейчас. Лучшее, что можно сделать, — лечь спать
              или выйти на воздух. Завтра начнём следующий отрезок.
            </p>
            <div className="mt-8">
              <Link href="/" className="inline-flex min-h-11 items-center text-fog underline underline-offset-4 hover:text-paper">
                На главную
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
