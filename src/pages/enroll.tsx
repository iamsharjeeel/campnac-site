/**
 * ENROLL PAGE — /enroll
 *
 * The conversion page. Left column: trust signals. Right column: form.
 * Mobile: trust signals collapse above form.
 * Form posts to the GHL webhook via submitToGHL() — see src/lib/ghl.ts.
 * Full section + validation specs: docs/DESIGN_SYSTEM.md → "Enroll Form"
 */

'use client'

import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import UrgencyBanner from '@/components/home/UrgencyBanner'
import { submitToGHL, type GHLPayload } from '@/lib/ghl'
import { CAMP_PROGRAMS, START_WEEKS, HEARD_ABOUT_OPTIONS, TESTIMONIALS } from '@/lib/campData'

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
  smsMarketingConsent: boolean
  smsTransactionalConsent: boolean
}

const SMS_CONSENTS = [
  {
    field: 'smsMarketingConsent' as const,
    label: 'Marketing Updates:',
    text: 'I consent to receive recurring automated promotional and personalized marketing text messages (e.g. SMS/MMS) from Newtown Racquetball INC DBA CampNac at the number provided. Message and data rates may apply. Message frequency varies. Reply STOP to cancel at any time. My consent is not a condition of any purchase.',
  },
  {
    field: 'smsTransactionalConsent' as const,
    label: 'Transactional Updates:',
    text: 'I consent to receive non-marketing text messages related to my account, membership updates, and facility alerts from Newtown Racquetball INC DBA CampNac. Message and data rates may apply. Message frequency varies. Reply STOP to cancel at any time. My consent is not a condition of any purchase.',
  },
]

const CHILD_AGES = Array.from({ length: 13 }, (_, i) => i + 3) // 3–15

const NEXT_STEPS = [
  { icon: '📬', text: "We'll receive your inquiry instantly" },
  { icon: '📞', text: 'A Camp NAC team member will call or text you within 1 business day' },
  { icon: '📋', text: "We'll walk you through programs, availability, and pricing" },
]

const TRUST_BADGES = [
  '🏆 Voted Best Summer Camp — Bucks County, PA',
  '🔒 Your information is never shared or sold',
  '📍 132 Pleasant Run, Horsham, PA 19044',
]

function AnimatedCheckmark() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <motion.circle
        cx="32"
        cy="32"
        r="29"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <motion.path
        d="M20 33 L28.5 41.5 L45 24"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
      />
    </svg>
  )
}

function TrustPanel() {
  const pullQuote = TESTIMONIALS[0]
  const divider = <div style={{ height: '1px', background: 'var(--color-sky)', margin: '28px 0' }} />

  return (
    <aside>
      <h2
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 600,
          fontSize: '16px',
          color: 'var(--color-bark)',
          marginBottom: '20px',
        }}
      >
        What Happens Next
      </h2>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {NEXT_STEPS.map((step, i) => (
          <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <span
              aria-hidden="true"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--color-sky)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '15px',
                flexShrink: 0,
              }}
            >
              {step.icon}
            </span>
            <span style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.6, paddingTop: '5px' }}>
              {step.text}
            </span>
          </li>
        ))}
      </ol>

      {divider}

      <blockquote
        style={{
          borderLeft: '3px solid var(--color-clay)',
          paddingLeft: '16px',
          margin: 0,
        }}
      >
        <p
          className="font-display"
          style={{ fontStyle: 'italic', fontSize: '15px', color: 'var(--color-bark)', lineHeight: 1.6, marginBottom: '8px' }}
        >
          &ldquo;{pullQuote.quote}&rdquo;
        </p>
        <cite style={{ fontStyle: 'normal', fontSize: '13px', color: 'var(--color-muted)' }}>
          — {pullQuote.name}, {pullQuote.meta}
        </cite>
      </blockquote>

      {divider}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {TRUST_BADGES.map((badge) => (
          <span key={badge} style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.5 }}>
            {badge}
          </span>
        ))}
      </div>
    </aside>
  )
}

export default function EnrollPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submittedName, setSubmittedName] = useState('')
  const [submittedChildName, setSubmittedChildName] = useState('')

  // Hide weeks that have already ended. Computed after mount so the
  // statically-generated HTML (full list) matches the first client render.
  const [availableWeeks, setAvailableWeeks] = useState(START_WEEKS)
  useEffect(() => {
    const now = new Date()
    setAvailableWeeks(
      START_WEEKS.filter((week) => {
        const friday = new Date(week.start)
        friday.setDate(friday.getDate() + 4)
        friday.setHours(23, 59, 59)
        return friday >= now
      })
    )
  }, [])

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      smsMarketingConsent: false,
      smsTransactionalConsent: false,
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
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      childName: data.childName.trim(),
      childAge: parseInt(data.childAge, 10),
      campInterest: data.campInterest,
      preferredStartWeek: data.preferredStartWeek,
      heardAboutUs: data.heardAboutUs,
      message: data.message?.trim() || undefined,
      smsMarketingConsent: data.smsMarketingConsent,
      smsTransactionalConsent: data.smsTransactionalConsent,
      smsOptIn: data.smsMarketingConsent || data.smsTransactionalConsent,
      source: 'microsite-enroll',
      campaign: 'summer-2026-urgency',
    }

    const result = await submitToGHL(payload)

    if (result.success) {
      setSubmittedName(data.firstName.trim())
      setSubmittedChildName(data.childName.trim())
      setIsSuccess(true)
    } else {
      setError(result.error || 'Something went wrong. Please try again.')
    }

    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>Enroll Now — Summer Camp 2026 | Camp NAC</title>
        <meta
          name="description"
          content="Secure your child's spot at Camp NAC for Summer 2026. Quick enrollment inquiry form. A team member will follow up within 1 business day."
        />
        <link rel="canonical" href="https://enroll.campnac.com/enroll" />
      </Head>

      <UrgencyBanner />
      <Navbar forceSolid />

      <main>
        {/* ─── Enroll Hero ───────────────────────────────────────── */}
        <section
          style={{
            background: 'var(--color-sky)',
            paddingTop: '156px',
            paddingBottom: '48px',
            textAlign: 'center',
          }}
        >
          <div className="container-site" style={{ maxWidth: '640px' }}>
            <span
              className="font-mono"
              style={{
                color: 'var(--color-leaf)',
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Secure Your Spot
            </span>
            <h1
              className="font-display"
              style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', color: 'var(--color-bark)', marginBottom: '16px' }}
            >
              Enroll in Summer Camp 2026
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--color-muted)', lineHeight: 1.65 }}>
              Fill out the form below and our team will reach out within 1 business day to
              confirm your enrollment and answer any questions.
            </p>
          </div>
        </section>

        {/* ─── Enroll Body ───────────────────────────────────────── */}
        <section className="section-py" style={{ background: 'var(--color-white)' }}>
          <div className="container-site">
            <div
              className="grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-12"
              style={{ maxWidth: '1100px', margin: '0 auto' }}
            >
              <TrustPanel />

              {/* Form / success card */}
              <div>
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key="form"
                      exit={{ opacity: 0, transition: { duration: 0.4 } }}
                      style={{
                        background: 'var(--color-chalk)',
                        borderRadius: '12px',
                        padding: 'clamp(20px, 4vw, 32px)',
                        boxShadow: '0 2px 8px rgba(27,58,45,0.08)',
                      }}
                    >
                      <h2
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 600,
                          fontSize: '18px',
                          color: 'var(--color-bark)',
                          marginBottom: '20px',
                        }}
                      >
                        Tell Us About Your Family
                      </h2>

                      {error && (
                        <div
                          role="alert"
                          style={{
                            background: '#FEE2E2',
                            color: '#B91C1C',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            fontFamily: 'var(--font-inter)',
                            fontSize: '14px',
                            lineHeight: 1.5,
                          }}
                        >
                          {error} Or call us at{' '}
                          <a href="tel:+12159680600" style={{ textDecoration: 'underline', whiteSpace: 'nowrap' }}>
                            (215) 968-0600
                          </a>.
                        </div>
                      )}

                      <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        {/* Row 1: parent name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                          <div>
                            <label htmlFor="firstName" className="field-label">Parent First Name *</label>
                            <input
                              id="firstName"
                              type="text"
                              autoComplete="given-name"
                              className={`input-base ${errors.firstName ? 'input-error' : ''}`}
                              {...register('firstName', {
                                required: 'First name is required',
                                minLength: { value: 2, message: 'Must be at least 2 characters' },
                              })}
                            />
                            {errors.firstName && <span className="field-error">{errors.firstName.message}</span>}
                          </div>
                          <div>
                            <label htmlFor="lastName" className="field-label">Parent Last Name *</label>
                            <input
                              id="lastName"
                              type="text"
                              autoComplete="family-name"
                              className={`input-base ${errors.lastName ? 'input-error' : ''}`}
                              {...register('lastName', {
                                required: 'Last name is required',
                                minLength: { value: 2, message: 'Must be at least 2 characters' },
                              })}
                            />
                            {errors.lastName && <span className="field-error">{errors.lastName.message}</span>}
                          </div>
                        </div>

                        {/* Row 2: email + phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                          <div>
                            <label htmlFor="email" className="field-label">Email *</label>
                            <input
                              id="email"
                              type="email"
                              autoComplete="email"
                              className={`input-base ${errors.email ? 'input-error' : ''}`}
                              {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: 'Enter a valid email address',
                                },
                              })}
                            />
                            {errors.email && <span className="field-error">{errors.email.message}</span>}
                          </div>
                          <div>
                            <label htmlFor="phone" className="field-label">Phone</label>
                            <input
                              id="phone"
                              type="tel"
                              autoComplete="tel"
                              placeholder="(215) 555-0100"
                              className={`input-base ${errors.phone ? 'input-error' : ''}`}
                              {...register('phone', {
                                validate: (value) =>
                                  !value || value.replace(/\D/g, '').length >= 10 || 'Enter a valid 10-digit phone number',
                              })}
                            />
                            {errors.phone && <span className="field-error">{errors.phone.message}</span>}
                          </div>
                        </div>

                        {/* Row 3: child name + age */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                          <div>
                            <label htmlFor="childName" className="field-label">Child&apos;s Name *</label>
                            <input
                              id="childName"
                              type="text"
                              className={`input-base ${errors.childName ? 'input-error' : ''}`}
                              {...register('childName', { required: "Child's name is required" })}
                            />
                            {errors.childName && <span className="field-error">{errors.childName.message}</span>}
                          </div>
                          <div>
                            <label htmlFor="childAge" className="field-label">Child&apos;s Age *</label>
                            <select
                              id="childAge"
                              className={`input-base ${errors.childAge ? 'input-error' : ''}`}
                              defaultValue=""
                              {...register('childAge', { required: "Select your child's age" })}
                            >
                              <option value="" disabled>Select age</option>
                              {CHILD_AGES.map((age) => (
                                <option key={age} value={age}>{age}</option>
                              ))}
                            </select>
                            {errors.childAge && <span className="field-error">{errors.childAge.message}</span>}
                          </div>
                        </div>

                        {/* Row 4: camp interest chips */}
                        <div style={{ marginBottom: '16px' }}>
                          <span className="field-label">Camp Interest <span style={{ fontWeight: 400, color: 'var(--color-muted)' }}>(select any)</span></span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {CAMP_PROGRAMS.map((program) => {
                              const selected = selectedInterests.includes(program.badgeLabel)
                              return (
                                <button
                                  key={program.id}
                                  type="button"
                                  onClick={() => toggleCampInterest(program.badgeLabel)}
                                  aria-pressed={selected}
                                  style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    padding: '8px 16px',
                                    borderRadius: '100px',
                                    border: selected ? '1px solid transparent' : '1px solid #D5E5DF',
                                    background: selected ? program.badgeColor : 'var(--color-white)',
                                    color: selected ? program.badgeTextColor : 'var(--color-muted)',
                                    cursor: 'pointer',
                                    transition: 'all 150ms ease',
                                  }}
                                >
                                  {program.badgeLabel}
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Row 5: start week + heard about */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '16px' }}>
                          <div>
                            <label htmlFor="preferredStartWeek" className="field-label">Preferred Start Week *</label>
                            <select
                              id="preferredStartWeek"
                              className={`input-base ${errors.preferredStartWeek ? 'input-error' : ''}`}
                              defaultValue=""
                              {...register('preferredStartWeek', { required: 'Select a start week' })}
                            >
                              <option value="" disabled>Select a week</option>
                              {availableWeeks.map((week) => (
                                <option key={week.start} value={week.label}>{week.label}</option>
                              ))}
                              <option value="Not sure yet">Not sure yet</option>
                            </select>
                            {errors.preferredStartWeek && (
                              <span className="field-error">{errors.preferredStartWeek.message}</span>
                            )}
                          </div>
                          <div>
                            <label htmlFor="heardAboutUs" className="field-label">How Did You Hear About Us? *</label>
                            <select
                              id="heardAboutUs"
                              className={`input-base ${errors.heardAboutUs ? 'input-error' : ''}`}
                              defaultValue=""
                              {...register('heardAboutUs', { required: 'Select an option' })}
                            >
                              <option value="" disabled>Select an option</option>
                              {HEARD_ABOUT_OPTIONS.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                            {errors.heardAboutUs && <span className="field-error">{errors.heardAboutUs.message}</span>}
                          </div>
                        </div>

                        {/* Row 6: message */}
                        <div style={{ marginBottom: '20px' }}>
                          <label htmlFor="message" className="field-label">
                            Message / Questions <span style={{ fontWeight: 400, color: 'var(--color-muted)' }}>(optional)</span>
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className={`input-base ${errors.message ? 'input-error' : ''}`}
                            style={{ resize: 'vertical' }}
                            {...register('message', {
                              maxLength: { value: 500, message: 'Please keep your message under 500 characters' },
                            })}
                          />
                          {errors.message && <span className="field-error">{errors.message.message}</span>}
                        </div>

                        {/* SMS consents — both optional, unchecked by default */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                          {SMS_CONSENTS.map((consent) => (
                            <label
                              key={consent.field}
                              style={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'flex-start',
                                cursor: 'pointer',
                                background: 'var(--color-white)',
                                border: '1px solid #D5E5DF',
                                borderRadius: '12px',
                                padding: '14px 16px',
                              }}
                            >
                              <input
                                type="checkbox"
                                style={{ marginTop: '2px', width: '16px', height: '16px', accentColor: 'var(--color-forest)', flexShrink: 0 }}
                                {...register(consent.field)}
                              />
                              <span style={{ fontSize: '12px', color: 'var(--color-muted)', lineHeight: 1.55 }}>
                                <strong style={{ color: 'var(--color-bark)' }}>{consent.label}</strong>{' '}
                                {consent.text}
                              </span>
                            </label>
                          ))}
                        </div>

                        {/* Privacy + terms + SMS terms */}
                        <p style={{ fontSize: '11px', color: 'var(--color-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                          By submitting this form you agree to our{' '}
                          <Link href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>,{' '}
                          <Link href="/terms" style={{ textDecoration: 'underline' }}>Terms of Service</Link>, and{' '}
                          <Link href="/sms-terms" style={{ textDecoration: 'underline' }}>SMS Terms &amp; Conditions</Link>.
                        </p>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="btn-primary"
                          disabled={isLoading}
                          style={{
                            width: '100%',
                            justifyContent: 'center',
                            fontSize: '16px',
                            padding: '16px',
                            opacity: isLoading ? 0.7 : 1,
                            cursor: isLoading ? 'wait' : 'pointer',
                          }}
                        >
                          {isLoading ? (
                            <>
                              <span
                                aria-hidden="true"
                                style={{
                                  width: '16px',
                                  height: '16px',
                                  border: '2px solid rgba(61,43,31,0.3)',
                                  borderTopColor: 'var(--color-bark)',
                                  borderRadius: '50%',
                                  display: 'inline-block',
                                  animation: 'spin 0.8s linear infinite',
                                }}
                              />
                              Submitting...
                            </>
                          ) : (
                            'Secure My Spot →'
                          )}
                        </button>
                        <style jsx>{`
                          @keyframes spin {
                            to { transform: rotate(360deg); }
                          }
                        `}</style>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={{
                        background: 'var(--color-leaf)',
                        borderRadius: '12px',
                        padding: '40px 32px',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <AnimatedCheckmark />
                      </div>
                      <h3
                        className="font-display"
                        style={{ fontSize: '24px', color: 'white', marginBottom: '12px' }}
                      >
                        You&apos;re on the list!
                      </h3>
                      <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, marginBottom: '16px' }}>
                        Thanks, {submittedName}! We&apos;ve received your inquiry for {submittedChildName}.
                        A Camp NAC team member will contact you within 1 business day. Check your
                        email for a confirmation.
                      </p>
                      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                        Questions in the meantime? Visit{' '}
                        <a
                          href="https://campnac.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'underline', color: 'white' }}
                        >
                          campnac.com
                        </a>{' '}
                        or call us directly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
