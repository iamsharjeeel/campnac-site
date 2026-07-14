/**
 * SocialProof Component
 *
 * Chalk background. 3 testimonial cards, stats row, "Best Camp" seal.
 * Spec: docs/DESIGN_SYSTEM.md → "Social Proof (Home)"
 */

'use client'

import { useRef, useLayoutEffect } from 'react'
import { TESTIMONIALS } from '@/lib/campData'
import { shouldReduceMotion } from '@/lib/animations'

const STATS = [
  { value: '486+', label: 'Families Enrolled' },
  { value: '75+', label: 'Themed Camps' },
  { value: '3–15', label: 'Ages Welcome' },
  { value: '13', label: 'Flexible Weeks' },
]

function BestCampSeal() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" role="img" aria-label="Voted Best Summer Camp in Bucks County, PA">
      <defs>
        <path id="seal-circle-top" d="M 70,70 m -52,0 a 52,52 0 1,1 104,0" />
        <path id="seal-circle-bottom" d="M 70,70 m -52,0 a 52,52 0 1,0 104,0" />
      </defs>
      <circle cx="70" cy="70" r="66" fill="none" stroke="var(--color-leaf)" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="70" cy="70" r="58" fill="var(--color-forest)" />
      <text fill="#FAFAF7" fontSize="10.5" fontFamily="var(--font-jetbrains-mono)" letterSpacing="2">
        <textPath href="#seal-circle-top" startOffset="50%" textAnchor="middle">
          VOTED BEST SUMMER CAMP
        </textPath>
      </text>
      <text fill="var(--color-leaf)" fontSize="9" fontFamily="var(--font-jetbrains-mono)" letterSpacing="2">
        <textPath href="#seal-circle-bottom" startOffset="50%" textAnchor="middle">
          BUCKS COUNTY · PA
        </textPath>
      </text>
      <text x="70" y="66" textAnchor="middle" fill="var(--color-sun)" fontSize="22">★</text>
      <text x="70" y="86" textAnchor="middle" fill="#FAFAF7" fontSize="11" fontWeight="600" fontFamily="var(--font-inter)">
        Camp NAC
      </text>
    </svg>
  )
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || shouldReduceMotion()) return

    let cleanup: (() => void) | undefined

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current) return
      const cards = sectionRef.current.querySelectorAll('.testimonial-card')

      const tween = gsap.from(cards, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
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
    <section ref={sectionRef} className="section-py" style={{ background: 'var(--color-chalk)' }}>
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
            What Parents Say
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--color-bark)' }}
          >
            Real Families. Real Summers.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '64px' }}>
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="testimonial-card"
              style={{
                background: 'var(--color-white)',
                borderRadius: '12px',
                padding: '28px',
                boxShadow: '0 2px 8px rgba(27,58,45,0.08)',
                display: 'flex',
                flexDirection: 'column',
                margin: 0,
              }}
            >
              <blockquote
                className="font-display"
                style={{
                  fontStyle: 'italic',
                  fontSize: '17px',
                  fontWeight: 400,
                  color: 'var(--color-bark)',
                  lineHeight: 1.55,
                  marginBottom: '24px',
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  className="font-mono"
                  aria-hidden="true"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--color-leaf)',
                    color: 'white',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </span>
                <span>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: 'var(--color-bark)',
                    }}
                  >
                    {t.name}
                  </span>
                  <span style={{ display: 'block', fontSize: '13px', color: 'var(--color-muted)' }}>
                    {t.meta}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ maxWidth: '880px', margin: '0 auto 64px auto', textAlign: 'center' }}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div
                className="font-mono"
                style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '4px' }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Seal */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <BestCampSeal />
        </div>
      </div>
    </section>
  )
}
