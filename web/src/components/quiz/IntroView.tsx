"use client";

import { useState } from "react";
import { Button, Title } from "@/components/ui";
import { ActionBar } from "./QuestionView";

export function IntroView({ onStart }: { onStart: () => void }) {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <section aria-labelledby="i-title">
      <Title>
        <span id="i-title">12 вопросов о том, когда и почему тянет</span>
      </Title>
      <p className="mt-4 text-paper/90">
        По ответам соберём план на 8 недель: вечерний сценарий, SOS на момент тяги и короткие
        отметки. Это займёт около трёх минут.
      </p>
      <ul className="mt-6 space-y-3 text-paper/90">
        <li className="flex gap-3">
          <Dot />
          Анонимно: без имени, телефона и регистрации
        </li>
        <li className="flex gap-3">
          <Dot />
          Любой вопрос можно пропустить
        </li>
        <li className="flex gap-3">
          <Dot />
          Без морали и диагнозов — только то, что поможет
        </li>
      </ul>
      <button
        type="button"
        className="mt-6 min-h-11 text-[0.9375rem] text-fog underline decoration-line underline-offset-4 hover:text-paper"
        aria-expanded={privacyOpen}
        aria-controls="privacy-note"
        onClick={() => setPrivacyOpen((v) => !v)}
      >
        Как мы храним ответы
      </button>
      <p id="privacy-note" hidden={!privacyOpen} className="mt-1 text-[0.9375rem] text-fog">
        Ответы хранятся только в этом браузере, пока ты не решишь сохранить план. В аналитику
        уходят только номера экранов и вариантов, без твоих текстов и контактов.
      </p>
      <ActionBar>
        <Button type="button" onClick={onStart}>
          Пройти тест
        </Button>
      </ActionBar>
    </section>
  );
}

function Dot() {
  return <span aria-hidden="true" className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-dawn" />;
}
