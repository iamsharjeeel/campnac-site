/**
 * SMS MESSAGING TERMS PAGE — /sms-terms
 *
 * Required for A2P/10DLC compliance. Content mirrors the operator's master
 * SMS terms (Newtown Racquetball INC DBA Camp NAC), including the
 * carrier-mandated privacy disclosure. Same layout as privacy.tsx.
 */

import Head from 'next/head'
import Link from 'next/link'
import type { ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import UrgencyBanner from '@/components/home/UrgencyBanner'

const h2Style = { fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' } as const
const pStyle = { color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '12px' } as const
const ulStyle = { color: 'var(--color-muted)', lineHeight: 1.7, paddingLeft: '20px', marginBottom: '12px' } as const

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: '32px' }}>
      <h2 style={h2Style}>{title}</h2>
      {children}
    </section>
  )
}

export default function SmsTermsPage() {
  return (
    <>
      <Head>
        <title>SMS Messaging Terms — Camp NAC</title>
        <meta name="description" content="SMS Terms of Service for the Camp NAC Messaging Program operated by Newtown Racquetball INC DBA Camp NAC — consent, opt-out, message frequency, and data handling." />
      </Head>

      <UrgencyBanner />
      <Navbar forceSolid />

      <main className="section-py" style={{ background: 'var(--color-white)', paddingTop: '156px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <h1 className="font-display" style={{ fontSize: '36px', color: 'var(--color-bark)', marginBottom: '12px' }}>
            SMS Messaging Terms
          </h1>
          <p style={{ ...pStyle, marginBottom: '24px' }}>
            By participating in the Camp NAC Messaging Program, you agree to these SMS Terms of
            Service.
          </p>

          {/* Meta box */}
          <div
            style={{
              background: 'var(--color-sky)',
              borderRadius: '8px',
              padding: '20px 24px',
              marginBottom: '32px',
              display: 'grid',
              gap: '8px',
              fontSize: '14px',
              color: 'var(--color-muted)',
            }}
          >
            <span><strong style={{ color: 'var(--color-bark)' }}>Effective Date:</strong> April 8, 2026</span>
            <span><strong style={{ color: 'var(--color-bark)' }}>Program Operator:</strong> Newtown Racquetball INC DBA Camp NAC</span>
            <span><strong style={{ color: 'var(--color-bark)' }}>Program Name:</strong> Camp NAC Messaging Program</span>
            <span><strong style={{ color: 'var(--color-bark)' }}>Support:</strong> info@newtownathletic.com | (215) 968-0600</span>
          </div>

          {/* Carrier-mandated disclosure */}
          <div
            style={{
              background: 'var(--color-forest)',
              borderRadius: '12px',
              padding: '24px 28px',
              marginBottom: '40px',
            }}
          >
            <p style={{ color: 'var(--color-sun)', fontFamily: 'var(--font-jetbrains-mono)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>
              Carrier-Mandated Privacy Disclosure
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, paddingLeft: '20px', fontSize: '14px', margin: 0 }}>
              <li>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</li>
              <li>Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the text message delivery services used to deliver your messages.</li>
              <li>All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</li>
            </ul>
          </div>

          <Section title="1. Program Description">
            <p style={pStyle}>
              Newtown Racquetball INC DBA Camp NAC operates the Camp NAC Messaging Program — a service that
              delivers SMS and MMS messages to individuals who have affirmatively opted in. By participating
              in this messaging program, you agree to these SMS Terms of Service.
            </p>
            <p style={pStyle}>Message types that may be delivered through the Program include:</p>
            <ul style={ulStyle}>
              <li>Appointment reminders and scheduling confirmations</li>
              <li>Enrollment and account updates, renewals, and alerts</li>
              <li>Facility notifications (closures, maintenance, schedule changes)</li>
              <li>Promotional offers and marketing messages (where express consent was separately obtained)</li>
              <li>Customer feedback and survey requests</li>
              <li>Business follow-up and lead communications</li>
            </ul>
          </Section>

          <Section title="2. Consent and Opt-In">
            <p style={pStyle}>
              You should receive messages through this Program only if you have provided affirmative,
              documented opt-in consent to Camp NAC. Consent methods include checking a clearly labeled
              opt-in checkbox on a web form or providing consent in writing.
            </p>
            <ul style={ulStyle}>
              <li>Consent to receive SMS messages is <strong style={{ color: 'var(--color-bark)' }}>not a condition</strong> of enrollment, membership, or any purchase.</li>
              <li>You may opt out at any time without affecting your access to any goods or services.</li>
              <li>Consent is specific to the program for which it was collected and does not extend to other programs without your separate affirmative consent.</li>
            </ul>

            {/* Opt-out / Help boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginTop: '20px' }}>
              <div style={{ background: 'var(--color-chalk)', border: '1px solid var(--color-sky)', borderRadius: '12px', padding: '20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '8px' }}>💬 How to Opt-Out</p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '8px' }}>
                  Reply <strong style={{ color: 'var(--color-bark)' }}>STOP, CANCEL, UNSUBSCRIBE, QUIT, END</strong>, or{' '}
                  <strong style={{ color: 'var(--color-bark)' }}>OPT-OUT</strong> to any message. A final confirmation will be sent.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '8px' }}>
                  You may also email info@newtownathletic.com with &ldquo;SMS Opt-Out&rdquo; and your mobile number in the body.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>
                  Opt-out requests are processed within 10 business days per FCC requirements.
                </p>
              </div>
              <div style={{ background: 'var(--color-chalk)', border: '1px solid var(--color-sky)', borderRadius: '12px', padding: '20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '8px' }}>ℹ️ Need Help?</p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '8px' }}>
                  Text <strong style={{ color: 'var(--color-bark)' }}>HELP</strong> to the number that messaged you to receive support contact information.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>
                  Email: info@newtownathletic.com<br />
                  Phone: (215) 968-0600
                </p>
              </div>
            </div>
          </Section>

          <Section title="3. Message Frequency">
            <p style={pStyle}>
              Message frequency varies by program type. Promotional programs typically send between 2 and 8
              messages per month; transactional programs send messages in response to specific activity or
              triggers such as appointment confirmations or enrollment updates.
            </p>
          </Section>

          <Section title="4. Message and Data Rates">
            <p style={pStyle}>
              Message and data rates may apply to messages you receive and send. These rates are set by your
              wireless carrier and are not controlled by Camp NAC. Camp NAC does not charge you directly for
              receiving messages. Contact your wireless provider for details about your plan&apos;s messaging
              rates.
            </p>
          </Section>

          <Section title="5. Carrier Disclaimer">
            <p style={pStyle}>
              Carriers are not liable for delayed or undelivered messages. Message delivery depends on network
              availability, carrier filtering, and factors outside Camp NAC&apos;s control. We will make
              commercially reasonable efforts to ensure reliable message delivery but cannot guarantee
              delivery timing or completeness.
            </p>
          </Section>

          <Section title="6. Privacy and Data Handling">
            <div
              style={{
                background: 'var(--color-sky)',
                borderRadius: '8px',
                padding: '16px 20px',
                marginBottom: '16px',
              }}
            >
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '6px' }}>
                Carrier-Mandated Statement:
              </p>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>
                No mobile information will be shared with third parties or affiliates for marketing or
                promotional purposes. All other use case categories exclude text messaging originator opt-in
                data and consent; this information will not be shared with any third parties, excluding
                aggregators and providers of the text message delivery services.
              </p>
            </div>
            <ul style={ulStyle}>
              <li>Phone numbers and consent records are used exclusively to deliver the program the subscriber opted into.</li>
              <li>Data is transmitted to licensed telecommunications carriers and SMS aggregators solely for message routing.</li>
              <li>Opt-in records are retained for compliance purposes.</li>
              <li>Numbers are not sold, rented, or shared with data brokers or other businesses for independent marketing.</li>
            </ul>
            <p style={pStyle}>
              For full details on how we handle your data, see our{' '}
              <Link href="/privacy" style={{ color: 'var(--color-leaf)', fontWeight: 600, textDecoration: 'underline' }}>
                Privacy Policy
              </Link>.
            </p>
          </Section>

          <Section title="7. Compliance">
            <p style={pStyle}>
              The Camp NAC Messaging Program complies with the Telephone Consumer Protection Act (TCPA), FCC
              regulations (including 2025 amendments), CTIA messaging principles, carrier policies, and 10DLC
              registration requirements.
            </p>
          </Section>

          <Section title="8. Updates to These Terms">
            <p style={pStyle}>
              Camp NAC reserves the right to modify these SMS Terms by posting an updated version. Material
              changes will be communicated to active program participants. Continued participation in the
              Program after changes take effect constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p style={pStyle}>
              These SMS Terms are governed by the laws of the Commonwealth of Pennsylvania, subject to the
              dispute resolution provisions in our{' '}
              <Link href="/terms" style={{ color: 'var(--color-leaf)', fontWeight: 600, textDecoration: 'underline' }}>
                Terms of Service
              </Link>.
            </p>
          </Section>

          <Section title="10. Contact">
            <p style={pStyle}>
              <strong style={{ color: 'var(--color-bark)' }}>Newtown Racquetball INC DBA Camp NAC</strong><br />
              120 Pheasant Run<br />
              Newtown, PA 18940<br />
              Email: <a href="mailto:info@newtownathletic.com" style={{ textDecoration: 'underline' }}>info@newtownathletic.com</a><br />
              Phone: <a href="tel:+12159680600" style={{ textDecoration: 'underline' }}>(215) 968-0600</a>
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  )
}
