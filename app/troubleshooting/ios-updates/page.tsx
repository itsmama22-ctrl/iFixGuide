import { getPostsByCategory } from '@/utils/posts'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateSEO } from '@/utils/seo'

export const metadata = generateSEO({
  title: 'iOS Update Problems & Fixes - iFixGuide',
  description: 'Troubleshoot iOS update issues including update failures, stuck downloads, and post-update problems.',
  url: '/troubleshooting/ios-updates',
  keywords: ['iOS update failed', 'iOS update stuck', 'iPhone wont update', 'iOS update problems'],
})

export default function IOSUpdatesTroubleshooting() {
  const posts = getPostsByCategory('ios-updates')

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <Breadcrumbs 
          items={[
            { name: 'Troubleshooting', href: '/troubleshooting' },
            { name: 'iOS Updates', href: '/troubleshooting/ios-updates' }
          ]} 
        />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          iOS Update Troubleshooting Guides
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Fix iOS update failures, stuck downloads, and post-update problems.
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

