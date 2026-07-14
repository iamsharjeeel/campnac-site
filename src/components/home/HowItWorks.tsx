/**
 * HowItWorks Component
 *
 * White background. 3 steps explaining the flexible enrollment model.
 * Spec: docs/DESIGN_SYSTEM.md → "How It Works (Home)"
 */

'use client'

import { useRef, useLayoutEffect } from 'react'
import { shouldReduceMotion } from '@/lib/animations'

const STEPS = [
  {
    number: '1',
    icon: '📅',
    title: 'Choose Your Weeks',
    description: 'Attend as few as one week or all 13. You decide — no minimum required.',
  },
  {
    number: '2',
    icon: '⭐',
    title: 'Pick Your Camps',
    description: '75+ themed programs across arts, STEM, sports, cooking, and outdoor adventure.',
  },
  {
    number: '3',
    icon: '🔒',
    title: 'Lock In Your Spot',
    description: 'Multi-week discounts apply automatically. Flexible transfers before May 31st at no cost.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || shouldReduceMotion()) return

    let cleanup: (() => void) | undefined

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current) return
      const cards = sectionRef.current.querySelectorAll('.hiw-card')

      const tween = gsap.from(cards, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
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
    <section ref={sectionRef} className="section-py" style={{ background: 'var(--color-white)' }}>
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
            How It Works
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--color-bark)', marginBottom: '16px' }}
          >
            Custom-Build Your Summer
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-muted)', lineHeight: 1.65 }}>
            No minimum weeks. No locked-in schedule. Summer should fit your family — not the
            other way around.
          </p>
        </div>

        {/* 3 step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="hiw-card"
              style={{ position: 'relative', textAlign: 'center', padding: '32px 24px' }}
            >
              {/* Large background number */}
              <span
                aria-hidden="true"
                className="font-display"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '80px',
                  fontWeight: 700,
                  color: 'rgba(27, 58, 45, 0.08)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {step.number}
              </span>

              <div style={{ position: 'relative', paddingTop: '28px' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{step.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontSize: '20px',
                    color: 'var(--color-bark)',
                    marginBottom: '8px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
