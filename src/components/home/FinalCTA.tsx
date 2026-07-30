'use client'

import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section
      style={{
        background: 'var(--color-forest)',
        padding: 'var(--section-py-mobile) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(76,175,118,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(245,166,35,0.12) 0%, transparent 35%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container-site" style={{ position: 'relative', textAlign: 'center', maxWidth: '640px' }}>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '16px',
          }}
        >
          Spots Are Filling Fast.
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6,
            marginBottom: '32px',
          }}
        >
          Summer 2025 enrollment closes soon. Secure your child&apos;s spot before it&apos;s gone.
        </p>
        <Link
          href="/enroll"
          className="btn-primary"
          style={{
            fontSize: '18px',
            padding: '16px 32px',
            display: 'inline-flex',
          }}
        >
          Enroll My Child Now →
        </Link>
        <p
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '20px',
            marginBottom: 0,
          }}
        >
          No commitment until you review the full enrollment packet.
        </p>
      </div>
    </section>
  )
}
