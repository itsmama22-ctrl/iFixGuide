'use client'

import Link from 'next/link'
import { format } from 'date-fns'
import { motion } from 'framer-motion'

interface GuideCardProps {
  title: string
  description: string
  date: string
  category: string
  slug: string
  image: string
  readTime: number
}

export default function GuideCard({
  title,
  description,
  date,
  category,
  slug,
  image,
  readTime,
}: GuideCardProps) {
  const categoryNames: { [key: string]: string } = {
    'iphone': 'iPhone',
    'battery': 'Battery',
    'connectivity': 'Connectivity',
    'camera': 'Camera',
    'app-issues': 'App Issues',
    'ios-updates': 'iOS Updates',
  }

  const categoryColors: { [key: string]: string } = {
    'iphone': 'from-blue-500 to-blue-700',
    'battery': 'from-green-500 to-green-700',
    'connectivity': 'from-purple-500 to-purple-700',
    'camera': 'from-yellow-500 to-yellow-700',
    'app-issues': 'from-red-500 to-red-700',
    'ios-updates': 'from-cyan-500 to-cyan-700'
  }

  const categoryIcons: { [key: string]: string } = {
    'iphone': '📱',
    'battery': '🔋',
    'connectivity': '📡',
    'camera': '📷',
    'app-issues': '📲',
    'ios-updates': '⚙️'
  }

  // Get image URL with fallback - using direct URLs that work
  const getImageUrl = (category: string, slug: string, image: string) => {
    // If image URL is provided and starts with http, use it
    if (image && image.startsWith('http')) {
      return image
    }
    
    // Category-based fallback images - using working Unsplash URLs
    const imageMap: { [key: string]: string } = {
      'iphone': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
      'battery': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'connectivity': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop',
      'camera': 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop',
      'app-issues': 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop',
      'ios-updates': 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=600&fit=crop'
    }
    return imageMap[category] || imageMap['iphone']
  }

  const imageUrl = getImageUrl(category, slug, image)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="card overflow-hidden h-full flex flex-col group"
    >
      <Link href={`/troubleshooting/${category}/${slug}`} className="block">
        <div className="relative h-56 overflow-hidden bg-gray-200">
          {/* Image */}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('bg-gradient-to-br', categoryColors[category].split(' ')[0], categoryColors[category].split(' ')[1]);
            }}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`}></div>
          
          {/* Category Icon (visible when image loads or as fallback) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
              {categoryIcons[category]}
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-900 shadow-lg">
              {categoryIcons[category]} {categoryNames[category]}
            </span>
          </div>
          
          {/* Read Time */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-900 shadow-lg">
              ⏱️ {readTime} min
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-8 flex flex-col flex-grow">
        {/* Title */}
        <Link href={`/troubleshooting/${category}/${slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight">
            {title}
          </h3>
        </Link>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
          {description}
        </p>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <time className="text-sm text-gray-500 font-medium" dateTime={date}>
            {format(new Date(date), 'MMM dd, yyyy')}
          </time>
          <Link
            href={`/troubleshooting/${category}/${slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-200"
          >
            Read More
            <svg
              className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
