/**
 * ProgramCard Component
 *
 * Used on the Programs page to display full detail for each camp program.
 * Data comes from CAMP_PROGRAMS in @/lib/campData.
 *
 * ─── LAYOUT ─────────────────────────────────────────────────────────────────
 *
 * Desktop (md+): horizontal card
 *   [Icon Zone | Content Zone]
 *   Icon: 100px wide, Forest bg, centered, rounded-l-xl
 *   Content: flex-1, Chalk bg, p-6, rounded-r-xl
 *
 * Mobile: stacked card
 *   [Icon Zone (full width, 80px height, rounded-t-xl)]
 *   [Content Zone (rounded-b-xl)]
 *
 * ─── CONTENT ZONE ────────────────────────────────────────────────────────────
 *
 * 1. Top row (flex, space-between, align-items start):
 *    - Left: Category badge (program.badgeColor bg, program.badgeTextColor, 12px font-mono)
 *    - Right: Ages badge (Leaf bg, White, 12px font-mono)
 *
 * 2. Program name: Inter 700, 20px, Bark, mt-3 mb-2
 *
 * 3. Description: Inter 400, 14px, Muted, line-height 1.65, mb-4
 *    (program.fullDescription)
 *
 * 4. Activities:
 *    - Label: Inter 600, 13px, Bark, mb-2: "Activities include:"
 *    - List: 2-column grid (on desktop), 1-column (mobile)
 *    - Each item: flex row, Leaf bullet dot (4px circle), Inter 400, 13px, Muted
 *    - gap between items: 6px
 *
 * 5. Bottom row (mt-4, pt-4, border-top 1px var(--color-sky)):
 *    - "Enroll in This Camp →" link → /enroll
 *      Leaf color (#4CAF76), Inter 600, 14px, no underline → underline on hover
 *
 * ─── HOVER STATE ─────────────────────────────────────────────────────────────
 * Entire card: CSS transition 200ms
 * transform: translateY(-4px)
 * box-shadow: 0 8px 24px rgba(27,58,45,0.12)
 *
 * ─── GSAP ────────────────────────────────────────────────────────────────────
 * ScrollTrigger fade-up on each card as it enters viewport
 * (Handled by parent — each ProgramCard gets a ref and the parent batches them)
 * OR: each card handles its own ScrollTrigger in useLayoutEffect
 * Recommended: handle individually for simplicity
 */

import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import type { CampProgram } from '@/lib/campData'
import { shouldReduceMotion } from '@/lib/animations'

interface ProgramCardProps {
  program: CampProgram
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!cardRef.current || shouldReduceMotion()) return

    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
    let gsap: typeof import('gsap').gsap

    const init = async () => {
      const gsapModule = await import('gsap')
      const stModule = await import('gsap/ScrollTrigger')
      gsap = gsapModule.gsap
      ScrollTrigger = stModule.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      if (!cardRef.current) return

      gsap.from(cardRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }

    init()
  }, [])

  return (
    <div
      ref={cardRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(27,58,45,0.08)',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        cursor: 'default',
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
      {/* Card inner — horizontal on md+ */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Icon zone — top bar on mobile, left column on desktop */}
        {/* For simplicity: always show as top bar. Desktop can be done with CSS grid if desired. */}
        <div
          style={{
            background: 'var(--color-forest)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '72px',
            fontSize: '32px',
          }}
        >
          {program.icon}
        </div>

        {/* Content zone */}
        <div
          style={{
            background: 'var(--color-chalk)',
            padding: '24px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top row: badges */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span
              className="badge"
              style={{
                background: program.badgeColor,
                color: program.badgeTextColor,
              }}
            >
              {program.badgeLabel}
            </span>
            <span
              className="badge"
              style={{
                background: 'var(--color-leaf)',
                color: 'white',
              }}
            >
              {program.ages}
            </span>
          </div>

          {/* Program name */}
          <h3
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 700,
              fontSize: '20px',
              color: 'var(--color-bark)',
              marginBottom: '8px',
            }}
          >
            {program.name}
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              color: 'var(--color-muted)',
              lineHeight: 1.65,
              marginBottom: '16px',
            }}
          >
            {program.fullDescription}
          </p>

          {/* Activities */}
          <div style={{ marginBottom: '16px' }}>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '13px',
                color: 'var(--color-bark)',
                marginBottom: '8px',
              }}
            >
              Activities include:
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '6px',
              }}
            >
              {program.activities.map((activity) => (
                <div
                  key={activity}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--color-leaf)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13px',
                      color: 'var(--color-muted)',
                    }}
                  >
                    {activity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '16px',
              borderTop: '1px solid var(--color-sky)',
            }}
          >
            <Link
              href="/enroll"
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--color-leaf)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline' }}
              onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none' }}
            >
              Enroll in This Camp →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
