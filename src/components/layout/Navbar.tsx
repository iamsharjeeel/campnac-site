/**
 * Navbar Component
 *
 * ─── BEHAVIOR ───────────────────────────────────────────────────────────────
 *
 * Props:
 *   forceSolid?: boolean  — Skip transparent mode, always show Forest bg (used on /enroll)
 *
 * Default (home, programs):
 *   - Starts transparent (on top of hero)
 *   - Becomes solid Forest (#1B3A2D) after scrolling 60px
 *   - Transition: background and backdrop-blur, 300ms ease
 *
 * Structure:
 *   - Fixed position, top = 44px (below UrgencyBanner), width 100%, z-index 40
 *   - Height: 64px desktop, 56px mobile
 *   - Inner: container-site, flex, align-items center, justify-between
 *
 * Left: Logo
 *   - Text-based logo: "Camp NAC" in Fraunces 700, White, 22px
 *   - "Horsham, PA" below in font-mono, Leaf color, 11px, letter-spacing 0.1em
 *   - Link → / (home)
 *   - Replace with SVG logo once client provides it — wrap in <Link href="/">
 *
 * Center: Nav Links (desktop only, hidden below lg breakpoint)
 *   - "Home" → /
 *   - "Programs" → /programs
 *   - "Enroll" → /enroll
 *   - Font: Inter 500, 15px, White/80%
 *   - Hover: White/100%, no underline
 *   - Active page: White/100%, small Leaf dot below (2px circle)
 *   - Gap between links: 32px
 *
 * Right: CTA Button (desktop) + Hamburger (mobile)
 *   - Desktop: "Enroll Now →" button → /enroll
 *     Sun bg, Bark text, Inter 600, 14px, px-5 py-2.5, rounded-lg
 *   - Mobile: hamburger icon (3 lines → X animation via Framer Motion)
 *
 * Mobile Menu:
 *   - Full-screen overlay, Forest bg (#1B3A2D), z-index 45
 *   - Framer Motion: slide down from top, opacity fade, 300ms
 *   - Links stacked vertically, Fraunces 700, 32px, White
 *   - Gap: 24px between links
 *   - CTA at bottom: "Enroll Now →" Sun bg, full-width, 56px height
 *   - Close: X icon top-right, same position as hamburger
 *
 * ─── GSAP ────────────────────────────────────────────────────────────────────
 *
 * On mount:
 *   animateNavbar(navRef.current) from @/lib/animations
 *   initNavbarScroll(navRef.current) — adds/removes 'nav-solid' class
 *
 * 'nav-solid' class (in globals.css):
 *   .nav-solid {
 *     background-color: #1B3A2D !important;
 *     backdrop-filter: blur(8px);
 *     box-shadow: 0 1px 0 rgba(255,255,255,0.06);
 *   }
 *
 * ─── IMPLEMENTATION ──────────────────────────────────────────────────────────
 *
 * Use useRef for the nav element.
 * Use useLayoutEffect for GSAP init (with cleanup).
 * Use useState for mobile menu open/closed state.
 * Use useRouter from next/router to determine active page.
 * Close mobile menu on route change.
 */

'use client'

import { useRef, useState, useLayoutEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { animateNavbar, initNavbarScroll } from '@/lib/animations'

interface NavbarProps {
  forceSolid?: boolean
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'Enroll', href: '/enroll' },
]

export default function Navbar({ forceSolid = false }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()

  useLayoutEffect(() => {
    if (!navRef.current) return

    // Animate navbar in
    animateNavbar(navRef.current)

    // Scroll behavior (only if not forceSolid)
    if (!forceSolid) {
      const cleanup = initNavbarScroll(navRef.current)
      return cleanup
    }
  }, [forceSolid])

  // Close mobile menu on route change
  useLayoutEffect(() => {
    const handleRouteChange = () => setMobileOpen(false)
    router.events.on('routeChangeStart', handleRouteChange)
    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [router.events])

  return (
    <>
      <nav
        ref={navRef}
        className={forceSolid ? 'nav-solid' : ''}
        style={{
          position: 'fixed',
          top: '44px', // below UrgencyBanner
          left: 0,
          right: 0,
          height: '64px',
          zIndex: 40,
          transition: 'background-color 300ms ease, backdrop-filter 300ms ease',
        }}
      >
        <div
          className="container-site"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div>
              <div
                className="font-display"
                style={{ color: 'white', fontSize: '22px', fontWeight: 700, lineHeight: 1 }}
              >
                Camp NAC
              </div>
              <div
                className="font-mono"
                style={{
                  color: 'var(--color-leaf)',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Horsham, PA
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="hidden lg:flex"
            style={{ gap: '32px', alignItems: 'center' }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: router.pathname === link.href ? 'white' : 'rgba(255,255,255,0.75)',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 500,
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                  position: 'relative',
                }}
              >
                {link.label}
                {router.pathname === link.href && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--color-leaf)',
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/enroll" className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>
              Enroll Now →
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          >
            <motion.div
              animate={mobileOpen ? 'open' : 'closed'}
              style={{ width: '24px', height: '24px', position: 'relative' }}
            >
              {/* Hamburger lines → X animation handled by Framer Motion */}
              {/* Executor: implement 3-line → X animation here */}
              <span style={{ display: 'block', width: '24px', height: '2px', background: 'white', borderRadius: '2px' }} />
              <span style={{ display: 'block', width: '24px', height: '2px', background: 'white', borderRadius: '2px', marginTop: '5px' }} />
              <span style={{ display: 'block', width: '24px', height: '2px', background: 'white', borderRadius: '2px', marginTop: '5px' }} />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--color-forest)',
              zIndex: 45,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              padding: '40px 24px',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px',
              }}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Mobile nav links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display"
                style={{ color: 'white', fontSize: '32px', fontWeight: 700, textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/enroll"
              className="btn-primary"
              onClick={() => setMobileOpen(false)}
              style={{ width: '100%', maxWidth: '320px', justifyContent: 'center', marginTop: '16px', fontSize: '18px', padding: '16px' }}
            >
              Enroll Now →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
