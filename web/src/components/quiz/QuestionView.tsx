"use client";

import { useMemo, useState } from "react";
import { Button, Title } from "@/components/ui";
import { orderOptions } from "@/lib/quiz/engine";
import type { AnswerValue, Answers, Option, QuestionScreen, Text, Times } from "@/lib/quiz/types";
import { Why } from "./Why";

function resolve(text: Text | undefined, a: Answers) {
  return typeof text === "function" ? text(a) : text;
}

export function ActionBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky bottom-0 -mx-5 mt-8 flex flex-col items-stretch gap-1 bg-night px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:static sm:mx-0 sm:flex-row sm:items-center sm:gap-4 sm:px-0">
      {children}
    </div>
  );
}

function SkipButton({ onSkip }: { onSkip: () => void }) {
  return (
    <Button variant="quiet" type="button" onClick={onSkip}>
      Пропустить вопрос
    </Button>
  );
}

function Choice({
  option,
  selected,
  multi,
  onClick,
}: {
  option: Option;
  selected: boolean;
  multi: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex min-h-14 w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-colors duration-150 ${
        selected
          ? "border-lamp bg-dusk-raised text-paper"
          : "border-line bg-dusk text-paper hover:border-fog"
      }`}
    >
      <span
        aria-hidden="true"
        className={`flex size-5 shrink-0 items-center justify-center border ${
          multi ? "rounded-md" : "rounded-full"
        } ${selected ? "border-lamp bg-lamp" : "border-fog"}`}
      >
        {selected &&
          (multi ? (
            <svg viewBox="0 0 16 16" className="size-3.5" fill="none">
              <path d="M3.5 8.5l3 3 6-7" stroke="var(--night)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <span className="size-2 rounded-full bg-night" />
          ))}
      </span>
      <span>{option.label}</span>
    </button>
  );
}

function SingleInput({
  screen,
  options,
  initial,
  onAnswer,
}: {
  screen: QuestionScreen;
  options: Option[];
  initial?: string;
  onAnswer: (v: string) => void;
}) {
  const [picked, setPicked] = useState(initial);
  const [sent, setSent] = useState(false);
  return (
    <div className="flex flex-col gap-3" aria-label={typeof screen.title === "string" ? screen.title : undefined}>
      {options.map((o) => (
        <Choice
          key={o.value}
          option={o}
          multi={false}
          selected={picked === o.value}
          onClick={() => {
            if (sent) return;
            setSent(true);
            setPicked(o.value);
            // Короткая пауза, чтобы выбор был виден до перехода.
            window.setTimeout(() => onAnswer(o.value), 180);
          }}
        />
      ))}
    </div>
  );
}

function MultiInput({
  options,
  max,
  initial,
  onSubmit,
  onSkip,
}: {
  options: Option[];
  max?: number;
  initial: string[];
  onSubmit: (v: string[]) => void;
  onSkip: () => void;
}) {
  const [picked, setPicked] = useState<string[]>(initial);
  const exclusive = new Set(options.filter((o) => o.exclusive).map((o) => o.value));
  const full = max !== undefined && picked.filter((v) => !exclusive.has(v)).length >= max;

  function toggle(o: Option) {
    setPicked((p) => {
      if (p.includes(o.value)) return p.filter((v) => v !== o.value);
      if (o.exclusive) return [o.value];
      const rest = p.filter((v) => !exclusive.has(v));
      if (max !== undefined && rest.length >= max) return rest;
      return [...rest, o.value];
    });
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {options.map((o) => (
          <Choice
            key={o.value}
            option={o}
            multi
            selected={picked.includes(o.value)}
            onClick={() => toggle(o)}
          />
        ))}
      </div>
      <p className="mt-3 min-h-6 text-[0.9375rem] text-fog" aria-live="polite">
        {full ? `Выбрано ${max} из ${max}. Чтобы выбрать другой вариант, сними один из отмеченных.` : ""}
      </p>
      <ActionBar>
        <Button type="button" disabled={!picked.length} onClick={() => onSubmit(picked)}>
          Дальше
        </Button>
        <SkipButton onSkip={onSkip} />
      </ActionBar>
    </>
  );
}

function SliderInput({
  input,
  initial,
  onSubmit,
  onSkip,
}: {
  input: Extract<QuestionScreen["input"], { type: "slider" }>;
  initial?: number;
  onSubmit: (v: number) => void;
  onSkip: () => void;
}) {
  const [value, setValue] = useState(initial ?? Math.round((input.min + input.max) / 2));
  return (
    <>
      <div className="rounded-2xl border border-line bg-dusk px-5 py-6">
        <output className="tabular block text-center font-serif text-5xl text-paper" htmlFor="impact">
          {value}
        </output>
        <input
          id="impact"
          type="range"
          min={input.min}
          max={input.max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="mt-5 h-11 w-full cursor-pointer accent-[var(--lamp)]"
          aria-valuetext={`${value} из ${input.max}`}
        />
        <div className="mt-1 flex justify-between text-[0.9375rem] text-fog">
          <span>{input.minLabel}</span>
          <span>{input.maxLabel}</span>
        </div>
      </div>
      <ActionBar>
        <Button type="button" onClick={() => onSubmit(value)}>
          Дальше
        </Button>
        <SkipButton onSkip={onSkip} />
      </ActionBar>
    </>
  );
}

function TimesInput({
  initial,
  onSubmit,
  onSkip,
}: {
  initial?: Times;
  onSubmit: (v: Times) => void;
  onSkip: () => void;
}) {
  const [morning, setMorning] = useState(initial?.morning ?? "08:30");
  const [evening, setEvening] = useState(initial?.evening ?? "22:30");
  const field =
    "tabular mt-2 h-14 w-full rounded-2xl border border-line bg-dusk px-4 text-xl text-paper [color-scheme:dark] focus:border-lamp";
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <span className="text-[0.9375rem] text-fog">Утром</span>
          <input type="time" value={morning} onChange={(e) => setMorning(e.target.value)} className={field} />
        </label>
        <label className="block">
          <span className="text-[0.9375rem] text-fog">Вечером</span>
          <input type="time" value={evening} onChange={(e) => setEvening(e.target.value)} className={field} />
        </label>
      </div>
      <ActionBar>
        <Button type="button" onClick={() => onSubmit({ morning, evening })}>
          Дальше
        </Button>
        <SkipButton onSkip={onSkip} />
      </ActionBar>
    </>
  );
}

function TextInput({
  input,
  initial,
  onSubmit,
  onSkip,
}: {
  input: Extract<QuestionScreen["input"], { type: "text" }>;
  initial?: string;
  onSubmit: (v: string) => void;
  onSkip: () => void;
}) {
  const [value, setValue] = useState(initial ?? "");
  return (
    <>
      <label className="block">
        <span className="sr-only">Твоя причина</span>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={input.maxLength}
          rows={4}
          placeholder={input.placeholder}
          className="w-full resize-none rounded-2xl border border-line bg-dusk px-4 py-3 text-paper placeholder:text-fog/80 focus:border-lamp focus:outline-none"
        />
      </label>
      <p className="tabular mt-1 text-right text-sm text-fog">
        {value.length}/{input.maxLength}
      </p>
      <ActionBar>
        <Button type="button" disabled={!value.trim()} onClick={() => onSubmit(value.trim())}>
          Сохранить
        </Button>
        <SkipButton onSkip={onSkip} />
      </ActionBar>
    </>
  );
}

export function QuestionView({
  screen,
  answers,
  seed,
  onAnswer,
}: {
  screen: QuestionScreen;
  answers: Answers;
  seed: number;
  onAnswer: (value: AnswerValue | undefined, skipped?: boolean) => void;
}) {
  const { input } = screen;
  const options = useMemo(() => {
    if (input.type !== "single" && input.type !== "multi") return [];
    return input.randomize ? orderOptions(input.options, seed + screen.id.length) : input.options;
  }, [input, seed, screen.id]);
  const initial = answers[screen.id];
  const skip = () => onAnswer(undefined, true);
  const hint = resolve(screen.hint, answers);

  return (
    <section aria-labelledby="q-title">
      <Title>
        <span id="q-title">{resolve(screen.title, answers)}</span>
      </Title>
      {hint && <p className="mt-2 text-fog">{hint}</p>}
      {screen.why && <Why text={screen.why} />}
      <div className="mt-6">
        {input.type === "single" && (
          <>
            <SingleInput
              screen={screen}
              options={options}
              initial={typeof initial === "string" ? initial : undefined}
              onAnswer={(v) => onAnswer(v)}
            />
            {screen.id !== "age" && (
              <div className="mt-4">
                <SkipButton onSkip={skip} />
              </div>
            )}
          </>
        )}
        {input.type === "multi" && (
          <MultiInput
            options={options}
            max={input.max}
            initial={Array.isArray(initial) ? initial : []}
            onSubmit={(v) => onAnswer(v)}
            onSkip={skip}
          />
        )}
        {input.type === "slider" && (
          <SliderInput
            input={input}
            initial={typeof initial === "number" ? initial : undefined}
            onSubmit={(v) => onAnswer(v)}
            onSkip={skip}
          />
        )}
        {input.type === "times" && (
          <TimesInput
            initial={initial && typeof initial === "object" && !Array.isArray(initial) ? initial : undefined}
            onSubmit={(v) => onAnswer(v)}
            onSkip={skip}
          />
        )}
        {input.type === "text" && (
          <TextInput
            input={input}
            initial={typeof initial === "string" ? initial : undefined}
            onSubmit={(v) => onAnswer(v)}
            onSkip={skip}
          />
        )}
      </div>
    </section>
  );
}
