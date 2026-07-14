# Design System — Camp NAC Enrollment Site

## Design Philosophy

This site should feel like a premium youth brand, not a typical summer camp website. Think editorial confidence with warmth — somewhere between Patagonia Kids and a well-funded STEM school's marketing site. Clean grid, bold typography, moments of joy through motion — not clip art, not rainbow chaos.

The signature element: a Three.js particle/canvas background on the hero that feels like summer light scattering through trees — organic, alive, not a gimmick.

---

## Color Palette

```
--color-forest:     #1B3A2D   /* deep green — primary dark bg */
--color-sun:        #F5A623   /* warm amber — primary CTA / accent */
--color-sky:        #E8F4F0   /* soft mint white — section backgrounds */
--color-chalk:      #FAFAF7   /* off-white — card backgrounds */
--color-bark:       #3D2B1F   /* deep brown — body text */
--color-leaf:       #4CAF76   /* medium green — secondary accent / badges */
--color-clay:       #D97B4A   /* terracotta — used sparingly for warmth */
--color-white:      #FFFFFF
--color-muted:      #6B7280   /* gray — captions, meta text */
```

**Usage rules:**
- Forest (#1B3A2D) = hero background, footer, dark sections
- Sun (#F5A623) = ALL primary CTAs, urgency banner, key highlights
- Sky (#E8F4F0) = alternating section backgrounds (not white)
- Chalk (#FAFAF7) = cards, program tiles
- Bark (#3D2B1F) = all body text on light backgrounds
- Leaf (#4CAF76) = badges ("OPEN"), checkmarks, secondary info
- Clay (#D97B4A) = used in 1–2 places only (testimonial pull-quote accent, or section divider)
- Never use clay and sun in the same visual zone

---

## Typography

**Display / Hero:** `Fraunces` (Google Fonts) — variable italic serif, used for hero headlines and section titles only. Weight 700–900. This is the character font — it should feel warm and bold without being childish.

**Body / UI:** `Inter` (Google Fonts) — clean, legible sans-serif. Weight 400/500/600. Used for all body copy, nav, form labels, card descriptions.

**Mono / Accent:** `JetBrains Mono` — used for small labels, countdown timer digits, stat callouts. Adds a grounded, modern feel.

**Type Scale:**
```
--text-xs:    0.75rem   / 12px   — captions, legal, meta
--text-sm:    0.875rem  / 14px   — labels, badges
--text-base:  1rem      / 16px   — body copy
--text-lg:    1.125rem  / 18px   — lead paragraphs
--text-xl:    1.25rem   / 20px   — card headings
--text-2xl:   1.5rem    / 24px   — sub-section titles
--text-3xl:   1.875rem  / 30px   — section headings
--text-4xl:   2.25rem   / 36px   — page headings
--text-5xl:   3rem      / 48px   — hero subheading
--text-6xl:   3.75rem   / 60px   — hero main headline (desktop)
--text-7xl:   4.5rem    / 72px   — hero main headline (large screens)
```

---

## Spacing System (8pt grid)

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
--space-24:  96px
--space-32:  128px
```

Section vertical padding: `--space-20` (80px) on desktop, `--space-12` (48px) on mobile.

---

## Layout

- Max content width: `1280px` centered
- Gutter: `24px` mobile, `48px` tablet, `80px` desktop
- Grid: 12-column CSS grid for program cards and feature rows
- Mobile-first responsive breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

---

## Components

### Navbar
- Sticky, transparent on hero → solid Forest bg on scroll
- Logo left, nav links center (hidden on mobile → hamburger), CTA button right
- CTA: "Enroll Now" in Sun (#F5A623) with Bark text
- GSAP: fade + slide down on page load (delay 0.3s after hero animation)
- Mobile: full-screen overlay menu, Forest background

### Hero (Home Page)
- Full viewport height (`100vh`)
- Background: Forest (#1B3A2D) with Three.js particle canvas overlay
  - Particles: 120–180 small circular dots (2–4px radius)
  - Colors: mix of Sun (#F5A623, 40%), Leaf (#4CAF76, 30%), White (30%)
  - Behavior: slow upward drift, mouse parallax (subtle, ±15px max), no physics engine needed
  - Performance: requestAnimationFrame, canvas 2D (NOT WebGL unless executor is confident) — must not tank mobile
- Content centered, max-width 720px
- Layout (top to bottom):
  1. Small badge: `ENROLLMENT CLOSES SOON` — JetBrains Mono, uppercase, Sun color, 12px, letter-spacing 0.15em
  2. Headline (Fraunces 700): "75 Camps. One Perfect Summer." — 60px desktop / 36px mobile, White
  3. Subheadline (Inter 400): "Custom-build your child's summer at Camp NAC — Bucks County's most-loved summer camp for kids ages 3–15. Attend as few or as many weeks as you like." — 18px, White 80% opacity
  4. Two CTAs side by side: Primary "Enroll Now →" (Sun bg, Bark text), Secondary "View Programs" (transparent, White border/text)
  5. Social proof strip below CTAs: "Voted Best Summer Camp · Bucks County · 75+ Themed Programs · Ages 3–15"
- GSAP animation sequence on load:
  - Badge fades in (0.4s, delay 0.2s)
  - Headline slides up + fades in (0.6s, delay 0.5s)
  - Subheadline fades in (0.5s, delay 0.9s)
  - CTAs slide up + fade in (0.5s, delay 1.1s)
  - Social proof fades in (0.4s, delay 1.4s)

### Urgency Banner
- Full-width strip, Sun (#F5A623) background
- Content: "⚡ Limited spots remaining for Summer 2025 — [Countdown Timer] days left to enroll"
- Countdown timer: JetBrains Mono, counts down to enrollment close date (set as env var or hardcoded to July 31, 2025)
- Bark text color
- Positioned: directly below hero OR as sticky top bar (choose sticky top — more visible)

### How It Works (Home)
- Section heading: "Custom-Build Your Summer"
- 3-column layout on desktop, stacked on mobile
- Each step has: large number (Fraunces, 80px, Forest color, 10% opacity as background), icon, title, description
- Steps:
  1. "Choose Your Weeks" — Attend 1 week or all 13. No minimum required.
  2. "Pick Your Camps" — 75+ themed programs across arts, STEM, sports, cooking, and more.
  3. "Lock In Your Spot" — Multi-week discounts apply automatically. Change or transfer weeks before May 31st at no cost.
- GSAP ScrollTrigger: each card slides up as it enters viewport (staggered 0.15s)

### Camp Grid (Home — preview)
- Section heading: "Find the Perfect Camp for Your Kid"
- Show 6 camp cards (teaser), "See All Programs →" link below
- Card design:
  - Chalk (#FAFAF7) background
  - Top: colored category badge (each camp type gets a badge color — see below)
  - Camp name (Inter 600, 18px, Bark)
  - 2-line description (Inter 400, 14px, Muted)
  - "Learn More →" text link in Leaf color
  - Subtle box shadow, 8px border radius
  - Hover: card lifts 4px, shadow deepens (CSS transition, 200ms)
- Camp type badge colors:
  - Arts: Clay (#D97B4A)
  - STEM: Leaf (#4CAF76)
  - Sports: Sun (#F5A623)
  - Cooking: #E8A87C (light orange)
  - Adventure: Forest (#1B3A2D) with white text
  - Teen: #7C6AF7 (purple)
  - Early Learners: #F2A7C3 (soft pink)

### Social Proof (Home)
- Section: Sky (#E8F4F0) background
- 3 parent testimonials in quote cards
- Each: photo avatar (placeholder circle), quote text (Fraunces italic, 18px), parent name + child age (Inter, 14px, Muted)
- Below testimonials: "Voted Best Summer Camp in Bucks County, PA" badge — styled as a seal/stamp (SVG circle with text)
- Stats row: "486+ Families Enrolled · 75+ Themed Camps · Ages 3–15 · Flexible Scheduling"

### Program Card (Programs Page)
- Full detail card — used in 8-camp grid
- Layout: left icon/illustration zone (Forest bg, 120px wide), right content zone
- Content: Category badge, Name (Inter 700, 20px), Ages served, Description (3–4 sentences), Activity list (bullet, 4–6 items), "Enroll in This Camp →" CTA
- On mobile: stacks vertically, icon zone on top

### Enroll Form
- Page background: Sky (#E8F4F0)
- Form card: Chalk background, 40px padding, 12px border radius, subtle shadow
- Fields:
  - Parent First Name (required)
  - Parent Last Name (required)
  - Email (required)
  - Phone (required)
  - Child's Name (required)
  - Child's Age (dropdown: 3, 4, 5 ... 15) (required)
  - Camp Interest (multi-select dropdown: Arts, STEM, Sports, Cooking, Adventure, Teen, Early Learners)
  - Preferred Start Week (dropdown: list of weeks by date)
  - How did you hear about us? (dropdown)
  - Message / Questions (textarea, optional)
- Below form: SMS/email opt-in checkbox (pre-checked, with clear label: "I agree to receive enrollment updates and information from Camp NAC via SMS and email. Message rates may apply.")
- Privacy Policy link + Terms of Service link below checkbox
- Submit button: full-width, Sun bg, Bark text, "Secure My Spot →" label
- On submit: GSAP success animation — form fades out, success card slides in with checkmark SVG animation + message "We've received your inquiry! A Camp NAC team member will contact you within 1 business day."
- POST to GHL webhook (URL from env var)

### Footer
- Forest (#1B3A2D) background, White text
- 3 columns:
  - Col 1: Logo, tagline ("Bucks County's Most-Loved Summer Camp"), social links
  - Col 2: Quick links (Home, Programs, Enroll, campnac.com)
  - Col 3: Contact info — 132 Pleasant Run, Horsham, PA 19044 | phone | email
- Bottom bar: "© 2025 Camp NAC. All rights reserved. · Privacy Policy · Terms of Service"
- Privacy Policy and Terms of Service: simple placeholder pages at `/privacy` and `/terms` (needed for A2P)

---

## Animation Rules

- Library: GSAP with ScrollTrigger plugin
- Three.js for hero canvas only
- Framer Motion for micro-interactions (form, card hovers, mobile menu)
- Always wrap GSAP in `useLayoutEffect` with a cleanup return
- Always check `prefers-reduced-motion` and disable non-essential animations if true
- ScrollTrigger defaults: `start: "top 80%"`, `toggleActions: "play none none none"`
- No animation should block content rendering — all decorative
- Hero canvas: cap at 60fps, pause when tab is not visible (`document.addEventListener('visibilitychange')`)

---

## Tailwind Config Notes

```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      forest: '#1B3A2D',
      sun: '#F5A623',
      sky: '#E8F4F0',
      chalk: '#FAFAF7',
      bark: '#3D2B1F',
      leaf: '#4CAF76',
      clay: '#D97B4A',
    },
    fontFamily: {
      display: ['Fraunces', 'Georgia', 'serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  }
}
```

---

## File Naming Conventions

- Components: PascalCase (`HeroSection.tsx`)
- Styles: kebab-case (`globals.css`)
- Utilities: camelCase (`ghlSubmit.ts`)
- Pages: lowercase (`index.tsx`, `programs.tsx`, `enroll.tsx`)

---

## DO NOT

- Do not use any stock camp photo placeholders with watermarks — use solid color placeholders with emoji or SVG icons
- Do not use rainbow/multi-color section backgrounds — follow the palette strictly
- Do not use Comic Sans, Papyrus, or any playful "kiddie" fonts
- Do not add unnecessary npm packages — stick to GSAP, Three.js, Framer Motion, Tailwind, and Radix UI for form elements
- Do not hardcode the GHL webhook URL — always use `process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL`
- Do not break GSAP scroll logic when editing unrelated sections — read animation notes before touching
