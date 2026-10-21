import { progressFraction } from "@/lib/quiz/engine";

export function QuizHeader({
  number,
  total,
  onBack,
}: {
  number: number;
  total: number;
  onBack?: () => void;
}) {
  const fraction = progressFraction(number, total);
  return (
    <header className="sticky top-0 z-10 bg-night/95 pt-[env(safe-area-inset-top)] backdrop-blur-[2px]">
      <div className="mx-auto flex h-14 w-full max-w-[34rem] items-center gap-3 px-3">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="flex size-11 items-center justify-center rounded-full text-fog hover:bg-dusk hover:text-paper"
            aria-label="Назад"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <span className="size-11" />
        )}
        <div
          className="h-1.5 flex-1 overflow-hidden rounded-full bg-dusk"
          role="progressbar"
          aria-label="Прогресс теста"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={number}
          aria-valuetext={`Вопрос ${number} из ${total}`}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-lamp to-dawn transition-[width] duration-500 ease-out"
            style={{ width: `${Math.max(4, fraction * 100)}%` }}
          />
        </div>
        <span className="tabular w-14 text-right text-sm text-fog">
          {number}/{total}
        </span>
      </div>
    </header>
  );
}
