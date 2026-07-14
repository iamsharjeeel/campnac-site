/**
 * _document.tsx — HTML Document
 *
 * Custom document for setting HTML lang attribute and any
 * head-level tags that apply across all pages.
 */

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon — replace with actual Camp NAC favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Meta theme color */}
        <meta name="theme-color" content="#1B3A2D" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
