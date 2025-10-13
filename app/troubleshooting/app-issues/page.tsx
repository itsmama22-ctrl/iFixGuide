import { getPostsByCategory } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'iPhone App Problems & Solutions - iFixGuide',
  description: 'Fix iPhone app crashes, freezing, not downloading, and other app-related issues with our troubleshooting guides.',
  url: '/troubleshooting/app-issues',
  keywords: ['iPhone app crashing', 'iPhone app not working', 'app keeps freezing', 'app wont download'],
})

export default function AppIssuesTroubleshooting() {
  const posts = getPostsByCategory('app-issues')

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <Breadcrumbs 
          items={[
            { name: 'Troubleshooting', href: '/troubleshooting' },
            { name: 'App Issues', href: '/troubleshooting/app-issues' }
          ]} 
        />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          App Issues Troubleshooting Guides
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Solve app crashes, freezing, download problems, and other app-related issues.
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

