// События воронки (docs/BRIEF.md §10). Сюда никогда не попадают тексты ответов
// и контакты: только id экранов, id вариантов и технические параметры.

type Props = Record<string, string | number | boolean | undefined>;

type PostHogLike = { capture: (event: string, props?: Props) => void };

export function track(event: string, props?: Props): void {
  if (typeof window === "undefined") return;
  const posthog = (window as unknown as { posthog?: PostHogLike }).posthog;
  if (posthog) {
    posthog.capture(event, props);
  } else if (process.env.NODE_ENV === "development") {
    console.debug("[track]", event, props ?? {});
  }
}
