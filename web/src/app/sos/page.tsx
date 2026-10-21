import type { Metadata } from "next";
import { SosView } from "@/components/sos/SosView";

export const metadata: Metadata = { title: "Тянет прямо сейчас" };

export default function SosPage() {
  return <SosView />;
}
