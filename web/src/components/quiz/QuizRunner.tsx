"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getScreen, questionNumber } from "@/lib/quiz/engine";
import { questionCount } from "@/lib/quiz/screens";
import { useQuiz } from "@/lib/quiz/useQuiz";
import { ContactStep } from "./ContactStep";
import { IntroView } from "./IntroView";
import { QuestionView } from "./QuestionView";
import { QuizHeader } from "./QuizHeader";
import { ReflectionView } from "./ReflectionView";
import { StopView } from "./StopView";

export function QuizRunner() {
  const router = useRouter();
  const { state, current, advance, back } = useQuiz();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (state?.finished) router.push("/plan");
  }, [state?.finished, router]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [current]);

  if (!state || !current || state.finished) {
    return <div className="min-h-dvh" aria-busy="true" />;
  }

  const fresh = state.history.length === 1 && Object.keys(state.answers).length === 0;
  if (fresh && !started) {
    return (
      <main className="mx-auto min-h-dvh w-full max-w-[34rem] px-5 pb-6 pt-10 sm:pt-16">
        <IntroView onStart={() => setStarted(true)} />
      </main>
    );
  }

  const screen = getScreen(current);
  const canGoBack = state.history.length > 1;

  return (
    <div className="min-h-dvh">
      {screen.kind !== "stop" && (
        <QuizHeader
          number={Math.max(1, questionNumber(current))}
          total={questionCount}
          onBack={canGoBack ? back : undefined}
        />
      )}
      <main className="mx-auto w-full max-w-[34rem] px-5 pb-6 pt-6">
        {screen.kind === "question" && (
          <QuestionView
            key={screen.id}
            screen={screen}
            answers={state.answers}
            seed={state.seed}
            onAnswer={(value, skipped) => advance(screen.id, value, skipped)}
          />
        )}
        {screen.kind === "reflection" && (
          <ReflectionView key={screen.id} content={screen.content(state.answers)} onNext={() => advance(null, undefined)} />
        )}
        {screen.kind === "contact" && <ContactStep onDone={() => advance(null, undefined)} />}
        {screen.kind === "stop" && <StopView onBack={back} />}
      </main>
    </div>
  );
}
