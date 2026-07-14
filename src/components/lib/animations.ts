/**
 * Shared GSAP animation configurations
 *
 * Import these into components for consistent motion across the site.
 * Always check prefers-reduced-motion before running animations.
 *
 * Usage:
 *   import { fadeUp, heroSequence, shouldReduceMotion } from '@/lib/animations'
 *   if (!shouldReduceMotion()) gsap.from(el, fadeUp)
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger — call this once in _app.tsx
export function registerGSAP() {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
  }
}

// Check if user prefers reduced motion
export function shouldReduceMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ─── Base Presets ─────────────────────────────────────────────

export const fadeUp = {
  opacity: 0,
  y: 24,
  duration: 0.6,
  ease: 'power2.out',
}

export const fadeIn = {
  opacity: 0,
  duration: 0.5,
  ease: 'power1.out',
}

export const fadeUpSlow = {
  opacity: 0,
  y: 32,
  duration: 0.8,
  ease: 'power2.out',
}

// ─── Hero Sequence ─────────────────────────────────────────────
// Call in Hero.tsx useLayoutEffect

export function animateHero(elements: {
  badge: Element | null
  headline: Element | null
  subheadline: Element | null
  ctas: Element | null
  socialProof: Element | null
}) {
  if (shouldReduceMotion()) return

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

  if (elements.badge) {
    tl.from(elements.badge, { opacity: 0, y: 12, duration: 0.4 }, 0.2)
  }
  if (elements.headline) {
    tl.from(elements.headline, { opacity: 0, y: 28, duration: 0.6 }, 0.5)
  }
  if (elements.subheadline) {
    tl.from(elements.subheadline, { opacity: 0, duration: 0.5 }, 0.9)
  }
  if (elements.ctas) {
    tl.from(elements.ctas, { opacity: 0, y: 16, duration: 0.5 }, 1.1)
  }
  if (elements.socialProof) {
    tl.from(elements.socialProof, { opacity: 0, duration: 0.4 }, 1.4)
  }

  return tl
}

// ─── ScrollTrigger Presets ─────────────────────────────────────

export const scrollTriggerDefaults = {
  start: 'top 80%',
  toggleActions: 'play none none none',
}

// Animate a list of elements with stagger on scroll
export function animateStaggerOnScroll(
  elements: Element[] | NodeListOf<Element>,
  trigger: Element | string,
  stagger = 0.15
) {
  if (shouldReduceMotion()) return

  return gsap.from(elements, {
    ...fadeUp,
    stagger,
    scrollTrigger: {
      trigger,
      ...scrollTriggerDefaults,
    },
  })
}

// ─── Navbar ────────────────────────────────────────────────────

export function animateNavbar(nav: Element | null) {
  if (!nav || shouldReduceMotion()) return

  gsap.from(nav, {
    opacity: 0,
    y: -16,
    duration: 0.5,
    delay: 0.3,
    ease: 'power2.out',
  })
}

// ─── Navbar Scroll Behavior ────────────────────────────────────
// Switches navbar from transparent to solid on scroll

export function initNavbarScroll(nav: Element | null) {
  if (!nav || typeof window === 'undefined') return

  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('nav-solid')
    } else {
      nav.classList.remove('nav-solid')
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })

  // Return cleanup
  return () => window.removeEventListener('scroll', onScroll)
}
