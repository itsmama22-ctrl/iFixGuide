// Site Configuration
export const SITE_CONFIG = {
  name: 'iFixGuide',
  title: 'iFixGuide - Professional iPhone & iOS Troubleshooting',
  description: 'Step-by-step guides to solve any iPhone or iOS problem. Expert solutions for battery issues, connectivity problems, and more.',
  url: 'https://ifixguide.vercel.app',
  email: 'contact.ifixguide@gmail.com',
  author: 'iFixGuide Team',
  social: {
    twitter: '@ifixguide',
    github: 'https://github.com/itsmama22-ctrl/iFixGuide'
  }
} as const

// Analytics
export const ANALYTICS = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
} as const

// Email Service
export const EMAIL_CONFIG = {
  resendApiKey: process.env.RESEND_API_KEY || '',
  fromEmail: 'noreply@ifixguide.com',
  toEmail: 'contact.ifixguide@gmail.com',
} as const

// SEO
export const SEO_CONFIG = {
  defaultTitle: 'iFixGuide - iPhone & iOS Troubleshooting',
  titleTemplate: '%s | iFixGuide',
  defaultDescription: 'Expert iPhone troubleshooting guides. Fix any iOS issue with step-by-step solutions.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ifixguide.vercel.app',
    siteName: 'iFixGuide',
  },
  twitter: {
    handle: '@ifixguide',
    site: '@ifixguide',
    cardType: 'summary_large_image',
  },
} as const

// Posts
export const POSTS_CONFIG = {
  postsPerPage: 12,
  relatedPostsCount: 3,
  featuredPostsCount: 6,
} as const
