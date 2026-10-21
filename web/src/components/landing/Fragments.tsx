// Фрагменты настоящего интерфейса для глав лендинга. Подписаны как примеры.

export function ProgressFragment() {
  const rows = [
    { value: "12", label: "дней в этом отрезке" },
    { value: "47", label: "чистых дней за всё время" },
    { value: "9", label: "волн пережито в SOS" },
  ];
  return (
    <figure>
      <div className="rounded-3xl border border-line bg-dusk p-6">
        <p className="text-[0.9375rem] text-fog">Прогресс</p>
        <ul className="mt-4 space-y-4">
          {rows.map((r, i) => (
            <li key={r.label} className="flex items-baseline gap-4">
              <span className={`tabular w-16 font-serif ${i === 1 ? "text-4xl text-dawn" : "text-3xl text-paper"}`}>
                {r.value}
              </span>
              <span className="text-paper/90">{r.label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-line pt-4 text-[0.9375rem] text-paper/90">
          35 дней — это 35 дней. Они никуда не делись. Начнём следующий отрезок?
        </p>
      </div>
      <figcaption className="mt-3 text-sm text-fog">Пример экрана после срыва на 36-й день</figcaption>
    </figure>
  );
}

export function PrivacyFragment({ brand }: { brand: string }) {
  return (
    <figure className="space-y-3">
      <div className="flex items-center gap-3 rounded-2xl bg-dusk-raised px-4 py-3">
        <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-night">
          <span className="size-3 rounded-full bg-lamp" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex justify-between gap-3 text-[0.9375rem]">
            <span className="font-medium text-paper">{brand}</span>
            <span className="tabular text-fog">22:30</span>
          </span>
          <span className="block truncate text-[0.9375rem] text-paper/90">Время для вечерней отметки</span>
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-line px-4 py-3 text-[0.9375rem]">
        <span className="text-paper/90">Подписка на сервис</span>
        <span className="tabular text-paper">−1 990,00 ₽</span>
      </div>
      <figcaption className="text-sm text-fog">Пример уведомления и строки в банковской выписке</figcaption>
    </figure>
  );
}
