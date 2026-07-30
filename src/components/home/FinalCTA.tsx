import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section
      className="section-py"
      style={{
        background: 'var(--color-forest)',
        textAlign: 'center',
      }}
    >
      <div className="container-site" style={{ maxWidth: '640px' }}>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'white', marginBottom: '16px' }}
        >
          Spots Are Filling Fast.
        </h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '32px' }}>
          Summer 2025 enrollment closes soon. Secure your child&apos;s spot before it&apos;s gone.
        </p>
        <Link
          href="/enroll"
          className="btn-primary"
          style={{ fontSize: '18px', padding: '16px 32px', display: 'inline-flex' }}
        >
          Enroll My Child Now →
        </Link>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '16px' }}>
          No commitment until you review the full enrollment packet.
        </p>
      </div>
    </section>
  )
}
