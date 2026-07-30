/**
 * PROGRAMS PAGE — /programs
 *
 * The content-depth page. Critical for A2P approval — must read as a real
 * business with real, detailed offerings. All 8 programs fully described.
 *
 * Sections: PageHero → ProgramsIntro → ProgramsGrid → FlexibilityCallout → InlineEnrollCTA
 * Full section specs: docs/DESIGN_SYSTEM.md
 */

'use client'

import Head from 'next/head'
import Link from 'next/link'
import { useRef, useLayoutEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import UrgencyBanner from '@/components/home/UrgencyBanner'
import ProgramCard from '@/components/programs/ProgramCard'
import { CAMP_PROGRAMS } from '@/lib/campData'
import { shouldReduceMotion } from '@/lib/animations'

const QUICK_STATS = [
  { value: '75+', label: 'Themed Camp Programs' },
  { value: '13', label: 'Weeks of Summer' },
  { value: 'Ages 3–15', label: 'All Ages Welcome' },
  { value: 'No Minimum', label: 'Attend Any Number of Weeks' },
]

const FLEX_CHIPS = [
  '✓ No minimum weeks',
  '✓ Free transfers before May 31',
  '✓ Multi-week discounts',
]

export default function ProgramsPage() {
  const heroContentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!heroContentRef.current || shouldReduceMotion()) return

    let cleanup: (() => void) | undefined

    const init = async () => {
      const { gsap } = await import('gsap')
      if (!heroContentRef.current) return
      const tween = gsap.from(heroContentRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out',
      })
      cleanup = () => tween.kill()
    }

    init()
    return () => cleanup?.()
  }, [])

  return (
    <>
      <Head>
        <title>Summer Camp Programs 2026 — Camp NAC | Horsham, PA</title>
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
        {/* ─── Page Hero ─────────────────────────────────────────── */}
        <section
          style={{
            minHeight: '50vh',
            background: 'linear-gradient(135deg, #1B3A2D 0%, #2D5C42 50%, #1B3A2D 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '140px',
            paddingBottom: '64px',
          }}
        >
          <div
            ref={heroContentRef}
            className="container-site text-center"
            style={{ maxWidth: '760px' }}
          >
            <span
              className="font-mono"
              style={{
                color: 'var(--color-leaf)',
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '20px',
              }}
            >
              Summer 2026
            </span>
            <h1
              className="font-display"
              style={{
                color: 'white',
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 52px)',
                lineHeight: 1.08,
                marginBottom: '20px',
              }}
            >
              75+ Ways to Build<br />The Perfect Summer
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '17px',
                lineHeight: 1.65,
                maxWidth: '580px',
                margin: '0 auto',
              }}
            >
              From robotics to cooking to outdoor adventure — there&apos;s a Camp NAC program for
              every kid. Mix and match weeks to custom-build your summer.
            </p>
          </div>
        </section>

        {/* ─── Programs Intro ────────────────────────────────────── */}
        <section className="section-py" style={{ background: 'var(--color-white)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left — text */}
              <div>
                <h2
                  className="font-display"
                  style={{ fontSize: 'clamp(26px, 3.5vw, 32px)', color: 'var(--color-bark)', marginBottom: '20px' }}
                >
                  One Camp. Endless Possibilities.
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                  At Camp NAC, we believe summer should fit your family&apos;s schedule — not the
                  other way around. That&apos;s why every program runs on our 13-week flexible
                  calendar. Attend one week or all thirteen. Switch camps between weeks. Change
                  your mind before May 31st at no cost. Your summer, your way.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                  Below you&apos;ll find all 8 of our core programs. Each one is designed for
                  specific age groups and interests, staffed by trained counselors, and available
                  for as many or as few weeks as you choose.
                </p>
              </div>

              {/* Right — quick stats */}
              <div className="grid grid-cols-2 gap-4">
                {QUICK_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: 'var(--color-chalk)',
                      borderLeft: '3px solid var(--color-leaf)',
                      borderRadius: '0 8px 8px 0',
                      padding: '20px',
                    }}
                  >
                    <div
                      className="font-display"
                      style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '4px' }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Programs Grid ─────────────────────────────────────── */}
        <section className="section-py" style={{ background: 'var(--color-sky)' }}>
          <div className="container-site">
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="badge" style={{ background: 'var(--color-leaf)', color: 'white', marginBottom: '16px' }}>
                All Programs
              </span>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--color-bark)', marginTop: '16px' }}
              >
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

        {/* ─── Flexibility Callout ───────────────────────────────── */}
        <section className="section-py" style={{ background: 'var(--color-white)' }}>
          <div className="container-site text-center" style={{ maxWidth: '640px' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }} aria-hidden="true">🗓️</div>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(26px, 3.5vw, 32px)', color: 'var(--color-bark)', marginBottom: '20px' }}
            >
              Flexible By Design
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
              Camp NAC runs a 13-week summer schedule from late June through August. Families can
              enroll in as few as one week or the full summer — entirely up to you.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
              Need to switch camps mid-summer? No problem. You can transfer between programs or
              change weeks before May 31st at no additional cost.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
              Multi-week enrollments automatically qualify for our summer discounts. The more
              weeks you book, the more you save.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {FLEX_CHIPS.map((chip) => (
                <span
                  key={chip}
                  style={{
                    background: 'var(--color-chalk)',
                    border: '1px solid var(--color-sky)',
                    borderRadius: '100px',
                    padding: '10px 20px',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--color-bark)',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Inline Enroll CTA ─────────────────────────────────── */}
        <section style={{ background: 'var(--color-sun)', padding: '48px 0' }}>
          <div className="container-site text-center" style={{ maxWidth: '640px' }}>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(26px, 3.5vw, 32px)', color: 'var(--color-bark)', marginBottom: '12px' }}
            >
              Ready to Build Your Child&apos;s Summer?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(61,43,31,0.7)', lineHeight: 1.65, marginBottom: '28px' }}>
              Spots fill up fast. Secure your enrollment now — our team will follow up within
              1 business day.
            </p>
            <Link
              href="/enroll"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--color-forest)',
                color: 'white',
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '16px',
                padding: '14px 28px',
                borderRadius: '8px',
                transition: 'transform 200ms ease, box-shadow 200ms ease',
                boxShadow: '0 4px 16px rgba(27,58,45,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(27,58,45,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(27,58,45,0.3)'
              }}
            >
              Start Enrollment →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
