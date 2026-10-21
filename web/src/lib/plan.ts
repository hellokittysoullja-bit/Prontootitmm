import {
  archetype,
  g,
  goalLabels,
  list,
  one,
  reason,
  sosLength,
  times,
  triggerLabels,
} from "@/lib/quiz/profile";
import type { Answers } from "@/lib/quiz/types";

// Строки лоадера и содержимое плана собираются из ответов (docs/BRIEF.md §4).

export function loaderLines(a: Answers): string[] {
  const triggers = list(a, "triggers")
    .map((t) => triggerLabels[t])
    .filter(Boolean);
  const t = times(a);
  return [
    triggers.length
      ? `Учитываем, когда тянет: ${triggers.join(", ")}`
      : "Учитываем твои ответы",
    `Настраиваем SOS на волну в ${sosLength(a)}`,
    `Ставим отметки на ${t.morning} и ${t.evening}`,
    "Собираем 8 недель программы",
  ];
}

export type PlanStage = { weeks: string; title: string; items: string[] };

export function planChips(a: Answers): string[] {
  const t = times(a);
  const chips = list(a, "triggers")
    .map((v) => triggerLabels[v])
    .filter(Boolean)
    .map((s) => s[0].toUpperCase() + s.slice(1));
  chips.push(`SOS на ${sosLength(a)}`);
  chips.push(`Отметки в ${t.morning} и ${t.evening}`);
  return chips;
}

export function planStages(a: Answers): PlanStage[] {
  const kind = archetype(a);
  const goals = list(a, "goals");
  const tried = list(a, "tried");

  const first: string[] = ["SOS-экран при каждой сильной тяге: дыхание и сёрфинг тяги"];
  if (kind === "night") first.push("Вечерний сценарий: телефон заряжается не у кровати");
  if (kind === "boredom") first.push("Список быстрых замен на 5 минут под твои дела");
  if (kind === "stress") first.push("Практика «назвать чувство» вместо того, чтобы заглушать его");
  if (kind === "alone") first.push("План на первые полчаса, когда дома никого нет");
  if (kind === "alcohol") first.push("Сценарий «после вечеринки»: что сделать, когда вернёшься домой");
  first.push("Отметки утром и вечером, чтобы увидеть карту своих триггеров");

  const second: string[] = ["Правила «если — то» на самые частые ситуации"];
  if (goals.includes("sleep")) second.push("Гигиена сна и телефона: час без экрана перед сном");
  if (goals.includes("focus")) second.push("Работа короткими блоками, чтобы прокрастинация не запускала тягу");
  if (goals.includes("closeness")) second.push("Разговор о близости: как вернуть интерес к живому человеку");
  if (tried.includes("blockers")) {
    second.push("Блокировщик — как страховка, а не как единственная защита");
  }
  second.push("Разбор срывов без самобичевания: что было за 30 минут до");

  const third: string[] = [
    "Ценности: ради чего ты это делаешь, своими словами",
    "План на срыв, чтобы один день не превращался в неделю",
    "Как жить дальше без ежедневного счётчика",
  ];

  return [
    { weeks: "Недели 1–2", title: "Понять свою тягу", items: first },
    { weeks: "Недели 3–5", title: "Заменить автопилот", items: second },
    { weeks: "Недели 6–8", title: "Закрепить", items: third },
  ];
}

export function planGoals(a: Answers): string | undefined {
  const goals = list(a, "goals").map((v) => goalLabels[v]).filter(Boolean);
  if (!goals.length) return undefined;
  return `Цель — вернуть ${goals.join(", ")}`;
}

export function relapseNote(a: Answers): string | undefined {
  const after = one(a, "afterRelapse");
  if (after === "angry" || after === "whatever") {
    return `Ты ${g(a, "отметил", "отметила")}, что после срыва бывает тяжело. Поэтому в плане срыв не обнуляет прогресс: дни остаются с тобой, а мы разбираем, что к нему привело.`;
  }
  return undefined;
}

export { reason };
