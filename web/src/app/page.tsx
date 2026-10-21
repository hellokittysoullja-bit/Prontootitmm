import { ButtonLink, Page, Title } from "@/components/ui";
import { site } from "@/config/site";

// Временная стартовая страница. Полноценный лендинг «ночь → рассвет» — следующий этап.
export default function Home() {
  return (
    <Page className="flex min-h-dvh flex-col justify-center">
      <p className="font-serif text-lg text-dawn">{site.name}</p>
      <Title className="mt-3">Верни контроль над вниманием</Title>
      <p className="mt-4 text-paper/90">
        Анонимный тренер, который рядом в момент тяги. По методам КПТ и ACT, без мифов и морали.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/quiz">Пройти тест за 3 минуты</ButtonLink>
        <ButtonLink href="/sos" variant="secondary">
          Тянет прямо сейчас
        </ButtonLink>
      </div>
    </Page>
  );
}
