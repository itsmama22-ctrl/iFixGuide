import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'iFixGuide - Professional iPhone & iOS Troubleshooting',
    short_name: 'iFixGuide',
    description: 'Step-by-step guides to solve any iPhone or iOS problem. Expert solutions for battery issues, connectivity problems, and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
