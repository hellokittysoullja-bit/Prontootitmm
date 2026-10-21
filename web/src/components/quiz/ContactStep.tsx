"use client";

import { useState } from "react";
import { Button, Title } from "@/components/ui";
import { track } from "@/lib/analytics";
import { keys, writeJSON } from "@/lib/storage";
import { ActionBar } from "./QuestionView";

type Channel = "telegram" | "email";

export type Contact = { channel: Channel; value: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TELEGRAM = /^@?[a-zA-Z][a-zA-Z0-9_]{4,31}$/;

function validate(channel: Channel, value: string): string | null {
  const v = value.trim();
  if (!v) return channel === "email" ? "Введи почту, например name@mail.ru" : "Введи ник, например @ivan_k";
  if (channel === "email") {
    if (!v.includes("@")) return "В адресе не хватает «@». Пример: name@mail.ru";
    if (!EMAIL.test(v)) return "Проверь часть после «@» — там должен быть домен, например mail.ru";
    return null;
  }
  if (/\s/.test(v)) return "В нике не бывает пробелов";
  if (v.replace("@", "").length < 5) return "Ник в Telegram — от 5 символов";
  if (!TELEGRAM.test(v)) return "Ник может содержать только латинские буквы, цифры и «_»";
  return null;
}

export function ContactStep({ onDone }: { onDone: () => void }) {
  const [channel, setChannel] = useState<Channel>("telegram");
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const problem = validate(channel, value);
    setTouched(true);
    setError(problem);
    if (problem) return;
    const v = value.trim();
    writeJSON(keys.contact, {
      channel,
      value: channel === "telegram" && !v.startsWith("@") ? `@${v}` : v,
    } satisfies Contact);
    track("contact_submitted", { channel });
    onDone();
  }

  function skip() {
    track("contact_skipped");
    onDone();
  }

  const tab = (c: Channel, label: string) => (
    <button
      type="button"
      aria-pressed={channel === c}
      onClick={() => {
        setChannel(c);
        setError(null);
        setTouched(false);
      }}
      className={`min-h-11 flex-1 rounded-xl px-4 text-[0.9375rem] font-medium transition-colors ${
        channel === c ? "bg-dusk-raised text-paper" : "text-fog hover:text-paper"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section aria-labelledby="c-title">
      <Title>
        <span id="c-title">Куда прислать план?</span>
      </Title>
      <p className="mt-3 text-paper/90">
        Пришлём одну ссылку на план и напоминание об отметках. В сообщениях нет слов, по которым
        можно понять тему: только «Ваш план готов».
      </p>

      <form onSubmit={submit} noValidate className="mt-6">
        <div role="group" aria-label="Способ связи" className="flex gap-1 rounded-2xl border border-line bg-dusk p-1">
          {tab("telegram", "Telegram")}
          {tab("email", "Почта")}
        </div>

        <label className="mt-5 block">
          <span className="text-[0.9375rem] text-fog">
            {channel === "telegram" ? "Ник в Telegram" : "Электронная почта"}
          </span>
          <input
            key={channel}
            type={channel === "email" ? "email" : "text"}
            inputMode={channel === "email" ? "email" : "text"}
            autoComplete={channel === "email" ? "email" : "username"}
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            placeholder={channel === "email" ? "name@mail.ru" : "@ivan_k"}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              // После первой ошибки проверяем на лету, чтобы сразу видеть, что исправлено.
              if (touched) setError(validate(channel, e.target.value));
            }}
            onBlur={() => {
              if (!value.trim()) return;
              setTouched(true);
              setError(validate(channel, value));
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "contact-error" : undefined}
            className={`mt-2 h-14 w-full rounded-2xl border bg-dusk px-4 text-paper placeholder:text-fog/80 focus:outline-none ${
              error ? "border-danger" : "border-line focus:border-lamp"
            }`}
          />
        </label>
        <p id="contact-error" className="mt-2 min-h-6 text-[0.9375rem] text-danger" aria-live="polite">
          {error}
        </p>

        <ActionBar>
          <Button type="submit">Прислать план</Button>
          <Button type="button" variant="quiet" onClick={skip}>
            Посмотреть план без этого
          </Button>
        </ActionBar>
      </form>
      <p className="text-sm text-fog">
        Без номера телефона. Контакт не передаём третьим лицам и удаляем по первой просьбе.
      </p>
    </section>
  );
}
