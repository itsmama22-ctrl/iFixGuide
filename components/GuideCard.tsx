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
        <div className="relative h-56 overflow-hidden">
          {/* Gradient Background */}
          <div className={`w-full h-full bg-gradient-to-br ${categoryColors[category]} relative`}>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full"></div>
            </div>
            
            {/* Category Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                {categoryIcons[category]}
              </div>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30">
                {categoryNames[category]}
              </span>
            </div>
            
            {/* Read Time */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30">
                {readTime} min read
              </span>
            </div>
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
