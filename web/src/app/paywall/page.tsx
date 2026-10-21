import type { Metadata } from "next";
import { PaywallView } from "@/components/paywall/PaywallView";

export const metadata: Metadata = { title: "Доступ к плану", robots: { index: false } };

export default function PaywallPage() {
  return <PaywallView />;
}
