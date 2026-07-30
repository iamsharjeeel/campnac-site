'use client'

import { useLayoutEffect, useRef } from 'react'
import { shouldReduceMotion } from '@/lib/animations'

const STEPS = [
  {
    number: '01',
    icon: '📅',
    title: 'Choose Your Weeks',
    description: 'Attend as few as one week or all 13. You decide — no minimum required.',
  },
  {
    number: '02',
    icon: '⭐',
    title: 'Pick Your Camps',
    description: '75+ themed programs across arts, STEM, sports, cooking, and outdoor adventure.',
  },
  {
    number: '03',
    icon: '🔒',
    title: 'Lock In Your Spot',
    description: 'Multi-week discounts apply automatically. Flexible transfers before May 31st at no cost.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

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
          stagger: 0.15,
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
      style={{ background: 'white', padding: 'var(--section-py-mobile) 0' }}
      className="md:py-[var(--section-py-desktop)]"
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
            How It Works
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: 'var(--color-bark)', marginBottom: '16px' }}
          >
            Custom-Build Your Summer
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--color-muted)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            No minimum weeks. No locked-in schedule. Summer should fit your family — not the other way around.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                cardsRef.current[i] = el
              }}
              style={{
                position: 'relative',
                background: 'var(--color-chalk)',
                borderRadius: '16px',
                padding: '32px 28px',
                overflow: 'hidden',
              }}
            >
              <span
                className="font-display"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '16px',
                  fontSize: '80px',
                  fontWeight: 700,
                  color: 'var(--color-forest)',
                  opacity: 0.08,
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                {step.number}
              </span>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{step.icon}</div>
              <h3
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--color-bark)',
                  marginBottom: '8px',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
