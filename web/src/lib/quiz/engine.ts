import { screens } from "./screens";
import type { Answers, Option, QuestionScreen, Screen, ScreenId } from "./types";

export const firstScreen: ScreenId = screens[0].id;

export function getScreen(id: ScreenId): Screen {
  const screen = screens.find((s) => s.id === id);
  if (!screen) throw new Error(`Unknown quiz screen: ${id}`);
  return screen;
}

// Переход: явный next(answers) экрана, иначе следующий по порядку экран.
// Стоп-экраны в обычный порядок не попадают — только по явному переходу.
// undefined означает конец квиза.
export function nextScreen(id: ScreenId, answers: Answers): ScreenId | undefined {
  const current = getScreen(id);
  if (current.kind === "stop") return undefined;
  const explicit = current.kind === "question" ? current.next?.(answers) : undefined;
  if (explicit) return explicit;
  const index = screens.indexOf(current);
  return screens.slice(index + 1).find((s) => s.kind !== "stop")?.id;
}

export function questionNumber(id: ScreenId): number {
  const questions = screens.filter((s): s is QuestionScreen => s.kind === "question");
  const screen = getScreen(id);
  if (screen.kind === "question") return questions.indexOf(screen) + 1;
  // Для рефлексий и контакта — номер последнего пройденного вопроса.
  const index = screens.indexOf(screen);
  return screens.slice(0, index).filter((s) => s.kind === "question").length;
}

// Прогресс быстрее в начале и медленнее к концу: так меньше отвалов в опросах (NN/g).
export function progressFraction(answered: number, total: number): number {
  const linear = Math.min(1, Math.max(0, answered / total));
  return 1 - Math.pow(1 - linear, 1.6);
}

// Детерминированное перемешивание по seed: порядок не прыгает при возврате назад,
// но у разных людей разный — это убирает смещение к первому варианту.
export function orderOptions(options: Option[], seed: number): Option[] {
  const movable = options.filter((o) => !o.exclusive);
  const fixed = options.filter((o) => o.exclusive);
  let state = seed || 1;
  const random = () => {
    state = (state * 1103515245 + 12345) % 2147483648;
    return state / 2147483648;
  };
  for (let i = movable.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [movable[i], movable[j]] = [movable[j], movable[i]];
  }
  return [...movable, ...fixed];
}
