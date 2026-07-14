/**
 * Hero Component
 *
 * Full viewport hero with Three.js particle canvas background.
 * The signature visual element of this site.
 *
 * ─── STRUCTURE ───────────────────────────────────────────────────────────────
 *
 * Outer wrapper:
 *   - height: calc(100vh - 44px) [minus urgency banner]
 *   - background: Forest (#1B3A2D)
 *   - position: relative
 *   - overflow: hidden
 *   - margin-top: 44px (urgency banner height)
 *   - Additional padding-top: 64px (navbar height)
 *
 * Layer 1 — Three.js Canvas (position: absolute, inset 0, z-index 0):
 *   See "Three.js Canvas Spec" below
 *
 * Layer 2 — Content (position: relative, z-index 1, centered):
 *   display: flex, flex-direction: column, align-items: center, text-align: center
 *   max-width: 720px, margin: 0 auto, padding: 0 24px
 *   justify-content: center, height: 100%
 *
 *   Content items (ref each for GSAP):
 *   a. Badge (ref: badgeRef)
 *      "ENROLLMENT CLOSES SOON"
 *      font-mono, 11px, Sun color, letter-spacing 0.15em, uppercase
 *      mb: 20px
 *
 *   b. Headline (ref: headlineRef)
 *      <h1> — Fraunces 800
 *      "75 Camps."  (line 1)
 *      "One Perfect Summer." (line 2)
 *      Font size: 64px desktop / 40px mobile
 *      Color: white, line-height 1.05
 *      mb: 20px
 *
 *   c. Subheadline (ref: subRef)
 *      Inter 400, 18px, rgba(255,255,255,0.75), line-height 1.6, max-width 580px
 *      "Custom-build your child's summer at Camp NAC — Bucks County's most-loved
 *       summer camp for kids ages 3–15. Attend as few or as many weeks as you like."
 *      mb: 32px
 *
 *   d. CTA Row (ref: ctaRef)
 *      display: flex, gap: 12px, flex-wrap: wrap, justify-content: center
 *      - Primary: <Link href="/enroll"> "Enroll Now →" (btn-primary class)
 *      - Secondary: <Link href="/programs"> "View Programs" (btn-secondary class)
 *      mb: 40px
 *
 *   e. Social Proof Strip (ref: socialRef)
 *      font-mono, 12px, rgba(255,255,255,0.5), letter-spacing 0.08em
 *      "★ Voted Best Summer Camp  ·  Bucks County, PA  ·  75+ Themed Programs  ·  Ages 3–15"
 *      No wrapping: white-space nowrap on desktop, allow wrapping on mobile
 *
 * ─── THREE.JS CANVAS SPEC ────────────────────────────────────────────────────
 *
 * Use canvas 2D API (not WebGL) for performance.
 * Particles: 150 on desktop, 80 on mobile (check window.innerWidth < 768)
 *
 * Particle properties:
 *   x: random(0, canvas.width)
 *   y: random(0, canvas.height)
 *   radius: random(1.5, 4)
 *   opacity: random(0.3, 0.8)
 *   speed: random(0.3, 0.8) [upward drift, px per frame]
 *   color: randomly chosen from:
 *     - rgba(245,166,35, opacity)   [Sun — 35% of particles]
 *     - rgba(76,175,118, opacity)   [Leaf — 30% of particles]
 *     - rgba(255,255,255, opacity)  [White — 35% of particles]
 *
 * Mouse parallax:
 *   Track mouse position relative to canvas center
 *   Offset each particle by: (mouseX * 0.015 * particle.depth, mouseY * 0.015 * particle.depth)
 *   particle.depth: random(0.5, 1.5) — gives near/far feel
 *   Use lerp (linear interpolation) for smooth mouse following:
 *     currentOffset.x += (targetOffset.x - currentOffset.x) * 0.05
 *
 * Animation loop:
 *   - requestAnimationFrame
 *   - Clear canvas each frame
 *   - Update particle y: y -= speed (drift upward)
 *   - If y < -radius, reset to y = canvas.height + radius, randomize x
 *   - Draw: ctx.beginPath(), ctx.arc(x+offsetX, y+offsetY, radius, 0, Math.PI*2)
 *   - ctx.fillStyle = color, ctx.fill()
 *
 * Pause when hidden:
 *   document.addEventListener('visibilitychange', () => {
 *     if (document.hidden) cancelAnimationFrame(rafId)
 *     else startLoop()
 *   })
 *
 * Resize: debounced, re-initialize canvas dimensions and particle positions
 *
 * prefers-reduced-motion: if true, skip canvas entirely (just show Forest bg)
 *
 * ─── GSAP ANIMATION ──────────────────────────────────────────────────────────
 *
 * Import animateHero from @/lib/animations
 * Call in useLayoutEffect with refs to all 5 elements
 * Cleanup: return () => tl.kill()
 *
 * ─── IMPLEMENTATION ──────────────────────────────────────────────────────────
 *
 * useRef for canvasRef and all 5 content element refs
 * useLayoutEffect for GSAP
 * useEffect for Three.js canvas (runs after DOM mount)
 * Check prefers-reduced-motion before initializing canvas
 */

'use client'

import { useRef, useEffect, useLayoutEffect } from 'react'
import Link from 'next/link'
import { animateHero, shouldReduceMotion } from '@/lib/animations'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const badgeRef = useRef<HTMLSpanElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  // Three.js canvas initialization
  useEffect(() => {
    if (!canvasRef.current || shouldReduceMotion()) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isMobile = window.innerWidth < 768
    const PARTICLE_COUNT = isMobile ? 80 : 150

    // Set canvas size
    const setSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    setSize()

    // Particle type
    interface Particle {
      x: number
      y: number
      radius: number
      opacity: number
      speed: number
      depth: number
      colorType: 'sun' | 'leaf' | 'white'
    }

    // Create particles
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const rand = Math.random()
      const colorType: Particle['colorType'] = rand < 0.35 ? 'sun' : rand < 0.65 ? 'leaf' : 'white'
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1.5,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.5 + 0.3,
        depth: Math.random() * 1 + 0.5,
        colorType,
      }
    })

    // Mouse tracking
    const mouse = { x: 0, y: 0 }
    const offset = { x: 0, y: 0 }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left - canvas.width / 2) * 0.015
      mouse.y = (e.clientY - rect.top - canvas.height / 2) * 0.015
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Color helper
    const getColor = (p: Particle): string => {
      if (p.colorType === 'sun') return `rgba(245,166,35,${p.opacity})`
      if (p.colorType === 'leaf') return `rgba(76,175,118,${p.opacity})`
      return `rgba(255,255,255,${p.opacity})`
    }

    // Animation loop
    let rafId: number
    let active = true

    const draw = () => {
      if (!active) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Lerp offset toward mouse
      offset.x += (mouse.x - offset.x) * 0.05
      offset.y += (mouse.y - offset.y) * 0.05

      particles.forEach((p) => {
        // Update position
        p.y -= p.speed
        if (p.y < -p.radius) {
          p.y = canvas.height + p.radius
          p.x = Math.random() * canvas.width
        }

        // Draw
        const px = p.x + offset.x * p.depth
        const py = p.y + offset.y * p.depth
        ctx.beginPath()
        ctx.arc(px, py, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = getColor(p)
        ctx.fill()
      })

      rafId = requestAnimationFrame(draw)
    }

    draw()

    // Pause on hidden tab
    const handleVisibility = () => {
      if (document.hidden) {
        active = false
        cancelAnimationFrame(rafId)
      } else {
        active = true
        draw()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)

    // Debounced resize
    let resizeTimer: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(setSize, 200)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      active = false
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // GSAP hero animation
  useLayoutEffect(() => {
    const tl = animateHero({
      badge: badgeRef.current,
      headline: headlineRef.current,
      subheadline: subRef.current,
      ctas: ctaRef.current,
      socialProof: socialRef.current,
    })
    return () => { tl?.kill() }
  }, [])

  return (
    <section
      style={{
        height: 'calc(100vh - 44px)',
        background: 'var(--color-forest)',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '44px',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px', // navbar
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="container-site"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {/* Badge */}
          <span
            ref={badgeRef}
            className="font-mono"
            style={{
              display: 'block',
              color: 'var(--color-sun)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              opacity: 0, // GSAP will animate in
            }}
          >
            Enrollment Closes Soon
          </span>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-display"
            style={{
              color: 'white',
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 64px)',
              lineHeight: 1.05,
              marginBottom: '20px',
              opacity: 0, // GSAP
            }}
          >
            75 Camps.<br />One Perfect Summer.
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '18px',
              lineHeight: 1.65,
              marginBottom: '32px',
              maxWidth: '580px',
              margin: '0 auto 32px auto',
              opacity: 0, // GSAP
            }}
          >
            Custom-build your child&apos;s summer at Camp NAC — Bucks County&apos;s most-loved
            summer camp for kids ages 3–15. Attend as few or as many weeks as you like.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px',
              opacity: 0, // GSAP
            }}
          >
            <Link href="/enroll" className="btn-primary">
              Enroll Now →
            </Link>
            <Link href="/programs" className="btn-secondary">
              View Programs
            </Link>
          </div>

          {/* Social Proof Strip */}
          <div
            ref={socialRef}
            className="font-mono"
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.08em',
              opacity: 0, // GSAP
            }}
          >
            ★ Voted Best Summer Camp&nbsp;&nbsp;·&nbsp;&nbsp;Bucks County, PA&nbsp;&nbsp;·&nbsp;&nbsp;75+ Themed Programs&nbsp;&nbsp;·&nbsp;&nbsp;Ages 3–15
          </div>
        </div>
      </div>
    </section>
  )
}
