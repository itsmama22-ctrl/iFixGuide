'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'iPhone', href: '/troubleshooting/iphone' },
    { name: 'Battery', href: '/troubleshooting/battery' },
    { name: 'Connectivity', href: '/troubleshooting/connectivity' },
    { name: 'Camera', href: '/troubleshooting/camera' },
    { name: 'Apps', href: '/troubleshooting/app-issues' },
    { name: 'iOS', href: '/troubleshooting/ios-updates' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
              <span>🛠️</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                iFixGuide
              </div>
              <div className="text-xs text-gray-500 -mt-1">
                iPhone Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-blue-600'
                    : isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/troubleshooting"
              className="btn-primary px-6 py-2 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="mr-1">🚀</span>
              Start Fixing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 border border-gray-100 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 mx-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200">
              <Link
                href="/troubleshooting"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mx-2 btn-primary text-center py-2 rounded-lg font-semibold"
              >
                <span className="mr-2">🚀</span>
                Start Fixing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}