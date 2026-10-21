# Установленные скиллы Claude Code

Все скиллы лежат в `.claude/skills/` проекта (а не в `~/.claude`), чтобы они жили вместе с репозиторием и подхватывались в любой сессии.
Установлено 2026-10-21. Перед установкой каждый скилл проверен на опасные команды (curl|sh, сетевые вызовы, prompt-injection) — по мотивам отчёта Snyk ToxicSkills из второго исследования. Подозрительного не найдено.

| Скилл | Источник (commit) | Зачем в проекте |
|---|---|---|
| frontend-design | anthropics/skills (dbd4588) | Арт-дирекция, анти-шаблонная типографика, двухпроходный процесс «план → критика → код» |
| webapp-testing | anthropics/skills (dbd4588) | Playwright: прогон всех веток квиза, скриншоты для самокритики |
| ui-ux-pro-max | nextlevelbuilder/ui-ux-pro-max-skill (3eccfd8) | База стилей/палитр/шрифтов + 99 UX-правил. ⚠️ Её «рекомендация» для wellness — фиолетовый неоморфизм, то есть ровно «нейрослоп». Используем только правила и чек-листы, не дефолтную палитру |
| taste-skill | Leonxlnx/taste-skill (6010f91) | Анти-слоп: направления из 247 галерейных сайтов, `inspect.mjs` проверяет страницу в браузере, цикл «скриншот → правка» |
| interface-design | Dammyjay93/interface-design (2f9be32) | Фиксирует решения дизайн-системы в `.interface-design/system.md`, чтобы стиль не «плыл» между сессиями |
| web-design-guidelines | vercel-labs/agent-skills (063bee9) | 100+ правил a11y/UX для аудита. Правила сохранены локально в `rules-snapshot.md`, а не подтягиваются из сети при каждом запуске |
| react-best-practices | vercel-labs/agent-skills (063bee9) | Производительность React/Next.js |
| baseline-ui, fixing-accessibility, fixing-motion-performance | ibelick/ui-skills (55363c3) | Полировка, доступность, производительность анимаций |
| ux-heuristics, cro-methodology, hooked-ux, microinteractions, web-typography, refactoring-ui, improve-retention, influence-psychology | wondelai/skills (c172996) | Эвристики Нильсена и Круга, CRO, модель Hooked, Чалдини, удержание |
| onboarding-design, form-design, loading-states, peak-end-rule | Owl-Listener/designer-skills (9a6930c) | Квиз, формы, лоадер «собираем план», финал пейволла и SOS |
| bencium-controlled-ux-designer, design-audit | bencium/bencium-claude-code-design-skill (5de46a3) | Сдержанный UX и аудит дизайна |

## Что сознательно не ставили сейчас
- **PostHog MCP** и **ЮKassa MCP**: нужны ключи (`POSTHOG`, `YOOKASSA_SHOP_ID`/`SECRET_KEY`, только тестовый магазин). Подключим, когда дойдём до аналитики и оплаты.
- **GStack**: тяжёлый набор целиком; нужен только его «AI slop»-детектор, который дублируют taste-skill (`tells.md`) и frontend-design.
- Скиллы про деплой, маркетинг B2B, архитектуру бэкенда и подобное к задаче не относятся.

## Исследование источников
- `docs/research/01-mobbin-godly.md` — реальные экраны онбординга и пейволлов, motion-лендинги
- `docs/research/02-growth-design.md` — психология конверсии по кейсам Growth.Design
- `docs/research/03-baymard-nngroup.md` — правила Baymard и NN/g и чек-лист для аудита
