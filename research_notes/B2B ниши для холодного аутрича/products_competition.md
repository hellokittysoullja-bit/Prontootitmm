# High-ticket B2B products for a solo AI/no-code freelancer in Russia (2026): prices and competition

Method note: Kwork offer counts were taken on 2026-10-21 by requesting `https://kwork.ru/search?query=<query>&c=all` and reading the `"total"` field in the page JSON. Kwork search matches keywords loosely, so these counts are upper bounds (for example "ИИ ассистент" also returns virtual-assistant gigs). "Price sample" means the "from" prices of the first 24 results on that page (Kwork's minimum price is 500 ₽). FL.ru (403), Habr Freelance (410), Profi.ru (418), YouDo and Avito blocked automated requests, so I could not get counts for those platforms (see Gaps).

## Comparison table (12–20 candidates)

| # | Product | Setup price (RUB) | Monthly / retainer (RUB) | Build time (solo, no-code) | Demand signals | Kwork offers (query) | SaaS / ready-made competition | Saturation |
|---|---|---|---|---|---|---|---|---|
| 1 | ИИ-администратор (text) for clinics, salons, auto service in TG/MAX/VK/Avito, with booking | Simple FAQ bot 50–200k; agent that writes to CRM 300k–1.5M (vendor estimate) [workspace](https://workspace.ru/blog/skolko-stoit-vnedrenie-ii-v-2026-godu/). On Kwork the price sample runs 500–110k (median ~9k) | Support 5k–300k/mo [workspace](https://workspace.ru/blog/skolko-stoit-vnedrenie-ii-v-2026-godu/) | 1–3 weeks | Vendor claims +15–30% appointments in 3 months [vc.ru](https://vc.ru/ai/2712044-ii-administrator-dlya-klinik). Russian universities are piloting "МедИИум" in clinics [comnews](https://www.comnews.ru/content/244566/2026-04-02/2026-w14/1011/peterburge-sozdali-cifrovuyu-registraturu-dlya-operativnoy-obrabotki-obrascheniy-pacientov) | "чат-бот ИИ" 435; "ии администратор" 437; "ии агент" 1,530; "ИИ ассистент" 1,405 | Many constructors: BotHelp, Botmother, ChatMarket (from 39 ₽/day), plus Bitrix24 marketplace apps [sostav](https://www.sostav.ru/blogs/285533/95495), [bitrix24](https://www.bitrix24.ru/apps/app/kolibbri.chaty_ai_chatgpt_ii_otkrytye_linii/) | Medium–high (generic). Lower when packaged for one vertical |
| 2 | ИИ голосовой робот: inbound and missed calls, outbound calls to the base | Not published (by project) | AI line 20–28k/mo vs a live operator at 50–80k/mo (200 calls × 4 min); all-in 25–35 ₽/min [workspace](https://workspace.ru/blog/ii-koll-centr-skolko-stoit-chto-umeet-i-kogda-okupaetsya-razbor-s-ciframi-dlya-malogo-biznesa/) | 2–4 weeks | Payback 2–4 months at 150–200 inbound calls/mo; cost per outbound lead 300–500 vs 800–1,200 ₽ manually [workspace](https://workspace.ru/blog/ii-koll-centr-skolko-stoit-chto-umeet-i-kogda-okupaetsya-razbor-s-ciframi-dlya-malogo-biznesa/) | "голосовой робот" 75; "голосовой бот ии" 246 | Zvonobot (from 2 ₽), F1Golos, Skorozvon (from 3,750), Zvonok, Oki-Toki, Tomoru [toolfox](https://toolfox.ru/services/s/zvonobot/alternatives) | Low on freelance; mature SaaS for robocalls; a gap in a custom LLM voice agent tied to CRM and booking |
| 3 | Речевая аналитика / ИИ-контроль качества звонков | Not published | Sample SaaS: from 1.5 ₽/min with a 10k deposit, or a minimum plan of 13k/mo [toolfox](https://toolfox.ru/services/s/speechanalytics/alternatives) | 1–3 weeks (STT + LLM checklist + report to TG/CRM) | Manual QA covers only 5–10% of calls (up to 1/3); companies are moving to 100% AI coverage; an author's estimate says it pays off at margin ≥1M ₽/mo [search summary: tbank/selsup/getcourse](https://secrets.tbank.ru/tehnologii/ai-call-control-case/) | "речевая аналитика" 26; "контроль качества звонков" 88 | Roistat, Calltouch, CoMagic, Sipuni modules; Bitrix24 app "Замдир" [bitrix24](https://www.bitrix24.ru/apps/app/minassi.rechevaya_analitika/); SalesAI [toolfox](https://toolfox.ru/services/s/salesai) | **Low on freelance (blue ocean)**. SaaS exists, but SMBs don't use it widely |
| 4 | Внедрение amoCRM / Битрикс24 + автоворонки | 30–210k (vc.ru review); typical 50–300k; setup work alone 20–100k; integrations ×1.5–2 [vc.ru](https://vc.ru/marketing/2949862-stoimost-vnedreniya-amocrm) | Licence from ~599 ₽/user/mo (separate); integrator support usually by the hour (no source) | 2–6 weeks | Steady demand, an established category | "amocrm" 2,589; "внедрение amocrm" 542; "битрикс24" 2,306; "автоворонка" 705 | Hundreds of certified partner integrators | **Red ocean** |
| 5 | Автоматизация Авито (AI autoreplies, autoload, analytics) | By agreement; FL.ru has an order for an "AI bot for Avito + Google Sheets + YandexGPT" [fl.ru](https://www.fl.ru/projects/5516600/razrabotka-ai-bota-dlya-avito-obrabotka-otklikov--google-tablitsyi--yandexgpt.html) | n/a | 1–2 weeks (Avito API + n8n) | Niches with many repeat questions: windows, repair, furniture, freight, auto parts [workspace](https://workspace.ru/blog/avtootvety-na-avito-kak-avtomatizaciya-perepisok-vliyaet-na-zayavki-i-prodazhi/) | "авито автоответ" 143; "автозагрузка авито" 122 | Avito's own AI tools for advertising [click.ru](https://blog.click.ru/market-news/v-avito-reklame-poyavilsya-ii-instrument-pozvolyayushhij-avtomaticheski-upravlyat-byudzhetami/); multi-channel inbox services such as ChatApp [habr](https://habr.com/en/companies/chatapp/articles/777872) | Medium |
| 6 | Репутация / SEO на Яндекс Картах и 2ГИС | One studio: from 55k/mo; 120k for 3 months [teletype](https://teletype.in/@denchis/geogotop). On Kwork the median "from" price is ~10k | Retainer by nature | Process-based, not a build | Tenders for "продвижение в сервисах Яндекса" [workspace tender](https://workspace.ru/tenders/prodvizhenie-klimaticheskoy-kompanii-v-servisah-yandeksa-18942/) | "продвижение яндекс карты" 949; "отзывы яндекс карты" 753 | Many agencies plus paid Yandex Business | **Red ocean** (and a grey zone around fake reviews) |
| 7 | Инфографика/карточки WB/Ozon | Kwork median "from" ~1k per card | — | Days | Huge seller base | "инфографика wildberries" 8,809 | Dozens of AI card generators [selsup](https://selsup.ru/blog/nejroset-dlya-kartochek-tovara/) | **Extreme red ocean, low ticket** |
| 8 | ИИ-ответы на отзывы маркетплейсов | — | SaaS on a tariff per number of answers | Days | — | "ответы на отзывы" 2,065 | Built-in WB neural network that auto-publishes replies [tochka](https://allo.tochka.com/news/wb-ai-otvety); TutOtvet, ApiMonster (30 days free), Uniseller [apimonster](https://apimonster.ru/solution/mp-ai-comments/) | **Commoditized**: the platform does it for free |
| 9 | Сквозная аналитика | Kwork sample 500–65k | — | 1–3 weeks | — | 436 | Roistat, Calltouch, CoMagic | Medium; SaaS dominates |
| 10 | Квизы / лендинги | Kwork median ~2.5–3.5k | — | Days | — | "квиз" 1,767; "лендинг" 14,716 | Marquiz, Tilda, etc. | **Red ocean, low ticket** |
| 11 | Telegram-боты / Mini Apps | Kwork median ~2.5k | — | 1–4 weeks | — | "telegram бот" 17,538; "telegram mini app" 2,146 | Salebot, Puzzlebot, BotHelp | **Red ocean** (generic) |
| 12 | ИИ-рекрутер / чат-бот для массового найма | Kwork sample 500–35k | Plausible per-vacancy or monthly model (no source) | 1–3 weeks | — | "ИИ рекрутер" 16 | HR-tech SaaS (not researched in depth) | **Low on freelance (blue ocean)** |
| 13 | Реанимация базы (рассылки по старой базе) + лояльность | Kwork "рассылка whatsapp" median ~4k | — | Days–1 week | — | "реанимация базы" 25; "программа лояльности" 261; "рассылка whatsapp" 1,557 | Mailing services, loyalty SaaS | Low as a productized "reactivation" offer; high as plain mailings |
| 14 | ИИ-генерация КП/смет (стройка, производство) | — | — | 2–4 weeks | — | "коммерческое предложение" 3,101 (almost all are manual copywriting of a sales proposal, not automation) | Few specialised tools (none found) | **Low as automation** (signal from the query mix) |
| 15 | Внутренняя ИИ-база знаний (RAG) | Not separately priced; agent class 300k–1.5M [workspace](https://workspace.ru/blog/skolko-stoit-vnedrenie-ii-v-2026-godu/) | Support 30–50% of annual project cost [workspace](https://workspace.ru/blog/skolko-stoit-vnedrenie-ii-v-2026-godu/) | 2–4 weeks | 39% of Russian organisations use AI agents/assistants (СберАналитика, Nov 2025, via [habr](https://habr.com/ru/articles/1061046/)) | "база знаний ИИ" 1,468 (loose match) | Yandex/Sber corporate offerings | Medium |
| 16 | Чат-боты в MAX (new channel) | Constructors from 39 ₽/day; custom builds "up to several hundred thousand" [sostav](https://www.sostav.ru/blogs/285533/95495) | — | Days–weeks | Business verification via "MAX для партнёров"; official Bot API [sostav](https://www.sostav.ru/blogs/250077/84090), [sber](https://developers.sber.ru/help/business-development/max-messenger-for-business) | Not counted | BotHelp, Botmother, ChatMarket, Bitrix24 "Мой Max бот" | Early, so lower competition |
| 17 | n8n / Make automations as a service | Kwork sample up to 125k | — | — | — | "n8n" 1,586; "make.com" 71; "salebot" 283; "puzzlebot" 35 | — | n8n is quickly getting saturated |

## Real price ranges (Kwork, FL.ru, Habr, Profi.ru, agency price lists, vc.ru)

### Takeaway
Freelance marketplaces anchor prices very low: Kwork "from" prices start at 500 ₽, with typical medians of 1–10k ₽. Agency and vendor estimates sit 10–100× higher: 50–300k ₽ for CRM, 50k–1.5M ₽ for AI bots and agents. The high ticket depends on positioning as an outcome or ROI service rather than a gig listing.

### Cited Findings
- AI implementation in 2026: a simple FAQ bot costs 50–200k ₽; an AI agent that qualifies leads and updates the CRM costs 300k–1.5M ₽; a multi-agent system starts at 3M ₽; monthly support is 5k–300k ₽; post-launch support runs 30–50% of the annual project cost; typical payback is 3–6 months. The source is a vendor (Флайск). — [workspace.ru](https://workspace.ru/blog/skolko-stoit-vnedrenie-ii-v-2026-godu/)
- AI call centre: 25–35 ₽/min all-in (telephony 2–6, STT 1–4, TTS 1–5, provider markup 10–20). Under 20 ₽/min is suspicious. An AI line costs 20–28k ₽/mo vs 50–80k ₽/mo for a live operator; payback is 2–4 months. — [workspace.ru](https://workspace.ru/blog/ii-koll-centr-skolko-stoit-chto-umeet-i-kogda-okupaetsya-razbor-s-ciframi-dlya-malogo-biznesa/)
- Robocall SaaS: Zvonobot from 2 ₽ with per-second billing (speech recognition 0.6 ₽); F1Golos from 4.2 ₽; Skorozvon from 3,750 ₽. — [toolfox](https://toolfox.ru/services/s/zvonobot/alternatives)
- Speech analytics SaaS examples: from 1.5 ₽/min with a minimum deposit of 10k ₽, or a minimum plan of 13k ₽/mo. — [toolfox](https://toolfox.ru/services/s/speechanalytics/alternatives)
- amoCRM implementation costs 30–210k ₽; sites advertise "от 50 000" and the final bill can triple; telephony and messenger integrations add ×1.5–2; the licence starts at ~599 ₽/user/mo. — [vc.ru](https://vc.ru/marketing/2949862-stoimost-vnedreniya-amocrm)
- FL.ru fixed-price AI bot listings: a simple AI assistant bot at 2,990 ₽; an AI bot with an admin panel and analytics at 11,700 ₽ (from search snippet; the page itself returned 403). — [fl.ru](https://www.fl.ru/uslugi-freelancera/boty-s-ai/)
- Yandex Maps promotion: one studio charges from 55k ₽/mo, or 120k ₽ for 3 months. — [teletype](https://teletype.in/@denchis/geogotop)
- MAX bot constructor ChatMarket costs from 39 ₽/day. — [sostav](https://www.sostav.ru/blogs/285533/95495)
- Kwork price samples from the first 24 results, "from" prices: чат-бот ИИ 500–110k (median 9k); голосовой робот 500–75k (median 3.5k); речевая аналитика 500–55k (median 10k); битрикс24 500–3.5k; продвижение яндекс карты 500–47k (median 10k); инфографика WB 500–2.5k (median 1k); make.com up to 125k. — Kwork search pages, e.g. [kwork.ru/search?query=amocrm](https://kwork.ru/search?query=amocrm&c=all)

### Inferences
- Kwork medians reflect entry gigs and upsells, so they are not a reliable price signal for a custom AI system. Cold outreach with a personalised ROI demo can support 80–300k ₽ setup plus a 15–50k ₽/mo retainer for voice, speech analytics and AI administrators. This matches the workspace vendor ranges.

### Gaps
- No public 2026 price lists were found for Sipuni or Roistat speech analytics, Calltouch AI, Avito automation SaaS, or marketplace review autoresponders.
- Profi.ru and Habr Freelance prices could not be retrieved because the sites block automated requests.

## Red ocean vs blue ocean (counts)

### Takeaway
Red ocean (thousands of Kwork offers, low ticket): Telegram bots (17.5k), landings (14.7k), WB infographics (8.8k), amoCRM (2.6k), Bitrix24 (2.3k), review replies (2.1k), quizzes (1.8k), n8n (1.6k). Blue ocean (under 100 offers): AI recruiter (16), speech analytics (26), base reactivation (25), voice robot (75), call quality control (88).

### Cited Findings
- Kwork totals on 2026-10-21: telegram бот 17,538; лендинг 14,716; инфографика wildberries 8,809; коммерческое предложение 3,101; amocrm 2,589; битрикс24 2,306; telegram mini app 2,146; ответы на отзывы 2,065; квиз 1,767; n8n 1,586; рассылка whatsapp 1,557; ии агент 1,530; база знаний ИИ 1,468; ИИ ассистент 1,405; продвижение яндекс карты 949; отзывы яндекс карты 753; автоворонка 705; внедрение amocrm 542; ии администратор 437; сквозная аналитика 436; чат-бот ИИ 435; salebot 283; программа лояльности 261; голосовой бот ии 246; авито автоответ 143; автозагрузка авито 122; контроль качества звонков 88; голосовой робот 75; make.com 71; puzzlebot 35; речевая аналитика 26; реанимация базы 25; ИИ рекрутер 16. — [kwork.ru/search](https://kwork.ru/search?query=n8n&c=all) (same URL pattern for each query)
- Wildberries has a built-in neural network that drafts and auto-publishes replies to reviews, which turns review replies into a commodity. — [Точка](https://allo.tochka.com/news/wb-ai-otvety); [selsup](https://selsup.ru/blog/ii-instrumenty-wildberries-i-ozon/)
- Courses teach the AI agent + n8n + RAG stack, for example Яндекс Практикум "ИИ-агенты и автоматизация" at about 64k ₽. A Habr review compares 7 such courses. — [checkroi](https://checkroi.ru/course/ii-agenty-i-avtomatizatsiya-ot-yandeks-praktikum/); [habr](https://habr.com/ru/articles/1061046/)

### Inferences
- n8n/AI agent services will saturate quickly because mass courses (Практикум and others) teach them. A defensible niche needs a vertical (for example "voice AI administrator for dental clinics") plus integration into the vertical's software, such as clinic MIS or YCLIENTS.
- Speech analytics and AI QA for SMB sales teams combine a low freelance supply with a clear ROI. They are the strongest candidate for cold outreach.

### Gaps
- No counts for FL.ru, Habr Freelance, Profi.ru, YouDo or Avito Услуги (blocked: 403/410/418/anti-bot).
- No count of Telegram channels or YouTube courses per niche. Only qualitative evidence of n8n/AI agent courses.

## Recurring revenue and ROI that is easy to demo

### Takeaway
The best combination of retainer and provable ROI: (1) voice robot for missed calls (per-minute economics vs operator salary), (2) AI call QA (100% coverage vs 5–10% manual), (3) AI administrator with booking (more appointments). Each has usage-based costs (minutes, tokens), which justify a monthly fee.

### Cited Findings
- AI line vs operator: saves 22–60k ₽/mo; payback 2–4 months. — [workspace](https://workspace.ru/blog/ii-koll-centr-skolko-stoit-chto-umeet-i-kogda-okupaetsya-razbor-s-ciframi-dlya-malogo-biznesa/)
- 27% of inbound calls to small businesses go unanswered in 2026 (Western data). — [beancount](https://beancount.io/ru/blog/2026/08/16/ai-receptionist-small-business-missed-call-revenue-bookkeeping-guide)
- Manual QA covers 5–10% of calls; AI covers 100%. — [selsup](https://selsup.ru/blog/avtomatizatsiya-kontrolya-kachestva-telefonnyh-prodazh-s-pomoshhyu-ii/); [tbank secrets](https://secrets.tbank.ru/tehnologii/ai-call-control-case/)
- A clinic AI administrator claims +15–30% appointments in 3 months (no methodology given). — [vc.ru](https://vc.ru/ai/2712044-ii-administrator-dlya-klinik)
- Avito autoreplies matter most in high-volume repetitive niches; over-automation can hurt trust in B2B and expensive services. — [workspace](https://workspace.ru/blog/avtootvety-na-avito-kak-avtomatizaciya-perepisok-vliyaet-na-zayavki-i-prodazhi/)

### Inferences
- Personalised demo ideas: call QA can run on 10 of the prospect's own recordings and show a scored report. A missed-call audit can be done by mystery-calling the prospect after hours. Both are cheap to produce before the sale.

### Gaps
- No independent (non-vendor) Russian ROI case data was found.

## Russian AI stack and legal (152-ФЗ)

### Takeaway
A legal Russian LLM stack exists and is cheap: GigaChat and YandexGPT APIs cost cents per 1,000 tokens. The MAX Bot API is official. Since 2025, 152-ФЗ localisation and the higher fines make foreign LLMs (OpenAI or Claude via proxies) risky for client personal data.

### Cited Findings
- GigaChat API for legal entities (tariffs from 1 Feb 2026): about 0.065 / 0.5 / 0.65 ₽ per 1,000 tokens for Lite/Pro/Max; a Lite package of 300M tokens costs 19,500 ₽; from 1 Sep 2026 new clients pay via cloud.ru (from search summary). — [developers.sber.ru](https://developers.sber.ru/docs/ru/gigachat/tariffs/legal-tariffs)
- YandexGPT Lite costs 0.2 ₽ (sync) or 0.1 ₽ (async) per 1,000 tokens; Pro 5.1 costs 0.8 / 0.41 ₽. Another source gives Pro at 0.4 ₽, so the sources conflict. Yandex Cloud gives a starting grant of ~4,000 ₽. — [quasa](https://quasa.io/ru/media/yandexgpt-ili-gigachat-api-chto-vybrat-biznesu-dlya-tekstov-dokumentov-i-chat-bota)
- MAX: official Bot API (token plus webhook) with send limits. Legal entities and individual entrepreneurs who are RF residents connect via "MAX для партнёров" and verify through Госуслуги or banks. — [sostav](https://www.sostav.ru/blogs/250077/84090); [Sber developers](https://developers.sber.ru/help/business-development/max-messenger-for-business)
- Voice stack example: Voximplant + OpenAI Realtime + ElevenLabs + n8n. — [habr/search result](https://habr.com/en/articles/662515)
- 152-ФЗ: from 30 May 2025 the КоАП fines for leaks are tiered by the number of affected people; unlawful processing costs 100–300k ₽, or 300–500k ₽ for a repeat. — [infostart](https://infostart.ru/1c/articles/2526813/)
- From 1 July 2025, primary collection of RF citizens' personal data using foreign databases is banned. Sources disagree on whether the ban covers "storage" or "primary collection". — [habr](https://habr.com/ru/post/949628); [robokassa](https://robokassa.com/blog/news/tsena-oshibki-pochemu-kompanii-mogut-poteryat-milliony-iz-za-novogo-zakona-o-personalnykh-dannykh/)
- Uploading client chats or candidates' CVs to ChatGPT is described as a 152-ФЗ violation risk. — [tenchat](https://tenchat.ru/media/5409837-tri-raznykh-obyazannosti-biznesa-po-152fz-kotoryye-chasto-putayut); [netology](https://netology.ru/blog/ai-i-personalnye-dannye)
- An AI administrator that only handles administrative tasks (no diagnosis) does not need a medical licence, according to its developers. — [search summary, comnews](https://www.comnews.ru/content/244566/2026-04-02/2026-w14/1011/peterburge-sozdali-cifrovuyu-registraturu-dlya-operativnoy-obrabotki-obrascheniy-pacientov)

### Inferences
- For clinics, HR (CVs) and call recordings, use GigaChat or YandexGPT with Russian hosting (self-hosted n8n on a Russian VPS). Have the client sign a processing instruction (поручение на обработку) and update the client's privacy policy. "Compliant with 152-ФЗ on a Russian stack" is a selling point against freelancers on OpenAI proxies.

### Gaps
- The exact fine amounts by leak tier were not confirmed from the КоАП text.
- No authoritative ruling was found on whether sending PD to a foreign LLM API counts as prohibited "primary collection".
- Salebot and Puzzlebot pricing and their MAX support were not verified.
