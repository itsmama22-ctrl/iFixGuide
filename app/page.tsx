import { getAllPosts } from '@/lib/posts'
import { categories } from '@/lib/categories'
import { POSTS_CONFIG } from '@/lib/constants'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export default function HomePage() {
  const posts = getAllPosts()
  const featuredPosts = posts.slice(0, POSTS_CONFIG.featuredPostsCount)
  
  const categoriesWithCount = categories.map(cat => ({
    ...cat,
    count: posts.filter(p => p.category === cat.id).length
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 mb-6">
                <span className="mr-2">🛠️</span>
                Professional iPhone & iOS Troubleshooting
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Fix Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  iPhone Issues
                </span>
                <span className="block">Like a Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Step-by-step guides to solve any iPhone or iOS problem. From battery issues to app crashes, 
                we've got you covered with professional solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/troubleshooting"
                  className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="mr-2">🚀</span>
                  Start Fixing Now
                </Link>
                <Link 
                  href="/troubleshooting/iphone"
                  className="btn-secondary text-lg px-8 py-4 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
                >
                  <span className="mr-2">📱</span>
                  iPhone Guides
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{posts.length}+</div>
                <div className="text-gray-600 font-medium">Expert Guides</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">6</div>
                <div className="text-gray-600 font-medium">Categories</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Free Solutions</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Available</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Choose Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Problem Category
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Browse our comprehensive guides organized by problem type for quick solutions
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesWithCount.map((category, index) => (
              <FadeIn key={category.slug} delay={index * 100}>
                <Link 
                  href={`/troubleshooting/${category.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-500">
                        {category.count} Guides
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Latest
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Expert Guides
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fresh solutions to the most common iPhone and iOS problems
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 100}>
                <Link 
                  href={`/troubleshooting/${post.category}/${post.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                        {post.category}
                      </div>
                      <span className="text-sm text-gray-500">{post.readTime} min</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="text-center mt-12">
              <Link 
                href="/troubleshooting"
                className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="mr-2">📚</span>
                View All Guides
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Can't Find Your Solution?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact our expert team for personalized help with your specific iPhone or iOS issue
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">💬</span>
                  Contact Us
                </Link>
                <Link 
                  href="/troubleshooting"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  <span className="mr-2">🔍</span>
                  Browse All Issues
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}