import type { Answers, Times } from "./types";

// Профиль, который собирается из ответов и меняет всё, что человек видит дальше:
// рефлексии, лоадер, план, заголовок пейволла (docs/BRIEF.md §3).

export type Archetype = "night" | "boredom" | "stress" | "alone" | "alcohol" | "unknown";

export function list(a: Answers, id: keyof Answers): string[] {
  const v = a[id];
  return Array.isArray(v) ? v : [];
}

export function one(a: Answers, id: keyof Answers): string | undefined {
  const v = a[id];
  return typeof v === "string" ? v : undefined;
}

export function times(a: Answers): Times {
  const v = a.checkinTimes;
  if (v && typeof v === "object" && !Array.isArray(v)) return v;
  return { morning: "08:30", evening: "22:30" };
}

// Окончания по выбранному обращению. «Без разницы» читается в мужском роде,
// как принято в русском по умолчанию.
export function g(a: Answers, masculine: string, feminine: string): string {
  return one(a, "address") === "she" ? feminine : masculine;
}

// Первый выбранный триггер — главный: варианты хранятся в порядке нажатия.
export function archetype(a: Answers): Archetype {
  const first = list(a, "triggers")[0];
  switch (first) {
    case "night":
    case "boredom":
    case "stress":
    case "alone":
    case "alcohol":
      return first;
    default:
      return "unknown";
  }
}

export const triggerLabels: Record<string, string> = {
  night: "поздно вечером с телефоном",
  boredom: "от скуки и когда откладываю дела",
  stress: "после стресса или ссоры",
  alone: "когда дома никого нет",
  alcohol: "после алкоголя",
};

export const goalLabels: Record<string, string> = {
  sleep: "сон",
  focus: "фокус",
  energy: "энергию",
  closeness: "близость",
  respect: "уважение к себе",
  time: "время",
};

export const urgeLengthLabels: Record<string, string> = {
  minutes: "пару минут",
  "10-20": "10–20 минут",
  "30+": "полчаса и дольше",
};

export function paywallHeadline(a: Answers): string {
  switch (archetype(a)) {
    case "night":
      return "План против ночных срывов";
    case "boredom":
      return "План, чтобы скука не решала за тебя";
    case "stress":
      return "План на моменты, когда накрывает";
    case "alone":
      return `План на вечера, когда ты ${g(a, "один", "одна")} дома`;
    case "alcohol":
      return "План на вечера с алкоголем";
    case "unknown":
      return "Твой план на 8 недель";
  }
}

export function sosLength(a: Answers): string {
  const v = one(a, "urgeLength");
  return v && urgeLengthLabels[v] ? urgeLengthLabels[v] : "10–20 минут";
}

export function reason(a: Answers): string | undefined {
  const v = one(a, "reason")?.trim();
  return v ? v : undefined;
}
