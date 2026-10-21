"use client";

import { useState } from "react";

// Живой фрагмент продукта в hero: тот же ритм 4–2–6, что и на SOS-экране.
// Анимация на CSS; кнопка паузы обязательна для бесконечного движения рядом с текстом (WCAG 2.2.2).
export function BreathOrb() {
  const [paused, setPaused] = useState(false);
  const playState = { animationPlayState: paused ? "paused" : "running" } as const;
  return (
    <figure className="flex flex-col items-center">
      <div className="relative flex size-56 items-center justify-center sm:size-72" aria-hidden="true">
        <div
          className="orb absolute inset-0 rounded-full ring-1 ring-dawn/30"
          style={{
            ...playState,
            background:
              "radial-gradient(circle, rgba(241,199,163,0.30) 0%, rgba(227,162,90,0.12) 55%, rgba(227,162,90,0) 72%)",
          }}
        />
        <div className="relative size-14 rounded-full bg-dawn shadow-[0_0_48px_rgba(241,199,163,0.45)] sm:size-16" />
      </div>
      <div className="relative mt-6 h-10 w-full text-center font-serif text-3xl text-paper" aria-hidden="true">
        {(["in", "hold", "out"] as const).map((phase) => (
          <span key={phase} className="orb-label absolute inset-0" data-phase={phase} style={playState}>
            {phase === "in" ? "Вдох" : phase === "hold" ? "Пауза" : "Выдох"}
          </span>
        ))}
      </div>
      <figcaption className="mt-3 max-w-[18rem] text-center text-[0.9375rem] text-fog">
        Попробуй прямо здесь: вдох на 4 счёта, пауза на 2, выдох на 6. Так начинается SOS-экран.
      </figcaption>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="mt-2 min-h-11 px-3 text-[0.9375rem] text-fog underline decoration-line underline-offset-4 hover:text-paper"
      >
        {paused ? "Продолжить анимацию" : "Остановить анимацию"}
      </button>
    </figure>
  );
}
