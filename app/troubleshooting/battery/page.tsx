import { getPostsByCategory } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'iPhone Battery Issues & Solutions - iFixGuide',
  description: 'Fix iPhone battery drain, charging problems, and battery health issues with our comprehensive troubleshooting guides.',
  url: '/troubleshooting/battery',
  keywords: ['iPhone battery drain', 'iPhone not charging', 'battery health', 'iPhone battery problems'],
})

export default function BatteryTroubleshooting() {
  const posts = getPostsByCategory('battery')

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <Breadcrumbs 
          items={[
            { name: 'Troubleshooting', href: '/troubleshooting' },
            { name: 'Battery', href: '/troubleshooting/battery' }
          ]} 
        />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Battery Troubleshooting Guides
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Fix battery drain, charging issues, and improve your iPhone's battery health.
        </p>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
        ) : (
          <p className="text-gray-600">No guides available yet. Check back soon!</p>
        )}
      </div>
    </div>
  )
}

