"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BellIcon, CardIcon, CloseIcon, EyeOffIcon, LockIcon, ReturnIcon } from "@/components/icons";
import { Button, Title } from "@/components/ui";
import { site, type PlanId } from "@/config/site";
import { track } from "@/lib/analytics";
import { planChips } from "@/lib/plan";
import {
  addDays,
  ctaLabel,
  formatDay,
  formatRub,
  plans,
  yearPerDay,
  yearPerMonth,
  yearSavingPercent,
} from "@/lib/pricing";
import { paywallHeadline } from "@/lib/quiz/profile";
import type { Answers } from "@/lib/quiz/types";
import { loadQuiz } from "@/lib/quiz/useQuiz";

const faq = [
  {
    q: "Что будет написано в выписке банка?",
    a: "Нейтральное название магазина без слов о теме сервиса. Назначение платежа — «Подписка на сервис».",
  },
  {
    q: "Как отменить?",
    a: "В кабинете или в боте: «Подписка» → «Отменить». Два нажатия, без звонков и писем. Доступ сохранится до конца оплаченного периода.",
  },
  {
    q: "Что если я сорвусь?",
    a: "Это ожидаемая часть пути, а не провал. Дни не обнуляются, а план помогает разобрать, что к срыву привело.",
  },
  {
    q: "Кто видит мои ответы и записи?",
    a: "Только ты. Мы не просим имя и телефон. Записи дневника можно удалить целиком одной кнопкой.",
  },
  {
    q: "Как вернуть деньги?",
    a: `В течение ${site.refundDays} дней после оплаты — одной кнопкой в боте, без объяснения причин.`,
  },
];

function Timeline({ remind }: { remind: boolean }) {
  const today = new Date();
  const steps = [
    { when: "Сегодня", what: "Полный доступ к плану, SOS и боту. 0 ₽" },
    {
      when: formatDay(addDays(today, site.trialDays - 2)),
      what: remind ? "Напомним в Telegram или на почту, что пробный период заканчивается" : "Пробный период подходит к концу",
    },
    {
      when: formatDay(addDays(today, site.trialDays)),
      what: `Списание ${formatRub(site.prices.year)} за год, если не отменишь до этого дня`,
    },
  ];
  return (
    <ol className="relative mt-4 space-y-5 pl-7" aria-label="Как работает пробный период">
      <span aria-hidden="true" className="absolute bottom-2 left-[0.4375rem] top-2 w-px bg-line" />
      {steps.map((s, i) => (
        <li key={s.when} className="relative">
          <span
            aria-hidden="true"
            className={`absolute -left-7 top-[0.3rem] size-3.5 rounded-full border-2 ${
              i === 0 ? "border-dawn bg-dawn" : "border-fog bg-night"
            }`}
          />
          <p className="font-medium text-paper">{s.when}</p>
          <p className="text-[0.9375rem] text-fog">{s.what}</p>
        </li>
      ))}
    </ol>
  );
}

function PlanCard({
  id,
  selected,
  onSelect,
}: {
  id: PlanId;
  selected: boolean;
  onSelect: () => void;
}) {
  const plan = plans[id];
  return (
    <label
      className={`relative flex cursor-pointer gap-4 rounded-2xl border p-4 transition-colors ${
        selected ? "border-lamp bg-dusk-raised" : "border-line bg-dusk hover:border-fog"
      }`}
    >
      <input
        type="radio"
        name="plan"
        value={id}
        checked={selected}
        onChange={onSelect}
        className="mt-1 size-5 shrink-0 accent-[var(--lamp)]"
      />
      <span className="flex-1">
        <span className="flex items-baseline justify-between gap-3">
          <span className="text-lg font-medium text-paper">{plan.title}</span>
          <span className="tabular text-lg text-paper">
            {formatRub(plan.price)} <span className="text-[0.9375rem] text-fog">{plan.period}</span>
          </span>
        </span>
        {id === "year" ? (
          <span className="mt-1 block text-[0.9375rem] text-fog">
            ≈ {yearPerMonth} ₽ в месяц, {yearPerDay} ₽ в день. {site.trialDays} дней бесплатно.
          </span>
        ) : (
          <span className="mt-1 block text-[0.9375rem] text-fog">Без пробного периода. Отмена в любой момент.</span>
        )}
      </span>
      {id === "year" && (
        <span className="absolute -top-3 right-4 rounded-full bg-dawn px-2.5 py-0.5 text-sm font-medium text-night">
          −{yearSavingPercent}% к помесячной
        </span>
      )}
    </label>
  );
}

export function PaywallView() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Answers>({});
  const [plan, setPlan] = useState<PlanId>("year");
  const [remind, setRemind] = useState(true);

  useEffect(() => {
    setAnswers(loadQuiz()?.answers ?? {});
    track("paywall_view", { variant: "personal-v1" });
  }, []);

  function choose(id: PlanId) {
    setPlan(id);
    track("plan_selected", { plan: id });
  }

  function proceed() {
    track("checkout_start", { plan, remind });
    router.push(`/checkout?plan=${plan}&remind=${remind ? 1 : 0}`);
  }

  const chips = planChips(answers).slice(0, 2);

  const cta = (
    <div className="flex flex-col items-stretch gap-2">
      <Button type="button" onClick={proceed} className="sm:w-full">
        {ctaLabel(plan)}
      </Button>
      <p className="text-center text-[0.9375rem] text-fog">
        Отменить можно в 2 клика в боте или в кабинете
      </p>
    </div>
  );

  return (
    <main className="mx-auto w-full max-w-[34rem] px-5 pb-12">
      <div className="flex h-14 items-center justify-end">
        <Link
          href="/sos"
          onClick={() => track("paywall_close")}
          className="-mr-2 flex size-11 items-center justify-center rounded-full text-fog hover:bg-dusk hover:text-paper"
          aria-label="Закрыть и перейти к бесплатному SOS"
        >
          <CloseIcon className="size-6" />
        </Link>
      </div>

      <p className="text-[0.9375rem] text-dawn">Твой план готов</p>
      <Title className="mt-2">{paywallHeadline(answers)}</Title>
      {chips.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <li key={c} className="rounded-full border border-line px-3 py-1.5 text-[0.9375rem] text-paper/90">
              {c}
            </li>
          ))}
        </ul>
      )}

      <fieldset className="mt-8 space-y-4">
        <legend className="sr-only">Тариф</legend>
        <PlanCard id="year" selected={plan === "year"} onSelect={() => choose("year")} />
        <PlanCard id="month" selected={plan === "month"} onSelect={() => choose("month")} />
      </fieldset>

      <section className="mt-8 rounded-2xl border border-line p-5" aria-labelledby="terms">
        <h2 id="terms" className="font-medium text-paper">
          {plan === "year" ? "Как работает пробный период" : "Как работает оплата"}
        </h2>
        {plan === "year" ? (
          <>
            <Timeline remind={remind} />
            <label className="mt-5 flex cursor-pointer items-center justify-between gap-4 border-t border-line pt-4">
              <span className="flex items-center gap-3 text-paper/90">
                <BellIcon className="size-5 text-dawn" />
                Напомнить за 2 дня до списания
              </span>
              <input
                type="checkbox"
                checked={remind}
                onChange={(e) => setRemind(e.target.checked)}
                className="size-5 accent-[var(--lamp)]"
              />
            </label>
          </>
        ) : (
          <p className="mt-3 text-[0.9375rem] text-fog">
            Сегодня спишется {formatRub(site.prices.month)}, дальше — раз в месяц в тот же день. Отменить можно в
            любой момент, доступ сохранится до конца оплаченного месяца.
          </p>
        )}
      </section>

      <div className="mt-8">{cta}</div>

      <ul className="mt-10 grid gap-4 text-[0.9375rem] text-paper/90 sm:grid-cols-2" aria-label="Гарантии">
        <li className="flex gap-3">
          <EyeOffIcon className="size-5 shrink-0 text-dawn" />
          Анонимно: без имени и номера телефона
        </li>
        <li className="flex gap-3">
          <ReturnIcon className="size-5 shrink-0 text-dawn" />
          Возврат {site.refundDays} дней без объяснения причин
        </li>
        <li className="flex gap-3">
          <CardIcon className="size-5 shrink-0 text-dawn" />
          ЮKassa: карта, СБП, SberPay, T-Pay
        </li>
        <li className="flex gap-3">
          <LockIcon className="size-5 shrink-0 text-dawn" />
          В выписке — нейтральное название
        </li>
      </ul>

      <section className="mt-12" aria-labelledby="inside">
        <h2 id="inside" className="font-serif text-[1.375rem] text-paper">
          Что входит в доступ
        </h2>
        <ul className="mt-4 space-y-3 text-paper/90">
          {[
            ["Программа на 8 недель", "по 5–10 минут в день, собрана по твоим ответам"],
            ["ИИ-коуч в Telegram", "разбирает тягу и срывы в любое время; всегда честно говорит, что он ИИ"],
            ["Отметки утром и вечером", "и карта триггеров по ним"],
            ["Прогресс без обнуления", "дни остаются с тобой даже после срыва"],
          ].map(([title, text]) => (
            <li key={title}>
              <span className="text-paper">{title}</span>
              <span className="text-fog"> — {text}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.9375rem] text-fog">SOS-экран остаётся бесплатным всегда, с подпиской и без.</p>
      </section>

      <section className="mt-12" aria-labelledby="faq">
        <h2 id="faq" className="font-serif text-[1.375rem] text-paper">
          Вопросы
        </h2>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {faq.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-paper">
                {item.q}
                <span aria-hidden="true" className="text-fog transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-4 text-[0.9375rem] text-fog">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-10">{cta}</div>
      <p className="mt-6 text-center text-sm text-fog">
        Это программа самопомощи, а не медицинская услуга. Сервис только для взрослых.
      </p>
    </main>
  );
}
