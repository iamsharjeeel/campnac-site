import Link from 'next/link'
import { HOME_PREVIEW_PROGRAMS } from '@/lib/campData'

export default function CampGrid() {
  return (
    <section className="section-py" style={{ background: 'var(--color-sky)' }}>
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
            Explore Camps
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--color-bark)', marginBottom: '12px' }}
          >
            Find the Perfect Camp for Your Kid
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-muted)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
            With 13 weeks and 75+ themed camps to choose from, there&apos;s something for every age and interest.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {HOME_PREVIEW_PROGRAMS.map((program) => (
            <div
              key={program.id}
              style={{
                background: 'var(--color-chalk)',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{program.icon}</div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: program.badgeColor,
                  color: program.badgeTextColor,
                  marginBottom: '12px',
                }}
              >
                {program.badgeLabel}
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '8px' }}>
                {program.name}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.55, marginBottom: '8px' }}>
                {program.shortDescription}
              </p>
              <p className="font-mono" style={{ fontSize: '12px', color: 'var(--color-leaf)' }}>
                {program.ages}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href="/programs"
            style={{ color: 'var(--color-leaf)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline' }}
          >
            See All 8 Programs →
          </Link>
        </div>
      </div>
    </section>
  )
}
