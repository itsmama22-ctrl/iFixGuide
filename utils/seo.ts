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

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : [{ name: 'iFixGuide Team' }],
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
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
    },
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

  // Add article-specific metadata
  if (type === 'article' && metadata.openGraph) {
    metadata.openGraph.type = 'article'
    if (publishedTime) {
      metadata.openGraph.publishedTime = publishedTime
    }
    if (modifiedTime) {
      metadata.openGraph.modifiedTime = modifiedTime
    }
    if (author) {
      metadata.openGraph.authors = [author]
    }
    if (section) {
      metadata.openGraph.section = section
    }
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
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@ifixguide.com',
    },
  }
}

