/**
 * UrgencyBanner Component
 *
 * Sticky top bar, always visible. Sun (#F5A623) background.
 * Shows countdown to enrollment close date.
 *
 * ─── SPEC ────────────────────────────────────────────────────────────────────
 *
 * Position: fixed, top 0, width 100%, height 44px, z-index 50
 * Background: Sun (#F5A623)
 * Content: centered, single line
 *
 * Content: "⚡ Limited spots for Summer 2025 — [X days] left to enroll"
 * Where [X days] is displayed as:
 *   - Number in font-mono, font-weight 700, larger (18px)
 *   - " days" in Inter 500, 14px
 * All text: Bark (#3D2B1F)
 *
 * When 0 days remain: hide the banner (or show "Enrollment Closed")
 * When < 7 days remain: flash animation on the number (CSS pulse, subtle)
 *
 * ─── COUNTDOWN LOGIC ─────────────────────────────────────────────────────────
 *
 * Close date from: process.env.NEXT_PUBLIC_ENROLLMENT_CLOSE_DATE (format: YYYY-MM-DD)
 * Fallback: July 31, 2025
 *
 * Calculate days remaining on mount and update every hour (setInterval).
 * Use Math.ceil for partial days (if 1.5 days remain, show "2 days").
 *
 * ─── IMPLEMENTATION ──────────────────────────────────────────────────────────
 */

'use client'

import { useState, useEffect } from 'react'

function getDaysRemaining(closeDateStr?: string): number {
  const closeDate = closeDateStr
    ? new Date(closeDateStr)
    : new Date('2025-07-31')

  const now = new Date()
  const diffMs = closeDate.getTime() - now.getTime()
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)))
}

export default function UrgencyBanner() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null)

  useEffect(() => {
    const closeDate = process.env.NEXT_PUBLIC_ENROLLMENT_CLOSE_DATE
    setDaysLeft(getDaysRemaining(closeDate))

    // Update every hour
    const interval = setInterval(() => {
      setDaysLeft(getDaysRemaining(closeDate))
    }, 1000 * 60 * 60)

    return () => clearInterval(interval)
  }, [])

  // Don't render if enrollment has closed or days not yet calculated
  if (daysLeft === null) {
    return <div style={{ height: '44px', background: 'var(--color-sun)' }} />
  }

  if (daysLeft === 0) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '44px',
          background: 'var(--color-bark)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50,
        }}
      >
        <span style={{ color: 'white', fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 500 }}>
          Summer 2025 enrollment is now closed. Check back in January 2026.
        </span>
      </div>
    )
  }

  const isUrgent = daysLeft <= 7

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '44px',
        background: 'var(--color-sun)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--color-bark)',
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        <span>⚡ Limited spots for Summer 2025 —</span>
        <span
          className={`font-mono ${isUrgent ? 'animate-pulse-slow' : ''}`}
          style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          {daysLeft}
        </span>
        <span>{daysLeft === 1 ? 'day' : 'days'} left to enroll</span>
      </div>
    </div>
  )
}
