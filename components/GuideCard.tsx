'use client'

import Link from 'next/link'
import Image from 'next/image'
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

  // Real photos from Pexels for each category
  const getCategoryImage = (category: string) => {
    const categoryImages: { [key: string]: string[] } = {
      'iphone': [
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      'battery': [
        'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4792287/pexels-photo-4792287.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      'connectivity': [
        'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      'camera': [
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      'app-issues': [
        'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      'ios-updates': [
        'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      ]
    }
    const images = categoryImages[category] || categoryImages['iphone']
    return images[Math.floor(Math.random() * images.length)]
  }

  const categoryIcons: { [key: string]: string } = {
    'iphone': '📱',
    'battery': '🔋',
    'connectivity': '📡',
    'camera': '📷',
    'app-issues': '📲',
    'ios-updates': '⚙️'
  }

  const imageUrl = image && image.startsWith('http') ? image : getCategoryImage(category)

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
          {/* Real Image */}
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-30">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-white text-gray-900 shadow-xl">
              <span className="mr-2">{categoryIcons[category]}</span>
              {categoryNames[category]}
            </span>
          </div>
          
          {/* Read Time */}
          <div className="absolute top-4 right-4 z-30">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-white/95 backdrop-blur-sm text-gray-900 shadow-xl">
              <span className="mr-1.5">⏱️</span>
              {readTime} min
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-8 flex flex-col flex-grow bg-white">
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
          <time className="text-sm text-gray-500 font-medium flex items-center" dateTime={date}>
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {format(new Date(date), 'MMM dd, yyyy')}
          </time>
          <Link
            href={`/troubleshooting/${category}/${slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-200"
          >
            Read Guide
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
