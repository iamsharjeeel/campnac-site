const STEPS = [
  {
    title: 'Choose Your Weeks',
    description: 'Attend as few as one week or all 13. You decide — no minimum required.',
    icon: '📅',
  },
  {
    title: 'Pick Your Camps',
    description: '75+ themed programs across arts, STEM, sports, cooking, and outdoor adventure.',
    icon: '⭐',
  },
  {
    title: 'Lock In Your Spot',
    description: 'Multi-week discounts apply automatically. Flexible transfers before May 31st at no cost.',
    icon: '🔒',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-py" style={{ background: 'var(--color-white)' }}>
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
            How It Works
          </div>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--color-bark)', marginBottom: '12px' }}
          >
            Custom-Build Your Summer
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            No minimum weeks. No locked-in schedule. Summer should fit your family — not the other way around.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
          }}
        >
          {STEPS.map((step, i) => (
            <div key={step.title} style={{ position: 'relative', paddingTop: '8px' }}>
              <div
                className="font-display"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  fontSize: '80px',
                  fontWeight: 700,
                  color: 'var(--color-forest)',
                  opacity: 0.08,
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                {i + 1}
              </div>
              <div style={{ fontSize: '40px', marginBottom: '12px', position: 'relative' }}>{step.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '8px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.6 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
