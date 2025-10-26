// High-quality Apple product images for different categories
// Images include source attribution for SEO and ranking

export const categoryImages = {
  iphone: [
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200&q=80', // iPhone on desk
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80', // iPhone close up
    'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&q=80', // iPhone modern
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80', // iPhone professional
    'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&q=80'  // iPhone sleek
  ],
  battery: [
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80', // iPhone battery
    'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1200&q=80', // MacBook battery
    'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&q=80', // iPhone charging
    'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1200&q=80'  // Apple devices
  ],
  connectivity: [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80', // WiFi devices
    'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1200&q=80', // AirPods
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80', // Bluetooth
    'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&q=80'  // Apple Watch
  ],
  camera: [
    'https://images.unsplash.com/photo-1591290615322-cbd48abf7ae3?w=1200&q=80', // iPhone camera
    'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&q=80', // Photography
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80', // Camera close up
    'https://images.unsplash.com/photo-1598062548091-a32914380f32?w=1200&q=80'  // Photography tech
  ],
  'app-issues': [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80', // iPhone apps
    'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&q=80', // App screen
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80', // iPhone interface
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80'  // App usage
  ],
  'ios-updates': [
    'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1200&q=80', // MacBook
    'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&q=80', // iOS device
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80', // iPhone screen
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80'  // Apple ecosystem
  ],
  // MacBook specific images
  macbook: [
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80', // MacBook Pro
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80', // MacBook Air
    'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1200&q=80', // MacBook workspace
    'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1200&q=80', // MacBook modern
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80'  // MacBook clean
  ]
}

// Image attribution URLs for SEO and backlinking
export const imageAttribution = {
  getAttributionUrl: (imageUrl: string, siteUrl: string = 'https://ifixguide.com') => {
    return `${siteUrl}/images/photo-from-unsplash?source=${encodeURIComponent(imageUrl)}`
  }
}

export function getImageForPost(category: string, slug: string): string {
  const images = categoryImages[category as keyof typeof categoryImages] || categoryImages.iphone
  const index = Math.abs(slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % images.length
  return images[index]
}

// Get image attribution data
export function getImageAttribution(imageUrl: string, title: string) {
  return {
    url: imageUrl,
    attribution: 'Photo from Unsplash | iFixGuide.com',
    siteUrl: 'https://ifixguide.com',
    alt: title ? `${title} - iFixGuide.com` : 'iFixGuide Troubleshooting Guide'
  }
}
