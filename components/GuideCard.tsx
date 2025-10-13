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

  const categoryData: { [key: string]: { gradient: string; icon: string; pattern: string } } = {
    'iphone': {
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      icon: '📱',
      pattern: 'bg-blue-400/10'
    },
    'battery': {
      gradient: 'from-green-500 via-green-600 to-green-700',
      icon: '🔋',
      pattern: 'bg-green-400/10'
    },
    'connectivity': {
      gradient: 'from-purple-500 via-purple-600 to-purple-700',
      icon: '📡',
      pattern: 'bg-purple-400/10'
    },
    'camera': {
      gradient: 'from-orange-500 via-orange-600 to-orange-700',
      icon: '📷',
      pattern: 'bg-orange-400/10'
    },
    'app-issues': {
      gradient: 'from-red-500 via-red-600 to-red-700',
      icon: '📲',
      pattern: 'bg-red-400/10'
    },
    'ios-updates': {
      gradient: 'from-cyan-500 via-cyan-600 to-cyan-700',
      icon: '⚙️',
      pattern: 'bg-cyan-400/10'
    }
  }

  const data = categoryData[category] || categoryData['iphone']

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
          <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient}`}>
            {/* Animated Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              {/* Circles Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full border-4 border-white/30 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full border-2 border-white/20 -ml-16 -mb-16"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10"></div>
              
              {/* Grid Pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
          
          {/* Large Category Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-8xl filter drop-shadow-2xl"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {data.icon}
            </motion.div>
          </div>
          
          {/* Top Gradient Overlay for better badge visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-white text-gray-900 shadow-xl">
              <span className="mr-2">{data.icon}</span>
              {categoryNames[category]}
            </span>
          </div>
          
          {/* Read Time */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-white/95 backdrop-blur-sm text-gray-900 shadow-xl">
              <span className="mr-1.5">⏱️</span>
              {readTime} min
            </span>
          </div>
          
          {/* Bottom Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0"></div>
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
