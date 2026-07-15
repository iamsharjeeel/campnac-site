import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const OPERATOR = 'Newtown Racquetball INC DBA CampNac'
const BRAND = 'CampNac'

const sectionStyle = { marginBottom: '32px' } as const
const h2Style = { fontSize: '20px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '12px' } as const
const h3Style = { fontSize: '16px', fontWeight: 600, color: 'var(--color-bark)', marginBottom: '8px', marginTop: '16px' } as const
const pStyle = { color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '12px' } as const
const listStyle = { color: 'var(--color-muted)', lineHeight: 1.7, paddingLeft: '20px', marginBottom: '12px' } as const

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Camp NAC</title>
        <meta name="description" content="Camp NAC terms of service for the enrollment inquiry website." />
      </Head>

      <Navbar forceSolid />

      <main className="section-py" style={{ background: 'var(--color-white)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <h1 className="font-display" style={{ fontSize: '36px', color: 'var(--color-bark)', marginBottom: '8px' }}>
            Terms of Service
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '8px' }}>
            Effective Date: April 3, 2023
          </p>
          <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '8px' }}>
            Program Operator: {OPERATOR}
          </p>
          <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '40px' }}>
            Support: info@newtownathletic.com | (215) 968-0600 · Governing Law: Pennsylvania, United States
          </p>

          <p style={pStyle}>
            Please read these Terms carefully before using {BRAND} facilities and services. By creating a membership account, signing up online, or accessing any part of our services, you agree to be bound by these Terms.
          </p>

          <section style={sectionStyle}>
            <h2 style={h2Style}>1. Agreement to Terms</h2>
            <p style={pStyle}>
              These Terms of Service (&ldquo;Terms&rdquo;) are a legally binding agreement between {OPERATOR} (&ldquo;{BRAND},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and the individual or entity (&ldquo;Member,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) accessing or using our facilities, services, and website (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p style={pStyle}>
              By accessing or using the Services — including creating a membership account, making a payment, or visiting our facility — you represent that you have read, understood, and agree to these Terms. {BRAND} may update these Terms from time to time. We will provide at least fourteen (14) days&apos; notice of material changes by email or in-facility notification.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>2. Services Description</h2>
            <p style={pStyle}>
              {BRAND} provides access to camp programs, fitness and wellness amenities, and related services. Specific amenity and program access depends on your enrollment or membership tier.
            </p>
            <p style={pStyle}>
              We will use commercially reasonable efforts to maintain facility and program availability. However, we do not guarantee uninterrupted access. Scheduled maintenance, repairs, or circumstances beyond our control may cause temporary unavailability of specific amenities or programs.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>3. Account Registration and Responsibilities</h2>
            <p style={pStyle}>
              To use our Services, you must register and provide accurate, complete, and current information. You agree to keep your account information updated. You are responsible for:
            </p>
            <ul style={listStyle}>
              <li>Maintaining the security and confidentiality of your membership credentials and access card</li>
              <li>All activity that occurs under your account</li>
              <li>Ensuring that any family members or guests you bring comply with facility rules and these Terms</li>
              <li>Keeping your billing and contact information current</li>
            </ul>
            <p style={pStyle}>
              You must notify {BRAND} promptly at info@newtownathletic.com if you become aware of any unauthorized use of your membership.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>4. Permitted and Prohibited Uses</h2>
            <h3 style={h3Style}>4.1 License Grant</h3>
            <p style={pStyle}>
              Subject to these Terms and payment of all applicable fees, {BRAND} grants Member a limited, non-exclusive, non-transferable, revocable license to access and use the facility and Services during your membership or enrollment term.
            </p>
            <h3 style={h3Style}>4.2 Prohibited Uses</h3>
            <p style={pStyle}>Member agrees not to:</p>
            <ul style={listStyle}>
              <li>Use facilities or equipment in a manner that is unsafe or endangers other members or staff</li>
              <li>Violate any applicable law or regulation while on facility premises</li>
              <li>Harass, threaten, or intimidate other members, guests, or staff</li>
              <li>Damage or misuse facility equipment or property</li>
              <li>Engage in or facilitate fraudulent, deceptive, or illegal business practices on premises</li>
              <li>Transfer, sell, or share your membership access with non-members without authorization</li>
            </ul>
            <p style={pStyle}>
              {BRAND} may suspend memberships engaged in prohibited conduct. Where possible, we will provide notice before suspension. Suspension for serious violations may occur immediately and without prior notice.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>5. Communications Compliance</h2>
            <p style={pStyle}>
              When you provide your phone number and consent to receive SMS/MMS communications from {BRAND}, the following applies:
            </p>
            <ul style={listStyle}>
              <li>You must be 18 or older to opt in to SMS messaging</li>
              <li>Consent is not required as a condition of membership or purchase</li>
              <li>You may opt out at any time by replying STOP to any message</li>
              <li>Message and data rates may apply; message frequency varies</li>
              <li>Reply HELP for assistance</li>
              <li>
                Program Description: By opting in, you agree to receive recurring automated promotional and transactional text messages (such as alerts, promotions, notifications, and reminders) from {BRAND}.
              </li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>6. Fees and Payment</h2>
            <h3 style={h3Style}>6.1 Membership Fees</h3>
            <p style={pStyle}>
              Member agrees to pay all fees specified at time of enrollment. Fees are in U.S. dollars, exclusive of applicable taxes. {BRAND} will provide at least thirty (30) days&apos; advance notice of any membership fee increases, effective at Member&apos;s next renewal.
            </p>
            <h3 style={h3Style}>6.2 Automatic Renewal</h3>
            <p style={pStyle}>
              Memberships automatically renew for successive periods equal to the original term unless Member cancels at least five (5) business days before the renewal date. By providing a payment method, Member authorizes {BRAND} to charge all membership fees and applicable charges when due.
            </p>
            <h3 style={h3Style}>6.3 Refund Policy</h3>
            <p style={pStyle}>
              Membership fees are non-refundable, except where required by applicable law. If {BRAND} terminates a membership without cause, a prorated refund of prepaid fees for the unused portion of the current period will be provided.
            </p>
            <h3 style={h3Style}>6.4 Late Payments</h3>
            <p style={pStyle}>
              Unpaid balances may result in membership suspension after reasonable notice. Accounts suspended for non-payment may be reinstated upon payment of all outstanding balances.
            </p>
            <h3 style={h3Style}>6.5 Disputes</h3>
            <p style={pStyle}>
              If you believe a charge is incorrect, you must notify {BRAND} in writing at info@newtownathletic.com within thirty (30) days of the invoice date.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>7. Health and Safety</h2>
            <p style={pStyle}>
              Members use the facility at their own risk. You represent that you are in good health and have no medical condition that would impair your safe use of facility equipment or participation in activities. {BRAND} is not responsible for injuries that occur as a result of Member&apos;s failure to follow safety guidelines or instructions from staff.
            </p>
            <p style={pStyle}>
              Members are responsible for consulting a physician before beginning any new exercise program. {BRAND} staff and personal trainers are not physicians and cannot provide medical advice.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>8. Intellectual Property</h2>
            <p style={pStyle}>
              {BRAND} and its licensors own all right, title, and interest in and to the Club&apos;s brand, logo, website, content, and related materials. These Terms do not transfer any ownership interest to Member. Unauthorized reproduction or use of Club materials is prohibited.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>9. Data and Privacy</h2>
            <p style={pStyle}>
              {BRAND}&apos;s collection and use of information is described in our{' '}
              <Link href="/privacy" style={{ color: 'var(--color-forest)', textDecoration: 'underline' }}>
                Privacy Policy
              </Link>
              , incorporated into these Terms by reference. We will not use your contact information or SMS opt-in data for purposes beyond those disclosed in our Privacy Policy.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>10. Member Representations and Warranties</h2>
            <p style={pStyle}>
              Member represents and warrants to {BRAND}, on a continuing basis, that:
            </p>
            <ul style={listStyle}>
              <li>Member has the legal authority to enter into and perform these Terms</li>
              <li>All information provided to {BRAND} is accurate, complete, and current</li>
              <li>Member will comply with all facility rules, staff instructions, and applicable laws while on premises</li>
              <li>Member will not use the facility in any manner that creates legal liability for {BRAND}</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>11. Disclaimer of Warranties</h2>
            <p style={pStyle}>
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the maximum extent permitted by applicable law, {BRAND} disclaims all warranties, express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>12. Limitation of Liability</h2>
            <p style={pStyle}>
              To the maximum extent permitted by applicable law, {BRAND} will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from Member&apos;s use of or inability to use the Services. {BRAND}&apos;s total aggregate liability to Member for all claims will not exceed the total membership fees paid in the three (3) calendar months immediately preceding the event giving rise to the claim.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>13. Indemnification</h2>
            <p style={pStyle}>
              Member agrees to indemnify, defend, and hold harmless {OPERATOR} and its respective officers, directors, employees, and agents from and against any claims, losses, damages, liabilities, costs, and expenses arising from: Member&apos;s breach of these Terms; Member&apos;s violation of any applicable law; any injury or damage caused by Member&apos;s actions on facility premises; and claims by Member&apos;s guests arising from Member&apos;s invitation to the facility.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>14. Term and Termination</h2>
            <p style={pStyle}>
              <strong>Termination by Member:</strong> Member may cancel their membership at any time by providing written notice to info@newtownathletic.com at least five (5) business days before the next billing date. Cancellation is effective at the end of the then-current billing period.
            </p>
            <p style={pStyle}>
              <strong>Termination by {BRAND}:</strong> We may immediately suspend or terminate a membership without notice if Member materially breaches these Terms, violates facility rules, or poses an imminent risk to the safety or wellbeing of other members or staff.
            </p>
            <p style={pStyle}>
              <strong>Effect of Termination:</strong> Upon termination, Member&apos;s access to facilities ceases; outstanding fees through the termination date remain due; and member data is retained for thirty (30) days before deletion.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>15. Dispute Resolution</h2>
            <p style={pStyle}>
              Before initiating any formal dispute, the parties agree to attempt to resolve any issue informally. The party with a complaint must provide written notice to the other party describing the dispute and desired resolution. The parties will have thirty (30) days to negotiate in good faith.
            </p>
            <p style={pStyle}>
              These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict of law principles. Any claim arising under these Terms must be brought within one (1) year of the date the claiming party first knew or reasonably should have known of the facts giving rise to the claim.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>16. SMS Messaging Communications</h2>
            <p style={pStyle}>
              Users must be 18+ to opt in. Mobile carriers are not liable for delayed or undelivered messages. Message and data rates may apply and message frequency varies. Text STOP to cancel and HELP for help. Full SMS-specific terms are available at{' '}
              <Link href="/sms-terms" style={{ color: 'var(--color-forest)', textDecoration: 'underline' }}>
                /sms-terms
              </Link>
              .
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>17. General Provisions</h2>
            <ul style={listStyle}>
              <li>
                <strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between the parties regarding our Services.
              </li>
              <li>
                <strong>Severability:</strong> If any provision is found unenforceable, it will be modified to the minimum extent necessary. All other provisions remain in full force.
              </li>
              <li>
                <strong>No Waiver:</strong> Failure to enforce any provision does not waive the right to enforce it in the future.
              </li>
              <li>
                <strong>Assignment:</strong> Member may not assign these Terms without {BRAND}&apos;s prior written consent.
              </li>
              <li>
                <strong>Force Majeure:</strong> Neither party is liable for delays or failures caused by circumstances beyond its reasonable control.
              </li>
              <li>
                <strong>Updates:</strong> {BRAND} will provide at least fourteen (14) days&apos; advance notice of material changes to these Terms.
              </li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Contact Us</h2>
            <p style={pStyle}>
              <strong>{OPERATOR}</strong><br /><br />
              120 Pheasant Run, Newtown, PA 18940<br />
              Email: info@newtownathletic.com<br />
              Phone: (215) 968-0600
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
