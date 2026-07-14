/**
 * CampGrid Component (Home — preview)
 *
 * Sky background. 6 preview cards from HOME_PREVIEW_PROGRAMS,
 * "See All 8 Programs →" link below.
 * Spec: docs/DESIGN_SYSTEM.md → "Camp Grid (Home — preview)"
 */

'use client'

import { useRef, useLayoutEffect } from 'react'
import Link from 'next/link'
import { HOME_PREVIEW_PROGRAMS } from '@/lib/campData'
import { shouldReduceMotion } from '@/lib/animations'

export default function CampGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || shouldReduceMotion()) return

    let cleanup: (() => void) | undefined

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current) return
      const cards = sectionRef.current.querySelectorAll('.camp-card')

      const tween = gsap.from(cards, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
      cleanup = () => {
        tween.scrollTrigger?.kill()
        tween.kill()
      }
    }

    init()
    return () => cleanup?.()
  }, [])

  return (
    <section ref={sectionRef} className="section-py" style={{ background: 'var(--color-sky)' }}>
      <div className="container-site">
        {/* Section heading */}
        <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 56px auto' }}>
          <span
            className="font-mono"
            style={{
              color: 'var(--color-leaf)',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Explore Camps
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--color-bark)', marginBottom: '16px' }}
          >
            Find the Perfect Camp for Your Kid
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-muted)', lineHeight: 1.65 }}>
            With 13 weeks and 75+ themed camps to choose from, there&apos;s something for every
            age and interest. Mix and match to build the ultimate summer.
          </p>
        </div>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_PREVIEW_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="camp-card"
              style={{
                background: 'var(--color-chalk)',
                borderRadius: '8px',
                padding: '24px',
                boxShadow: '0 2px 8px rgba(27,58,45,0.08)',
                transition: 'transform 200ms ease, box-shadow 200ms ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 8px 24px rgba(27,58,45,0.12)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 2px 8px rgba(27,58,45,0.08)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span
                  className="badge"
                  style={{ background: program.badgeColor, color: program.badgeTextColor }}
                >
                  {program.badgeLabel}
                </span>
                <span style={{ fontSize: '24px' }} aria-hidden="true">{program.icon}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 600,
                  fontSize: '18px',
                  color: 'var(--color-bark)',
                  marginBottom: '8px',
                }}
              >
                {program.name}
              </h3>

              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                {program.shortDescription}
              </p>

              <div
                className="font-mono"
                style={{ fontSize: '12px', color: 'var(--color-muted)', marginBottom: '12px', letterSpacing: '0.05em' }}
              >
                {program.ages}
              </div>

              <Link
                href="/programs"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: 'var(--color-leaf)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline' }}
                onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none' }}
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* See all link */}
        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link
            href="/programs"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '16px',
              color: 'var(--color-leaf)',
              borderBottom: '2px solid transparent',
              paddingBottom: '2px',
              transition: 'border-color 200ms ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-leaf)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'transparent' }}
          >
            See All 8 Programs →
          </Link>
        </div>
      </div>
    </section>
  )
}
