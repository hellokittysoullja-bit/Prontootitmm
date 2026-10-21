import { expect, test, type Page } from "@playwright/test";

const shots = process.env.SHOTS_DIR;

async function shot(page: Page, name: string) {
  if (!shots) return;
  await page.screenshot({ path: `${shots}/${test.info().project.name}-${name}.png`, fullPage: true });
}

async function choose(page: Page, label: string | RegExp) {
  await page.getByRole("button", { name: label }).click();
}

async function next(page: Page) {
  await page.getByRole("button", { name: /^(Дальше|Сохранить|Понятно, дальше)$/ }).click();
}

test.beforeEach(async ({ page }) => {
  await page.goto("/quiz");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test("full quiz → plan → paywall → checkout, personalized for «she» + night", async ({ page }) => {
  await shot(page, "01-intro");
  await page.getByRole("button", { name: "Пройти тест" }).click();

  await expect(page.getByRole("heading", { name: "Сколько тебе лет?" })).toBeVisible();
  await shot(page, "02-age");
  await choose(page, "25–34");

  await expect(page.getByRole("heading", { name: "Как к тебе обращаться?" })).toBeVisible();
  await choose(page, /Она/);
  await choose(page, "Несколько раз в неделю");

  await expect(page.getByRole("heading", { name: "Когда тянет сильнее всего?" })).toBeVisible();
  await choose(page, /Поздно вечером/);
  await choose(page, /скучно/);
  await shot(page, "03-triggers");
  await next(page);

  await expect(page.getByRole("heading", { name: /Ночь — самое уязвимое время/ })).toBeVisible();
  await shot(page, "04-reflection-night");
  await next(page);

  await choose(page, "10–20 минут");
  await expect(page.getByRole("heading", { name: "Что ты уже пробовала?" })).toBeVisible();
  await choose(page, "Держаться на силе воли");
  await next(page);

  await expect(page.getByRole("heading", { name: /Насколько это мешает/ })).toBeVisible();
  await shot(page, "05-slider");
  await next(page);

  await choose(page, "Нормальный сон");
  await next(page);

  await expect(page.getByRole("heading", { name: "Тяга — это волна, а не приказ" })).toBeVisible();
  await expect(page.getByText("Ты отметила: 10–20 минут")).toBeVisible();
  await shot(page, "06-reflection-wave");
  await next(page);

  await choose(page, "1–2 недели");
  await choose(page, /какая уже разница/);
  await next(page); // время отметок по умолчанию

  await page.getByRole("textbox").fill("Хочу высыпаться");
  await next(page);

  await expect(page.getByRole("heading", { name: /Ты не один/ })).toBeVisible();
  await expect(page.getByText(/эффект нарушения воздержания/)).toBeVisible();
  await shot(page, "07-reflection-people");
  await next(page);

  await expect(page.getByRole("heading", { name: "Куда прислать план?" })).toBeVisible();
  await page.getByRole("button", { name: "Почта" }).click();
  const email = page.getByPlaceholder("name@mail.ru");
  await email.fill("test");
  await email.blur();
  await expect(page.getByText(/не хватает «@»/)).toBeVisible();
  await shot(page, "08-contact-error");
  await email.fill("test@mail.ru");
  await page.getByRole("button", { name: "Прислать план" }).click();

  await expect(page).toHaveURL(/\/plan$/);
  await expect(page.getByText(/Учитываем, когда тянет: поздно вечером с телефоном/)).toBeVisible();
  await shot(page, "09-loader");
  await expect(page.getByRole("heading", { name: "План против ночных срывов" })).toBeVisible({ timeout: 10_000 });
  await expect(page.getByText("«Хочу высыпаться»")).toBeVisible();
  await expect(page.getByText(/Ты отметила, что после срыва/)).toBeVisible();
  await shot(page, "10-plan");

  await page.getByRole("link", { name: "Открыть доступ к плану" }).click();
  await expect(page).toHaveURL(/\/paywall$/);
  await expect(page.getByRole("radio", { name: /Год/ })).toBeChecked();
  await expect(page.getByRole("button", { name: "Начать 7 дней за 0 ₽" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Закрыть/ })).toBeVisible();
  await shot(page, "11-paywall-year");

  await page.getByRole("radio", { name: /Месяц/ }).check();
  await expect(page.getByRole("button", { name: "Оплатить 490 ₽" }).first()).toBeVisible();
  await expect(page.getByText(/Сегодня спишется 490 ₽/)).toBeVisible();
  await shot(page, "12-paywall-month");

  await page.getByRole("radio", { name: /Год/ }).check();
  await page.getByRole("button", { name: "Начать 7 дней за 0 ₽" }).first().click();
  await expect(page).toHaveURL(/\/checkout\?plan=year&remind=1/);
  await expect(page.getByPlaceholder("name@mail.ru")).toHaveValue("test@mail.ru");
  await expect(page.getByText("0 ₽", { exact: true })).toBeVisible();

  await page.getByRole("button", { name: "Перейти к оплате картой" }).click();
  await expect(page.getByText(/Без согласия на продление/)).toBeVisible();
  await page.getByLabel("SberPay").check();
  await expect(page.getByRole("button", { name: "Перейти в SberPay" })).toBeVisible();
  await page.getByRole("checkbox", { name: /Соглашаюсь на автоматическое продление: 1 990 ₽ в год/ }).check();
  await shot(page, "13-checkout");
  await page.getByRole("button", { name: "Перейти в SberPay" }).click();
  await expect(page.getByRole("heading", { name: "Оплата пока не подключена" })).toBeVisible();
});

test("under 18 goes to the stop screen without a sale", async ({ page }) => {
  await page.getByRole("button", { name: "Пройти тест" }).click();
  await choose(page, "Мне меньше 18");
  await expect(page.getByRole("heading", { name: "Этот сервис только для взрослых" })).toBeVisible();
  await expect(page.getByRole("link", { name: "8 800 2000 122" })).toBeVisible();
  await expect(page.getByText(/₽/)).toHaveCount(0);
  await shot(page, "20-underage");
  await page.getByRole("button", { name: "Указать другой возраст" }).click();
  await expect(page.getByRole("heading", { name: "Сколько тебе лет?" })).toBeVisible();
});

test("every question can be skipped and the plan still renders", async ({ page }) => {
  await page.getByRole("button", { name: "Пройти тест" }).click();
  await choose(page, "18–24");
  const contact = page.getByRole("heading", { name: "Куда прислать план?" });
  const advanceButton = page.getByRole("button", { name: /^(Пропустить вопрос|Понятно, дальше)$/ });
  for (let i = 0; i < 20 && !(await contact.isVisible()); i++) {
    const heading = await page.locator("h1").innerText();
    await advanceButton.or(contact).first().waitFor();
    if (await contact.isVisible()) break;
    await advanceButton.first().click();
    await expect(page.locator("h1")).not.toHaveText(heading);
  }
  await page.getByRole("button", { name: "Посмотреть план без этого" }).click();
  await expect(page.getByRole("heading", { name: "Твой план на 8 недель" })).toBeVisible({ timeout: 10_000 });
});

test("multi-select is capped at three and back keeps answers", async ({ page }) => {
  await page.getByRole("button", { name: "Пройти тест" }).click();
  await choose(page, "18–24");
  await choose(page, "Без разницы");
  await choose(page, "Каждый день или чаще");
  for (const label of [/Поздно вечером/, /скучно/, /стресса/, /никого нет/]) await choose(page, label);
  await expect(page.locator('button[aria-pressed="true"]')).toHaveCount(3);
  await expect(page.getByText(/Выбрано 3 из 3/)).toBeVisible();
  await next(page);
  await page.getByRole("button", { name: "Назад" }).click();
  await expect(page.locator('button[aria-pressed="true"]')).toHaveCount(3);
});

test("SOS: breathing round, rating, relief counter", async ({ page }) => {
  await page.clock.install();
  await page.goto("/sos");
  await expect(page.getByText("Вдох", { exact: true })).toBeVisible();
  await shot(page, "30-sos-breathing");
  await page.clock.runFor(13_000);
  await expect(page.getByText(/Тяга — это волна/)).toBeVisible();
  await page.clock.runFor(50_000);
  await expect(page.getByRole("heading", { name: "Насколько тянет сейчас?" })).toBeVisible();
  await choose(page, "7");
  await expect(page.getByRole("heading", { name: /Волна ещё не спала/ })).toBeVisible();
  await shot(page, "31-sos-still");
  await page.getByRole("button", { name: "Отпустило" }).click();
  await expect(page.getByText("волна пережита")).toBeVisible();
  await shot(page, "32-sos-relief");
});

test("paywall close leads to free SOS", async ({ page }) => {
  await page.goto("/paywall");
  await page.getByRole("link", { name: /Закрыть/ }).click();
  await expect(page).toHaveURL(/\/sos$/);
});

test("landing: hero CTAs, SOS one tap away, no horizontal scroll", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Тяга проходит/);
  await expect(page.getByText(/166 ₽ в месяц при оплате за год/)).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
  await expect(page.getByRole("link", { name: "Тянет прямо сейчас" })).toHaveAttribute("href", "/sos");
  await page.getByRole("link", { name: "Да, пройти тест" }).click();
  await expect(page).toHaveURL(/\/quiz$/);
});
