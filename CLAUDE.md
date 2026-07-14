# CLAUDE.md — AI Executor Instructions

This file tells AI executors (Cursor Composer, Claude Code, etc.) exactly how to operate on this repo. Read this before every session.

---

## Your Role

You are the **executor**. You write code, run builds, push commits, and update docs. You do NOT make product decisions without checking with Sharjeel (the advisor/human in the loop).

If something is ambiguous (design, copy, scope), STOP and ask before building. One clarifying question is better than a 200-line component that needs to be redone.

---

## Workflow Rules

### Every session starts with:
1. Read `docs/CHAT_HANDOVER.md`
2. Read `docs/HANDOVER.md` → check current status table
3. Identify what to build next (⬜ items, top to bottom)
4. Confirm with Sharjeel before starting if anything is unclear

### Every task ends with:
1. Code works locally (`pnpm dev` with no errors)
2. `docs/HANDOVER.md` status table updated
3. Session log entry added to `docs/HANDOVER.md`
4. All files pushed to `main`
5. Vercel build confirmed green (check Vercel dashboard or wait for deploy hook)
6. `docs/CHAT_HANDOVER.md` updated with any new context for next session

### Never:
- Skip the docs update step
- Push broken code to main (test locally first)
- Hardcode env vars (use `process.env.NEXT_PUBLIC_*`)
- Touch GSAP scroll logic without reading `docs/DESIGN_SYSTEM.md` first
- Add npm packages without justification (lean dependency tree)

---

## Build Order

Build pages and components in this exact order:

1. **Project scaffolding** — `pnpm create next-app`, install deps, configure Tailwind + fonts
2. **Design tokens** — Set up Tailwind config, globals.css with CSS variables
3. **Shared components** — Navbar, Footer, CTAButton, SectionHeading
4. **Home page** — UrgencyBanner, Hero, HowItWorks, CampGrid (6 cards), SocialProof
5. **Programs page** — All 8 ProgramCards with full content
6. **Enroll page** — Form with all fields, GHL webhook submit, success state
7. **Privacy + Terms pages** — Thin pages, required for A2P
8. **Polish pass** — Animations, mobile QA, performance check
9. **Deploy + docs finalize**

---

## Package Installation

```bash
# Core
pnpm create next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"

# Animation
pnpm add gsap @gsap/react
pnpm add framer-motion

# Three.js
pnpm add three @types/three

# Fonts (via next/font — no extra package needed)

# Form
pnpm add react-hook-form

# Utilities
pnpm add clsx tailwind-merge
```

---

## Environment Setup

Create `.env.local` (never commit this file):
```
NEXT_PUBLIC_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/XXXX
NEXT_PUBLIC_SITE_URL=https://enroll.campnac.com
NEXT_PUBLIC_ENROLLMENT_CLOSE_DATE=2025-07-31
```

---

## Commit Message Format

```
feat: build Hero component with Three.js canvas
fix: correct form submit error handling
docs: update HANDOVER.md session log
style: adjust mobile spacing on ProgramCard
```

---

## Design Reference

All design decisions are documented in `docs/DESIGN_SYSTEM.md`. When in doubt about a color, font size, spacing, or animation — check that file first.

Color shorthand:
- Dark bg / hero → Forest `#1B3A2D`
- CTA / accent → Sun `#F5A623`
- Section alt bg → Sky `#E8F4F0`
- Cards → Chalk `#FAFAF7`
- Body text → Bark `#3D2B1F`

---

## GHL Integration

The form in `src/pages/enroll.tsx` POSTs to `process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL`.

The submit function lives in `src/lib/ghl.ts`. It should:
- Accept the form data object
- POST as JSON with Content-Type: application/json
- Return `{ success: true }` or `{ success: false, error: string }`
- Never throw — catch errors and return them as `{ success: false }`

The form UI handles success/error states separately. Do not mix submission logic with UI.

---

## Content Source of Truth

All real content (camp descriptions, testimonials, week dates) is in `docs/CHAT_HANDOVER.md` under "Camp Programs Reference", "Testimonials", and "Preferred Start Weeks". Use that data — do not invent new content.

---

## A2P Compliance Checklist

Before declaring the site done, verify:
- [ ] Real business name (Camp NAC) in title tag and footer
- [ ] Real address (132 Pleasant Run, Horsham, PA 19044) in footer
- [ ] Real phone number in footer
- [ ] Privacy Policy page at `/privacy` (linked from form and footer)
- [ ] Terms of Service page at `/terms` (linked from form and footer)
- [ ] SMS opt-in checkbox on form with clear language
- [ ] 3 full pages of real content (not thin/placeholder)
- [ ] Meta description on every page
- [ ] No lorem ipsum anywhere on the site

---

## Questions / Escalation

If stuck, blocked, or unsure: stop, document the blocker in HANDOVER.md, and surface it to Sharjeel. Don't guess on product decisions.
