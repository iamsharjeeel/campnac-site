/**
 * GHL Webhook Submit
 *
 * Submits enrollment form data to the GoHighLevel webhook.
 * URL is pulled from environment variable — never hardcoded.
 *
 * Usage:
 *   import { submitToGHL } from '@/lib/ghl'
 *   const result = await submitToGHL(formData)
 *   if (result.success) { ... } else { console.error(result.error) }
 */

export interface GHLPayload {
  firstName: string
  lastName: string
  email: string
  phone: string
  childName: string
  childAge: number
  campInterest: string[]
  preferredStartWeek: string
  heardAboutUs: string
  message?: string
  smsOptIn: boolean
  source: 'microsite-enroll'
  campaign: 'summer-2025-urgency'
}

export interface GHLResult {
  success: boolean
  error?: string
}

export async function submitToGHL(payload: GHLPayload): Promise<GHLResult> {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL

  if (!webhookUrl) {
    console.error('[GHL] NEXT_PUBLIC_GHL_WEBHOOK_URL is not set')
    return {
      success: false,
      error: 'Webhook URL not configured. Contact your administrator.',
    }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        source: 'microsite-enroll',
        campaign: 'summer-2025-urgency',
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      const text = await response.text().catch(() => 'No response body')
      console.error(`[GHL] Webhook returned ${response.status}:`, text)
      return {
        success: false,
        error: `Submission failed (${response.status}). Please try again or call us directly.`,
      }
    }

    return { success: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[GHL] Fetch error:', message)
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    }
  }
}
