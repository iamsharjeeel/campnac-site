# Chat Handover — Camp NAC Enrollment Site

This file is written for the next AI executor (Cursor Composer, Claude Code, etc.) picking up this project. Read this FIRST before touching any code.

---

## What This Project Is

A 3-page Next.js enrollment microsite for Camp NAC, a summer camp in Horsham, PA. Built by Xovera agency. Primary goal: convert parent inquiries before summer 2025 enrollment closes. Secondary goal: pass A2P manual review for GHL SMS compliance.

The site is NOT a full rebrand of campnac.com. It's a focused funnel.

---

## Architecture at a Glance

```
Next.js 15 App Router (or Pages Router — check package.json)
Tailwind CSS for styling
GSAP + ScrollTrigger for scroll animations
Three.js for hero canvas particle effect
Framer Motion for micro-interactions
Form → POST to GoHighLevel webhook
Deployed on Vercel
```

---

## Pages

| Route | File | Status |
|-------|------|--------|
| `/` | `src/pages/index.tsx` | ✅ |
| `/programs` | `src/pages/programs.tsx` | ✅ |
| `/enroll` | `src/pages/enroll.tsx` | ✅ |
| `/privacy` | `src/pages/privacy.tsx` | ✅ |
| `/terms` | `src/pages/terms.tsx` | ✅ |

> **Season note (2026-07-14):** The site now targets **Summer 2026** (confirmed with
> Sharjeel). Close date fallback is 2026-07-31 (override with
> `NEXT_PUBLIC_ENROLLMENT_CLOSE_DATE`). Week dates below were shifted to the 2026
> calendar using the same Mon–Fri pattern — confirm with client.
> Footer phone (215-944-8860) and social handles were pulled from campnac.com.

---

## Critical Rules for AI Executors

### 1. Read before touching
Before modifying anything animation-related, read `docs/DESIGN_SYSTEM.md` → Animation Rules section.

### 2. GSAP in Next.js
Always use `useLayoutEffect` (not `useEffect`) for GSAP. Clean up with `return () => ctx.revert()`. If using ScrollTrigger, call `ScrollTrigger.refresh()` after layout changes.

### 3. Three.js hero canvas
The hero particle effect is canvas 2D (not WebGL). Keep it simple. It MUST:
- Pause when `document.hidden === true`
- Respect `prefers-reduced-motion`
- Cap at 60fps with `requestAnimationFrame`
- Not cause layout shift (canvas is position:absolute, full bleed behind text)

### 4. Form submission
`src/lib/ghl.ts` contains the webhook submit function. It POSTs JSON to `process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL`. Never hardcode this URL. On success, fire GSAP success animation. On error, show inline error state (do not alert()).

### 5. Mobile first
All components must work on 375px width. Test mentally at 375px, 768px, 1280px before calling a component done.

### 6. After every task
Update `docs/HANDOVER.md` (status table + session log) and push to main.

---

## Design Tokens Quick Reference

```
Forest:  #1B3A2D  (dark bg, footer, hero)
Sun:     #F5A623  (CTAs, urgency, accent)
Sky:     #E8F4F0  (section alternating bg)
Chalk:   #FAFAF7  (cards)
Bark:    #3D2B1F  (body text)
Leaf:    #4CAF76  (badges, secondary)
Clay:    #D97B4A  (use sparingly — testimonials only)

Display font: Fraunces (Google Fonts, weight 700-900)
Body font:    Inter (Google Fonts, weight 400/500/600)
Mono font:    JetBrains Mono (counters, labels)
```

---

## Camp Programs Reference

Use this data to populate the Programs page. All 8 programs must appear with real descriptions.

### 1. Creative Arts Camp
- Ages: 6–15
- Badge color: Clay (#D97B4A)
- Description: Campers express themselves through drawing, painting, sculpture, photography, and digital art. Each week has a theme and culminates in a mini gallery show.
- Activities: Drawing & painting, sculpture, photography, digital art, tie-dye, friendship bracelet making

### 2. Cooking Camp
- Ages: 6–15
- Badge color: #E8A87C (light orange)
- Description: Kids learn to cook healthy, delicious meals in a safe, fun, and encouraging environment. Focuses on mindful eating and real kitchen skills.
- Activities: Knife skills (age appropriate), baking, world cuisines, smoothies & snacks, kitchen science, nutrition basics

### 3. STEM Camp
- Ages: 7–15
- Badge color: Leaf (#4CAF76)
- Description: Our STEM camp combines science, technology, engineering, art, and math into hands-on projects. Campers build, experiment, and discover.
- Activities: Robotics, coding, chemistry experiments, 3D design, bridge building, science fair projects

### 4. Sports Camp
- Ages: 5–15
- Badge color: Sun (#F5A623)
- Description: For kids who love to move. Mix and match sports each week — no commitment to a single sport required. Great for active kids who want variety.
- Activities: Baseball, soccer, basketball, flag football, tennis, swimming (where available), team games

### 5. NACventures Camp
- Ages: 8–15
- Badge color: Forest (#1B3A2D) + white text
- Description: The outdoor adventure program for explorers. Each Thursday, NACventures groups take a day trip to local parks, farms, or nature reserves for exploration.
- Activities: Hiking, nature identification, team challenges, orienteering, environmental education, outdoor cooking

### 6. Camp NACer (Variety Camp)
- Ages: 6–15
- Badge color: #7C6AF7 (purple)
- Description: Can't pick just one? Camp NACer is the variety option — campers rotate through all program areas each week, getting a taste of everything.
- Activities: All of the above, rotating weekly. Counselor-curated schedule each week.

### 7. Teen Camps
- Ages: 13–15
- Badge color: #7C6AF7 (purple, darker shade)
- Description: Teen-focused programming that respects their age. Teens choose their own activities each week from a curated menu, with leadership and mentorship built in.
- Activities: Leadership workshops, community service projects, creative projects, CIT (Counselor in Training) tracks

### 8. NAC Early Learners
- Ages: 3–5
- Badge color: #F2A7C3 (soft pink)
- Description: A nurturing full-day or half-day program for the youngest campers. Structured play, creativity, and social development in a safe, supervised environment.
- Activities: Sensory play, storytime, arts & crafts, outdoor play, music & movement, swimming readiness (age appropriate)

---

## Testimonials (Use these — approximate, adjust tone to feel natural)

1. "We've sent our daughter to Camp NAC for three summers in a row. She counts down the days from January. The flexibility to pick your weeks is a lifesaver for working parents." — Sarah M., mom of Lily, age 9

2. "My son is not an easy kid to engage, but the STEM camp had him building robots on day one. He came home talking nonstop. That's a win." — David K., dad of Noah, age 11

3. "The Early Learners program gave my shy 4-year-old her first real social environment outside of daycare. The counselors are incredible. She cried when it ended." — Priya T., mom of Anya, age 4

---

## Preferred Start Weeks (Summer 2026 — verify with client)

Use these in the form dropdown (defined in `src/lib/campData.ts` as `START_WEEKS`
with `{label, start}` objects; the enroll form hides weeks that already ended):
- Week 1: June 22 – June 26
- Week 2: June 29 – July 3 (note: July 4 holiday observed Friday July 3 — may be closed)
- Week 3: July 6 – July 10
- Week 4: July 13 – July 17
- Week 5: July 20 – July 24
- Week 6: July 27 – July 31
- Week 7: August 3 – August 7
- Week 8: August 10 – August 14
- Week 9: August 17 – August 21

---

## What's Left

Read `docs/HANDOVER.md` for the current status checklist. Start with whatever is ⬜ and work top-to-bottom. After each item, update the status and session log in HANDOVER.md, then push to main.
