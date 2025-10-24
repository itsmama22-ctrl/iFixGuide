import { getPostsByCategory } from '@/lib/posts'
import GuideCard from '@/components/GuideCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'iPhone Troubleshooting Guides - iFixGuide',
  description: 'Comprehensive troubleshooting guides for common iPhone problems. Fix your iPhone issues with our expert step-by-step solutions.',
  url: '/troubleshooting/iphone',
  keywords: ['iPhone troubleshooting', 'iPhone problems', 'iPhone not working', 'fix iPhone', 'iPhone issues'],
})

export default function iPhoneTroubleshooting() {
  const posts = getPostsByCategory('iphone')

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <Breadcrumbs 
          items={[
            { name: 'Troubleshooting', href: '/troubleshooting' },
            { name: 'iPhone', href: '/troubleshooting/iphone' }
          ]} 
        />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          iPhone Troubleshooting Guides
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Expert solutions for common iPhone problems and issues.
        </p>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <GuideCard
                key={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                publishDate={post.publishDate}
                category={post.category}
                slug={post.slug}
                image={post.image}
                readTime={post.readTime}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No guides available yet. Check back soon!</p>
        )}
      </div>
    </div>
  )
}

