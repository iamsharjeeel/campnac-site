# Handover Document — Camp NAC Enrollment Site

**Agency:** Xovera (xovera.io)  
**Lead Dev:** Sharjeel  
**Client:** Camp NAC  
**Last Updated:** 2026-07-15  
**Current Version:** 0.2.0  
**Last Deploy:** Not yet deployed  
**Live URL:** TBD (target: enroll.campnac.com)

---

## Project Status

| Item | Status | Notes |
|------|--------|-------|
| Repo initialized | ⬜ | — |
| Design system docs | ✅ | DESIGN_SYSTEM.md complete |
| Vision docs | ✅ | VISION.md complete |
| GHL pipeline spec | ✅ | GHL_PIPELINE.md complete |
| Home page built | ⬜ | — |
| Programs page built | ⬜ | — |
| Enroll page + form | ⬜ | Form shell + SMS consents + legal footer links; fields still stub |
| Privacy & Terms pages | ✅ | Full NAC legal content; operator DBA CampNac |
| SMS Terms page | ✅ | `/sms-terms` added |
| GHL webhook connected | ⬜ | Need webhook URL from client |
| Vercel deployment | ⬜ | — |
| A2P submission | ⬜ | — |
| Client review | ⬜ | — |

---

## Credentials & Access

| Service | Account | Notes |
|---------|---------|-------|
| GHL Subaccount | Camp NAC | Set up by Xovera |
| Vercel | Xovera account | Deploy from main branch |
| GitHub | iamsharjeeel/campnac-site | Push to main = auto deploy |
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
2. **3 pages only:** Home, Programs, Enroll (+ Privacy, Terms, SMS Terms as utility pages)
3. **No CMS:** Content is hardcoded for speed. January buildout can add Notion/Contentful if needed.
4. **Hero animation:** Three.js canvas (2D context, not WebGL) for performance safety on mobile
5. **Form submission:** Direct POST to GHL webhook — no backend needed
6. **Font loading:** Google Fonts via Next.js font optimization (`next/font/google`)
7. **Urgency close date:** July 31, 2025 (confirm with client)
8. **Legal operator:** Newtown Racquetball INC DBA CampNac (content adapted from web.newtownathletic.com)
9. **SMS consents:** Two separate non-required checkboxes (Marketing Updates + Transactional Updates); phone field not required

---

## Known Gaps / To Confirm with Client

- [ ] Confirm enrollment close date (currently assuming July 31, 2025)
- [ ] Get GHL webhook URL after subaccount setup
- [ ] Get actual phone number for footer
- [ ] Confirm social media handles (Facebook, Instagram)
- [ ] Get high-res logo file (SVG preferred)
- [ ] Get 2–3 real parent testimonials (or permission to use approximate quotes)
- [ ] Confirm preferred start week dates for Summer 2025 (for form dropdown)
- [ ] Confirm subdomain: enroll.campnac.com or separate domain?

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

### 2026-07-15 — Fix hero, enroll form, footer phone
- Built: Restored full enroll form fields + trust panel; hero GSAP fromTo fix; footer phone (215) 968-0600
- Changed: `enroll.tsx`, `animations.ts`, `Footer.tsx`, `globals.css`, `campData.ts`, `ghl.ts`, `UrgencyBanner.tsx`
- Version: 0.2.1
- Deployed: pending Vercel
- Next task: Client review of live preview

### 2026-07-15 — Legal pages + form SMS consents
- Built: Full Privacy, Terms, SMS Terms pages from NAC source (operator: Newtown Racquetball INC DBA CampNac); form marketing/transactional SMS consents; form + site footer legal links
- Changed: `privacy.tsx`, `terms.tsx`, `sms-terms.tsx` (new), `enroll.tsx`, `ghl.ts`, `Footer.tsx`, docs
- Version: 0.2.0
- Deployed: no
- Next task: Finish enroll form fields (phone already optional); home/programs pages
