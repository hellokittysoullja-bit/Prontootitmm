export type Times = { morning: string; evening: string };

export type AnswerValue = string | string[] | number | Times;

export type Answers = Partial<Record<QuestionId, AnswerValue>>;

export type QuestionId =
  | "age"
  | "address"
  | "frequency"
  | "triggers"
  | "urgeLength"
  | "tried"
  | "impact"
  | "goals"
  | "longestBreak"
  | "afterRelapse"
  | "checkinTimes"
  | "reason";

export type Option = {
  value: string;
  label: string;
  // Остаётся последним при перемешивании и снимает остальные варианты.
  exclusive?: boolean;
};

export type QuestionInput =
  | { type: "single"; options: Option[]; randomize?: boolean }
  | { type: "multi"; options: Option[]; max?: number; randomize?: boolean }
  | { type: "slider"; min: number; max: number; minLabel: string; maxLabel: string }
  | { type: "times" }
  | { type: "text"; placeholder: string; maxLength: number };

export type Text = string | ((a: Answers) => string);

export type QuestionScreen = {
  kind: "question";
  id: QuestionId;
  title: Text;
  hint?: Text;
  // «Зачем спрашиваем» — у каждого чувствительного вопроса (NN/g).
  why?: string;
  input: QuestionInput;
  next?: (a: Answers) => ScreenId | undefined;
};

export type ReflectionContent = {
  title: string;
  body: string[];
  visual?: "night" | "wave" | "people";
  source?: string;
};

export type ReflectionScreen = {
  kind: "reflection";
  id: "reflectTrigger" | "reflectWave" | "reflectNotAlone";
  content: (a: Answers) => ReflectionContent;
};

export type ContactScreen = { kind: "contact"; id: "contact" };
export type StopScreen = { kind: "stop"; id: "underage" };

export type Screen = QuestionScreen | ReflectionScreen | ContactScreen | StopScreen;
export type ScreenId = Screen["id"];
