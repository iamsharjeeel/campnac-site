# Handover Document — Camp NAC Enrollment Site

**Agency:** Xovera (xovera.io)  
**Lead Dev:** Sharjeel  
**Client:** Camp NAC  
**Last Updated:** [UPDATE ON EVERY SESSION]  
**Current Version:** 0.1.0  
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

*(No sessions yet — populate as work begins)*
