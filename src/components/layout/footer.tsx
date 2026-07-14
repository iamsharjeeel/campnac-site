/**
 * Footer Component
 *
 * Forest (#1B3A2D) background, White text.
 * 3 columns on desktop, stacked on mobile.
 * Required for A2P: real business name, address, phone.
 *
 * ─── LAYOUT ─────────────────────────────────────────────────────────────────
 *
 * Top section (3 cols, gap 48px):
 *
 * Col 1 — Brand:
 *   "Camp NAC" (Fraunces 700, 22px, White)
 *   "Horsham, PA" (font-mono, Leaf, 11px)
 *   Tagline: "Bucks County's Most-Loved Summer Camp" (Inter 400, 14px, White/60%)
 *   Social links (Facebook, Instagram icons — use SVG or emoji):
 *     "Facebook" text link → [client FB URL]
 *     "Instagram" text link → [client IG URL]
 *
 * Col 2 — Quick Links:
 *   "Quick Links" (Inter 600, 13px, White/50%, uppercase, tracking-wider) — label
 *   Home → /
 *   Programs → /programs
 *   Enroll Now → /enroll
 *   campnac.com → https://campnac.com (external, target="_blank")
 *   Links: Inter 400, 14px, White/70%, hover White/100%
 *   Gap: 8px between links
 *
 * Col 3 — Contact:
 *   "Contact" (same label style as Col 2)
 *   📍 132 Pleasant Run, Horsham, PA 19044
 *   📞 [phone — confirm with client]
 *   🌐 campnac.com
 *   All: Inter 400, 14px, White/70%
 *   Phone and website are clickable links (tel: and href)
 *
 * Divider: 1px solid rgba(255,255,255,0.08), my-8
 *
 * Bottom bar (flex, space-between, flex-wrap):
 *   Left: "© 2025 Camp NAC. All rights reserved."
 *   Right: "Privacy Policy" → /privacy | "Terms of Service" → /terms
 *   Both: Inter 400, 13px, White/50%
 *   Links: White/70% on hover
 *
 * ─── PADDING ─────────────────────────────────────────────────────────────────
 *   pt-16 pb-8 (desktop), pt-12 pb-6 (mobile)
 */

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-forest)', color: 'white' }}>
      <div className="container-site" style={{ paddingTop: '64px', paddingBottom: '32px' }}>
        {/* 3 Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <div
              className="font-display"
              style={{ fontSize: '22px', fontWeight: 700, color: 'white', marginBottom: '4px' }}
            >
              Camp NAC
            </div>
            <div
              className="font-mono"
              style={{ fontSize: '11px', color: 'var(--color-leaf)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}
            >
              Horsham, PA
            </div>
            <p
              style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '20px', maxWidth: '240px' }}
            >
              Bucks County's Most-Loved Summer Camp for kids ages 3–15.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Quick Links
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Programs', href: '/programs' },
                { label: 'Enroll Now', href: '/enroll' },
                { label: 'campnac.com ↗', href: 'https://campnac.com', external: true },
              ].map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
              }}
            >
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                📍 132 Pleasant Run, Horsham, PA 19044
              </span>
              <a
                href="tel:+1XXXXXXXXXX"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
              >
                📞 [Update phone with client]
              </a>
              <a
                href="https://campnac.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
              >
                🌐 campnac.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '24px' }} />

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
            © 2025 Camp NAC. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link
              href="/privacy"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
