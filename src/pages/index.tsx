/**
 * HOME PAGE — /
 *
 * ─── SECTION ORDER ──────────────────────────────────────────────────────────
 *
 * 1. UrgencyBanner (sticky top, Sun bg)
 * 2. Navbar (transparent → Forest on scroll)
 * 3. Hero (full viewport, Forest bg, Three.js canvas)
 * 4. HowItWorks (white bg, 3 steps)
 * 5. CampGrid (Sky bg, 6 program preview cards)
 * 6. SocialProof (chalk bg, 3 testimonials + stats)
 * 7. FinalCTA (Forest bg, single CTA block)
 * 8. Footer
 *
 * ─── IMPLEMENTATION NOTES ───────────────────────────────────────────────────
 *
 * This file is the PAGE. Each section is its own component in src/components/home/.
 * Import and compose here — do not put section logic directly in this file.
 *
 * Font setup: use next/font/google to load Fraunces, Inter, JetBrains Mono.
 * Register GSAP plugins in _app.tsx, not here.
 *
 * SEO:
 * - Title: "Summer Camp 2026 — Camp NAC | Horsham, PA"
 * - Description: "Custom-build your child's summer at Camp NAC — Bucks County's most-loved summer camp for kids ages 3–15. 75+ themed programs, flexible scheduling. Enroll now."
 * - OG image: Forest green card with Camp NAC logo + "Summer 2026 Enrollment Open"
 *
 * ─── SAMPLE IMPLEMENTATION ──────────────────────────────────────────────────
 */

import Head from 'next/head'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import UrgencyBanner from '@/components/home/UrgencyBanner'
import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import CampGrid from '@/components/home/CampGrid'
import SocialProof from '@/components/home/SocialProof'
import FinalCTA from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Summer Camp 2026 — Camp NAC | Horsham, PA</title>
        <meta
          name="description"
          content="Custom-build your child's summer at Camp NAC — Bucks County's most-loved summer camp for kids ages 3–15. 75+ themed programs, flexible scheduling. Enroll now."
        />
        <meta property="og:title" content="Summer Camp 2026 — Camp NAC" />
        <meta
          property="og:description"
          content="75+ themed camps. Build the summer your kid actually wants. Bucks County, PA."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://enroll.campnac.com" />
      </Head>

      <UrgencyBanner />
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <CampGrid />
        <SocialProof />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}

/**
 * ─── COMPONENT SPECS ────────────────────────────────────────────────────────
 *
 * See docs/DESIGN_SYSTEM.md for full component specs.
 * Brief summary below for quick reference:
 *
 * UrgencyBanner:
 *   - Sticky top bar, Sun (#F5A623) background, Bark text
 *   - "⚡ Limited spots for Summer 2026 — [X] days left"
 *   - Countdown uses process.env.NEXT_PUBLIC_ENROLLMENT_CLOSE_DATE
 *   - JetBrains Mono for the number
 *   - Height: 44px, z-index: 50
 *
 * Navbar:
 *   - Transparent on hero, Forest bg after 60px scroll
 *   - Links: Home · Programs · Enroll
 *   - CTA button: "Enroll Now" → /enroll (Sun bg, Bark text)
 *   - Mobile: hamburger → full-screen overlay (Framer Motion)
 *   - z-index: 40
 *
 * Hero:
 *   - 100vh (minus urgency banner 44px), Forest (#1B3A2D) bg
 *   - Three.js canvas: 150 particles, slow upward drift, mouse parallax ±15px
 *   - Canvas is position:absolute, full bleed, z-index 0
 *   - Content: z-index 1, centered, max-width 720px
 *   - Layout top-to-bottom:
 *     1. Badge: "ENROLLMENT CLOSES SOON" — font-mono, Sun color, 12px, tracking-widest
 *     2. H1 (Fraunces 800): "75 Camps.\nOne Perfect Summer."
 *        - Desktop: 64px, Mobile: 40px, White, line-height 1.05
 *     3. Subheadline (Inter 400, 18px, White/80%):
 *        "Custom-build your child's summer at Camp NAC — Bucks County's most-loved summer
 *         camp for kids ages 3–15. Attend as few or as many weeks as you like."
 *     4. CTA row (gap-4, flex-wrap):
 *        - Primary: "Enroll Now →" → /enroll
 *        - Secondary: "View Programs →" → /programs
 *     5. Social proof strip (font-mono, 12px, White/60%):
 *        "★ Voted Best Summer Camp · Bucks County, PA · 75+ Themed Programs · Ages 3–15"
 *   - GSAP: animateHero() from @/lib/animations
 *
 * HowItWorks:
 *   - White background
 *   - Section label (font-mono, 12px, Leaf, uppercase): "HOW IT WORKS"
 *   - H2 (Fraunces 700, 36px): "Custom-Build Your Summer"
 *   - Body (Inter 400, 18px, Muted): "No minimum weeks. No locked-in schedule.
 *     Summer should fit your family — not the other way around."
 *   - 3 cards in a row (desktop) / stacked (mobile):
 *     Each card:
 *       - Large step number (Fraunces 700, 80px, Forest #1B3A2D at 8% opacity, absolute behind icon)
 *       - Icon (SVG or emoji, 40px)
 *       - Title (Inter 600, 20px, Bark)
 *       - Description (Inter 400, 15px, Muted)
 *     Step 1: Calendar icon — "Choose Your Weeks"
 *       "Attend as few as one week or all 13. You decide — no minimum required."
 *     Step 2: Star icon — "Pick Your Camps"
 *       "75+ themed programs across arts, STEM, sports, cooking, and outdoor adventure."
 *     Step 3: Lock icon — "Lock In Your Spot"
 *       "Multi-week discounts apply automatically. Flexible transfers before May 31st at no cost."
 *   - GSAP ScrollTrigger: stagger cards on enter
 *
 * CampGrid:
 *   - Sky (#E8F4F0) background
 *   - Section label: "EXPLORE CAMPS"
 *   - H2: "Find the Perfect Camp for Your Kid"
 *   - Body: "With 13 weeks and 75+ themed camps to choose from, there's something for every
 *     age and interest. Mix and match to build the ultimate summer."
 *   - 6-card grid: 3 cols desktop, 2 cols tablet, 1 col mobile
 *   - Each card from HOME_PREVIEW_PROGRAMS in @/lib/campData
 *   - Below grid: "See All 8 Programs →" link → /programs (Leaf color, underline on hover)
 *   - GSAP ScrollTrigger: stagger cards
 *
 * SocialProof:
 *   - Chalk (#FAFAF7) background
 *   - Section label: "WHAT PARENTS SAY"
 *   - H2: "Real Families. Real Summers."
 *   - 3 testimonial cards from TESTIMONIALS in @/lib/campData
 *     Each card:
 *       - Quote (Fraunces italic, 17px, Bark)
 *       - Avatar circle (Leaf bg, White initials, font-mono 14px)
 *       - Name (Inter 600, 14px, Bark)
 *       - Meta (Inter 400, 13px, Muted)
 *   - Below: stat row (4 stats, font-mono, center-aligned, Forest color)
 *     "486+ Families Enrolled | 75+ Themed Camps | Ages 3–15 | Flexible Scheduling"
 *   - Below stats: "Voted Best Summer Camp in Bucks County, PA" — styled as SVG stamp/seal
 *
 * FinalCTA:
 *   - Forest (#1B3A2D) background
 *   - H2 (Fraunces, White, 40px): "Spots Are Filling Fast."
 *   - Body (Inter, White/70%, 18px): "Summer 2026 enrollment closes soon.
 *     Secure your child's spot before it's gone."
 *   - CTA: "Enroll My Child Now →" (Sun bg, Bark text, large: 18px, py-4 px-8)
 *   - Below CTA: "No commitment until you review the full enrollment packet." (White/50%, 13px)
 *   - Decorative: subtle leaf/particle CSS animation in background (no Three.js here — keep it simple)
 */
