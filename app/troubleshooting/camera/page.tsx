import { getPostsByCategory } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'iPhone Camera Problems & Fixes - iFixGuide',
  description: 'Troubleshoot iPhone camera issues including blurry photos, camera not working, black screen, and flash problems.',
  url: '/troubleshooting/camera',
  keywords: ['iPhone camera not working', 'iPhone camera blurry', 'iPhone camera black screen', 'camera problems'],
})

export default function CameraTroubleshooting() {
  const posts = getPostsByCategory('camera')

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <Breadcrumbs 
          items={[
            { name: 'Troubleshooting', href: '/troubleshooting' },
            { name: 'Camera', href: '/troubleshooting/camera' }
          ]} 
        />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Camera Troubleshooting Guides
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Fix camera issues including blurry photos, black screen, and flash problems.
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

