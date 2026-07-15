# Handover Document — Camp NAC Enrollment Site

**Agency:** Xovera (xovera.io)  
**Lead Dev:** Sharjeel  
**Client:** Camp NAC  
**Last Updated:** 2026-07-14  
**Current Version:** 0.3.0  
**Last Deploy:** 2026-07-14 (Vercel)  
**Live URL:** TBD (target: enroll.campnac.com)

---

## Project Status

| Item | Status | Notes |
|------|--------|-------|
| Repo initialized | ✅ | Next.js 15 Pages Router, pnpm |
| Design system docs | ✅ | DESIGN_SYSTEM.md complete |
| Vision docs | ✅ | VISION.md complete |
| GHL pipeline spec | ✅ | GHL_PIPELINE.md complete |
| Home page built | ✅ | Hero (canvas particles), HowItWorks, CampGrid, SocialProof, FinalCTA |
| Programs page built | ✅ | All 8 programs, intro, flexibility callout, inline CTA |
| Enroll page + form | ✅ | Full form + validation, chips multi-select, success/error states |
| Privacy & Terms pages | ✅ | Real content, phone + address, SMS opt-out language |
| GHL webhook connected | ⬜ | Need webhook URL from client → set NEXT_PUBLIC_GHL_WEBHOOK_URL in Vercel |
| Vercel deployment | ✅ | Deployed 2026-07-14; add env vars + custom domain |
| A2P submission | ⬜ | Site content ready; submit after webhook + domain live |
| Client review | ⬜ | — |

---

## Credentials & Access

| Service | Account | Notes |
|---------|---------|-------|
| GHL Subaccount | Camp NAC | Set up by Xovera |
| Vercel | Xovera account | Deploy from main branch |
| GitHub | iamsharjeeel/camp-nac-site (TBD) | Push to main = auto deploy |
| Domain | enroll.campnac.com | Client to add Vercel DNS records |

**Environment Variables needed:**
```
NEXT_PUBLIC_GHL_WEBHOOK_URL=  ← get from GHL subaccount webhook settings
NEXT_PUBLIC_SITE_URL=https://enroll.campnac.com
NEXT_PUBLIC_ENROLLMENT_CLOSE_DATE=2025-07-31  ← for countdown timer
```

---

## Key Decisions Made

1. **Stack:** Next.js 15 + TypeScript + Tailwind + GSAP + Three.js + Framer Motion
2. **3 pages only:** Home, Programs, Enroll (+ Privacy, Terms as thin utility pages)
3. **No CMS:** Content is hardcoded for speed. January buildout can add Notion/Contentful if needed.
4. **Hero animation:** Three.js canvas (2D context, not WebGL) for performance safety on mobile
5. **Form submission:** Direct POST to GHL webhook — no backend needed
6. **Font loading:** Google Fonts via Next.js font optimization (`next/font/google`)
7. **Urgency close date:** July 31, 2025 (confirm with client)

---

## Known Gaps / To Confirm with Client

- [ ] Confirm enrollment close date (currently assuming July 31, **2026** — site retargeted to Summer 2026 on 2026-07-14)
- [ ] Confirm Summer 2026 week dates (currently Mon–Fri weeks starting June 22, 2026 — derived from the 2025 schedule pattern, NOT client-confirmed)
- [ ] Get GHL webhook URL after subaccount setup → set `NEXT_PUBLIC_GHL_WEBHOOK_URL` in Vercel env
- [x] Phone number: 215-944-8860 (pulled from campnac.com per VISION.md — verify with client)
- [x] Social handles: facebook.com/CampNAC, instagram.com/camp_nac (pulled from campnac.com)
- [ ] Get high-res logo file (SVG preferred) — placeholder text logo + SVG favicon in use
- [ ] Get 2–3 real parent testimonials (or permission to use approximate quotes)
- [ ] Confirm subdomain: enroll.campnac.com or separate domain?
- [ ] GHL side: pipeline/tags in GHL_PIPELINE.md still say `summer-2025` — form now sends `campaign: summer-2026-urgency`; align GHL automations when building the pipeline

---

## How to Update This Document

Every AI executor session MUST update this file with:
1. What was built/changed
2. New version number
3. Date
4. Any new gaps or decisions

Format:

```
## Session Log

### [DATE] — [TASK DESCRIPTION]
- Built: [what was built]
- Changed: [what was modified]
- Version: [new version]
- Deployed: [yes/no + URL if yes]
- Next task: [what's left]
```

---

## Session Log

### 2026-07-14 — Legal pages overhaul + SMS consent compliance (v0.3.0)
- Built: `/sms-terms` page — Camp NAC Messaging Program terms (carrier-mandated disclosures, opt-out/HELP boxes, frequency, data rates, TCPA/FCC/CTIA/10DLC compliance, PA governing law)
- Changed: `/privacy` and `/terms` fully replaced with the operator's master content per Sharjeel (Operating Entity: **Newtown Racquetball INC DBA Camp NAC**; Effective April 8, 2026; support info@newtownathletic.com / (215) 968-0600; 120 Pheasant Run, Newtown, PA 18940) including carrier-mandated SMS data disclosures and the SMS opt-in sharing carve-out
- Form: phone field now optional (no visual change other than dropped asterisk; 10-digit format still validated when provided); pre-checked single SMS opt-in replaced with **two optional, unchecked consents** (Marketing Updates + Transactional Updates, exact carrier-compliant language); legal line under the form and the global footer now link Privacy, Terms, **and SMS Terms**
- GHL payload: added `smsMarketingConsent` and `smsTransactionalConsent` booleans; `smsOptIn` kept as a derived flag (true if either consent given) for existing automations
- Version: 0.3.0 — Deployed: yes (Vercel)
- ⚠️ To confirm with client: legal pages use the operator's Newtown contact details while the site footer still shows Camp NAC's Horsham details (132 Pleasant Run / 215-944-8860) — align once client confirms which set is correct; also confirm DBA spelling ("Camp NAC" used, per site branding)

### 2026-07-14 — Full site build-out, Summer 2026 retarget, Vercel deploy
- Built: `HowItWorks`, `CampGrid`, `SocialProof`, `FinalCTA` home components (were missing — home page did not compile); full Programs page (hero, intro, flexibility callout, inline CTA); full Enroll page (react-hook-form with validation, camp-interest chips, start-week dropdown that hides past weeks, animated success card, inline error state); navbar hamburger→X animation; SVG favicon
- Fixed: `footer.tsx` → `Footer.tsx` case mismatch (broke Vercel/Linux builds); missing `postcss.config.mjs` (Tailwind classes were silently dead); hero GSAP bug (`from` on elements with inline `opacity:0` animated 0→0, hero was invisible; also now clears opacity for reduced-motion users); `.nav-solid` class was referenced but never defined in CSS (navbar was transparent on light pages); privacy/terms pages missing top padding + UrgencyBanner; deprecated `images.domains` config
- Changed: season retargeted **Summer 2025 → Summer 2026** (confirmed with Sharjeel) — all copy, close date fallback (2026-07-31), START_WEEKS now structured `{label, start}` with 2026 dates, GHL campaign tag `summer-2026-urgency`; footer/privacy/terms now use real phone 215-944-8860 and social URLs pulled from campnac.com
- Version: 0.2.0
- Deployed: yes — Vercel (project created from this session); env vars still needed: `NEXT_PUBLIC_GHL_WEBHOOK_URL`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ENROLLMENT_CLOSE_DATE`
- Verified: `pnpm build` green; Playwright pass on all pages at 1280px + 375px — no console errors; form validation, error path (no webhook), and week filtering all exercised in-browser
- Next task: client to provide GHL webhook URL + confirm 2026 dates → then A2P submission

### 2026-07-14 — Repo cleanup: remove placeholder test files
- Built: nothing (cleanup only)
- Changed: deleted `src/lib/test`, `src/pages/test`, `src/styles/test` — plain-text placeholders originally committed to create empty folders on GitHub; all three folders now contain real source files so the placeholders are no longer needed
- Version: 0.1.0 (no code change)
- Deployed: no
- Next task: first ⬜ item in the status table (Home page built), pending confirmation with Sharjeel
