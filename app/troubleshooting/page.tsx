import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'All Troubleshooting Guides - iFixGuide',
  description: 'Browse all iPhone and iOS troubleshooting guides. Find solutions for battery, connectivity, camera, app issues, and more.',
  url: '/troubleshooting',
})

export default function TroubleshootingIndex() {
  const allPosts = getAllPosts()

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <Breadcrumbs items={[{ name: 'Troubleshooting', href: '/troubleshooting' }]} />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          All Troubleshooting Guides
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Browse our complete collection of iPhone and iOS troubleshooting solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
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
    </div>
  )
}

