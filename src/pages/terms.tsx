/**
 * TERMS OF SERVICE PAGE — /terms
 *
 * Required for A2P compliance. Content mirrors the operator's master terms
 * (Newtown Racquetball INC DBA Camp NAC). Same layout as privacy.tsx.
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

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Camp NAC</title>
        <meta name="description" content="Terms of Service for Camp NAC, operated by Newtown Racquetball INC DBA Camp NAC — enrollment, facilities, communications, and member responsibilities." />
      </Head>

      <UrgencyBanner />
      <Navbar forceSolid />

      <main className="section-py" style={{ background: 'var(--color-white)', paddingTop: '156px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <h1 className="font-display" style={{ fontSize: '36px', color: 'var(--color-bark)', marginBottom: '12px' }}>
            Terms of Service
          </h1>
          <p style={{ ...pStyle, marginBottom: '24px' }}>
            Please read these Terms carefully before using Camp NAC facilities and services. By
            creating an account, submitting an enrollment, signing up online, or accessing any part
            of our services, you agree to be bound by these Terms.
          </p>

          {/* Meta box */}
          <div
            style={{
              background: 'var(--color-sky)',
              borderRadius: '8px',
              padding: '20px 24px',
              marginBottom: '40px',
              display: 'grid',
              gap: '8px',
              fontSize: '14px',
              color: 'var(--color-muted)',
            }}
          >
            <span><strong style={{ color: 'var(--color-bark)' }}>Effective Date:</strong> April 8, 2026</span>
            <span><strong style={{ color: 'var(--color-bark)' }}>Operating Entity:</strong> Newtown Racquetball INC DBA Camp NAC</span>
            <span><strong style={{ color: 'var(--color-bark)' }}>Support:</strong> info@newtownathletic.com | (215) 968-0600</span>
            <span><strong style={{ color: 'var(--color-bark)' }}>Governing Law:</strong> Pennsylvania, United States</span>
          </div>

          <Section title="1. Agreement to Terms">
            <p style={pStyle}>
              These Terms of Service (&ldquo;Terms&rdquo;) are a legally binding agreement between Newtown
              Racquetball INC DBA Camp NAC (&ldquo;Camp NAC,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) and the individual or entity (&ldquo;Member,&rdquo; &ldquo;you,&rdquo; or
              &ldquo;your&rdquo;) accessing or using our facilities, services, and website (collectively, the
              &ldquo;Services&rdquo;).
            </p>
            <p style={pStyle}>
              By accessing or using the Services — including creating an account, submitting an enrollment,
              making a payment, or visiting our facility — you represent that you have read, understood, and
              agree to these Terms. Camp NAC may update these Terms from time to time. We will provide at
              least fourteen (14) days&apos; notice of material changes by email or in-facility notification.
            </p>
          </Section>

          <Section title="2. Services Description">
            <p style={pStyle}>
              Camp NAC is operated by Newtown Racquetball INC, a family fitness and wellness organization
              providing summer camp programs, fitness equipment, group classes, aquatics, racquet sports,
              personal training, and related amenities. Specific program and amenity access depends on your
              enrollment or membership tier.
            </p>
            <p style={pStyle}>
              We will use commercially reasonable efforts to maintain facility and program availability.
              However, we do not guarantee uninterrupted access. Scheduled maintenance, repairs, or
              circumstances beyond our control may cause temporary unavailability of specific amenities.
            </p>
          </Section>

          <Section title="3. Account Registration and Responsibilities">
            <p style={pStyle}>
              To use our Services, you must register and provide accurate, complete, and current information.
              You agree to keep your account information updated. You are responsible for:
            </p>
            <ul style={ulStyle}>
              <li>Maintaining the security and confidentiality of your membership credentials and access card</li>
              <li>All activity that occurs under your account</li>
              <li>Ensuring that any family members or guests you bring comply with facility rules and these Terms</li>
              <li>Keeping your billing and contact information current</li>
            </ul>
            <p style={pStyle}>
              You must notify Camp NAC promptly at info@newtownathletic.com if you become aware of any
              unauthorized use of your account.
            </p>
          </Section>

          <Section title="4. Permitted and Prohibited Uses">
            <h3 style={h3Style}>4.1 License Grant</h3>
            <p style={pStyle}>
              Subject to these Terms and payment of all applicable fees, Camp NAC grants Member a limited,
              non-exclusive, non-transferable, revocable license to access and use the facility and Services
              during your enrollment or membership term.
            </p>
            <h3 style={h3Style}>4.2 Prohibited Uses</h3>
            <p style={pStyle}>Member agrees not to:</p>
            <ul style={ulStyle}>
              <li>Use facilities or equipment in a manner that is unsafe or endangers other members or staff</li>
              <li>Violate any applicable law or regulation</li>
              <li>Harass, threaten, or harm other members, campers, guests, or staff</li>
              <li>Damage, deface, or misuse facility property</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Transfer or share memberships or access credentials without authorization</li>
            </ul>
            <p style={pStyle}>
              Camp NAC may suspend memberships engaged in prohibited conduct. Where possible, we will provide
              notice before suspension. Serious violations may result in immediate suspension without notice.
            </p>
          </Section>

          <Section title="5. Communications Compliance">
            <p style={pStyle}>
              You must be 18 or older to opt in to SMS communications. Consent is not required as a condition
              of membership, enrollment, or purchase. If you opt in, you may receive recurring automated
              promotional and transactional text messages (such as alerts, promotions, notifications, and
              reminders). Message and data rates may apply; message frequency varies. You may opt out at any
              time by replying STOP.
            </p>
          </Section>

          <Section title="6. Fees and Payment">
            <h3 style={h3Style}>6.1 Fees</h3>
            <p style={pStyle}>
              All fees are stated in U.S. dollars and are exclusive of applicable taxes. Camp NAC will provide
              at least thirty (30) days&apos; advance notice of any fee increases, effective at Member&apos;s
              next renewal.
            </p>
            <h3 style={h3Style}>6.2 Automatic Renewal</h3>
            <p style={pStyle}>
              Recurring memberships automatically renew for successive periods equal to the original term
              unless Member cancels at least five (5) business days before the renewal date.
            </p>
            <h3 style={h3Style}>6.3 Refund Policy</h3>
            <p style={pStyle}>
              Fees are non-refundable, except where required by applicable law. If Camp NAC terminates a
              membership without cause, Member receives a prorated refund for the unused portion.
            </p>
            <h3 style={h3Style}>6.4 Late Payments</h3>
            <p style={pStyle}>
              Unpaid balances may result in suspension after reasonable notice. Reinstatement requires payment
              of the full outstanding balance.
            </p>
            <h3 style={h3Style}>6.5 Disputes</h3>
            <p style={pStyle}>
              Member must notify Camp NAC in writing of any billing errors within thirty (30) days of the
              invoice date.
            </p>
          </Section>

          <Section title="7. Health and Safety">
            <p style={pStyle}>
              Members and participants use the facility at their own risk. By using the Services, Member
              represents that they (and any enrolled campers) are in good health and able to safely
              participate in program activities. Camp NAC is not responsible for injuries that occur as a
              result of a failure to follow safety guidelines or instructions from staff. Members should
              consult a physician before beginning any exercise program; our staff cannot provide medical
              advice.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p style={pStyle}>
              Camp NAC owns all intellectual property rights in its content, branding, and materials.
              Unauthorized reproduction or use of Camp NAC materials is prohibited.
            </p>
          </Section>

          <Section title="9. Data and Privacy">
            <p style={pStyle}>
              Our data practices are governed by our{' '}
              <Link href="/privacy" style={{ color: 'var(--color-leaf)', fontWeight: 600, textDecoration: 'underline' }}>
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference. Your contact information and SMS consent
              data will not be used beyond the purposes disclosed there.
            </p>
          </Section>

          <Section title="10. Member Representations and Warranties">
            <p style={pStyle}>Member represents and warrants that they:</p>
            <ul style={ulStyle}>
              <li>Have the legal authority to enter into this agreement</li>
              <li>Have provided accurate and complete information</li>
              <li>Will comply with all facility rules and applicable laws</li>
              <li>Will not act in a manner that creates liability for Camp NAC</li>
            </ul>
          </Section>

          <Section title="11. Disclaimer of Warranties">
            <p style={pStyle}>
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; Camp NAC disclaims
              all warranties, express or implied, including warranties of merchantability and fitness for a
              particular purpose.
            </p>
          </Section>

          <Section title="12. Limitation of Liability">
            <p style={pStyle}>
              To the maximum extent permitted by law, Camp NAC will not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from Member&apos;s use of or
              inability to use the Services. Camp NAC&apos;s total liability is capped at the fees paid by
              Member in the three (3) months preceding the claim.
            </p>
          </Section>

          <Section title="13. Indemnification">
            <p style={pStyle}>
              Member agrees to indemnify and hold harmless Camp NAC against claims arising from Member&apos;s
              breach of these Terms, violation of law, injury caused by Member&apos;s actions, or claims
              related to Member&apos;s guests.
            </p>
          </Section>

          <Section title="14. Term and Termination">
            <h3 style={h3Style}>14.1 Cancellation by Member</h3>
            <p style={pStyle}>
              Members may cancel by providing written notice at least five (5) business days before the next
              billing date. Cancellation takes effect at the end of the current billing period.
            </p>
            <h3 style={h3Style}>14.2 Termination by Camp NAC</h3>
            <p style={pStyle}>
              Camp NAC may immediately suspend or terminate a membership without notice if Member materially
              breaches these Terms, violates facility rules, or poses an imminent risk to the safety or
              wellbeing of other members, campers, or staff.
            </p>
            <h3 style={h3Style}>14.3 Effect of Termination</h3>
            <p style={pStyle}>
              Upon termination, access to the Services ceases and any outstanding fees remain due. Member data
              is retained for thirty (30) days before deletion, per our Privacy Policy.
            </p>
          </Section>

          <Section title="15. Dispute Resolution">
            <p style={pStyle}>
              The parties will first attempt to resolve disputes informally. The party with a complaint must
              provide written notice to the other party describing the dispute and desired resolution, and the
              parties will have thirty (30) days to negotiate in good faith. These Terms are governed by the
              laws of the Commonwealth of Pennsylvania. Any claim must be brought within one (1) year of the
              date the claiming party first knew or reasonably should have known of the facts giving rise to
              the claim.
            </p>
          </Section>

          <Section title="16. SMS Messaging Communications">
            <p style={pStyle}>
              You must be 18 or older to opt in to SMS messaging. Mobile carriers are not liable for delayed
              or undelivered messages. Text STOP to cancel at any time or HELP for assistance. Full SMS
              program terms are available in our{' '}
              <Link href="/sms-terms" style={{ color: 'var(--color-leaf)', fontWeight: 600, textDecoration: 'underline' }}>
                SMS Terms &amp; Conditions
              </Link>.
            </p>
          </Section>

          <Section title="17. General Provisions">
            <ul style={ulStyle}>
              <li><strong style={{ color: 'var(--color-bark)' }}>Entire Agreement:</strong> These Terms and the Privacy Policy constitute the complete agreement between the parties</li>
              <li><strong style={{ color: 'var(--color-bark)' }}>Severability:</strong> If any provision is unenforceable, it will be minimally modified and the remaining provisions remain valid</li>
              <li><strong style={{ color: 'var(--color-bark)' }}>No Waiver:</strong> Failure to enforce any provision does not waive the right to enforce it later</li>
              <li><strong style={{ color: 'var(--color-bark)' }}>Assignment:</strong> Member may not assign these Terms without our written consent</li>
              <li><strong style={{ color: 'var(--color-bark)' }}>Force Majeure:</strong> Neither party is liable for failures caused by circumstances beyond its reasonable control</li>
              <li><strong style={{ color: 'var(--color-bark)' }}>Updates:</strong> Material changes require fourteen (14) days&apos; advance notice</li>
            </ul>
          </Section>

          <Section title="18. Contact">
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
