import type { Metadata } from "next";
import { PlanView } from "@/components/plan/PlanView";

export const metadata: Metadata = { title: "Твой план", robots: { index: false } };

export default function PlanPage() {
  return <PlanView />;
}
