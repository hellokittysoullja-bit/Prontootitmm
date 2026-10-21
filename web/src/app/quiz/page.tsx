import type { Metadata } from "next";
import { QuizRunner } from "@/components/quiz/QuizRunner";

export const metadata: Metadata = {
  title: "Тест",
  robots: { index: false },
};

export default function QuizPage() {
  return <QuizRunner />;
}
