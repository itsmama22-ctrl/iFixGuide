import { MetadataRoute } from 'next'

function getBaseHost() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://ifixguide.com'
}

export default function robots(): MetadataRoute.Robots {
  const baseHost = getBaseHost()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
    ],
    sitemap: `${baseHost}/sitemap.xml`,
    host: baseHost,
  }
}
