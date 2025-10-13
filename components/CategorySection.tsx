'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    name: 'iPhone Issues',
    description: 'Comprehensive guides for iPhone-specific problems',
    href: '/troubleshooting/iphone',
    icon: '📱',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    stats: '28 Guides'
  },
  {
    name: 'Battery Problems',
    description: 'Fix battery drain and charging issues',
    href: '/troubleshooting/battery',
    icon: '🔋',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-100',
    stats: '23 Guides'
  },
  {
    name: 'Connectivity',
    description: 'Solve WiFi, Bluetooth, and cellular issues',
    href: '/troubleshooting/connectivity',
    icon: '📡',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    stats: '23 Guides'
  },
  {
    name: 'Camera Issues',
    description: 'Troubleshoot camera and photo problems',
    href: '/troubleshooting/camera',
    icon: '📷',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    iconBg: 'bg-yellow-100',
    stats: '9 Guides'
  },
  {
    name: 'App Problems',
    description: 'Fix app crashes and performance issues',
    href: '/troubleshooting/app-issues',
    icon: '📲',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconBg: 'bg-red-100',
    stats: '8 Guides'
  },
  {
    name: 'iOS Updates',
    description: 'Navigate iOS update problems',
    href: '/troubleshooting/ios-updates',
    icon: '⚙️',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    iconBg: 'bg-cyan-100',
    stats: '13 Guides'
  },
]

export default function CategorySection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the exact solution you need with our organized troubleshooting guides
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link href={category.href} className="block h-full">
                <div className={`${category.bgColor} rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl group border border-transparent hover:border-gray-200/50`}>
                  {/* Icon */}
                  <div className={`${category.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Stats and Arrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">
                      {category.stats}
                    </span>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                      Explore
                      <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/troubleshooting/iphone" className="btn-secondary text-lg">
            View All Guides
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
