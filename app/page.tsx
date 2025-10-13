import { getAllPosts } from '@/utils/posts'
import PostCard from '@/components/PostCard'
import Hero from '@/components/Hero'
import CategorySection from '@/components/CategorySection'
import FadeIn from '@/components/FadeIn'

export default function Home() {
  const posts = getAllPosts()
  const featuredPosts = posts.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Troubleshooting Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up-to-date with our newest step-by-step solutions for iPhone and iOS problems
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.1}>
                <PostCard
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  category={post.category}
                  slug={post.slug}
                  image={post.image}
                  readTime={post.readTime}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategorySection />

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose iFixGuide?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert solutions that actually work, backed by years of iOS experience
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Expert Solutions",
                description: "Well-researched guides tested by our team of iOS experts and verified by real users"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Quick Fixes",
                description: "Step-by-step solutions designed to get your device working fast with minimal effort"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Always Updated",
                description: "Regularly updated content for the latest iOS versions and iPhone models"
              }
            ].map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.2} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact our expert team and we'll help you find the perfect solution to your iPhone problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-2xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Expert Help
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="/newsletter" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-2xl shadow-lg hover:shadow-xl hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Join Our Newsletter
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
