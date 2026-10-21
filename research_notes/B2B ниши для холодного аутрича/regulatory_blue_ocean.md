# Regulatory / platform "blue ocean" B2B opportunities in Russia, 2025–2026

Research date: 2026-10-21. About 20 tool calls: web searches plus fetches of selected pages. Most sources are trade or vendor blogs (sostav.ru, workspace.ru, regberry, saby, moysklad). I could not open primary legal texts (pravo.gov.ru, consultant.ru) in this session, so treat fine amounts as "as reported" until they are checked against the КоАП. I could not search Kwork or FL directly for competition, so competition levels are mostly inferred. This is flagged under each question.

## Q1. Which regulatory / platform changes in 2025–2026 create forced pains for Russian SMB? (what changed, when, who, fine size)

### Takeaway
Five forced deadlines have the strongest evidence and the widest reach:
1. WhatsApp blocked (phased from Nov 2025, full block Feb 2026) and Telegram throttled (from 10 Feb 2026). This is a mass, urgent migration of client communication to MAX and VK.
2. Personal data rules (152-ФЗ): from 30 May 2025 the fines rose about 20–60x, and from 1 Sept 2025 consent must be a separate document. This touches almost every SMB website.
3. Russian-language signs and consumer information (168-ФЗ), effective 1 March 2026.
4. The НДС threshold for УСН (simplified tax regime) dropped to 20 mln ₽ from 1 Jan 2026.
5. New «Честный знак» (product labelling) categories through 2026, and the platform-economy law (289-ФЗ) from 1 Oct 2026.

The total pool is about 6.6 mln SMB entities.

### Cited Findings

**Base population**
- SMB register (ФНС), 10.07.2026: 6,612,445 entities, up 3.5% year on year. Of these, 2,022,689 are legal entities (down 5.2%) and 4,589,756 are ИП (up 7.8%) — [v2b.ru, 13.07.2026](https://www.v2b.ru/2026/07/13/reestr-msp-obnovilsya-kolichestvo-predprinimateley-dostiglo-6-6-mln/)

**1. WhatsApp / Telegram blocking and the forced move to MAX/VK**
- Timeline:
  - RKN confirmed a phased WhatsApp block on 28 Nov 2025, and the Kremlin announced a full block in Feb 2026; users were told to move to MAX — [lenta.ru](https://lenta.ru/twz/chto-proiskhodit/blokirovka-whatsapp.htm); [TimesLive, 12.02.2026](https://www.timeslive.co.za/news/world/2026-02-12-russia-fully-blocks-whatsapp-and-promotes-state-backed-max/)
  - WhatsApp had been slowed by about 80% since Sept 2025, and Telegram media was throttled to 128 Kb/s from 10 Feb 2026 — [workspace.ru blog, ~Mar 2026](https://workspace.ru/blog/kak-biznesu-ne-poteryat-klientov-pri-blokirovke-telegram-5-resheniy-s-cenami/)
- Scale: per INFOLine/Forbes data cited by the same blog, these two messengers served 80% of companies — [workspace.ru](https://workspace.ru/blog/kak-biznesu-ne-poteryat-klientov-pri-blokirovke-telegram-5-resheniy-s-cenami/)
- Who was most dependent: small service businesses such as beauty salons ran all client communication in WhatsApp — [idnfinancials / Reuters-based](https://www.idnfinancials.com/news/61325/russia-blocks-whatsapp-forcing-100-million-users-to-switch-to-max)
- Reach of the alternatives: MAX claims 85 mln users, but Mediascope puts its real reach at 39% of the population, against 74% for Telegram (Jan 2026) — [workspace.ru](https://workspace.ru/blog/kak-biznesu-ne-poteryat-klientov-pri-blokirovke-telegram-5-resheniy-s-cenami/)
- The 41-ФЗ law (from 1 June 2025) and how far it reaches — the sources conflict:
  - The workspace.ru blog says businesses may not talk to clients in foreign messengers, with fines of 30–700k ₽ and a first case of a bank fined 200k ₽ — [workspace.ru](https://workspace.ru/blog/kak-biznesu-ne-poteryat-klientov-pri-blokirovke-telegram-5-resheniy-s-cenami/)
  - A T-Bank/search summary says the ban covers only certain organizations (banks, telecom operators) — [secrets.tbank.ru](https://secrets.tbank.ru/blogi-kompanij/mesendzher-max-dlya-biznesa/)
  - The blog's "all business" reading is probably too broad and needs checking against 41-ФЗ.
- MAX business features:
  - Business accounts for all Russian companies were expected in spring 2026. Self-employed people, private individuals and non-residents cannot open them. Verification goes through Госуслуги, banks or МСП.РФ — [ppc.world](https://ppc.world/news/max-v-blizhayshie-mesyacy-raskataet-na-vseh-vozmozhnost-sozdaniya-biznes-akkauntov/amp/); [secrets.tbank.ru](https://secrets.tbank.ru/blogi-kompanij/mesendzher-max-dlya-biznesa/)
  - Bots work only through a community (business page), not a personal account. Two routes exist: the official Bot API (token plus webhook) or no-code builders — [workspace.ru](https://workspace.ru/blog/kak-sozdat-bota-v-max-poshagovaya-instrukciya-dlya-biznesa-2026/); [developers.sber.ru](https://developers.sber.ru/help/business-development/max-messenger-for-business)
- MAX pricing for business:
  - Free at launch, per the VK press service — [kod.ru, 25.07.2025](https://kod.ru/max-for-business)
  - A leaked presentation suggests a later paid model: 1,517–2,333 ₽ per employee licence per month, about 12.2 ₽ per client per month for bot communication, and 7.9 ₽ per user for OTP — [kod.ru, 25.07.2025](https://kod.ru/max-for-business). This is not official.
- Agency-level prices — [workspace.ru](https://workspace.ru/blog/kak-biznesu-ne-poteryat-klientov-pri-blokirovke-telegram-5-resheniy-s-cenami/):

  | Solution | Price | Time |
  |---|---|---|
  | Basic migration to MAX | "free" (DIY) | 1–3 days |
  | Cascade mailing (MAX + VK + SMS/email) | from 100k ₽ | 3–7 days |
  | Cross-platform booking bot | 200–250k ₽ | 2–3 weeks |
  | Own app (MVP) | from 1 mln ₽ | 2–3 months |

- SaaS prices:
  - Builder ChatMarket: 14 days free, then from 39 ₽/day — [sostav.ru, 12.07.2026, vendor post](https://www.sostav.ru/blogs/285533/95495)
  - Multichannel bot Профит Бот (WhatsApp/TG/MAX/Avito): about 2,900 ₽/month per number — [bitrix24 apps](https://www.bitrix24.ru/apps/app/Botsarmy.profit_bot/)
- Tooling: Salebot documents client-base migration and WhatsApp number import, plus a MAX channel — [docs.salebot.pro](https://docs.salebot.pro/chatbots/channels/max)

**2. Personal data (152-ФЗ) and compliance for SMB websites**
- Fines for failing to notify RKN (from 30 May 2025, 420-ФЗ of 30.11.2024) — [regberry](https://www.regberry.ru/news/s-30-maya-v-razy-vyrastut-shtrafy-rabote-s-persdannymi); [buh.ru](https://buh.ru/news/tag-uvedomlenie-v-rkn/):

  | Violator | Fine before | Fine from 30 May 2025 |
  |---|---|---|
  | Legal entities | 5k ₽ | 100–300k ₽ |
  | Responsible officers | not stated | 30–50k ₽ |

  - It is now a separate offence under ч.10 ст.13.11 КоАП.
  - One source gives a reduced range of 50–150k ₽ for micro and small businesses; others do not mention it. This conflict is unresolved — [habr](https://habr.com/ru/articles/994568)
- Missing or outdated privacy policy on a website: 30–60k ₽ for legal entities (ч.3 ст.13.11), as reported by the search summary of the same sources — [secrets.tbank.ru](https://secrets.tbank.ru/blogi-kompanij/5-narusheniy-za-kotorye-shtrafuet-rnk/)
- Separate consent document from 1 Sept 2025:
  - Consent can no longer sit inside an offer, policy or contract; it needs its own checkbox or signature.
  - Consents collected before 1 Sept 2025 remain valid — [harant.ru](https://harant.ru/blog/internet-pravo/chto-izmenilos-s-1-sentyabrya-2025-goda-v-oblasti-personalnyh-dannyh-dlya-onlajn-biznesa/); [ppt.ru](https://ppt.ru/news/personal-data/oformlyat-soglasie-na-obrabotku-personalnykh-dannykh-nuzhno-budet-po-novomu)
  - Garant reports fines of 300–700k ₽ for organizations and ИП for violating the new requirements — [garant.ru](https://www.garant.ru/article/1862510/). The exact article was cut off in the snippet; needs a КоАП check.
- Turnover-based fines: one source says 508-ФЗ introduced turnover fines for repeat violations from 1 Jan 2026 — [habr](https://habr.com/ru/articles/994568). Single source, unverified.

**3. Russian language on signs, websites and consumer information (168-ФЗ of 24.06.2025)**
- In force from 1 March 2026. Covers signs, plates, pointers, menus, websites and apps aimed at consumers.
- Registered trademarks and company names registered in ЕГРЮЛ are exempt.
- A foreign-language duplicate is allowed, but the Russian text must come first and be no smaller or paler — [regberry](https://www.regberry.ru/news/prinyat-zakon-o-russkoyazychnyh-vyveskah); [kontur.ru](https://kontur.ru/articles/2040)
- Fines:
  - There is no dedicated КоАП article; violations are treated under ст.14.8 (consumer's right to information): 500–1,000 ₽ for ИП and 5–10k ₽ for legal entities.
  - Advertising violations fall under ст.14.3 at 100–500k ₽. The ФАС (competition authority) can fine per physical carrier — [retail.ru, 23.01.2026](https://www.retail.ru/news/shtrafy-za-vyveski-na-inostrannom-yazyke-dostignut-10-tysyach-rubley-23-yanvarya-2026-273684/); [vitvet.com](https://vitvet.com/articles/tovarnyj-znak/goryachie-temy/shtrafy-za-vyveski/)
- Enforcement is uneven: some regions give a grace period, and Moscow said there would be no mass "purge" of old signs — [bfm.ru](https://www.bfm.ru/news/600097)
- Residential-complex names introduced after 1 March 2026 must appear in Cyrillic only in advertising — [101-app.com](https://101-app.com/blog/zakon-o-russkom-yazyke-1-marta-2026)

**4. НДС for УСН in 2026**
- The threshold for exemption from НДС on УСН fell from 60 mln to 20 mln ₽ of the previous year's income, from 1 Jan 2026.
- The same 20 mln ₽ limit now applies to the patent (ПСН) — [regberry](https://www.regberry.ru/nalogooblozhenie/izmeneniya-po-nds-na-usn-2026); [konsol.pro](https://konsol.pro/blog/nds-pri-usn)
- Rate options above the threshold:
  - Reduced rates without input-НДС deduction: 5% for income of 20–272.5 mln ₽, 7% for 272.5–490.5 mln ₽.
  - Or the general rate, now 22%, with deduction — [konsol.pro](https://konsol.pro/blog/nds-pri-usn); [saby.ru](https://saby.ru/articles/accounting/limity_i_stavki_usn)
- Future thresholds — conflict: the planned cuts to 15 mln ₽ (2027) and 10 mln ₽ (2028) may have been cancelled. A July 2026 report says the threshold stays at 20 mln ₽ — [v2b.ru, 06.07.2026](https://www.v2b.ru/2026/07/06/limit-dohodov-dlya-uplaty-nds-na-usn-sohranyon-na-urovne-20-mln/); [moedelo.org](https://www.moedelo.org/club/article-knowledge/porog-20-mln-rublej-dla-osvobozdenia-ot-nds-na-usn-sohranat-cto-izmenitsa-dla-biznesa)

**5. «Честный знак» (product labelling): new categories in 2026**
- Government order No. 956-р of 27 April 2026 expanded the mandatory-labelling list — [garant.ru](https://www.garant.ru/article/2131746/)
- Planned launches in the second half of 2026 — [saby.ru](https://saby.ru/articles/marking/izmenenija_1_sent_2026):

  | From | Category |
  |---|---|
  | 1 Oct 2026 | Hygiene and personal care: oral care, manicure tools, combs and brushes, pads and tampons, diapers, cotton wool and wipes, massagers and sponges |
  | 1 Nov 2026 | Fertilizers in consumer packaging |
  | 1 Dec 2026 | Reusable e-cigarettes and vaping devices |

- Radio-electronics: participants register from 1 March 2026; producers and importers apply codes from 1 May 2026 — [moedelo.org](https://www.moedelo.org/club/article-knowledge/kakie-tovary-dobavili-v-obazatelnuu-markirovku-v-2026-godu)
- Other groups being phased in: sweets and baked goods, instant drinks, sports nutrition, cosmetics and household chemicals, toys, motor oils, building materials, bicycles, pet food — [moysklad.ru](https://www.moysklad.ru/poleznoe/markirovka-tovarov/kalendar-markirovki/); [saby.ru](https://saby.ru/marking/product). Exact dates differ between sources.

**6. Platform economy law (289-ФЗ of 31.07.2025), in force from 1 Oct 2026**
- Sellers may work with marketplaces only under electronic contracts, which platforms must store for 3 years.
- Platforms must verify that a seller exists and is entitled to trade. Experts advise reconciling account data with ЕГРЮЛ/ЕГРИП to avoid blocks.
- Notice periods: 45 days for new commissions or sanctions, 15 days for other changes.
- Promotions: sellers decide whether to take part. A platform may cut the price at the seller's expense only with consent and 5 working days' notice.
- There is no cap on commissions. One source reports a fine of up to 500k ₽ (on the platform) for an unlawful block — [ppt.ru](https://ppt.ru/columns/samitov-marat/zakon-o-platformennoy-ekonomike-chto-izmenitsya-s-1-oktyabrya); [bitrix24 journal](https://www.bitrix24.ru/journal/zakon-marketpleysy-289-fz-prodavtsy/); [retail.ru](https://www.retail.ru/articles/zakon-o-platformennoy-ekonomike-kak-budut-rabotat-marketpleysy-s-1-oktyabrya/)

**7. Advertising ban on Instagram/Facebook (Meta designated extremist)**
- Since 1 Sept 2025, advertising on resources of extremist or undesirable organizations, and on restricted resources, is banned.
- Fines: up to 2.5k ₽ for individuals, 20k ₽ for officers, 500k ₽ for legal entities.
- RKN told advertisers to remove Instagram ads by 1 Sept 2025 — [postium.ru](https://postium.ru/zakon-o-zaprete-reklamy-na-zapreshhyonnyx-platformax/); [ppc.world](https://ppc.world/news/roskomnadzor-trebuet-udalit-reklamu-v-instagramdo-1-sentyabrya/)
- Advertising in Instagram fell 64-fold — [sostav.ru](https://www.sostav.ru/publication/reklamy-v-instagram-stalo-v-64-raza-menshe-79910.html)

**8. Yandex AI search (Алиса AI / Нейро) and GEO**
- Kommersant: information sites lost up to 30% of organic traffic after AI answers appeared in Yandex and Google — [kommersant.ru](https://www.kommersant.ru/doc/8728568)
- The share of sites outside the Yandex top-10 that appear in Alice answers fell from 40% to 10% within six months — [sostav.ru (cites Kommersant)](https://www.sostav.ru/blogs/291003/90620)
- Ahrefs (Dec 2025, 300k queries): an AI answer cuts clicks even on position 1 by 58% — [tenchat.ru](https://tenchat.ru/media/5703638-to-chto-rabotalo-perestalo-rabotat)
- Yandex launched a free tool "Видимость сайта в Алисе AI" in Webmaster.
- An Alice answer draws on about 10 sources on average, and niche SMB sites can be among them — [sostav.ru](https://www.sostav.ru/blogs/284204/90966); [kommersant.ru](https://www.kommersant.ru/doc/8570440)

### Inferences
- Messenger migration has the largest "must act now" population: 80% of companies, with service SMB most dependent. Its deadline has already passed (Feb 2026), so the pain is acute and continuing.
- Personal data compliance has the largest fine-to-cost ratio. A small site's fix costs a few thousand rubles, while the risk is 100–300k ₽ for no notification, 30–60k ₽ for no policy, and possibly 300–700k ₽ for consent violations.
- Signs and 168-ФЗ: fines are low (5–10k ₽) for ordinary signs but high (up to 500k ₽) where the sign counts as advertising. Enforcement is lax, so it is a weaker pain except for chains and developers.
- НДС on УСН and labelling are already served by large vendors (Контур, СБИС/Saby, МойСклад, 1С franchisees, accountants). A freelancer's opening is narrow-niche implementation, not a new market.

### Gaps
- Primary texts (КоАП 13.11 as amended, 41-ФЗ scope, 508-ФЗ, 156-ФЗ) were not opened. Fine figures come from secondary sources.
- No ФНС/RKN figures on how many SMB moved to НДС in 2026, or how many operators are in the RKN register (searched; nothing found).
- Not covered in depth (no sources gathered):
  - Ad labelling (ERID) and the 3% advertising levy: from prior knowledge, 479-ФЗ with a 3% levy from 1 Apr 2025, but no URL was verified in this session.
  - ЕГАИС changes, the anti-fraud call law details, Avito paid responses and pricing (search found only generic blogs), the 2GIS/Yandex reviews economy, and foreign SaaS replacement for SMB.
- No first enforcement statistics for 168-ФЗ after 1 March 2026.

## Q2. What could a freelancer sell (product + price), and how much competition exists already?

### Takeaway
The most open gap is a cheap, packaged "done-for-you" service for micro-SMB, roughly 5–30k ₽, sitting between free DIY and agency projects priced from 100k ₽. Agencies quote 100k–250k ₽+ for MAX bots and cascades, and SaaS builders are cheap but DIY. The best-fit packages are:
- WhatsApp→MAX/VK migration with a booking bot
- a 152-ФЗ website package (policy, separate consent, RKN notification, swapping foreign forms and analytics)
- a 168-ФЗ sign and website language audit
- a 289-ФЗ marketplace-seller readiness check

### Cited Findings
- The agency price floor for MAX is high: cascade mailing from 100k ₽, a cross-platform booking bot 200–250k ₽ — [workspace.ru](https://workspace.ru/blog/kak-biznesu-ne-poteryat-klientov-pri-blokirovke-telegram-5-resheniy-s-cenami/)
- SaaS is cheap (ChatMarket from 39 ₽/day; Профит Бот about 2,900 ₽/month), which leaves setup and integration as the paid service — [sostav.ru](https://www.sostav.ru/blogs/285533/95495); [bitrix24](https://www.bitrix24.ru/apps/app/Botsarmy.profit_bot/)
- Competition among MAX developers:
  - A directory of "17 studios/gateways" for moving bots from Telegram to MAX already exists — [sostav.ru](https://www.sostav.ru/blogs/282100/83880)
  - FL.ru has a "Specialists in Max" category, but prices are hidden behind PRO — [fl.ru](https://www.fl.ru/freelancers/max-messenger/)
  - Many no-code builder guides exist (SMMplanner top-list) — [smmplanner.com](https://smmplanner.com/blog/top-konstruktorov-chat-botov-dlia-miessiendzhiera-max/)
  - Conclusion: competition is growing on the developer side but is still thin in packaged migration for micro-SMB.
- Competition in personal data compliance: law firms already sell RKN notification as a service — [h-cons.ru](https://h-cons.ru/uslugi-yuridicheskim-licam/uvedomlenie-rkn-o-rabote-s-persdannymi); [dvitex.ru](https://www.dvitex.ru/docs/inye_dokumenty/podgotovka_uvedomleniya_ob_obrabotke_personalnykh_dannykh_v_roskomnadzor/)
- Vendor attention to 289-ФЗ: Bitrix24, MosDigitals and other agencies publish seller guides — [bitrix24](https://www.bitrix24.ru/journal/zakon-marketpleysy-289-fz-prodavtsy/); [mosdigitals.ru](https://mosdigitals.ru/blog/zakon-%E2%84%96-289-fz-pochemu-marketplejsy-bolshe-ne-prosto-vitrina-i-za-chto-otvechaet-seller-s-2026-goda)
- GEO for Yandex: specialists already market GEO/AEO services (sostav and vc.ru articles by GEO consultants) — [vc.ru](https://vc.ru/seo/2957299-perehod-ot-seo-k-geo); [sostav.ru](https://www.sostav.ru/blogs/284204/90966)

### Inferences
These are proposed offers. Prices are my estimates, positioned between DIY SaaS and agency quotes; they are not sourced. Opportunities are ranked roughly by pain × reach × lack of packaged offers.

1. **WhatsApp/Telegram → MAX/VK migration "под ключ" for service SMB** (beauty, clinics, fitness, auto service, tutors)
   - Package: business account and verification, community setup, booking/FAQ bot on a builder, CRM/YClients connection, a re-subscription campaign to the old base via SMS/VK with QR codes, staff training.
   - Price: 15–40k ₽ plus 3–5k ₽/month support.
   - Competition: medium. Agencies charge 100k ₽+, the developer pool is growing, and packaged micro-SMB offers are thin.
2. **152-ФЗ website compliance package**
   - Package: privacy policy, separate consent checkbox, cookie banner, RKN notification filing, replacing Google Forms and foreign analytics or widgets, a localization check.
   - Price: 5–15k ₽ per site, or 3–5k ₽ for an audit only. Upsell with 1–2k ₽/month monitoring.
   - Competition: high for templates (law firms and generators exist); medium for "done-for-you with technical fixes on the site".
3. **RKN notification plus internal personal-data documents for offline SMB** (clinics, schools, HR files): 7–20k ₽. Competition: medium (law firms).
4. **168-ФЗ audit of signs, menus, price tags and website** for chains, cafés and retail
   - Package: report, Russian text and layout for redesign, partnership with sign makers.
   - Price: 5–15k ₽ per location, a chain discount, plus commission on sign production.
   - Competition: low to medium (lawyers write articles; few packaged offers seen). Fines are low, so lead with the "advertising sign = up to 500k ₽" risk.
5. **289-ФЗ seller readiness on WB/Ozon**
   - Package: check account data against ЕГРЮЛ, archive the e-contract, track commission and notice changes, a template for challenging blocks.
   - Price: 5–10k ₽ one-off, or 2–3k ₽/month monitoring.
   - Competition: low (content exists, few services seen).
6. **НДС-on-УСН transition for micro-business above 20 mln ₽ income**
   - Package: choose 5%/7% versus 22%, reconfigure the cash register and accounting, set up invoices.
   - Price: 10–30k ₽. Competition: high (accountants, 1С, Контур). Partner with accountants rather than compete.
7. **«Честный знак» onboarding for new categories**
   - Categories from 1 Oct, 1 Nov and 1 Dec 2026 (hygiene, cosmetics shops, pharmacies, building materials, pet shops).
   - Package: registration, ЭДО (electronic document exchange), marking stock remnants, cash register setup.
   - Price: 10–25k ₽. Competition: medium to high (cash-register integrators and Saby/МойСклад partners). The niche is small shops in newly covered categories.
8. **Moving SMB ads out of Instagram** into VK Ads, Yandex Direct, Telegram Ads and MAX channels, with ERID compliance. Price: 10–30k ₽ setup. Competition: high (many targeting specialists). The edge is "compliance plus migration".
9. **GEO / "visibility in Алиса AI" for local business**
   - Package: Yandex Business/Maps profile, structured FAQ content, reviews, Webmaster's Alice visibility report.
   - Price: 10–25k ₽ audit plus monthly.
   - Competition: medium (GEO consultants are emerging and mostly target larger companies).
10. **Moving the customer base off WhatsApp Business** (export of contacts and chat history, consent re-collection that respects the new 152-ФЗ separate-consent rule). Bundle with item 1 or 2.

Cross-sell: a "compliance-and-migration" bundle (items 1, 2 and 4) for one service business of 30–60k ₽ is plausible.

### Gaps
- Kwork, FL and Avito listing counts and prices for "MAX бот", "перенос базы в MAX", "152-ФЗ сайт", "вывески 168-ФЗ" could not be retrieved; search did not index them. A manual check on kwork.ru is needed to confirm the competition estimates.
- No data on the conversion rate or willingness to pay of micro-SMB for compliance services.
- The final pricing of MAX business features (free versus paid licences) is unconfirmed beyond a 2025 leak.
