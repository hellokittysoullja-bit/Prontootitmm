import { site, type PlanId } from "@/config/site";

const rub = new Intl.NumberFormat("ru-RU");

export function formatRub(value: number): string {
  return `${rub.format(value)} ₽`;
}

export function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function formatDay(date: Date): string {
  return date.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
}

// Вся арифметика на пейволле — реальная, без выдуманных «старых цен».
export const yearPerMonth = Math.round(site.prices.year / 12);
export const yearPerDay = (site.prices.year / 365).toLocaleString("ru-RU", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
export const yearSavingPercent = Math.round((1 - site.prices.year / (site.prices.month * 12)) * 100);

export type PlanInfo = {
  id: PlanId;
  title: string;
  price: number;
  period: string;
  hasTrial: boolean;
};

export const plans: Record<PlanId, PlanInfo> = {
  year: { id: "year", title: "Год", price: site.prices.year, period: "в год", hasTrial: true },
  month: { id: "month", title: "Месяц", price: site.prices.month, period: "в месяц", hasTrial: false },
};

export function ctaLabel(plan: PlanId): string {
  return plan === "year"
    ? `Начать ${site.trialDays} дней за 0 ₽`
    : `Оплатить ${formatRub(site.prices.month)}`;
}

export function isPlanId(value: string | null): value is PlanId {
  return value === "year" || value === "month";
}
