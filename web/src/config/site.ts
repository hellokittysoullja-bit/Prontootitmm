// Рабочее имя бренда. Финальное название заменяется только здесь.
export const site = {
  name: "Рассвет",
  description:
    "Анонимный тренер самоконтроля. Помогает пережить тягу и вернуть контроль над вниманием — по методам КПТ и ACT.",
  supportBot: "@rassvet_help_bot",
  prices: {
    year: 1990,
    month: 490,
  },
  trialDays: 7,
  refundDays: 14,
};

export type PlanId = "year" | "month";
