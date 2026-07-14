/**
 * ENROLL PAGE — /enroll
 *
 * The conversion page. Clean, focused, no distractions.
 * Left column: trust signals. Right column: form.
 * Mobile: trust signals collapse above form.
 *
 * ─── SECTION ORDER ──────────────────────────────────────────────────────────
 *
 * 1. UrgencyBanner (sticky top)
 * 2. Navbar (solid Forest bg — no transparent variant on this page)
 * 3. EnrollHero — short, 30vh, reassuring
 * 4. EnrollBody — 2-column: TrustPanel (left) + EnrollForm (right)
 * 5. Footer
 *
 * ─── SEO ────────────────────────────────────────────────────────────────────
 * Title: "Enroll Now — Summer Camp 2025 | Camp NAC"
 * Description: "Secure your child's spot at Camp NAC for Summer 2025. Quick enrollment
 *   inquiry form. A team member will follow up within 1 business day."
 *
 * ─── ENROLL HERO ─────────────────────────────────────────────────────────────
 *
 * - 30vh, Sky (#E8F4F0) background (not Forest — this should feel calm and easy)
 * - Centered content, max-width 640px
 * - Section label (font-mono, Leaf, 12px): "SECURE YOUR SPOT"
 * - H1 (Fraunces 700, 40px desktop / 28px mobile, Bark): "Enroll in Summer Camp 2025"
 * - Body (Inter 400, 16px, Muted): "Fill out the form below and our team will reach out
 *   within 1 business day to confirm your enrollment and answer any questions."
 *
 * ─── ENROLL BODY ─────────────────────────────────────────────────────────────
 *
 * - White background, section-py
 * - Max-width 1100px centered
 * - 2 columns: left 38%, right 62% (desktop) / stacked mobile
 * - Gap: 48px
 *
 * LEFT COLUMN — TrustPanel:
 *   - What Happens Next (3 steps):
 *     - Step 1: "📬 We'll receive your inquiry instantly"
 *     - Step 2: "📞 A Camp NAC team member will call or text you within 1 business day"
 *     - Step 3: "📋 We'll walk you through programs, availability, and pricing"
 *     Each step: small icon circle (Leaf bg, 32px) + text (Inter, 14px, Muted)
 *   - Divider
 *   - Testimonial pull-quote (1 testimonial, Clay left border):
 *     "We've sent our daughter to Camp NAC for three summers in a row..." — Sarah M.
 *   - Divider
 *   - Trust badges (stacked, small):
 *     "🏆 Voted Best Summer Camp — Bucks County, PA"
 *     "🔒 Your information is never shared or sold"
 *     "📍 132 Pleasant Run, Horsham, PA 19044"
 *
 * RIGHT COLUMN — EnrollForm:
 *   - Chalk (#FAFAF7) card, 32px padding, 12px border radius, card shadow
 *   - Form title (Inter 600, 18px, Bark): "Tell Us About Your Family"
 *   - Form fields (react-hook-form, all required unless marked):
 *
 *     ROW 1 (2 cols): Parent First Name | Parent Last Name
 *     ROW 2 (2 cols): Email | Phone
 *     ROW 3 (2 cols): Child's Name | Child's Age (dropdown: 3–15)
 *     ROW 4 (full): Camp Interest (multi-select: checkboxes for each camp type)
 *       - Display as grid of toggle chips (pill style)
 *       - Each chip: program.badgeColor bg when selected, Chalk when unselected
 *       - Options: Creative Arts, Cooking, STEM, Sports, NACventures, Camp NACer, Teen, Early Learners
 *     ROW 5 (2 cols): Preferred Start Week (dropdown) | How Did You Hear About Us? (dropdown)
 *     ROW 6 (full): Message / Questions (textarea, 4 rows, optional)
 *
 *   - SMS Opt-in checkbox (pre-checked):
 *     "I agree to receive enrollment updates and information from Camp NAC via SMS and email.
 *      Message and data rates may apply. Reply STOP to unsubscribe."
 *     Font: Inter 12px, Muted
 *
 *   - Privacy + Terms line (Inter 11px, Muted):
 *     "By submitting this form you agree to our [Privacy Policy] and [Terms of Service]."
 *     Links → /privacy and /terms
 *
 *   - Submit button:
 *     Full-width, Sun bg, Bark text, Inter 600 16px, py-4
 *     Label: "Secure My Spot →"
 *     Loading state: spinner + "Submitting..."
 *     Disabled during submission
 *
 *   - Error state: inline red banner below form title (not a browser alert)
 *     "Something went wrong. Please try again or call us at [phone]."
 *
 *   - Success state: GSAP animation
 *     Form div fades out (0.4s)
 *     Success card fades + slides in (0.5s):
 *       - Leaf bg, 32px padding, 12px border radius
 *       - Animated checkmark SVG (Framer Motion path draw animation)
 *       - H3 (Fraunces, 24px, White): "You're on the list!"
 *       - Body (Inter, 16px, White/80%):
 *         "Thanks, [firstName]! We've received your inquiry for [childName].
 *          A Camp NAC team member will contact you within 1 business day.
 *          Check your email for a confirmation."
 *       - Secondary: "Questions in the meantime? Visit campnac.com or call us directly."
 *
 * ─── FORM IMPLEMENTATION ─────────────────────────────────────────────────────
 *
 * Use react-hook-form for state management and validation.
 * On submit:
 *   1. Validate all required fields
 *   2. Set loading state
 *   3. Call submitToGHL() from @/lib/ghl
 *   4. If success → trigger success animation
 *   5. If error → show error banner, clear loading state, keep form data
 *
 * Field validation rules:
 *   - firstName, lastName: required, min 2 chars
 *   - email: required, valid email format
 *   - phone: required, min 10 digits (strip formatting)
 *   - childName: required
 *   - childAge: required, must be 3–15
 *   - campInterest: optional (but encourage)
 *   - preferredStartWeek: required
 *   - heardAboutUs: required
 *   - message: optional, max 500 chars
 *
 * Styling:
 *   - Input base class: Inter 15px, Bark color, Chalk bg, 1px border (Sky color),
 *     8px border radius, px-4 py-3, w-full
 *   - Focus: border-color Forest, ring-2 ring-forest/20, outline-none
 *   - Error: border-color #EF4444, error message in red Inter 12px below field
 *   - Label: Inter 13px, 600, Bark, mb-1
 */

import Head from 'next/head'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import UrgencyBanner from '@/components/home/UrgencyBanner'
import { submitToGHL, type GHLPayload } from '@/lib/ghl'
import { CAMP_PROGRAMS, START_WEEKS, HEARD_ABOUT_OPTIONS } from '@/lib/campData'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  childName: string
  childAge: string
  campInterest: string[]
  preferredStartWeek: string
  heardAboutUs: string
  message?: string
  smsOptIn: boolean
}

export default function EnrollPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submittedName, setSubmittedName] = useState('')
  const [submittedChildName, setSubmittedChildName] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      smsOptIn: true,
      campInterest: [],
    },
  })

  const selectedInterests = watch('campInterest') || []

  const toggleCampInterest = (camp: string) => {
    const current = selectedInterests
    if (current.includes(camp)) {
      setValue('campInterest', current.filter((c) => c !== camp))
    } else {
      setValue('campInterest', [...current, camp])
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    setError(null)

    const payload: GHLPayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      childName: data.childName,
      childAge: parseInt(data.childAge, 10),
      campInterest: data.campInterest,
      preferredStartWeek: data.preferredStartWeek,
      heardAboutUs: data.heardAboutUs,
      message: data.message,
      smsOptIn: data.smsOptIn,
      source: 'microsite-enroll',
      campaign: 'summer-2025-urgency',
    }

    const result = await submitToGHL(payload)

    if (result.success) {
      setSubmittedName(data.firstName)
      setSubmittedChildName(data.childName)
      // GSAP: animate form out, success card in
      setIsSuccess(true)
    } else {
      setError(result.error || 'Something went wrong. Please try again.')
    }

    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>Enroll Now — Summer Camp 2025 | Camp NAC</title>
        <meta
          name="description"
          content="Secure your child's spot at Camp NAC for Summer 2025. Quick enrollment inquiry form. A team member will follow up within 1 business day."
        />
        <link rel="canonical" href="https://enroll.campnac.com/enroll" />
      </Head>

      <UrgencyBanner />
      <Navbar forceSolid />

      <main>
        {/* Enroll Hero — per spec above */}
        {/* Enroll Body — per spec above (TrustPanel + EnrollForm) */}
        {/* Executor: build this out from the spec. Placeholder structure below: */}

        <section style={{ minHeight: '30vh', background: 'var(--color-sky)' }}>
          {/* Enroll Hero content */}
        </section>

        <section className="section-py" style={{ background: 'var(--color-white)' }}>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 max-w-5xl mx-auto">
              {/* Trust Panel (left) */}
              <div>{/* TrustPanel — per spec */}</div>

              {/* Enroll Form (right) */}
              <div>
                {!isSuccess ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Form fields — per spec above */}
                    {/* Executor: build all fields per the spec */}
                    {error && (
                      <div style={{
                        background: '#FEE2E2',
                        color: '#B91C1C',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        marginBottom: '16px',
                        fontFamily: 'var(--font-inter)',
                        fontSize: '14px',
                      }}>
                        {error}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn-primary w-full justify-center"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Secure My Spot →'}
                    </button>
                  </form>
                ) : (
                  <div className="gsap-fade-in">
                    {/* Success card — per spec */}
                    <p>Thanks {submittedName}! We received your inquiry for {submittedChildName}.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
