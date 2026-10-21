import type { Metadata, Viewport } from "next";
import { Literata, Onest } from "next/font/google";
import { site } from "@/config/site";
import { ServiceWorker } from "@/components/ServiceWorker";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  applicationName: site.name,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#121a21",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${onest.variable} ${literata.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-paper focus:px-4 focus:py-3 focus:text-night"
        >
          К основному содержанию
        </a>
        {children}
        <ServiceWorker />
      </body>
    </html>
  );
}
