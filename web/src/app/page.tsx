import Link from "next/link";
import type { ReactNode } from "react";
import { BreathOrb } from "@/components/landing/BreathOrb";
import { PrivacyFragment, ProgressFragment } from "@/components/landing/Fragments";
import { NightVisual, WaveVisual } from "@/components/quiz/ReflectionView";
import { ButtonLink } from "@/components/ui";
import { site } from "@/config/site";
import { formatRub, yearPerDay, yearPerMonth } from "@/lib/pricing";

// Лендинг «ночной город → рассвет» (docs/BRIEF.md §8). Порядок секций — это аргумент:
// ночь предсказуема → тягу можно переждать → срыв не обнуляет → никто не узнает →
// рассвет: наука, цена, решение. Главы подписаны временем ночи — это настоящая
// последовательность, а не декоративная нумерация.

function Chapter({
  time,
  title,
  children,
  aside,
}: {
  time: string;
  title: string;
  children: ReactNode;
  aside: ReactNode;
}) {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-20 sm:py-28 lg:grid-cols-[9rem_minmax(0,1fr)_minmax(0,24rem)] lg:gap-12">
      <p className="tabular font-serif text-2xl text-dawn lg:sticky lg:top-24 lg:self-start lg:text-3xl">{time}</p>
      <div className="max-w-[38rem]">
        <h2 className="font-serif text-[2rem] leading-[1.15] font-medium tracking-[-0.01em] text-paper sm:text-[2.5rem]">
          {title}
        </h2>
        <div className="mt-6 space-y-4 text-lg text-paper/90">{children}</div>
      </div>
      <div className="lg:pt-2">{aside}</div>
    </section>
  );
}

function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <svg viewBox="0 0 20 20" className="mt-1.5 size-4 shrink-0 text-dawn" fill="none" aria-hidden="true">
        <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

const studies = [
  {
    claim: "Когнитивно-поведенческая терапия — первая линия помощи при компульсивном сексуальном поведении.",
    source: "Систематический обзор, Journal of Behavioral Addictions, 2022",
  },
  {
    claim:
      "6-недельная онлайн-программа Hands-off на КПТ и осознанности снизила тягу и проблемное потребление порно.",
    source: "Рандомизированное исследование, 264 участника, Journal of Behavioral Addictions, 2021",
  },
  {
    claim: "После 12 сессий терапии принятия и ответственности (ACT) просмотр снизился на 93% против 21% в контрольной группе.",
    source: "Crosby & Twohig, Behavior Therapy, 2016 — небольшое исследование, 28 мужчин",
  },
];

const faq = [
  {
    q: "Я срывался много раз. Это сработает?",
    a: "Прошлые попытки чаще всего держались на одной силе воли — без плана на момент тяги и на момент после срыва. Здесь оба плана есть. Гарантировать результат не может никто, но вернуть деньги за 14 дней можно одной кнопкой.",
  },
  {
    q: "Нужно ли отказываться и от мастурбации?",
    a: "Цель выбираешь ты: полный отказ от порно, постепенное снижение или отказ от порно без запрета мастурбации. Мы не считаем мастурбацию вредной самой по себе.",
  },
  {
    q: "Это религиозный сервис?",
    a: "Нет, светский. Если вера для тебя важна, позже появится отдельный трек — только по желанию.",
  },
  {
    q: "Это лечение?",
    a: "Нет. Это программа самопомощи на научных методах. Если тяга сочетается с депрессией, тревогой или проблемами с потенцией, стоит обратиться к врачу — мы подскажем, к какому.",
  },
];

export default function Home() {
  return (
    <>
      <div className="sky" aria-hidden="true" />

      <header className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <span className="font-serif text-xl text-dawn" translate="no">
          {site.name}
        </span>
        <Link
          href="/sos"
          className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-[0.9375rem] text-paper hover:border-fog"
        >
          Тянет прямо сейчас
        </Link>
      </header>

      <main id="main">
        <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-10 sm:pt-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,1fr)_22rem] lg:pb-28">
          <div>
            <h1 className="max-w-[14ch] font-serif text-[2.75rem] leading-[1.05] font-medium tracking-[-0.02em] text-paper sm:text-[4rem] lg:text-[4.75rem]">
              Тяга проходит. Мы рядом, пока она идёт
            </h1>
            <p className="mt-6 max-w-[36rem] text-lg text-paper/90 sm:text-xl">
              Анонимный тренер самоконтроля. SOS на момент тяги, план на 8 недель и короткие
              отметки — по методам КПТ и ACT, без мифов и морали.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quiz">Пройти тест за 3 минуты</ButtonLink>
              <ButtonLink href="/sos" variant="secondary">
                Открыть SOS бесплатно
              </ButtonLink>
            </div>
            <p className="mt-4 text-[0.9375rem] text-fog">
              Тест бесплатный. Доступ к плану — {yearPerMonth} ₽ в месяц при оплате за год.
            </p>
          </div>
          <BreathOrb />
        </section>

        <Chapter time="23:40" title="Ночью решает не характер, а усталость" aside={<NightVisual />}>
          <p>
            К вечеру устаёт часть мозга, которая отвечает за самоконтроль. Кровать, тишина и телефон в
            руке — и решение принимается на автопилоте. Это предсказуемо, а значит, к этому можно
            подготовиться.
          </p>
          <p>
            Поэтому план начинается не с запрета, а с вечернего сценария: где заряжается телефон, что
            делать в первые десять минут в кровати, кому написать, если не спится.
          </p>
        </Chapter>

        <Chapter time="01:15" title="Тяга — это волна. Её можно переждать" aside={<WaveVisual />}>
          <p>
            Она нарастает, достигает пика и спадает — обычно за 15–30 минут, даже если ничего не
            делать. Бороться с ней бесполезно, исполнять — необязательно.
          </p>
          <p>
            SOS-экран помогает пройти пик: минута дыхания, оценка тяги, одно простое действие. Это
            «сёрфинг тяги» из поведенческой терапии. Он открывается одним нажатием, без входа и без
            оплаты.
          </p>
          <p>
            <Link href="/sos" className="text-dawn underline underline-offset-4 hover:text-paper">
              Открыть SOS
            </Link>
          </p>
        </Chapter>

        <Chapter time="03:30" title="Срыв — это данные, а не приговор" aside={<ProgressFragment />}>
          <p>
            Счётчик, который обнуляется, учит одному: раз уже сорвался, какая разница. Психологи
            называют это эффектом нарушения воздержания — и именно он превращает один срыв в неделю.
          </p>
          <p>
            У нас дни не сгорают. Рядом с текущим отрезком всегда видно, сколько чистых дней было всего.
            А после срыва — короткий разбор без самобичевания: что было за полчаса до.
          </p>
        </Chapter>

        <Chapter time="05:50" title="Никто не узнает" aside={<PrivacyFragment brand={site.name} />}>
          <ul className="space-y-3">
            <Check>Без имени, номера телефона и регистрации до оплаты</Check>
            <Check>В банковской выписке — нейтральное название и «Подписка на сервис»</Check>
            <Check>Уведомления без слов, по которым можно понять тему</Check>
            <Check>PIN-код на вход и удаление всех записей одной кнопкой</Check>
          </ul>
        </Chapter>

        <div className="bg-morning text-ink">
          <div aria-hidden="true" className="h-24 bg-gradient-to-b from-[#33292a] to-morning" />

          <section className="mx-auto grid w-full max-w-6xl gap-8 px-5 pb-20 pt-4 sm:pb-28 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-12">
            <p className="tabular font-serif text-2xl text-ember lg:text-3xl">06:40</p>
            <div>
              <h2 className="max-w-[20ch] font-serif text-[2rem] leading-[1.15] font-medium tracking-[-0.01em] sm:text-[2.5rem]">
                По науке — и без мифов про суперсилы
              </h2>
              <p className="mt-6 max-w-[38rem] text-lg text-ink-soft">
                В МКБ-11 это называется расстройством компульсивного сексуального поведения (6C72) —
                нарушением контроля импульсов. Программа собрана из методов, которые проверяли в
                исследованиях.
              </p>
              <ol className="mt-10 grid gap-8 md:grid-cols-3">
                {studies.map((s) => (
                  <li key={s.source} className="border-t border-ink/20 pt-5">
                    <p className="text-lg">{s.claim}</p>
                    <p className="mt-3 text-[0.9375rem] text-ink-soft">{s.source}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-12 max-w-[38rem]">
                <h3 className="text-lg font-medium">Чего мы не обещаем</h3>
                <p className="mt-2 text-lg text-ink-soft">
                  «Суперсил» от воздержания, обязательного «флэтлайна», перезагрузки мозга ровно за 90
                  дней и лечения. Это программа самопомощи, и честно говорить о её границах — часть
                  метода.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:pb-28" aria-labelledby="price">
            <div className="lg:ml-[calc(9rem+3rem)]">
              <h2 id="price" className="font-serif text-[2rem] leading-[1.15] font-medium sm:text-[2.5rem]">
                Сколько это стоит
              </h2>
              <p className="mt-4 max-w-[38rem] text-lg text-ink-soft">
                Год доступа стоит меньше одного сеанса у психолога (от 3 000 ₽). SOS-экран бесплатен всегда.
              </p>
              <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-ink p-6 text-paper">
                  <p className="text-lg font-medium">Год</p>
                  <p className="tabular mt-3 font-serif text-4xl">{formatRub(site.prices.year)}</p>
                  <p className="mt-2 text-[0.9375rem] text-paper/80">
                    ≈ {yearPerMonth} ₽ в месяц. {site.trialDays} дней бесплатно, напомним за 2 дня до списания.
                  </p>
                </div>
                <div className="rounded-3xl border border-ink/20 p-6">
                  <p className="text-lg font-medium">Месяц</p>
                  <p className="tabular mt-3 font-serif text-4xl">{formatRub(site.prices.month)}</p>
                  <p className="mt-2 text-[0.9375rem] text-ink-soft">Без пробного периода. Отмена в любой момент.</p>
                </div>
              </div>
              <p className="mt-5 max-w-[38rem] text-[0.9375rem] text-ink-soft">
                Возврат {site.refundDays} дней без объяснения причин. Отмена — в два нажатия в кабинете или в
                боте.
              </p>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:pb-28" aria-labelledby="faq">
            <div className="max-w-3xl lg:ml-[calc(9rem+3rem)]">
              <h2 id="faq" className="font-serif text-[2rem] leading-[1.15] font-medium sm:text-[2.5rem]">
                Частые вопросы
              </h2>
              <div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
                {faq.map((item) => (
                  <details key={item.q} className="group">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg">
                      {item.q}
                      <span aria-hidden="true" className="text-2xl text-ink-soft transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="max-w-[38rem] pb-5 text-ink-soft">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-24 sm:pb-32" aria-labelledby="final">
            <div className="lg:ml-[calc(9rem+3rem)]">
              <h2 id="final" className="max-w-[16ch] font-serif text-[2.5rem] leading-[1.1] font-medium tracking-[-0.02em] sm:text-[3.5rem]">
                Попробуем сегодня ночью?
              </h2>
              <p className="mt-5 max-w-[34rem] text-lg text-ink-soft">
                Три минуты теста — и у тебя план на вечер, SOS на момент тяги и отметки, которые покажут
                твои триггеры.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/quiz"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-2xl bg-ink px-6 text-[1.0625rem] font-medium text-paper hover:bg-[#24313b]"
                >
                  Да, пройти тест
                </Link>
                <span className="text-[0.9375rem] text-ink-soft">≈ {yearPerDay} ₽ в день при оплате за год</span>
              </div>
            </div>
          </section>

          <footer className="border-t border-ink/15">
            <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 text-[0.9375rem] text-ink-soft sm:grid-cols-2">
              <div>
                <p className="font-medium text-ink">Если совсем тяжело</p>
                <p className="mt-2">
                  Экстренная психологическая помощь МЧС:{" "}
                  <a href="tel:+74959895050" className="tabular text-ink underline underline-offset-4">
                    +7 495 989-50-50
                  </a>
                  , круглосуточно. При угрозе жизни — <a href="tel:112" className="text-ink underline underline-offset-4">112</a>.
                </p>
              </div>
              <div className="sm:text-right">
                <p>
                  {site.name} — программа самопомощи, не медицинская услуга. Только для взрослых, 18+.
                </p>
                <p className="mt-2 flex gap-5 sm:justify-end">
                  <Link href="/sos" className="underline underline-offset-4 hover:text-ink">
                    SOS
                  </Link>
                  <Link href="/quiz" className="underline underline-offset-4 hover:text-ink">
                    Тест
                  </Link>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
