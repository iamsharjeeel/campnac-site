/**
 * FinalCTA Component
 *
 * Forest background. Single conversion-focused CTA block closing the home page.
 * Decorative floating dots are pure CSS (no Three.js here — keep it light).
 * Spec: src/pages/index.tsx component specs → "FinalCTA"
 */

'use client'

import { useRef, useLayoutEffect } from 'react'
import Link from 'next/link'
import { shouldReduceMotion } from '@/lib/animations'

const DOTS = [
  { left: '8%', top: '20%', size: 6, color: 'rgba(245,166,35,0.5)', duration: '7s', delay: '0s' },
  { left: '18%', top: '70%', size: 4, color: 'rgba(76,175,118,0.5)', duration: '9s', delay: '1.5s' },
  { left: '85%', top: '30%', size: 5, color: 'rgba(255,255,255,0.4)', duration: '8s', delay: '0.8s' },
  { left: '92%', top: '65%', size: 4, color: 'rgba(245,166,35,0.4)', duration: '10s', delay: '2s' },
  { left: '75%', top: '15%', size: 3, color: 'rgba(76,175,118,0.45)', duration: '7.5s', delay: '3s' },
  { left: '30%', top: '85%', size: 5, color: 'rgba(255,255,255,0.3)', duration: '8.5s', delay: '1s' },
]

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || shouldReduceMotion()) return

    let cleanup: (() => void) | undefined

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current) return
      const content = sectionRef.current.querySelector('.final-cta-content')
      if (!content) return

      const tween = gsap.from(content, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power2.out',
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
    <section
      ref={sectionRef}
      className="section-py"
      style={{ background: 'var(--color-forest)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative floating dots — CSS only */}
      {DOTS.map((dot, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: dot.left,
            top: dot.top,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: '50%',
            background: dot.color,
            animation: `finalCtaFloat ${dot.duration} ease-in-out ${dot.delay} infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes finalCtaFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>

      <div className="container-site">
        <div className="final-cta-content text-center" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(30px, 4.5vw, 40px)', color: 'white', marginBottom: '16px' }}
          >
            Spots Are Filling Fast.
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, marginBottom: '32px' }}>
            Summer 2026 enrollment closes soon. Secure your child&apos;s spot before it&apos;s gone.
          </p>
          <Link
            href="/enroll"
            className="btn-primary"
            style={{ fontSize: '18px', padding: '16px 32px' }}
          >
            Enroll My Child Now →
          </Link>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '20px' }}>
            No commitment until you review the full enrollment packet.
          </p>
        </div>
      </div>
    </section>
  )
}
