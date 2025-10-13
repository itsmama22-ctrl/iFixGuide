import Link from 'next/link'
import { getAllPosts } from '@/utils/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.slice(0, 6)

  const categories = [
    {
      name: 'iPhone Issues',
      description: 'Comprehensive guides for iPhone-specific problems',
      href: '/troubleshooting/iphone',
      icon: '📱',
    },
    {
      name: 'Battery Problems',
      description: 'Fix battery drain and charging issues',
      href: '/troubleshooting/battery',
      icon: '🔋',
    },
    {
      name: 'Connectivity',
      description: 'Solve WiFi, Bluetooth, and cellular issues',
      href: '/troubleshooting/connectivity',
      icon: '📡',
    },
    {
      name: 'Camera Issues',
      description: 'Troubleshoot camera and photo problems',
      href: '/troubleshooting/camera',
      icon: '📷',
    },
    {
      name: 'App Problems',
      description: 'Fix app crashes and performance issues',
      href: '/troubleshooting/app-issues',
      icon: '📲',
    },
    {
      name: 'iOS Updates',
      description: 'Navigate iOS update problems',
      href: '/troubleshooting/ios-updates',
      icon: '⚙️',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Expert iPhone & iOS Troubleshooting Guides
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Fix your iPhone problems with our comprehensive, step-by-step guides. 
              From battery issues to camera glitches, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/troubleshooting/iphone" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Browse Guides
              </Link>
              <Link href="/newsletter" className="btn-secondary border-white text-white hover:bg-white/10">
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="card p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Troubleshooting Guides
            </h2>
            <Link 
              href="/troubleshooting/iphone"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                category={post.category}
                slug={post.slug}
                image={post.image}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose iFixGuide?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Solutions</h3>
              <p className="text-gray-600">
                Well-researched guides tested by our team of iOS experts
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Fixes</h3>
              <p className="text-gray-600">
                Step-by-step solutions to get your device working fast
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Always Updated</h3>
              <p className="text-gray-600">
                Regularly updated content for the latest iOS versions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Weekly Tips
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get the latest troubleshooting guides and iOS tips delivered to your inbox every week
          </p>
          <Link href="/newsletter" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Subscribe Now
          </Link>
        </div>
      </section>
    </>
  )
}

