'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const CONSENT_KEY = 'ifixguide_cookie_consent'

interface AnalyticsScriptsProps {
  gaId?: string
}

export default function AnalyticsScripts({ gaId }: AnalyticsScriptsProps) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem(CONSENT_KEY)
      if (consent === 'accepted') {
        setIsReady(true)
      }
    }

    checkConsent()
    window.addEventListener('cookie-consent-accepted', checkConsent)

    return () => {
      window.removeEventListener('cookie-consent-accepted', checkConsent)
    }
  }, [])

  if (!gaId || !isReady) {
    return null
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}


