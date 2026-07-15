import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const OPERATOR = 'Newtown Racquetball INC DBA CampNac'
const BRAND = 'CampNac'
const PROGRAM = 'CampNac Messaging Program'

const sectionStyle = { marginBottom: '32px' } as const
const h2Style = { fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' } as const
const pStyle = { color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '12px' } as const
const listStyle = { color: 'var(--color-muted)', lineHeight: 1.7, paddingLeft: '20px', marginBottom: '12px' } as const
const boxStyle = {
  background: 'var(--color-sky)',
  borderRadius: '8px',
  padding: '16px 20px',
  marginBottom: '24px',
  color: 'var(--color-bark)',
  lineHeight: 1.7,
} as const

export default function SmsTermsPage() {
  return (
    <>
      <Head>
        <title>SMS Messaging Terms — Camp NAC</title>
        <meta
          name="description"
          content="Camp NAC SMS messaging terms and conditions — opt-in, opt-out, message frequency, and privacy disclosures."
        />
      </Head>

      <Navbar forceSolid />

      <main className="section-py" style={{ background: 'var(--color-white)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <h1 className="font-display" style={{ fontSize: '36px', color: 'var(--color-bark)', marginBottom: '8px' }}>
            SMS Messaging Terms
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '8px' }}>
            Effective Date: April 8, 2024
          </p>
          <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '8px' }}>
            Program Operator: {OPERATOR}
          </p>
          <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '8px' }}>
            Program Name: {PROGRAM}
          </p>
          <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '40px' }}>
            Support: info@newtownathletic.com | (215) 968-0600
          </p>

          <div style={boxStyle}>
            <p style={{ fontWeight: 600, marginBottom: '8px' }}>Carrier-Mandated Privacy Disclosure</p>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li style={{ marginBottom: '6px' }}>
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
              </li>
              <li style={{ marginBottom: '6px' }}>
                Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the text message delivery services used to deliver your messages.
              </li>
              <li>
                All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </li>
            </ul>
          </div>

          <section style={sectionStyle}>
            <h2 style={h2Style}>1. Program Description</h2>
            <p style={pStyle}>
              {OPERATOR} operates the {PROGRAM} — a service that delivers SMS and MMS messages to individuals who have affirmatively opted in. By participating in this messaging program, you agree to these SMS Terms of Service.
            </p>
            <p style={pStyle}>Message types that may be delivered through the Program include:</p>
            <ul style={listStyle}>
              <li>Appointment reminders and scheduling confirmations</li>
              <li>Membership updates, renewals, and account alerts</li>
              <li>Facility notifications (closures, maintenance, schedule changes)</li>
              <li>Promotional offers and marketing messages (where express consent was separately obtained)</li>
              <li>Customer feedback and survey requests</li>
              <li>Business follow-up and lead communications</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>2. Consent and Opt-In</h2>
            <p style={pStyle}>
              You should receive messages through this Program only if you have provided affirmative, documented opt-in consent to {BRAND}. Consent methods include checking a clearly labeled opt-in checkbox on a web form or providing consent in writing.
            </p>
            <ul style={listStyle}>
              <li>Consent to receive SMS messages is not a condition of membership or any purchase.</li>
              <li>You may opt out at any time without affecting your access to any goods or services.</li>
              <li>
                Consent is specific to the program for which it was collected and does not extend to other programs without your separate affirmative consent.
              </li>
            </ul>

            <div style={boxStyle}>
              <p style={{ fontWeight: 600, marginBottom: '8px' }}>How to Opt-Out</p>
              <p style={{ marginBottom: '8px' }}>
                Reply STOP, CANCEL, UNSUBSCRIBE, QUIT, END, or OPT-OUT to any message. A final confirmation will be sent.
              </p>
              <p style={{ marginBottom: '8px' }}>
                You may also email info@newtownathletic.com with &ldquo;SMS Opt-Out&rdquo; and your mobile number in the body.
              </p>
              <p style={{ margin: 0 }}>
                Opt-out requests processed within 10 business days per FCC requirements.
              </p>
            </div>

            <div style={boxStyle}>
              <p style={{ fontWeight: 600, marginBottom: '8px' }}>Need Help?</p>
              <p style={{ marginBottom: '8px' }}>
                Text HELP to the number that messaged you to receive support contact information.
              </p>
              <p style={{ marginBottom: '4px' }}>Email: info@newtownathletic.com</p>
              <p style={{ margin: 0 }}>Phone: (215) 968-0600</p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>3. Message Frequency</h2>
            <p style={pStyle}>
              Message frequency varies by program type. Promotional programs typically send between 2 and 8 messages per month; transactional programs send messages in response to specific activity or triggers such as appointment confirmations or membership renewals.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>4. Message and Data Rates</h2>
            <p style={pStyle}>
              Message and data rates may apply to messages you receive and send. These rates are set by your wireless carrier and are not controlled by {BRAND}. {BRAND} does not charge you directly for receiving messages. Contact your wireless provider for details about your plan&apos;s messaging rates.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>5. Carrier Disclaimer</h2>
            <p style={pStyle}>
              Carriers are not liable for delayed or undelivered messages. Message delivery depends on network availability, carrier filtering, and factors outside {BRAND}&apos;s control. We will make commercially reasonable efforts to ensure reliable message delivery but cannot guarantee delivery timing or completeness.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>6. Privacy and Data Handling</h2>
            <p style={{ ...pStyle, fontWeight: 600 }}>Carrier-Mandated Statement:</p>
            <p style={pStyle}>
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
            </p>
            <ul style={listStyle}>
              <li>Your number is provided to telecommunications carriers and SMS aggregators solely to route and deliver your messages</li>
              <li>Your opt-in record is retained to document compliance with applicable law</li>
              <li>Your number is not used to market products or services beyond the enrolled program</li>
              <li>Your number is not sold, rented, or shared with any marketing list or data broker</li>
              <li>Your number is not shared with other businesses for their independent marketing use</li>
            </ul>
            <p style={pStyle}>
              For complete details, review our{' '}
              <Link href="/privacy" style={{ color: 'var(--color-forest)', textDecoration: 'underline' }}>
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>7. Compliance</h2>
            <p style={pStyle}>
              The {PROGRAM} is operated in compliance with applicable requirements, including:
            </p>
            <ul style={listStyle}>
              <li>The Telephone Consumer Protection Act (TCPA)</li>
              <li>FCC implementing regulations, including 2025 amendments</li>
              <li>CTIA Messaging Principles and Best Practices</li>
              <li>Wireless carrier Acceptable Use Policies</li>
              <li>10DLC campaign registration requirements</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Quick Reference — Program Summary</h2>
            <ul style={listStyle}>
              <li><strong>Program Name:</strong> {PROGRAM}</li>
              <li><strong>Operated By:</strong> {OPERATOR}</li>
              <li><strong>Opt-Out Keywords:</strong> STOP, CANCEL, UNSUBSCRIBE, QUIT, END, OPT-OUT</li>
              <li><strong>Help Keyword:</strong> HELP</li>
              <li><strong>Message Frequency:</strong> Varies by program (2–8/month typical for promotional)</li>
              <li><strong>Carrier Charges:</strong> Message and data rates may apply</li>
              <li><strong>Support Email:</strong> info@newtownathletic.com</li>
              <li><strong>Support Phone:</strong> (215) 968-0600</li>
              <li>
                <strong>Privacy Policy:</strong>{' '}
                <Link href="/privacy" style={{ color: 'var(--color-forest)', textDecoration: 'underline' }}>
                  /privacy
                </Link>
              </li>
              <li>
                <strong>Full SMS Terms:</strong>{' '}
                <Link href="/sms-terms" style={{ color: 'var(--color-forest)', textDecoration: 'underline' }}>
                  /sms-terms
                </Link>
              </li>
              <li>
                <strong>Full Terms of Service:</strong>{' '}
                <Link href="/terms" style={{ color: 'var(--color-forest)', textDecoration: 'underline' }}>
                  /terms
                </Link>
              </li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>8. Updates to These Terms</h2>
            <p style={pStyle}>
              {BRAND} reserves the right to modify these SMS Terms by posting an updated version at /sms-terms. Material changes will be communicated to active program participants. Your continued participation after the effective date of any update constitutes acceptance.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>9. Governing Law</h2>
            <p style={pStyle}>
              These SMS Terms are governed by the laws of the Commonwealth of Pennsylvania and are subject to the dispute resolution provisions in our full{' '}
              <Link href="/terms" style={{ color: 'var(--color-forest)', textDecoration: 'underline' }}>
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
