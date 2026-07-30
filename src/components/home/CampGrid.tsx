'use client'

import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { HOME_PREVIEW_PROGRAMS } from '@/lib/campData'
import { shouldReduceMotion } from '@/lib/animations'

export default function CampGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])

  useLayoutEffect(() => {
    if (!sectionRef.current || shouldReduceMotion()) return

    let ctx: { revert: () => void } | undefined

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const cards = cardsRef.current.filter(Boolean)
      if (!cards.length || !sectionRef.current) return

      ctx = gsap.context(() => {
        gsap.from(cards, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--color-sky)', padding: 'var(--section-py-mobile) 0' }}
    >
      <div className="container-site">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '12px',
              color: 'var(--color-leaf)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '12px',
            }}
          >
            Explore Camps
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: 'var(--color-bark)', marginBottom: '16px' }}
          >
            Find the Perfect Camp for Your Kid
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--color-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            With 13 weeks and 75+ themed camps to choose from, there&apos;s something for every age and interest. Mix and match to build the ultimate summer.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {HOME_PREVIEW_PROGRAMS.map((program, i) => (
            <Link
              key={program.id}
              href="/programs"
              ref={(el) => {
                cardsRef.current[i] = el
              }}
              style={{
                display: 'block',
                background: 'var(--color-chalk)',
                borderRadius: '16px',
                padding: '24px',
                textDecoration: 'none',
                transition: 'transform 200ms ease, box-shadow 200ms ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ fontSize: '32px' }}>{program.icon}</span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: program.badgeColor,
                    color: program.badgeTextColor,
                  }}
                >
                  {program.badgeLabel}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--color-bark)',
                  marginBottom: '6px',
                }}
              >
                {program.name}
              </h3>
              <div
                className="font-mono"
                style={{ fontSize: '12px', color: 'var(--color-leaf)', marginBottom: '10px' }}
              >
                {program.ages}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>
                {program.shortDescription}
              </p>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href="/programs"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--color-leaf)',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            }}
          >
            See All 8 Programs →
          </Link>
        </div>
      </div>
    </section>
  )
}
