"use client";

import { useCallback, useEffect, useState } from "react";
import { ButtonLink, Page, Title } from "@/components/ui";
import { ActionBar } from "@/components/quiz/QuestionView";
import { track } from "@/lib/analytics";
import { loaderLines, planChips, planGoals, planStages, reason, relapseNote } from "@/lib/plan";
import { paywallHeadline } from "@/lib/quiz/profile";
import type { Answers } from "@/lib/quiz/types";
import { loadQuiz } from "@/lib/quiz/useQuiz";

const STEP_MS = 1150;

function Loader({ lines, onDone }: { lines: string[]; onDone: () => void }) {
  const [shown, setShown] = useState(1);

  useEffect(() => {
    if (shown > lines.length) {
      const t = window.setTimeout(onDone, 450);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setShown((n) => n + 1), STEP_MS);
    return () => window.clearTimeout(t);
  }, [shown, lines.length, onDone]);

  return (
    <Page className="flex min-h-dvh flex-col justify-center">
      <Title>Собираем твой план</Title>
      <ol className="mt-8 space-y-4" aria-live="polite">
        {lines.slice(0, shown).map((line, i) => {
          const done = i < shown - 1 || shown > lines.length;
          return (
            <li key={line} className="flex items-start gap-3 text-paper/90">
              <span
                aria-hidden="true"
                className={`mt-[0.35rem] flex size-4 shrink-0 items-center justify-center rounded-full border ${
                  done ? "border-dawn bg-dawn" : "animate-pulse border-fog"
                }`}
              >
                {done && (
                  <svg viewBox="0 0 16 16" className="size-3" fill="none">
                    <path d="M3.5 8.5l3 3 6-7" stroke="var(--night)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              {line}
            </li>
          );
        })}
      </ol>
    </Page>
  );
}

function Plan({ answers }: { answers: Answers }) {
  const stages = planStages(answers);
  const own = reason(answers);
  const goals = planGoals(answers);
  const relapse = relapseNote(answers);

  useEffect(() => {
    track("plan_view");
  }, []);

  return (
    <Page>
      <p className="text-[0.9375rem] text-dawn">План готов</p>
      <Title className="mt-2">{paywallHeadline(answers)}</Title>
      {goals && <p className="mt-3 text-paper/90">{goals}.</p>}

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Что мы учли">
        {planChips(answers).map((c) => (
          <li key={c} className="rounded-full border border-line px-3 py-1.5 text-[0.9375rem] text-paper/90">
            {c}
          </li>
        ))}
      </ul>

      {own && (
        <figure className="mt-8 border-l-2 border-lamp pl-4">
          <blockquote className="font-serif text-xl leading-snug text-paper">«{own}»</blockquote>
          <figcaption className="mt-2 text-[0.9375rem] text-fog">
            Твоя причина. Покажем её на SOS-экране, когда будет тянуть.
          </figcaption>
        </figure>
      )}

      <ol className="mt-10 space-y-8">
        {stages.map((stage) => (
          <li key={stage.weeks}>
            <p className="tabular text-[0.9375rem] text-fog">{stage.weeks}</p>
            <h2 className="mt-1 font-serif text-[1.375rem] text-paper">{stage.title}</h2>
            <ul className="mt-3 space-y-2.5">
              {stage.items.map((item) => (
                <li key={item} className="flex gap-3 text-paper/90">
                  <span aria-hidden="true" className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-dawn" />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {relapse && <p className="mt-10 rounded-2xl bg-dusk p-5 text-paper/90">{relapse}</p>}

      <section className="mt-10" aria-labelledby="science">
        <h2 id="science" className="font-serif text-[1.375rem] text-paper">
          На чём это основано
        </h2>
        <p className="mt-3 text-paper/90">
          Программа построена на когнитивно-поведенческой терапии, терапии принятия и
          ответственности (ACT) и сёрфинге тяги. В рандомизированном исследовании 6-недельной
          онлайн-программы Hands-off на тех же методах у участников снизились тяга и проблемное
          потребление.
        </p>
        <p className="mt-3 text-[0.9375rem] text-fog">
          Это программа самопомощи, а не лечение. Результат у всех разный.
        </p>
      </section>

      <ActionBar>
        <ButtonLink href="/paywall">Открыть доступ к плану</ButtonLink>
        <ButtonLink href="/sos" variant="quiet">
          Сначала попробовать SOS бесплатно
        </ButtonLink>
      </ActionBar>
    </Page>
  );
}

export function PlanView() {
  const [answers, setAnswers] = useState<Answers | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const saved = loadQuiz();
    setAnswers(saved?.finished ? saved.answers : null);
  }, []);

  if (answers === undefined) return <div className="min-h-dvh" aria-busy="true" />;

  if (answers === null) {
    return (
      <Page className="flex min-h-dvh flex-col justify-center">
        <Title>План собирается по ответам теста</Title>
        <p className="mt-4 text-paper/90">Пройди 12 коротких вопросов — это около трёх минут.</p>
        <ActionBar>
          <ButtonLink href="/quiz">Пройти тест</ButtonLink>
        </ActionBar>
      </Page>
    );
  }

  if (loading) return <Loader lines={loaderLines(answers)} onDone={finishLoading} />;
  return <Plan answers={answers} />;
}
