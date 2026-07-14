# Camp NAC — Summer Camp Enrollment Site

**Client:** Camp NAC (campnac.com)  
**Project:** A2P-compliant enrollment microsite for summer 2025 urgency window  
**Agency:** Xovera (xovera.io)  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS · GSAP · Three.js · Framer Motion  
**Deployed on:** Vercel  
**GHL Integration:** GoHighLevel subaccount webhook for lead capture  

---

## Purpose

This site exists to convert parents of kids ages 3–15 into summer camp enrollment inquiries within a 2–3 week urgency window. It is NOT a full campnac.com replacement — it is a focused enrollment funnel with enough content depth to pass A2P manual review (originality, uniqueness, real business identity).

Once enrollment season drops off (post-July), this transitions to a holding/waitlist page until January when a full GHL system buildout begins.

---

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero + urgency + social proof + CTA |
| Camp Programs | `/programs` | All camp types with detail — satisfies A2P content depth |
| Enroll | `/enroll` | Lead capture form → GHL webhook |

---

## Quick Start

```bash
# Install
pnpm install

# Dev
pnpm dev

# Build
pnpm build

# Deploy (auto via Vercel on push to main)
git push origin main
```

---

## Environment Variables

```env
NEXT_PUBLIC_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID
NEXT_PUBLIC_SITE_URL=https://enroll.campnac.com
```

Set these in Vercel dashboard → Settings → Environment Variables.

---

## Repo Structure

```
camp-nac-site/
├── docs/
│   ├── VISION.md               # Project goals, audience, tone
│   ├── DESIGN_SYSTEM.md        # Colors, type, spacing, components
│   ├── HANDOVER.md             # Agency handover notes
│   ├── CHAT_HANDOVER.md        # AI session context for next dev
│   └── GHL_PIPELINE.md         # GoHighLevel pipeline + automation spec
├── src/
│   ├── pages/
│   │   ├── index.tsx           # Home
│   │   ├── programs.tsx        # Programs
│   │   └── enroll.tsx          # Enroll form
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── UrgencyBanner.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── CampGrid.tsx
│   │   │   └── SocialProof.tsx
│   │   ├── programs/
│   │   │   └── ProgramCard.tsx
│   │   ├── enroll/
│   │   │   └── EnrollForm.tsx
│   │   └── shared/
│   │       ├── CTAButton.tsx
│   │       └── SectionHeading.tsx
│   ├── styles/
│   │   └── globals.css
│   └── lib/
│       ├── ghl.ts              # GHL webhook submit function
│       └── animations.ts       # Shared GSAP/Framer configs
├── public/
│   ├── images/
│   └── fonts/
├── CLAUDE.md                   # AI executor instructions
├── README.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Maintenance Rules (for AI executors)

1. After every task: update `HANDOVER.md` and `CHAT_HANDOVER.md`
2. After every deploy: update version + deploy date in `HANDOVER.md`
3. Never touch GSAP/Three.js scroll logic without reading `DESIGN_SYSTEM.md` animation section first
4. Always push to `main` and confirm Vercel build passes before closing session
5. GHL webhook URL lives in env only — never hardcode

---

## Current Status

- [ ] Repo initialized
- [ ] Design system finalized
- [ ] Home page built
- [ ] Programs page built
- [ ] Enroll page + GHL form built
- [ ] A2P submission ready
- [ ] Live on Vercel
