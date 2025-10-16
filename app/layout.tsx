import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'iFixGuide - iPhone & iOS Troubleshooting Guides',
    template: '%s | iFixGuide'
  },
  description: 'Expert troubleshooting guides for iPhone and iOS problems. Fix battery issues, connectivity problems, camera glitches, and more with our step-by-step solutions.',
  keywords: [
    'iPhone troubleshooting', 'iOS fixes', 'iPhone problems', 'iOS issues', 'iPhone repair guide', 'iOS troubleshooting',
    'iPhone battery problems', 'iPhone not charging', 'iPhone camera issues', 'iPhone connectivity problems',
    'iPhone app crashes', 'iPhone frozen', 'iPhone won\'t turn on', 'iPhone overheating', 'iOS update problems',
    'Apple device support', 'mobile device repair', 'iPhone help', 'iOS help', 'iPhone solutions'
  ],
  authors: [{ name: 'iFixGuide Team', url: 'https://ifixguide.com/about' }],
  creator: 'iFixGuide',
  publisher: 'iFixGuide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'iFixGuide - iPhone & iOS Troubleshooting Guides',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iFixGuide - iPhone & iOS Troubleshooting Guides',
    description: 'Expert troubleshooting guides for iPhone and iOS problems.',
    images: ['/images/og-default.jpg'],
    creator: '@ifixguide',
    site: '@ifixguide',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  category: 'Technology',
  classification: 'iPhone and iOS troubleshooting guides',
  other: {
    'msvalidate.01': '985E695A86CFBD6A4F3137977C051AD6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'iFixGuide',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              generateOrganizationSchema(),
              generateWebsiteSchema()
            ])
          }}
        />
      </head>
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

