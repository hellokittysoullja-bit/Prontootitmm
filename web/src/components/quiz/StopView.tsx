import { Title } from "@/components/ui";

// Младше 18 — без продажи и без сбора данных (docs/BRIEF.md §3).
export function StopView({ onBack }: { onBack: () => void }) {
  return (
    <section aria-labelledby="s-title">
      <Title>
        <span id="s-title">Этот сервис только для взрослых</span>
      </Title>
      <div className="mt-5 space-y-4 text-paper/90">
        <p>
          Мы не можем работать с теми, кому меньше 18. Но если ты об этом думаешь — это уже
          хороший знак.
        </p>
        <p>
          Если тяжело и хочется поговорить с живым человеком — бесплатно и анонимно можно
          позвонить на Детский телефон доверия:
        </p>
        <p>
          <a href="tel:88002000122" className="tabular font-serif text-2xl text-dawn underline underline-offset-4">
            8 800 2000 122
          </a>
          <span className="mt-1 block text-[0.9375rem] text-fog">Круглосуточно, бесплатно по России</span>
        </p>
      </div>
      <button
        type="button"
        onClick={onBack}
        className="mt-8 min-h-11 text-fog underline underline-offset-4 hover:text-paper"
      >
        Указать другой возраст
      </button>
    </section>
  );
}
