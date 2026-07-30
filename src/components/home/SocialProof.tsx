'use client'

import { useLayoutEffect, useRef } from 'react'
import { TESTIMONIALS } from '@/lib/campData'
import { shouldReduceMotion } from '@/lib/animations'

const STATS = [
  '486+ Families Enrolled',
  '75+ Themed Camps',
  'Ages 3–15',
  'Flexible Scheduling',
]

export default function SocialProof() {
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
          stagger: 0.12,
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
      style={{ background: 'var(--color-chalk)', padding: 'var(--section-py-mobile) 0' }}
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
            What Parents Say
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: 'var(--color-bark)', marginBottom: 0 }}
          >
            Real Families. Real Summers.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              ref={(el) => {
                cardsRef.current[i] = el
              }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '1px solid rgba(27,58,45,0.06)',
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: '17px',
                  fontStyle: 'italic',
                  color: 'var(--color-bark)',
                  lineHeight: 1.55,
                  marginBottom: '24px',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  className="font-mono"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--color-leaf)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 600, color: 'var(--color-bark)' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px 32px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          {STATS.map((stat) => (
            <span
              key={stat}
              className="font-mono"
              style={{ fontSize: '13px', color: 'var(--color-forest)', fontWeight: 600, letterSpacing: '0.04em' }}
            >
              {stat}
            </span>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              border: '2px solid var(--color-forest)',
              borderRadius: '50%',
              width: '160px',
              height: '160px',
              padding: '16px',
              color: 'var(--color-forest)',
            }}
          >
            <div
              style={{
                border: '1px solid var(--color-forest)',
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                textAlign: 'center',
              }}
            >
              <span
                className="font-display"
                style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.3 }}
              >
                Voted Best Summer Camp in Bucks County, PA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
