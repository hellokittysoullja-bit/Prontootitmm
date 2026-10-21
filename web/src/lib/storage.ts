// Всё хранится только в браузере человека, пока он сам не решит сохранить план.
// Доступ к localStorage может бросать исключение (приватный режим, запрет cookies).

export function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJSON(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Без хранилища квиз всё равно работает, просто не переживёт перезагрузку.
  }
}

export function removeKey(key: string): void {
  try {
    window.localStorage.removeItem(key);
  } catch {}
}

export const keys = {
  quiz: "rassvet.quiz.v1",
  contact: "rassvet.contact.v1",
  waves: "rassvet.sos.waves.v1",
} as const;
