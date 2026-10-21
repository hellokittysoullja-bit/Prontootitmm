import { g, list, one, urgeLengthLabels } from "./profile";
import type { Answers, ReflectionContent, Screen } from "./types";

// Граф квиза: 12 вопросов и 3 рефлексии (docs/BRIEF.md §3, research/01 §1.5).
// Порядок вопросов: простые → чувствительные → время отметок и своя причина.
// Возраст стоит первым только потому, что сервис строго 18+.

function reflectTrigger(a: Answers): ReflectionContent {
  const first = list(a, "triggers")[0];
  switch (first) {
    case "night":
      return {
        visual: "night",
        title: "Ночь — самое уязвимое время почти у всех",
        body: [
          "К вечеру устаёт та часть мозга, которая отвечает за самоконтроль. Добавь тишину, кровать и телефон в руке — и решение принимается на автопилоте.",
          "Это не слабость характера. Это предсказуемая ситуация, а к предсказуемому можно подготовиться заранее.",
          "В плане будет вечерний сценарий: что сделать до того, как потянет.",
        ],
      };
    case "boredom":
      return {
        visual: "night",
        title: "Скука — один из самых частых триггеров",
        body: [
          "Когда задача кажется тяжёлой или скучной, мозг ищет самый быстрый способ почувствовать облегчение. Порно — один из самых быстрых.",
          "Запрет здесь работает плохо. Работает заранее выбранная замена на пять минут, которая снимает то же напряжение.",
          "В плане будут такие замены — под твои дела.",
        ],
      };
    case "stress":
      return {
        visual: "night",
        title: "Часто это способ заглушить чувство, а не желание",
        body: [
          "После стресса или ссоры хочется, чтобы стало тише внутри. Порно на пару минут даёт эту тишину — и поэтому так легко становится привычкой.",
          "Если научиться выдерживать само чувство, тяга теряет половину силы.",
          "В плане есть короткие практики из терапии принятия и ответственности (ACT) именно для таких моментов.",
        ],
      };
    case "alone":
      return {
        visual: "night",
        title: "Когда рядом никого, исчезают тормоза",
        body: [
          "Присутствие других людей незаметно сдерживает нас. Пустая квартира снимает это сдерживание — и привычный сценарий запускается сам.",
          "Помогает заранее решить, чем занять первые полчаса наедине с собой.",
          "В плане будет сценарий на такие вечера.",
        ],
      };
    case "alcohol":
      return {
        visual: "night",
        title: "Алкоголь снимает тормоза — не только с этим",
        body: [
          "Даже небольшая доза ослабляет самоконтроль, а планы, принятые на трезвую голову, забываются.",
          "Работает решение, принятое заранее: куда положить телефон и что сделать, когда вернёшься домой.",
          "В плане будет короткий сценарий «после вечеринки».",
        ],
      };
    default:
      return {
        visual: "night",
        title: "Не знать свои триггеры — нормально",
        body: [
          "Большинство людей не замечают, что запускает тягу: всё происходит слишком быстро.",
          "Для этого и нужны короткие отметки утром и вечером. Через пару недель картина станет видна.",
        ],
      };
  }
}

function reflectWave(a: Answers): ReflectionContent {
  const length = one(a, "urgeLength");
  const body = [
    "Тяга нарастает, достигает пика и спадает — даже если ничего не делать. Обычно это занимает 15–30 минут.",
  ];
  if (length && urgeLengthLabels[length]) {
    body.push(
      `Ты ${g(a, "отметил", "отметила")}: ${urgeLengthLabels[length]}. Это одна волна. Её можно переждать — и с каждым разом это получается легче.`,
    );
  }
  body.push(
    "Этот навык называется «сёрфинг тяги»: не бороться с желанием и не исполнять его, а наблюдать, как оно проходит. С него начинается SOS-экран.",
  );
  return { visual: "wave", title: "Тяга — это волна, а не приказ", body };
}

function reflectNotAlone(a: Answers): ReflectionContent {
  const tried = list(a, "tried");
  const body = [
    "Примерно каждый девятый мужчина, смотревший порно за последний год, считает своё потребление зависимостью. А из людей с высоким риском за помощью обращался лишь каждый седьмой.",
  ];
  if (tried.includes("willpower") || tried.includes("challenge")) {
    body.push(
      "Если прошлые попытки не держались, дело не в тебе. Сила воли без плана на момент тяги редко работает долго — это видно и по исследованиям, и по форумам.",
    );
  }
  if (one(a, "afterRelapse") === "whatever") {
    body.push(
      "Мысль «какая уже разница, раз сорвался» — частая ловушка, у неё даже есть название: эффект нарушения воздержания. Поэтому у нас срыв не обнуляет прогресс.",
    );
  }
  return {
    visual: "people",
    title: "Ты не один — просто об этом молчат",
    body,
    source:
      "Grubbs, Kraus, Perry — национальный опрос в США (2019); International Sex Survey — 82 243 человека из 42 стран.",
  };
}

export const screens: Screen[] = [
  {
    kind: "question",
    id: "age",
    title: "Сколько тебе лет?",
    why: "Сервис только для взрослых. Возраст также помогает подобрать примеры.",
    input: {
      type: "single",
      options: [
        { value: "18-24", label: "18–24" },
        { value: "25-34", label: "25–34" },
        { value: "35-44", label: "35–44" },
        { value: "45+", label: "45 и старше" },
        { value: "under18", label: "Мне меньше 18" },
      ],
    },
    next: (a) => (one(a, "age") === "under18" ? "underage" : undefined),
  },
  { kind: "stop", id: "underage" },
  {
    kind: "question",
    id: "address",
    title: "Как к тебе обращаться?",
    why: "Только чтобы правильно писать окончания слов.",
    input: {
      type: "single",
      options: [
        { value: "he", label: "Он: «ты сделал»" },
        { value: "she", label: "Она: «ты сделала»" },
        { value: "any", label: "Без разницы" },
      ],
    },
  },
  {
    kind: "question",
    id: "frequency",
    title: "Как часто это бывает сейчас?",
    hint: "Отвечай как есть. Ответы видишь только ты.",
    input: {
      type: "single",
      options: [
        { value: "daily+", label: "Каждый день или чаще" },
        { value: "few-week", label: "Несколько раз в неделю" },
        { value: "weekly", label: "Примерно раз в неделю" },
        { value: "rarely", label: "Реже, но срываюсь" },
        { value: "skip", label: "Не хочу отвечать", exclusive: true },
      ],
    },
  },
  {
    kind: "question",
    id: "triggers",
    title: "Когда тянет сильнее всего?",
    hint: "До трёх вариантов. Первый выбранный считаем главным.",
    why: "От этого зависит, какой сценарий будет в SOS и в плане.",
    input: {
      type: "multi",
      max: 3,
      randomize: true,
      options: [
        { value: "night", label: "Поздно вечером, в кровати с телефоном" },
        { value: "boredom", label: "Когда скучно или откладываю дела" },
        { value: "stress", label: "После стресса или ссоры" },
        { value: "alone", label: "Когда дома никого нет" },
        { value: "alcohol", label: "После алкоголя" },
        { value: "unknown", label: "Сложно сказать", exclusive: true },
      ],
    },
  },
  { kind: "reflection", id: "reflectTrigger", content: reflectTrigger },
  {
    kind: "question",
    id: "urgeLength",
    title: "Сколько, по ощущениям, длится сильная тяга?",
    input: {
      type: "single",
      options: [
        { value: "minutes", label: "Пару минут" },
        { value: "10-20", label: "10–20 минут" },
        { value: "30+", label: "Полчаса и дольше" },
        { value: "unknown", label: "Сложно сказать", exclusive: true },
      ],
    },
  },
  {
    kind: "question",
    id: "tried",
    title: (a) => `Что ты уже ${g(a, "пробовал", "пробовала")}?`,
    hint: "Можно выбрать несколько.",
    why: "Чтобы не предлагать то, что уже не сработало.",
    input: {
      type: "multi",
      options: [
        { value: "willpower", label: "Держаться на силе воли" },
        { value: "blockers", label: "Блокировщики сайтов" },
        { value: "challenge", label: "Челленджи вроде NoFap" },
        { value: "cleanup", label: "Удалять приложения, чистить ленту" },
        { value: "forums", label: "Форумы и каналы" },
        { value: "nothing", label: "Пока ничего", exclusive: true },
      ],
    },
  },
  {
    kind: "question",
    id: "impact",
    title: "Насколько это мешает жить так, как хочется?",
    input: {
      type: "slider",
      min: 0,
      max: 10,
      minLabel: "Почти не мешает",
      maxLabel: "Сильно мешает",
    },
  },
  {
    kind: "question",
    id: "goals",
    title: "Что хочется вернуть в первую очередь?",
    hint: "До трёх вариантов.",
    input: {
      type: "multi",
      max: 3,
      randomize: true,
      options: [
        { value: "sleep", label: "Нормальный сон" },
        { value: "focus", label: "Фокус на учёбе или работе" },
        { value: "energy", label: "Энергию" },
        { value: "closeness", label: "Отношения и близость" },
        { value: "respect", label: "Уважение к себе" },
        { value: "time", label: "Время" },
      ],
    },
  },
  { kind: "reflection", id: "reflectWave", content: reflectWave },
  {
    kind: "question",
    id: "longestBreak",
    title: "Самый долгий перерыв за последний год?",
    input: {
      type: "single",
      options: [
        { value: "<week", label: "Меньше недели" },
        { value: "1-2weeks", label: "1–2 недели" },
        { value: "month", label: "Около месяца" },
        { value: ">month", label: "Больше месяца" },
        { value: "none", label: "Перерывов не было" },
      ],
    },
  },
  {
    kind: "question",
    id: "afterRelapse",
    title: "Что обычно происходит после срыва?",
    why: "Самое важное в плане — что делать после срыва, а не только до.",
    input: {
      type: "single",
      options: [
        { value: "angry", label: "Злюсь на себя" },
        { value: "whatever", label: "Думаю «какая уже разница» и продолжаю" },
        { value: "retry", label: "Спокойно пробую снова" },
        { value: "unknown", label: "Не знаю", exclusive: true },
      ],
    },
  },
  {
    kind: "question",
    id: "checkinTimes",
    title: "Когда удобно делать короткие отметки?",
    hint: "По 30 секунд утром и вечером. Время можно поменять потом.",
    input: { type: "times" },
  },
  {
    kind: "question",
    id: "reason",
    title: "Зачем тебе это — своими словами",
    hint: "Необязательно.",
    why: "Покажем эту фразу тебе в момент тяги. Она хранится только на этом устройстве.",
    input: {
      type: "text",
      placeholder: "Например: хочу высыпаться и не прятать телефон",
      maxLength: 200,
    },
  },
  { kind: "reflection", id: "reflectNotAlone", content: reflectNotAlone },
  { kind: "contact", id: "contact" },
];

export const questionCount = screens.filter((s) => s.kind === "question").length;
