/**
 * PROGRAMS PAGE — /programs
 *
 * This is the content-depth page. Critical for A2P approval.
 * Must feel like a real business with real, detailed offerings.
 * Every one of the 8 programs must be fully described.
 *
 * ─── SECTION ORDER ──────────────────────────────────────────────────────────
 *
 * 1. UrgencyBanner (sticky top, same as home)
 * 2. Navbar (same as home)
 * 3. PageHero — programs-specific
 * 4. ProgramsIntro — brief intro + "build your summer" message
 * 5. ProgramsGrid — all 8 programs, full detail
 * 6. FlexibilityCallout — the "no minimum weeks" message
 * 7. InlineEnrollCTA — mid-page CTA strip
 * 8. Footer
 *
 * ─── SEO ────────────────────────────────────────────────────────────────────
 * Title: "Summer Camp Programs 2025 — Camp NAC | Horsham, PA"
 * Description: "Explore 75+ themed summer camp programs at Camp NAC for kids ages 3–15.
 *   Arts, STEM, cooking, sports, outdoor adventure, teen camps, and early learners.
 *   Horsham, Bucks County, PA."
 *
 * ─── IMPLEMENTATION NOTES ───────────────────────────────────────────────────
 *
 * Data source: CAMP_PROGRAMS from @/lib/campData — do not hardcode program content here.
 *
 * ─── PAGE HERO (Programs) ────────────────────────────────────────────────────
 *
 * - Shorter than home hero: 50vh, Forest bg
 * - No Three.js canvas — use a CSS gradient overlay instead:
 *   background: linear-gradient(135deg, #1B3A2D 0%, #2D5C42 50%, #1B3A2D 100%)
 * - Content centered:
 *   - Section label (font-mono, Leaf, 12px): "SUMMER 2025"
 *   - H1 (Fraunces 800, White, 52px desktop / 36px mobile):
 *     "75+ Ways to Build\nThe Perfect Summer"
 *   - Body (Inter 400, White/70%, 17px):
 *     "From robotics to cooking to outdoor adventure — there's a Camp NAC program for every kid.
 *      Mix and match weeks to custom-build your summer."
 * - GSAP fade-up on load (simple, no sequence needed)
 *
 * ─── PROGRAMS INTRO ──────────────────────────────────────────────────────────
 *
 * - White background, section-py
 * - Two columns (desktop): left = text, right = 4 quick-stat boxes
 * - Left:
 *   - H2 (Fraunces, 32px): "One Camp. Endless Possibilities."
 *   - Body (Inter, 16px, Muted): "At Camp NAC, we believe summer should fit your family's
 *     schedule — not the other way around. That's why every program runs on our 13-week
 *     flexible calendar. Attend one week or all thirteen. Switch camps between weeks.
 *     Change your mind before May 31st at no cost. Your summer, your way."
 *   - Body para 2: "Below you'll find all 8 of our core programs. Each one is designed for
 *     specific age groups and interests, staffed by trained counselors, and available for
 *     as many or as few weeks as you choose."
 * - Right (2x2 grid of stat boxes, Chalk bg, Leaf border-left 3px):
 *   Box 1: "75+" / "Themed Camp Programs"
 *   Box 2: "13" / "Weeks of Summer"
 *   Box 3: "Ages 3–15" / "All Ages Welcome"
 *   Box 4: "No Minimum" / "Attend Any Number of Weeks"
 *   Each box: number in Fraunces 700 36px Forest, label in Inter 13px Muted
 *
 * ─── PROGRAMS GRID ───────────────────────────────────────────────────────────
 *
 * - Sky (#E8F4F0) background
 * - Section label: "ALL PROGRAMS"
 * - H2: "Find Your Perfect Camp"
 * - Grid: 2 columns desktop, 1 column mobile
 * - Each program card (ProgramCard component):
 *
 *   Layout: horizontal card with icon zone left + content zone right
 *   - Icon zone: 100px wide, Forest bg, centered emoji (40px), rounded-l-xl
 *   - Content zone: flex-1, Chalk bg, p-6, rounded-r-xl
 *     - Top row: Category badge (uses program.badgeColor) + Ages badge (Leaf bg, White, 12px)
 *     - Program name: Inter 700, 20px, Bark
 *     - Full description: Inter 400, 14px, Muted (program.fullDescription)
 *     - "Activities include:" label (Inter 600, 13px, Bark) + 2-column list of activities
 *       (Inter 400, 13px, Muted, with Leaf bullet dot)
 *     - Bottom: "Enroll in This Camp →" link → /enroll (Leaf color, font-weight 600)
 *   - Hover: entire card lifts 4px, box-shadow deepens
 *   - GSAP ScrollTrigger: each card animates up as it enters viewport
 *
 *   Mobile: icon zone becomes top bar (full width, 80px height)
 *
 * ─── FLEXIBILITY CALLOUT ─────────────────────────────────────────────────────
 *
 * - White background, section-py
 * - Centered, max-width 640px
 * - Large icon: 🗓️ (48px)
 * - H2 (Fraunces 700, 32px): "Flexible By Design"
 * - Body (Inter 400, 17px, Muted): 3 short paragraphs:
 *   Para 1: "Camp NAC runs a 13-week summer schedule from late June through August.
 *     Families can enroll in as few as one week or the full summer — entirely up to you."
 *   Para 2: "Need to switch camps mid-summer? No problem. You can transfer between
 *     programs or change weeks before May 31st at no additional cost."
 *   Para 3: "Multi-week enrollments automatically qualify for our summer discounts.
 *     The more weeks you book, the more you save."
 * - Below: 3 feature chips in a row (Chalk bg, rounded-full, border border-sky-200, p-3)
 *   "✓ No minimum weeks" / "✓ Free transfers before May 31" / "✓ Multi-week discounts"
 *
 * ─── INLINE ENROLL CTA ───────────────────────────────────────────────────────
 *
 * - Full-width strip, Sun (#F5A623) background
 * - Centered, py-12
 * - H2 (Fraunces 700, 32px, Bark): "Ready to Build Your Child's Summer?"
 * - Body (Inter 400, 16px, Bark/70%): "Spots fill up fast. Secure your enrollment
 *   now — our team will follow up within 1 business day."
 * - CTA: "Start Enrollment →" → /enroll (Forest bg, White text)
 *   (Inverse of normal CTA — on Sun bg, use Forest button)
 */

import Head from 'next/head'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import UrgencyBanner from '@/components/home/UrgencyBanner'
import ProgramCard from '@/components/programs/ProgramCard'
import { CAMP_PROGRAMS } from '@/lib/campData'

export default function ProgramsPage() {
  return (
    <>
      <Head>
        <title>Summer Camp Programs 2025 — Camp NAC | Horsham, PA</title>
        <meta
          name="description"
          content="Explore 75+ themed summer camp programs at Camp NAC for kids ages 3–15. Arts, STEM, cooking, sports, outdoor adventure, teen camps, and early learners. Horsham, Bucks County, PA."
        />
        <meta property="og:title" content="Summer Camp Programs — Camp NAC" />
        <meta property="og:description" content="75+ themed programs for kids ages 3–15. Build your perfect summer at Camp NAC in Horsham, PA." />
        <link rel="canonical" href="https://enroll.campnac.com/programs" />
      </Head>

      <UrgencyBanner />
      <Navbar />

      <main>
        {/* Page Hero — see spec above */}
        <section
          style={{
            minHeight: '50vh',
            background: 'linear-gradient(135deg, #1B3A2D 0%, #2D5C42 50%, #1B3A2D 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Build PageHero component or inline — executor's choice */}
          {/* Content: section label + H1 + subheadline per spec above */}
        </section>

        {/* Programs Intro */}
        {/* Build ProgramsIntro component or inline */}

        {/* Programs Grid */}
        <section className="section-py" style={{ background: 'var(--color-sky)' }}>
          <div className="container-site">
            {/* Section label + H2 */}
            <div className="space-y-4 mb-12 text-center">
              <span className="badge" style={{ background: 'var(--color-leaf)', color: 'white' }}>
                ALL PROGRAMS
              </span>
              <h2 className="font-display text-3xl" style={{ color: 'var(--color-bark)' }}>
                Find Your Perfect Camp
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {CAMP_PROGRAMS.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>

        {/* Flexibility Callout */}
        {/* Build or inline — see spec above */}

        {/* Inline Enroll CTA */}
        {/* Build or inline — see spec above */}
      </main>

      <Footer />
    </>
  )
}
