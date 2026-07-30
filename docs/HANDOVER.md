# Handover Document — Camp NAC Enrollment Site

**Agency:** Xovera (xovera.io)  
**Lead Dev:** Sharjeel  
**Client:** Camp NAC  
**Last Updated:** 2026-07-30  
**Current Version:** 0.1.2  
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
| Enroll page + form | ⬜ | — |
| Privacy & Terms pages | ⬜ | Needed for A2P |
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
| GitHub | iamsharjeeel/camp-nac-site (TBD) | Push to main = auto deploy |
| Domain | enroll.campnac.com | Client to add Vercel DNS records |

**Environment Variables needed:**
```
NEXT_PUBLIC_GHL_WEBHOOK_URL=  ← get from GHL subaccount webhook settings
NEXT_PUBLIC_SITE_URL=https://enroll.campnac.com
NEXT_PUBLIC_ENROLLMENT_CLOSE_DATE=2026-08-10  ← for countdown timer
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

### 2026-07-30 — Fix Vercel build (missing home sections)
- Built: HowItWorks, CampGrid, SocialProof, FinalCTA; postcss.config.js
- Changed: Unblocked `pnpm build` / Vercel deploy (missing module imports on home)
- Version: 0.1.2
- Deployed: pending Vercel on PR
- Next task: confirm Vercel deploy green

### 2026-07-30 — Banner days, official logo, footer DBA
- Built: Official Camp NAC knock-out logo in `public/campnac-logo.png`
- Changed: UrgencyBanner close date +10 days → 2026-08-10; Navbar + Footer text logos → official PNG; footer legal line "Newtown Racquetball inc DBA Camp NAC"
- Version: 0.1.1
- Deployed: pending PR merge
- Next task: confirm Vercel `NEXT_PUBLIC_ENROLLMENT_CLOSE_DATE=2026-08-10` if set in dashboard

### Gaps updated
- [x] High-res logo file (PNG knock-out from campnac.com)
- [x] Legal DBA name in footer
