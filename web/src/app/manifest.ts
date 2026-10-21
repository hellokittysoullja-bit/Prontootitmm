import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: "Тренер самоконтроля",
    start_url: "/sos",
    display: "standalone",
    background_color: "#121a21",
    theme_color: "#121a21",
    lang: "ru",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
    shortcuts: [{ name: "Тянет прямо сейчас", url: "/sos" }],
  };
}
