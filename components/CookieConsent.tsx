'use client'

import { useEffect, useState } from 'react'

const CONSENT_KEY = 'ifixguide_cookie_consent'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = typeof window !== 'undefined' ? localStorage.getItem(CONSENT_KEY) : null
    setIsVisible(!consent)
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setIsVisible(false)
    window.dispatchEvent(new Event('cookie-consent-accepted'))
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">We value your privacy</h2>
        <p className="text-sm text-gray-600 mb-4">
          We use cookies to personalize content, measure analytics, and serve ads. By clicking
          “Accept”, you consent to the use of cookies as described in our{' '}
          <a href="/privacy-policy" className="text-primary-600 underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setIsVisible(false)}
          >
            Maybe Later
          </button>
          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:opacity-90"
            onClick={handleAccept}
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  )
}


