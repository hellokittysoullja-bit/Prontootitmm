# B2B cold outreach in Russia, 2026: lead sources, channels, legal limits, benchmarks

Research date: 2026-10-21. About 17 search/fetch calls. Many pages carry the site's "today" date in the header, which is not the publication date. Publication dates are noted where they were confirmed.

## 1. Lead sources and the prices of parsers and databases

### Takeaway
Cheap, workable prospect lists exist. Map-based databases (2ГИС, Яндекс Карты) cost about 2 to 5 ₽ per record, legal-entity registries (Checko about 3 500 ₽/year) can filter by ОКВЭД, and Контур.Компас is a paid "find clients" product with mobile-number filtering. Parsing 2ГИС yourself likely breaches 2ГИС's license terms. That is a contractual risk, not a criminal one. Contacts of ИП and of named people are personal data under 152-ФЗ (see section 3).

### Cited Findings
- ParserOnline sells exports of organisations from 2ГИС and Яндекс Карты in CSV/XLSX from about 2 ₽ per record, filtered by city, category and whether contacts exist, with a 5-row demo before payment — [toolfox.ru (parsers-me alternatives)](https://toolfox.ru/services/s/parsers-me/alternatives)
- The official 2GIS "Базы данных" app for Bitrix24 sells selections from 5.20 ₽, filterable by headcount and contact fields — [Bitrix24 app 2gis.lead](https://www.bitrix24.ru/apps/app/2gis.lead)
- Konabayev runs a 2ГИС / 2ГИС+Яндекс Карты scraper on Apify (pay-per-event, exports to Excel/CSV/JSON/API) — [konabayev.com parser-2gis](https://konabayev.com/ru/tools/parser-2gis/), [2ГИС + Яндекс Карты](https://konabayev.com/ru/tools/parser-2gis-yandex-karty/)
- Turnkey parsing services start at about 30 000 ₽ for setup; Parsing Master is priced "по запросу" — [toolfox.ru parsingmaster alternatives](https://toolfox.ru/services/s/parsingmaster/alternatives)
- A Habr Q&A user quotes the 2ГИС license as banning extraction of databases from its products and their use apart from those products. This is unverified against the official license text — [qna.habr.com](https://qna.habr.com/user/plp-kolyan/likes)
- Checko: a single plan at 3 500 ₽/year in 2026, with 100 free requests per day; the paid plan is worth it for more than 100 requests per day, for API integration, or to remove ads — [toolfox.ru Checko review](https://toolfox.ru/blog/chekko-obzor-tarify-otzyvy). Checko has an API and an Excel export — [qna.habr.com](https://qna.habr.com/q/1338098)
- Контур.Компас ("Контур.Поиск клиентов") has a 30-day trial with export of 50 organisations. Exports can be limited to mobile numbers, and contacts you have already used are excluded from later exports. Prices are not published in the results — [kontur.ru/compass/price](https://kontur.ru/compass/price)
- Rusprofile can select clients by ОКВЭД. Контур.Фокус (a due-diligence product, not a lead-generation one) starts at about 32 000 ₽ — [toolfox.ru](https://toolfox.ru/services/s/checko/alternatives), [toolfox.ru tag](https://toolfox.ru/blog/tag/%D1%87%D0%B5%D0%BA%D0%BA%D0%BE)
- One source advises against buying a ready-made database without knowing when and from where it was collected — [toolfox.ru](https://toolfox.ru/services/s/parsers-me/alternatives)

### Inferences
- A cheap stack for SMB outreach: a 2ГИС/Яндекс Карты export (category + city, 2–5 ₽/row) enriched with Checko/Rusprofile (ИНН, revenue, ОКВЭД, director's name). This gives segmentation by size and a personal name for the opener.
- hh.ru vacancies are a pain signal. A company hiring a "менеджер по продажам" or "SMM" signals a gap that can be outsourced. This rests on common practice and has no source here.

### Gaps
- No verified 2026 prices found for: Лидогенератор (lidogenerator), 2GIS-парсер desktop tools, Avito parsers, marketplace seller databases (WB/Ozon), Telegram chat member parsers, or VK group parsers.
- hh.ru API terms for collecting employer data were not checked.
- The official 2ГИС license text was not verified.

## 2. Channels in 2026: Telegram, MAX, WhatsApp, email, calls and others

### Takeaway
WhatsApp is effectively unavailable without a VPN since February 2026. MAX technically blocks cold messages to people who have not started a dialog. Telegram still works for cold DMs, but under tight behaviour-based limits (about 10–15 new dialogs per day per warmed-up account), and since 2025 recipients can charge Stars for messages from non-contacts. Telegram was also being slowed by Роскомнадзор in 2026. Cold calls from a company now require call marking (since 1 September 2025), and recipients can block mass calls with their operator. Email is the channel least affected by the platform changes, but ст.18 of the advertising law applies to it (section 3).

### Cited Findings
**WhatsApp**
- August 2025: Роскомнадзор restricted calls in WhatsApp and Telegram. In autumn 2025 it began slowing WhatsApp; in December 2025 it warned of a full block — [ppc.world](https://ppc.world/news/whatsapp-otklyuchat-v-2026-godu-telegram-trogat-ne-budut-deputat-gosdumy/), [3dnews](https://3dnews.ru/1134307/roskomnadzor-predupredil-o-polnoy-blokirovke-whatsapp-i-rasskazal-kak-messendgeru-eyo-izbegat)
- On 12 February 2026, Коммерсант, citing Reuters, reported that the WhatsApp domain had been removed from the НСДИ (national DNS). Devices stopped resolving it and access became VPN-only. The Kremlin said it could resume if Meta agreed to talks. The same week, Роскомнадзор stepped up throttling of Telegram (domain request times doubled) — [Коммерсант](https://www.kommersant.ru/doc/8422092)
- No source found confirming that WhatsApp had been unblocked by October 2026 — [gogov.ru detector](https://gogov.ru/ru-detector/whatsapp) (not opened)

**Telegram**
- Since March 2025, users with Premium can make messages from non-contacts paid (1 to 10 000 Stars, with a 15% Telegram fee, and contacts/groups can be exempted). An unknown sender can only write after paying — [blog.click.ru](https://blog.click.ru/market-news/v-telegram-poyavilis-platnye-soobshheniya-dlya-neznakomcev/), [click-or-die.ru](https://click-or-die.ru/2025/03/telegram-vvel-platnye-soobshheniya-kak-vklyuchit-kto-i-skolko-dolzhen-platit), [Habr](https://habr.com/ru/amp/publications/889050)
- Observed limits from Green-API (27 July 2026; the authors' observations, since platforms publish no exact limits): Telegram allows 3–5 cold messages per day from a new number and 10–15 per day from a warmed-up one, with existing dialogs unlimited. Triggers are many new dialogs with unknown numbers in a day, complaints, and repeat violations. Rephrasing, spacing out sends, and proxies/VPN do not help. The overall safe level is 10–20 messages per number per day — [green-api.com](https://green-api.com/articles/these-tips-will-help-you-avoid-bans-in-wa-tg-and-max/)
- The Salebot docs mention up to about 40 messages per day to different chats, and a limit of 15 contacts added manually per day / 200 for an established account. The context of these numbers is unclear — [docs.salebot.pro](https://docs.salebot.pro/chatbots/channels/telegram/dms)

**MAX (national messenger)**
- MAX detects messages sent to a user who has not started the bot or given consent. You can only write to people who made the first move, and getting around this leads to an account block — [timeweb.com community](https://timeweb.com/ru/community/articles/rassylki-v-max-rabochie-scenarii-v-2026-godu)
- An account can be blocked after a mailing, and unblocking takes up to a month — [companies.rbc.ru](https://companies.rbc.ru/news/3YV0LMbkxl/kak-pravilno-zahodit-v-messendzher-max/)
- MAX limits per Green-API: 3–5 messages per day for a new account and 10–15 for a warmed-up one. A few "Пожаловаться на спам" reports cause a temporary block even after a few messages — [green-api.com](https://green-api.com/articles/these-tips-will-help-you-avoid-bans-in-wa-tg-and-max/)
- MAX has channels (similar to Telegram channels) and bots for dialogs the user starts. These are the legitimate tools — [timeweb.com](https://timeweb.com/ru/community/articles/rassylki-v-max-rabochie-scenarii-v-2026-godu), [Sber developers](https://developers.sber.ru/help/business-development/max-messenger-for-business)
- Under 41-ФЗ, from 1 March 2026 banks, telecom operators, government bodies and digital platforms may not use foreign messengers to communicate with clients. This does not cover ordinary SMB — [habr / mcn.ru summary via search](https://www.mcn.ru/novaya-era-zashhity-kak-gosudarstvo-boretsya-s-telefonnym-i-internet-moshennichestvom/)

**Phone calls**
- Since 1 September 2025 (41-ФЗ, amending 126-ФЗ «О связи»; Government Resolution №1300 of 28.08.2025), every legal entity and ИП making commercial calls needs a marking contract with its operator. The marking shows up to 32 characters: the company name and a category. Operators may block unmarked calls. Marking costs about 0.24 ₽ per call (Beeline) and about 0.30 ₽ (MegaFon). Commercial calls from employees' personal SIMs risk being blocked as spam; lawyers recommend corporate SIMs — [ppc.world](https://ppc.world/articles/markirovka-zvonkov-obyazatelna-dlya-yurlic-i-ip-s-1-sentyabrya-razbor-populyarnyh-voprosov-s-yuristom/amp/)
- Subscribers can opt out of spam calls and SMS through their operator, with blocking starting the next day. "Mass call" has no official definition, so some operators block all business calls — [ppc.world](https://ppc.world/articles/markirovka-zvonkov-obyazatelna-dlya-yurlic-i-ip-s-1-sentyabrya-razbor-populyarnyh-voprosov-s-yuristom/amp/)
- Operators report that clients pay for marking even on unanswered calls and that mass automated calls are moderated manually — [kod.ru](https://kod.ru/operatory-problemy-markirovki)
- Harant.ru headlines the change as "Конец «холодных» звонков" (the end of cold calls) — [harant.ru](https://harant.ru/blog/administrativnoe-pravo/konecz-holodnyh-zvonkov-kak-teper-predprinimatelyam-sovershat-obzvon-klientov/)

### Inferences
- For SMB owners, the realistic channel mix in late 2026 is: (1) email to a corporate or public address with a personal non-advertising offer, (2) Telegram DMs to the owner, at 10–15 per day per warmed-up account, ideally after a warm touch, (3) a marked call from a corporate SIM, (4) replies through the company's own channels (Avito messages to listings, VK community messages). MAX and WhatsApp are not suitable for cold first-touch.
- Telegram Premium for the sender lowers spam risk only anecdotally. When the recipient has paid messages enabled, the sender must pay Stars, which can act as a "paid attention" signal.

### Gaps
- The official Telegram FAQ/SpamBot rules were not fetched. Telegram publishes no numeric limits.
- No 2026 source found on: VK messaging limits for business, Avito's rules on messaging other sellers (Avito anti-spam), email deliverability specifics for mail.ru/Yandex (Postmaster, DMARC requirements), or LinkedIn alternatives (LinkedIn has been blocked in RU since 2016; no source fetched).
- No comparative reply rate by channel for SMB owners was found from a reliable source.

## 3. Legal limits: advertising law ст.18, 152-ФЗ, calls and anti-fraud

### Takeaway
Under ст.18 ФЗ «О рекламе», advertising by telecom channels (email, SMS, messengers, calls) requires the recipient's prior consent, and the sender bears the burden of proving it. ФАС has fined senders even for emails to corporate addresses. Fines under ч.1 ст.14.3 КоАП reach 1 млн ₽ for medium and large businesses. The usual gray zone is a message that is not "advertising": addressed to a specific company, personalised, without being aimed at an indefinite circle of people. That defence is fact-specific. 152-ФЗ applies to contacts of ИП and named persons; consent must be a separate document since 1 September 2025, and turnover-based fines for repeat leaks have applied since 30 May 2025.

### Cited Findings
- Advertising through telecom networks is allowed only with the addressee's prior consent. If the distributor cannot prove consent, the ad counts as sent without it — [360.ru (Московское областное УФАС)](https://360.ru/news/obschestvo/moskovskoe-oblastnoe-ufas-rossii-vozbudilo-delo-v-otnoshenii-hozjajstvujuschego-subekta-32/)
- The distributor must stop sending at once on the recipient's request. A court upheld a 40 000 ₽ fine over an email inviting an organisation to a seminar, sent to its corporate address — [pravo.ru](https://pravo.ru/news/view/38036/)
- Automated mailings and dialing without human participation are prohibited — [qna.habr.com](https://qna.habr.com/user/varnav/comments)
- Consent placed as a clause in a contract or offer is usually treated as an error; direct consent is required — [garant.ru](https://garant.ru/article/1523544)
- ч.1 ст.14.3 КоАП fines for businesses run 100 000–500 000 ₽ (2023 article). Expert estimate: 100–300 тыс. ₽ for a first offence, 250–350 тыс. ₽ for a repeat. Examples include a Megafon SMS fine of 500 тыс. ₽ (cut to 150 тыс. ₽ by a court) and Alfa-Bank fined 250 тыс. ₽ for a repeat — [pravo.ru (27.09.2023)](https://pravo.ru/story/248885/)
- Current scale as cited in 2025 by a lawyer under ст.14.3: officials and ИП 20–100 тыс. ₽, small businesses 150–500 тыс. ₽, medium and large businesses 300 тыс.–1 млн ₽ — [ppc.world](https://ppc.world/articles/markirovka-zvonkov-obyazatelna-dlya-yurlic-i-ip-s-1-sentyabrya-razbor-populyarnyh-voprosov-s-yuristom/amp/); a range of "20 тыс.–1 млн ₽" is also cited at [regberry.ru](https://www.regberry.ru/malyy-biznes/zakon-o-spam-zvonkah-novye-shtrafy-dlya-biznesa-i-kak-ih-izbezhat). The two sources are consistent.
- 41-ФЗ makes mass calls and mailings without consent a matter of the law «О связи», not only of the advertising law — [harant/mcn summary](https://www.mcn.ru/novaya-era-zashhity-kak-gosudarstvo-boretsya-s-telefonnym-i-internet-moshennichestvom/)
- 152-ФЗ: from 1 September 2025, consent to personal-data processing must be a separate document (ч.1 ст.9 as amended by 156-ФЗ of 24.06.2025) — [harant.ru](https://harant.ru/blog/grazhdanskoe-pravo/pro-personalnye-dannye-v-rabote-yuridicheskih-licz-i-ip-v-2025g-obzor-izmenenij/)
- 420-ФЗ of 30.11.2024 (in force 30.05.2025): turnover fines for repeat leaks of 1–3% of annual revenue, minimum 25 млн ₽, maximum 500 млн ₽ — [ppt.ru](https://www.ppt.ru/obzory/vstupaet-v-silu/federalnyy-zakon-30-11-2024-420-fz). An earlier draft had a 20 млн ₽ minimum — [expert.ru](https://expert.ru/news/gosduma-vvela-oborotnye-shtrafy-za-utechku-personalnykh-dannykh). For first leaks, fines depend on the number of subjects or identifiers affected — [Контур.Эгида](https://kontur.ru/aegis/blog/56638-shtrafy_v_sfere_informacionnoj_bezopasnosti), [retail.ru](https://www.retail.ru/news/biznesu-ustanovili-oborotnye-shtrafy-za-utechku-personalnykh-dannykh-3-dekabrya-2024-248309/)
- 420-ФЗ also created liability for obtaining personal data without legal grounds. Criminal liability for illegal use of personal data has applied since 11.12.2024 — [docshell.ru presentation](https://docshell.ru/event-docs/Айти%20Новация%20%5BПДн%5D.pdf) (a vendor presentation; secondary source)

### Inferences
- The safer B2B pattern: a one-to-one, personalised business proposal to a legal entity's public corporate contact (info@ from its site or 2ГИС). Do not send mass identical "advertising" text. Offer an opt-out and honour it at once. Keep evidence of individual addressing. This lowers but does not remove ст.18 risk, because ФАС has fined corporate emails (pravo.ru case).
- Storing parsed phone numbers and names of ИП/directors in a CRM makes you a personal-data operator. Minimal hygiene: a notice to РКН about processing, a privacy policy, data minimisation, and deletion on request. Turnover fines apply to repeat leaks, so the main practical risk for a small outreach shop is a fine under ст.13.11 or a complaint, not a turnover fine.
- Cold calls: use only marked corporate numbers. Expect some operators to block them anyway, which lowers connect rates.

### Gaps
- The text of КоАП ст.14.3 and ст.13.11 was not checked on consultant.ru or garant.ru.
- No authoritative ФАС clarification was found on when an individual B2B email counts as "not advertising" (the indefinite-circle test).
- No 2026 amendments found beyond the 2025 changes; the anti-fraud "second package" in 2026 was not researched.

## 4. Personalized video tools available in Russia and the best formats

### Takeaway
Little verifiable 2026 information was found. Loom is a foreign SaaS from Atlassian. Its availability and payment from Russia were not confirmed, and no source covered Kinescope or HeyGen availability. A Telegram video message (кружок) needs an existing chat, so it is limited by the same cold-DM rules.

### Cited Findings
- Loom is a cloud platform for screen recording and video messages, founded in 2015 and now part of Atlassian — [atlassian.com/ru](https://www.atlassian.com/ru/software/loom/screen-recorder), [tldv.io](https://tldv.io/ru/blog/loom-alternatives/)
- Local alternatives: OBS Studio (free, cross-platform screen and webcam capture), Screen Studio and CleanShot X on Mac, and the open-source Cap — [blog.openreplay.com](https://blog.openreplay.com/ru/инструменты-записи-экрана-разработчиков/), [toolquestor](https://toolquestor.com/uk/open-source/alternative/loom)

### Inferences
- A practical RU stack would be a screen recording (OBS or a similar tool), hosted on Kinescope, Rutube or Яндекс Диск, sent as a link with a thumbnail, or a кружок sent in Telegram once a dialog exists. This rests on reasoning from tool characteristics; no sources compare them.

### Gaps
- Loom access and payment from Russia, Kinescope prices, the Яндекс Телемост recording feature, and HeyGen/AI-avatar availability with Russian payment were not verified (search budget exhausted).
- No data found comparing reply rates for a кружок versus a link.

## 5. Benchmarks: reply rates, safe daily volumes, follow-ups

### Takeaway
Reliable Russia-specific benchmarks are scarce. A Habr report on B2B mailings gives about 27.7% open rate and 5.1% reply rate on average (3.0% for C-level), and agency case studies claim 6% reply. Safe messenger volume is about 10–20 new dialogs per account per day. Treat agency figures as upper bounds.

### Cited Findings
- Habr report: averages across industries of 27.7% open rate and 5.1% reply rate; 3.0% reply rate among C-level; emails under 100 characters get the highest reply rate (5.4%) — [habr.com/ru/post/918424](https://habr.com/ru/post/918424)
- Agency case (IT training): open rate rose from 8% to 38% and reply rate from 0.3% to 6.2%, with 34 corporate contracts. This is a self-reported agency figure — [workspace.ru](https://workspace.ru/cases/nastroyka-holodnyh-email-rassylok-dlya-kompanii-po-it-obucheniyu-email-autrich/)
- Ruward case: wholesale baby strollers, 121 leads from a 3-email sequence; no rates given — [ruward.ru](https://ruward.ru/cases/2399/)
- vc.ru interview claiming an "88% open rate" in B2B cold email; the figures were not verified — [vc.ru](https://vc.ru/life/859655-kak-poluchit-open-rate-88-i-celevye-lidy-v-b2b-s-pomoshyu-holodnoi-email-rassylki)
- International benchmark: business consulting and services get the lowest cold B2B reply rate, at 2.2% — [Belkins](https://belkins.io/resources/b2b-cold-email-benchmarks)
- Safe messenger volumes (observations): Telegram and MAX at 3–5 per day for a new account and 10–15 for a warmed-up one; WhatsApp without the API at 15–20 per day; the WhatsApp Business API at 250 conversations per day in month 1, then 1 000 per day (WA is blocked in RU anyway) — [green-api.com](https://green-api.com/articles/these-tips-will-help-you-avoid-bans-in-wa-tg-and-max/)

### Inferences
- A planning baseline for an SMB-owner campaign: email reply rate of about 2–5% (higher if short and hyper-personal); Telegram DMs probably higher per message but capped at about 10–15 per account per day, so throughput is about 300–450 per account per month.
- Follow-ups: the cited cases use 3-step sequences (Ruward). No RU source gave a follow-up uplift figure.

### Gaps
- No reliable RU source found for reply rate per channel (Telegram vs email vs call vs Avito) for SMB owners.
- No RU data found on cold-call connect or conversion rates after marking was introduced.
- No email-volume norms per mailbox for mail.ru/Yandex in 2026.
