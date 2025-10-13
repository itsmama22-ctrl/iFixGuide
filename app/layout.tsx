import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'iFixGuide - iPhone & iOS Troubleshooting Guides',
    template: '%s | iFixGuide'
  },
  description: 'Expert troubleshooting guides for iPhone and iOS problems. Fix battery issues, connectivity problems, camera glitches, and more with our step-by-step solutions.',
  keywords: ['iPhone troubleshooting', 'iOS fixes', 'iPhone problems', 'iOS issues', 'iPhone repair guide', 'iOS troubleshooting'],
  authors: [{ name: 'iFixGuide Team' }],
  creator: 'iFixGuide',
  publisher: 'iFixGuide',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ifixguide.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'iFixGuide',
    title: 'iFixGuide - iPhone & iOS Troubleshooting Guides',
    description: 'Expert troubleshooting guides for iPhone and iOS problems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iFixGuide - iPhone & iOS Troubleshooting Guides',
    description: 'Expert troubleshooting guides for iPhone and iOS problems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}

