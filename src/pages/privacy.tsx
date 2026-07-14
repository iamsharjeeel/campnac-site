/**
 * PRIVACY POLICY PAGE — /privacy
 *
 * Required for A2P compliance. Must be a real, readable privacy policy.
 * Use Camp NAC's actual details below.
 *
 * This page should be simple: Navbar (solid) + text content + Footer.
 * No animations needed. Just legible, well-structured text.
 *
 * Content to include:
 * 1. What data we collect (name, email, phone, child info)
 * 2. How we use it (enrollment follow-up, SMS/email communications)
 * 3. SMS opt-in disclosure (explicit: user can opt out by replying STOP)
 * 4. Data sharing (we do not sell or share with third parties, except GHL for CRM)
 * 5. Data retention (we retain for 2 years for enrollment records)
 * 6. Contact for data requests: [email from client]
 * 7. Last updated date
 *
 * Styling:
 * - White background, max-width 720px centered, generous vertical padding
 * - H1: Fraunces 700 36px Bark
 * - H2: Inter 600 20px Bark (section headings)
 * - Body: Inter 400 16px Muted, line-height 1.7
 * - Section spacing: 32px between sections
 */

import Head from 'next/head'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Camp NAC</title>
        <meta name="description" content="Camp NAC privacy policy — how we collect, use, and protect your information." />
      </Head>

      <Navbar forceSolid />

      <main className="section-py" style={{ background: 'var(--color-white)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <h1 className="font-display" style={{ fontSize: '36px', color: 'var(--color-bark)', marginBottom: '8px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '40px' }}>
            Last updated: July 1, 2025
          </p>

          {/* EXECUTOR: Build out the full privacy policy content per the spec above.
              Use real Camp NAC details. Do not use lorem ipsum. */}

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              1. Information We Collect
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              When you submit an enrollment inquiry through this website, we collect the following
              information: parent or guardian name, email address, phone number, child's name and age,
              camp program interests, preferred enrollment dates, and any additional information you
              voluntarily provide in the message field.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              We use the information you provide solely to respond to your enrollment inquiry, communicate
              with you about Camp NAC programs and availability, and process your enrollment if you choose
              to proceed. If you opted in to SMS communications, we may contact you via text message with
              enrollment updates and camp information. You may opt out at any time by replying STOP to
              any SMS message. Message and data rates may apply.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              3. SMS Communications
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              By checking the SMS opt-in box on our enrollment form, you consent to receive text messages
              from Camp NAC regarding your enrollment inquiry and summer camp information. Message frequency
              will vary. Standard message and data rates may apply. To opt out, reply STOP to any message.
              To request help, reply HELP. We do not share your phone number with third parties for
              marketing purposes.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              4. Data Sharing
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              We do not sell, rent, or share your personal information with third parties for marketing
              purposes. We use GoHighLevel, a CRM platform, to manage enrollment inquiries and communications.
              Your data is stored securely within that system and is accessible only to authorized Camp NAC
              staff.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              5. Data Retention
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              We retain your information for up to two years for enrollment record-keeping purposes.
              You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' }}>
              6. Contact Us
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
              For questions about this privacy policy or to request access to or deletion of your data,
              please contact us at:<br /><br />
              <strong>Camp NAC</strong><br />
              132 Pleasant Run<br />
              Horsham, PA 19044<br />
              Website: campnac.com
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
