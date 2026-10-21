"use client";

import { useId, useState } from "react";

// «Зачем спрашиваем» — раскрывается по нажатию, чтобы не шуметь на экране.
export function Why({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="mt-3">
      <button
        type="button"
        className="min-h-11 text-[0.9375rem] text-fog underline decoration-line underline-offset-4 hover:text-paper"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        Зачем спрашиваем
      </button>
      <p id={id} hidden={!open} className="mt-1 text-[0.9375rem] text-fog">
        {text}
      </p>
    </div>
  );
}
