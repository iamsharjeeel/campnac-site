/**
 * _app.tsx — Next.js App wrapper
 *
 * Responsibilities:
 * 1. Load and configure Google Fonts (Fraunces, Inter, JetBrains Mono)
 * 2. Register GSAP plugins globally (once, not per-component)
 * 3. Import global styles
 * 4. Apply font CSS variables to document root
 *
 * EXECUTOR NOTE:
 * - Use next/font/google for font loading (no external <link> tags)
 * - Font variables are set on <div> wrapping children — this is the correct Next.js pattern
 * - gsap.registerPlugin(ScrollTrigger) must run client-side only
 */

import type { AppProps } from 'next/app'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import { useEffect } from 'react'
import '@/styles/globals.css'

// ─── Font Configuration ───────────────────────────────────────

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

// ─── App Component ────────────────────────────────────────────

export default function App({ Component, pageProps }: AppProps) {
  // Register GSAP plugins client-side
  useEffect(() => {
    const registerPlugins = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
    }
    registerPlugins()
  }, [])

  return (
    <div
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <Component {...pageProps} />
    </div>
  )
}
