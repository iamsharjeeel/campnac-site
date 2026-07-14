/**
 * TERMS OF SERVICE PAGE — /terms
 *
 * Required for A2P compliance. Keep it simple and real.
 * Same layout as privacy.tsx.
 *
 * Content:
 * 1. Acceptance of Terms
 * 2. Use of This Website (enrollment inquiry only)
 * 3. Enrollment terms (this site initiates inquiry — not a binding contract)
 * 4. SMS Terms (restate opt-in, STOP to opt out)
 * 5. Intellectual Property
 * 6. Limitation of Liability
 * 7. Governing Law (Pennsylvania)
 * 8. Contact
 */

import Head from 'next/head'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import UrgencyBanner from '@/components/home/UrgencyBanner'

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Camp NAC</title>
        <meta name="description" content="Camp NAC terms of service for the enrollment inquiry website." />
      </Head>

      <UrgencyBanner />
      <Navbar forceSolid />

      <main className="section-py" style={{ background: 'var(--color-white)', paddingTop: '156px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <h1 className="font-display" style={{ fontSize: '36px', color: 'var(--color-bark)', marginBottom: '8px' }}>
            Terms of Service
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '40px' }}>
            Last updated: July 14, 2026
          </p>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              By using this website, you agree to these Terms of Service. This site is operated by
              Camp NAC and is intended solely to facilitate enrollment inquiries for summer camp programs.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              2. Enrollment Inquiries
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              Submitting the enrollment form on this site initiates an inquiry — it does not constitute
              a binding enrollment contract. A Camp NAC team member will follow up to confirm availability,
              discuss pricing, and complete the enrollment process. Enrollment is subject to program
              availability.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              3. SMS Communications
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              By opting into SMS communications, you consent to receive text messages from Camp NAC
              related to your enrollment inquiry. Message frequency will vary. Standard message and
              data rates may apply. Reply STOP at any time to opt out. Reply HELP for assistance.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              4. Intellectual Property
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              All content on this website — including text, design, and program descriptions — is the
              property of Camp NAC and may not be reproduced without written permission.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              5. Limitation of Liability
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              This site is provided as-is. Camp NAC is not liable for any damages arising from use of
              this website or reliance on its content. Program details are subject to change; always
              confirm current offerings directly with Camp NAC staff.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              6. Governing Law
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              These terms are governed by the laws of the Commonwealth of Pennsylvania.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              7. Contact
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              <strong>Camp NAC</strong><br />
              132 Pleasant Run<br />
              Horsham, PA 19044<br />
              Phone: 215-944-8860<br />
              Website: campnac.com
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
