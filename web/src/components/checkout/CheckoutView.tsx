"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LockIcon } from "@/components/icons";
import type { Contact } from "@/components/quiz/ContactStep";
import { Button, ButtonLink, Title } from "@/components/ui";
import { site } from "@/config/site";
import { track } from "@/lib/analytics";
import { addDays, formatDay, formatRub, isPlanId, plans } from "@/lib/pricing";
import { keys, readJSON } from "@/lib/storage";

// Чекаут по правилам Baymard (docs/research/03): сумма видна всегда, способы оплаты —
// радиокнопками, без телефона и регистрации, проверка поля при уходе из него.
// Реальная оплата через ЮKassa подключается следующим этапом; сейчас — честная заглушка.

type Method = "card" | "sbp" | "sberpay" | "tpay";

const methods: { id: Method; label: string; action: string }[] = [
  { id: "card", label: "Банковская карта", action: "Перейти к оплате картой" },
  { id: "sbp", label: "СБП", action: "Оплатить через СБП" },
  { id: "sberpay", label: "SberPay", action: "Перейти в SberPay" },
  { id: "tpay", label: "T-Pay", action: "Перейти в T-Pay" },
];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function emailError(value: string): string | null {
  const v = value.trim();
  if (!v) return "Нужна почта, чтобы прислать чек — так требует закон о кассах";
  if (!v.includes("@")) return "В адресе не хватает «@». Пример: name@mail.ru";
  if (!EMAIL.test(v)) return "Проверь часть после «@» — там должен быть домен, например mail.ru";
  return null;
}

export function CheckoutView() {
  const params = useSearchParams();
  const planParam = params.get("plan");
  const plan = plans[isPlanId(planParam) ? planParam : "year"];
  const remind = params.get("remind") !== "0";

  const [method, setMethod] = useState<Method>("card");
  const [email, setEmail] = useState("");
  const [emailProblem, setEmailProblem] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [consentProblem, setConsentProblem] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const contact = readJSON<Contact | null>(keys.contact, null);
    if (contact?.channel === "email") setEmail(contact.value);
  }, []);

  const chargeDate = formatDay(addDays(new Date(), plan.hasTrial ? site.trialDays : 0));
  const dueToday = plan.hasTrial ? 0 : plan.price;
  const consentText = plan.hasTrial
    ? `Соглашаюсь на автоматическое продление: ${formatRub(plan.price)} ${plan.period}, первое списание ${chargeDate}, если не отменю подписку до этого дня.`
    : `Соглашаюсь на автоматическое продление: ${formatRub(plan.price)} ${plan.period}, следующее списание через месяц. Отменить можно в любой момент.`;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const problem = emailError(email);
    setEmailProblem(problem);
    setConsentProblem(!consent);
    if (problem || !consent) return;
    track("payment_attempt", { plan: plan.id, method, remind });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="mx-auto flex min-h-dvh w-full max-w-[34rem] flex-col justify-center px-5 py-10">
        <Title>Оплата пока не подключена</Title>
        <p className="mt-4 text-paper/90">
          Это тестовая версия: платёж через ЮKassa появится перед запуском. Деньги не списаны, данные
          карты нигде не вводились.
        </p>
        <p className="mt-3 text-paper/90">SOS-экран уже работает и останется бесплатным.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/sos">Открыть SOS</ButtonLink>
          <ButtonLink href="/paywall" variant="secondary">
            Вернуться к тарифам
          </ButtonLink>
        </div>
      </main>
    );
  }

  const action = methods.find((m) => m.id === method)!.action;

  return (
    <main className="mx-auto w-full max-w-[34rem] px-5 pb-12 pt-4">
      <Link href="/paywall" className="inline-flex min-h-11 items-center text-fog hover:text-paper">
        ← Тарифы
      </Link>
      <Title className="mt-2">Оформление</Title>

      <section className="mt-6 rounded-2xl bg-dusk p-5" aria-labelledby="summary">
        <h2 id="summary" className="sr-only">
          Заказ
        </h2>
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-paper">Подписка на {plan.title.toLowerCase()}</span>
          <span className="tabular text-paper">
            {formatRub(plan.price)} <span className="text-fog">{plan.period}</span>
          </span>
        </div>
        {plan.hasTrial && (
          <p className="mt-1 text-[0.9375rem] text-fog">
            {site.trialDays} дней бесплатно, списание {chargeDate}
          </p>
        )}
        <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-4">
          <span className="font-medium text-paper">К оплате сегодня</span>
          <span className="tabular font-serif text-2xl text-paper">{formatRub(dueToday)}</span>
        </div>
      </section>

      <form onSubmit={submit} noValidate className="mt-8 space-y-8">
        <fieldset>
          <legend className="font-medium text-paper">Способ оплаты</legend>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {methods.map((m) => (
              <label
                key={m.id}
                className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl border px-4 ${
                  method === m.id ? "border-lamp bg-dusk-raised" : "border-line bg-dusk hover:border-fog"
                }`}
              >
                <input
                  type="radio"
                  name="method"
                  value={m.id}
                  checked={method === m.id}
                  onChange={() => setMethod(m.id)}
                  className="size-5 accent-[var(--lamp)]"
                />
                <span className="text-paper">{m.label}</span>
              </label>
            ))}
          </div>
          {plan.hasTrial && (
            <p className="mt-3 text-[0.9375rem] text-fog">
              Карту или счёт привяжем для списания после пробного периода. Сегодня ничего не спишется.
            </p>
          )}
        </fieldset>

        <div>
          <label htmlFor="email" className="font-medium text-paper">
            Почта для чека
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            placeholder="name@mail.ru"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailProblem) setEmailProblem(emailError(e.target.value));
            }}
            onBlur={() => email.trim() && setEmailProblem(emailError(email))}
            aria-invalid={Boolean(emailProblem)}
            aria-describedby="email-note"
            className={`mt-2 h-14 w-full rounded-2xl border bg-dusk px-4 text-paper placeholder:text-fog/80 focus:outline-none ${
              emailProblem ? "border-danger" : "border-line focus:border-lamp"
            }`}
          />
          <p id="email-note" className={`mt-2 text-[0.9375rem] ${emailProblem ? "text-danger" : "text-fog"}`} aria-live="polite">
            {emailProblem ?? "Только для чека и уведомлений об оплате. Без рассылок."}
          </p>
        </div>

        <div>
          <label className="flex cursor-pointer gap-3">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (e.target.checked) setConsentProblem(false);
              }}
              aria-invalid={consentProblem}
              aria-describedby={consentProblem ? "consent-error" : undefined}
              className="mt-1 size-5 shrink-0 accent-[var(--lamp)]"
            />
            <span className="text-[0.9375rem] text-paper/90">{consentText}</span>
          </label>
          {consentProblem && (
            <p id="consent-error" className="mt-2 text-[0.9375rem] text-danger">
              Без согласия на продление оформить подписку нельзя — отметь галочку выше
            </p>
          )}
        </div>

        <div>
          <Button type="submit" className="sm:w-full">
            {action}
          </Button>
          <p className="mt-3 flex items-center justify-center gap-2 text-[0.9375rem] text-fog">
            <LockIcon className="size-4" />
            Платёж обрабатывает ЮKassa. Мы не видим данные карты.
          </p>
        </div>
      </form>
    </main>
  );
}
