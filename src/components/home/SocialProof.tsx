import { TESTIMONIALS } from '@/lib/campData'

export default function SocialProof() {
  return (
    <section className="section-py" style={{ background: 'var(--color-chalk)' }}>
      <div className="container-site" style={{ maxWidth: '1100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '12px',
              color: 'var(--color-leaf)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            What Parents Say
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--color-bark)' }}
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
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              style={{
                background: 'var(--color-white)',
                borderRadius: '12px',
                padding: '24px',
                borderLeft: '3px solid var(--color-clay)',
              }}
            >
              <p
                className="font-display"
                style={{
                  fontStyle: 'italic',
                  fontSize: '17px',
                  color: 'var(--color-bark)',
                  lineHeight: 1.55,
                  marginBottom: '20px',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  className="font-mono"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--color-leaf)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--color-bark)' }}>{t.name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="font-mono"
          style={{
            textAlign: 'center',
            fontSize: '13px',
            color: 'var(--color-forest)',
            letterSpacing: '0.02em',
            marginBottom: '16px',
          }}
        >
          486+ Families Enrolled · 75+ Themed Camps · Ages 3–15 · Flexible Scheduling
        </div>
        <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--color-muted)' }}>
          Voted Best Summer Camp in Bucks County, PA
        </p>
      </div>
    </section>
  )
}
