'use client'

import { format } from 'date-fns'

interface PostHeaderProps {
  title: string
  date: string
  readTime: number
  author: string
  image: string
  category: string
}

const categoryData: { [key: string]: { name: string; icon: string; images: string[] } } = {
  'iphone': {
    name: 'iPhone Troubleshooting',
    icon: '📱',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  'battery': {
    name: 'Battery Solutions',
    icon: '🔋',
    images: [
      'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4792287/pexels-photo-4792287.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/163123/mobile-phone-battery-technology-phone-163123.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4792277/pexels-photo-4792277.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  'connectivity': {
    name: 'Connectivity Fixes',
    icon: '📡',
    images: [
      'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4792281/pexels-photo-4792281.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  'camera': {
    name: 'Camera Guides',
    icon: '📷',
    images: [
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  'app-issues': {
    name: 'App Issues',
    icon: '📲',
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  'ios-updates': {
    name: 'iOS Updates',
    icon: '⚙️',
    images: [
      'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  }
}

export default function PostHeader({ title, date, readTime, author, image, category }: PostHeaderProps) {
  const data = categoryData[category] || categoryData['iphone']
  
  // Get a random image from the category
  const randomImage = data.images[Math.floor(Math.random() * data.images.length)]
  const finalImage = image && image.startsWith('http') ? image : randomImage

  return (
    <div className="relative w-full h-96 bg-gray-900 mb-12 overflow-hidden">
      {/* Real Photo Background */}
      <img
        src={finalImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
        <div className="container-custom max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-white/90 text-gray-900 mb-4 shadow-xl">
            <span className="mr-2">{data.icon}</span>
            {data.name}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl leading-tight">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/95 drop-shadow-lg text-sm md:text-base">
            <time dateTime={date} className="font-medium">
              📅 {format(new Date(date), 'MMMM dd, yyyy')}
            </time>
            <span className="font-bold">•</span>
            <span className="font-medium">⏱️ {readTime} min read</span>
            <span className="font-bold">•</span>
            <span className="font-medium">✍️ {author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
