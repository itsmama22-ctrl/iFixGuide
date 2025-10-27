// High-quality Apple product images for different categories
// Images include source attribution for SEO and ranking

export const categoryImages = {
  iphone: [
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200', // iPhone on desk
    'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200', // iPhone close up
    'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200', // iPhone modern
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200', // iPhone professional
    'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200'  // iPhone sleek
  ],
  battery: [
    'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=1200', // iPhone battery
    'https://images.pexels.com/photos/4792286/pexels-photo-4792286.jpeg?auto=compress&cs=tinysrgb&w=1200', // MacBook battery
    'https://images.pexels.com/photos/4792287/pexels-photo-4792287.jpeg?auto=compress&cs=tinysrgb&w=1200', // iPhone charging
    'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=1200'  // Apple devices
  ],
  connectivity: [
    'https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg?auto=compress&cs=tinysrgb&w=1200', // WiFi devices
    'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200', // AirPods
    'https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg?auto=compress&cs=tinysrgb&w=1200', // Bluetooth
    'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1200'  // Apple Watch
  ],
  camera: [
    'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200', // iPhone camera
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200', // Photography
    'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200', // Camera close up
    'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200'  // Photography tech
  ],
  'app-issues': [
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200', // iPhone apps
    'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200', // App screen
    'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200', // iPhone interface
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200'  // App usage
  ],
  'ios-updates': [
    'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200', // MacBook
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200', // iOS device
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200', // iPhone screen
    'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1200'  // Apple ecosystem
  ],
  // MacBook specific images
  macbook: [
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200', // MacBook Pro
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200', // MacBook Air
    'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200', // MacBook workspace
    'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1200', // MacBook modern
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200'  // MacBook clean
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
