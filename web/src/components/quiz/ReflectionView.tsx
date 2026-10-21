import { Button, Title } from "@/components/ui";
import type { ReflectionContent } from "@/lib/quiz/types";
import { ActionBar } from "./QuestionView";

function NightVisual() {
  // Окна ночного дома: светится одно — то, где сейчас не спят.
  const windows = Array.from({ length: 18 }, (_, i) => i);
  return (
    <svg viewBox="0 0 320 120" className="h-auto w-full" aria-hidden="true">
      <rect x="40" y="18" width="120" height="102" rx="2" fill="var(--dusk)" />
      <rect x="176" y="44" width="104" height="76" rx="2" fill="var(--dusk)" />
      {windows.map((i) => {
        const col = i % 6;
        const row = Math.floor(i / 6);
        const lit = i === 8;
        return (
          <rect
            key={i}
            x={54 + col * 17}
            y={32 + row * 26}
            width="9"
            height="13"
            rx="1"
            fill={lit ? "var(--lamp)" : "var(--dusk-raised)"}
          />
        );
      })}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={190 + i * 22} y="60" width="9" height="13" rx="1" fill="var(--dusk-raised)" />
      ))}
      <line x1="0" y1="119.5" x2="320" y2="119.5" stroke="var(--line)" />
    </svg>
  );
}

function WaveVisual() {
  return (
    <svg viewBox="0 0 320 140" className="h-auto w-full" role="img" aria-label="График: тяга нарастает, достигает пика и спадает за 15–30 минут">
      <line x1="16" y1="112" x2="304" y2="112" stroke="var(--line)" />
      <path
        d="M16 108 C 70 104, 100 30, 150 26 S 230 100, 304 108"
        fill="none"
        stroke="var(--dawn)"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
        className="wave-draw"
      />
      <text x="16" y="132" fill="var(--fog)" fontSize="12">начало</text>
      <text x="150" y="16" fill="var(--fog)" fontSize="12" textAnchor="middle">пик</text>
      <text x="304" y="132" fill="var(--fog)" fontSize="12" textAnchor="end">15–30 мин</text>
    </svg>
  );
}

function PeopleVisual() {
  return (
    <div className="flex items-end gap-2.5" role="img" aria-label="Один из девяти">
      {Array.from({ length: 9 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 40" className="h-10 w-6" aria-hidden="true">
          <circle cx="12" cy="8" r="6" fill={i === 4 ? "var(--lamp)" : "var(--dusk-raised)"} />
          <path d="M2 40c0-11 4.5-18 10-18s10 7 10 18z" fill={i === 4 ? "var(--lamp)" : "var(--dusk-raised)"} />
        </svg>
      ))}
    </div>
  );
}

export function ReflectionView({
  content,
  onNext,
}: {
  content: ReflectionContent;
  onNext: () => void;
}) {
  return (
    <section aria-labelledby="r-title">
      <div className="mb-8">
        {content.visual === "night" && <NightVisual />}
        {content.visual === "wave" && <WaveVisual />}
        {content.visual === "people" && <PeopleVisual />}
      </div>
      <Title>
        <span id="r-title">{content.title}</span>
      </Title>
      <div className="mt-5 space-y-4 text-[1.0625rem] text-paper/90">
        {content.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      {content.source && <p className="mt-6 text-sm text-fog">Источники: {content.source}</p>}
      <ActionBar>
        <Button type="button" onClick={onNext} autoFocus>
          Понятно, дальше
        </Button>
      </ActionBar>
    </section>
  );
}
