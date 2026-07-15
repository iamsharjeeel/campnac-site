/**
 * PRIVACY POLICY PAGE — /privacy
 *
 * Required for A2P compliance. Content mirrors the operator's master policy
 * (Newtown Racquetball INC DBA Camp NAC), including the carrier-mandated
 * SMS/mobile-data disclosures. No animations — just legible text.
 */

import Head from 'next/head'
import Link from 'next/link'
import type { ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import UrgencyBanner from '@/components/home/UrgencyBanner'

const h2Style = { fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' } as const
const h3Style = { fontSize: '16px', fontWeight: 600, color: 'var(--color-bark)', margin: '16px 0 8px' } as const
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

function CarrierDisclosureBox() {
  return (
    <div
      style={{
        background: 'var(--color-forest)',
        borderRadius: '12px',
        padding: '24px 28px',
        margin: '0 0 40px',
      }}
    >
      <p style={{ color: 'var(--color-sun)', fontFamily: 'var(--font-jetbrains-mono)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>
        SMS / Mobile Data — Carrier-Mandated Disclosure
      </p>
      <ul style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, paddingLeft: '20px', fontSize: '14px', margin: 0 }}>
        <li>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</li>
        <li>Text messaging originator opt-in data and consent will not be shared with any third parties, except for aggregators and providers of the text message delivery services used to operate our SMS program.</li>
        <li>All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</li>
      </ul>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Camp NAC</title>
        <meta name="description" content="Camp NAC privacy policy — how Newtown Racquetball INC DBA Camp NAC collects, uses, and protects your information, including SMS consent data." />
      </Head>

      <UrgencyBanner />
      <Navbar forceSolid />

      <main className="section-py" style={{ background: 'var(--color-white)', paddingTop: '156px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <h1 className="font-display" style={{ fontSize: '36px', color: 'var(--color-bark)', marginBottom: '12px' }}>
            Privacy Policy
          </h1>
          <p style={{ ...pStyle, marginBottom: '24px' }}>
            Newtown Racquetball INC DBA Camp NAC respects your privacy and is committed to
            protecting the personal information of our members, campers&apos; families, and
            website visitors.
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
            <span><strong style={{ color: 'var(--color-bark)' }}>Operating Entity:</strong> Newtown Racquetball INC DBA Camp NAC</span>
            <span><strong style={{ color: 'var(--color-bark)' }}>Support:</strong> info@newtownathletic.com | (215) 968-0600</span>
            <span><strong style={{ color: 'var(--color-bark)' }}>Privacy Requests:</strong> info@newtownathletic.com</span>
          </div>

          <CarrierDisclosureBox />

          <Section title="1. Introduction">
            <p style={pStyle}>
              Newtown Racquetball INC DBA Camp NAC (&ldquo;Camp NAC,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information of
              our members and website visitors. This Privacy Policy describes how we collect, use, share, and
              protect information in connection with our services and website.
            </p>
            <p style={pStyle}>
              This Policy applies to information collected from our members and website visitors. By using our
              Services, you acknowledge this Policy. We will notify you of material changes with at least
              fourteen (14) days&apos; advance notice by email or on-site notification.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <h3 style={h3Style}>2.1 Information You Provide</h3>
            <ul style={ulStyle}>
              <li>Account and registration data: name, email address, phone number, mailing address</li>
              <li>Enrollment inquiry data provided by parents or legal guardians: child&apos;s name, age, program interests, and preferred schedule</li>
              <li>Billing information: processed by our PCI-compliant payment processor; we do not store full payment card numbers</li>
              <li>Health and fitness information necessary for safe program participation and facility use</li>
              <li>Support communications: records of your interactions with our staff and membership team</li>
              <li>Platform content: any information you submit through our website forms</li>
              <li><strong style={{ color: 'var(--color-bark)' }}>SMS Opt-in details:</strong> We collect and maintain records of your consent to receive SMS communications, including the method, time, and date of opt-in.</li>
            </ul>
            <h3 style={h3Style}>2.2 Automatically Collected Information</h3>
            <ul style={ulStyle}>
              <li>Technical data: IP address, browser type, operating system, and device identifiers</li>
              <li>Usage data: pages visited, features accessed, session duration and navigation paths</li>
              <li>Log data: server access logs and error records</li>
              <li>Cookies and tracking technology data (see Section 7)</li>
            </ul>
            <h3 style={h3Style}>2.3 Information From Third Parties</h3>
            <p style={pStyle}>
              We may receive information from payment processors, analytics providers, and other business data
              sources solely to operate and improve our services.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p style={pStyle}>We use the information we collect for the following purposes:</p>
            <ul style={ulStyle}>
              <li>Providing and operating our services: account management, billing, enrollment and membership delivery, and support</li>
              <li>Communicating with you: transactional notices and, with your consent, marketing communications</li>
              <li>Improving our services: using aggregated and anonymized usage data to analyze performance and develop improvements</li>
              <li>Compliance and enforcement: meeting our legal obligations and enforcing our policies</li>
              <li>Security: detecting and preventing fraud, abuse, and unauthorized access</li>
            </ul>
          </Section>

          <Section title="4. How We Share Information">
            <div
              style={{
                background: 'var(--color-sky)',
                borderLeft: '3px solid var(--color-leaf)',
                borderRadius: '0 8px 8px 0',
                padding: '16px 20px',
                marginBottom: '16px',
              }}
            >
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '6px' }}>
                SMS Opt-In Data Carve-Out — Applies to All Sharing Categories Below:
              </p>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>
                All sharing categories exclude text messaging originator opt-in data and consent. This data is
                not shared with any third party except aggregators and providers of the text message delivery
                services used to operate our SMS program.
              </p>
            </div>
            <p style={pStyle}>
              We do not sell personal information. We share information only in the following circumstances:
            </p>
            <h3 style={h3Style}>4.1 Service Providers</h3>
            <p style={pStyle}>
              Vendors who provide services on our behalf, including cloud hosting, payment processing, and
              telecommunications carriers and SMS aggregators for message delivery. Service providers are
              permitted to use your information only as necessary to provide their services and are subject to
              confidentiality obligations.
            </p>
            <h3 style={h3Style}>4.2 Business Transfers</h3>
            <p style={pStyle}>
              If Camp NAC is involved in a merger, acquisition, or asset sale, member information may be
              transferred to the successor entity. We will provide advance notice if your information becomes
              subject to a materially different privacy policy.
            </p>
            <h3 style={h3Style}>4.3 Legal Requirements</h3>
            <p style={pStyle}>
              When required by law, legal process, or government request, or when reasonably necessary to
              protect the safety, rights, or property of Camp NAC, our members, or the public.
            </p>
            <h3 style={h3Style}>4.4 With Consent</h3>
            <p style={pStyle}>For other purposes with your express prior consent.</p>
            <h3 style={h3Style}>4.5 What We Will Not Do</h3>
            <ul style={ulStyle}>
              <li>Sell personal information to data brokers or advertisers</li>
              <li>Use member contact data for marketing purposes unrelated to Camp NAC</li>
              <li>Share SMS opt-in data or consent records for marketing purposes</li>
              <li>Share member data with affiliates or third parties for their independent marketing use</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <ul style={ulStyle}>
              <li>Active account data: retained for the duration of the membership or enrollment relationship</li>
              <li>Post-termination: member data is retained for thirty (30) days before deletion, during which members may request an export</li>
              <li>Billing and transaction records: minimum of seven (7) years for tax and accounting requirements</li>
              <li>Opt-out and suppression records: retained indefinitely to support compliance obligations</li>
            </ul>
          </Section>

          <Section title="6. Security">
            <p style={pStyle}>
              Camp NAC maintains commercially reasonable technical, administrative, and physical safeguards,
              including TLS/SSL encryption in transit, encryption of sensitive data at rest, access controls,
              and regular security monitoring. In the event of a data breach affecting your information, we
              will notify you as required by applicable law.
            </p>
            <p style={pStyle}>
              While we work to protect your data, no security system is completely impenetrable. You are
              responsible for maintaining the security of your account credentials.
            </p>
          </Section>

          <Section title="7. Cookies and Tracking">
            <p style={pStyle}>We use cookies and similar technologies to operate and improve our website:</p>
            <ul style={ulStyle}>
              <li><strong style={{ color: 'var(--color-bark)' }}>Strictly necessary:</strong> required for core functionality and security; cannot be disabled</li>
              <li><strong style={{ color: 'var(--color-bark)' }}>Functional:</strong> remember your preferences and settings</li>
              <li><strong style={{ color: 'var(--color-bark)' }}>Analytics:</strong> help us understand usage patterns and improve performance</li>
              <li><strong style={{ color: 'var(--color-bark)' }}>Marketing:</strong> support advertising on our public website only</li>
            </ul>
            <p style={pStyle}>
              You can manage cookies through your browser settings. Disabling certain cookies may affect
              website functionality.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p style={pStyle}>
              Our online services are not directed to individuals under 18. Enrollment information about
              campers is provided by parents or legal guardians. We do not knowingly collect personal
              information directly from minors. If we learn we have collected such information inadvertently,
              we will delete it promptly.
            </p>
          </Section>

          <Section title="9. Your Privacy Rights">
            <h3 style={h3Style}>9.1 General Rights</h3>
            <p style={pStyle}>
              Subject to applicable law and identity verification, you may request access to, correction of,
              or deletion of personal information we hold about you. Requests can be submitted to
              info@newtownathletic.com. We will respond within legally required timeframes.
            </p>
            <h3 style={h3Style}>9.2 California Residents (CCPA/CPRA)</h3>
            <p style={pStyle}>
              California residents have rights under CCPA/CPRA, including the right to know, delete, correct,
              and limit use of sensitive personal information. Camp NAC does not sell personal information.
              Submit CCPA requests to info@newtownathletic.com with &ldquo;CCPA Request&rdquo; in the subject
              line.
            </p>
            <h3 style={h3Style}>9.3 Other State Privacy Laws</h3>
            <p style={pStyle}>
              Residents of Virginia, Colorado, Connecticut, Texas, Oregon, Montana, and other states with
              comprehensive privacy laws have similar rights. Contact info@newtownathletic.com to submit a
              request.
            </p>
            <h3 style={h3Style}>9.4 Marketing Opt-Out</h3>
            <p style={pStyle}>
              You may opt out of marketing communications at any time using the unsubscribe link in any
              marketing email or by contacting info@newtownathletic.com. Opting out does not affect
              transactional communications.
            </p>
          </Section>

          <Section title="10. SMS and Mobile Communications — Dedicated Disclosure">
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
                promotional purposes. Information sharing to subcontractors in support services, such as
                customer service, is permitted. All other use case categories exclude text messaging
                originator opt-in data and consent; this information will not be shared with any third
                parties, excluding aggregators and providers of the Text Message services.
              </p>
            </div>
            <p style={pStyle}>When Camp NAC sends SMS/MMS messages, the following applies:</p>
            <ul style={ulStyle}>
              <li>Phone numbers and consent records are used exclusively to deliver the program the subscriber opted into</li>
              <li>Data is transmitted to licensed telecommunications carriers and aggregators solely for message routing</li>
              <li>Opt-out records are maintained indefinitely to prevent unwanted future messages</li>
              <li>We do not ask subscribers for phone numbers to market our products or services beyond the enrolled program</li>
              <li>We do not sell, rent, or trade subscriber phone numbers to any third party</li>
            </ul>
            <p style={pStyle}>
              For full details, review our{' '}
              <Link href="/sms-terms" style={{ color: 'var(--color-leaf)', fontWeight: 600, textDecoration: 'underline' }}>
                SMS Terms &amp; Conditions
              </Link>.
            </p>
          </Section>

          <Section title="11. Third-Party Links">
            <p style={pStyle}>
              Our website may link to third-party websites. Camp NAC is not responsible for the privacy
              practices of those sites. We encourage you to review the privacy policy of any site you visit.
            </p>
          </Section>

          <Section title="12. Updates to This Policy">
            <p style={pStyle}>
              We may update this Privacy Policy from time to time. We will provide at least fourteen (14)
              days&apos; advance notice of material changes. The &ldquo;Effective Date&rdquo; reflects the most
              recent update. Your continued use of our services after the effective date of any change
              constitutes acceptance of the updated Policy.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p style={pStyle}>
              <strong style={{ color: 'var(--color-bark)' }}>Newtown Racquetball INC DBA Camp NAC</strong><br />
              120 Pheasant Run<br />
              Newtown, PA 18940<br />
              Email: <a href="mailto:info@newtownathletic.com" style={{ textDecoration: 'underline' }}>info@newtownathletic.com</a><br />
              Phone: <a href="tel:+12159680600" style={{ textDecoration: 'underline' }}>(215) 968-0600</a>
            </p>
            <p style={pStyle}>We will respond to privacy inquiries within thirty (30) days.</p>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  )
}
