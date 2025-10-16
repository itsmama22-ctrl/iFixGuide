import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ifixguide.com'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const ogImage = image || `${baseUrl}/images/og-default.jpg`

  const openGraphData: any = {
    type,
    locale: 'en_US',
    url: fullUrl,
    siteName: 'iFixGuide',
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  }

  // Add article-specific metadata
  if (type === 'article') {
    if (publishedTime) {
      openGraphData.publishedTime = publishedTime
    }
    if (modifiedTime) {
      openGraphData.modifiedTime = modifiedTime
    }
    if (author) {
      openGraphData.authors = [author]
    }
    if (section) {
      openGraphData.section = section
    }
  }

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : [{ name: 'iFixGuide Team' }],
    alternates: {
      canonical: fullUrl,
    },
    openGraph: openGraphData,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
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
  }

  return metadata
}

export function generateArticleSchema({
  title,
  description,
  image,
  url,
  publishedTime,
  modifiedTime,
  author = 'iFixGuide Team',
}: {
  title: string
  description: string
  image?: string
  url: string
  publishedTime: string
  modifiedTime?: string
  author?: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ifixguide.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image || `${baseUrl}/images/og-default.jpg`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Organization',
      name: author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'iFixGuide',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${url}`,
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ifixguide.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ifixguide.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iFixGuide',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: 'Expert troubleshooting guides for iPhone and iOS problems',
    sameAs: [
      'https://twitter.com/ifixguide',
      'https://github.com/itsmama22-ctrl/iFixGuide'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'contact.ifixguide@gmail.com',
    },
    founder: {
      '@type': 'Organization',
      name: 'iFixGuide Team'
    },
    foundingDate: '2025',
    numberOfEmployees: '1-10',
    areaServed: 'Worldwide',
    knowsAbout: [
      'iPhone troubleshooting',
      'iOS problem solving',
      'Mobile device repair',
      'Apple device support'
    ]
  }
}

export function generateWebsiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ifixguide.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'iFixGuide',
    url: baseUrl,
    description: 'Expert troubleshooting guides for iPhone and iOS problems',
    publisher: {
      '@type': 'Organization',
      name: 'iFixGuide',
      url: baseUrl
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

export function generateHowToSchema({
  title,
  description,
  steps,
  totalTime,
  difficulty = 'Beginner'
}: {
  title: string
  description: string
  steps: { name: string; text: string }[]
  totalTime: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ifixguide.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    totalTime: totalTime,
    difficulty: difficulty,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  }
}

