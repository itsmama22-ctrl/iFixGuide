import { getPostsByCategory } from '@/lib/posts'
import GuideCard from '@/components/GuideCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'iPhone Connectivity Issues - WiFi, Bluetooth, Cellular - iFixGuide',
  description: 'Fix iPhone connectivity problems including WiFi not working, Bluetooth issues, and cellular connection problems.',
  url: '/troubleshooting/connectivity',
  keywords: ['iPhone WiFi problems', 'iPhone Bluetooth not working', 'iPhone cellular issues', 'connectivity problems'],
})

export default function ConnectivityTroubleshooting() {
  const posts = getPostsByCategory('connectivity')

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <Breadcrumbs 
          items={[
            { name: 'Troubleshooting', href: '/troubleshooting' },
            { name: 'Connectivity', href: '/troubleshooting/connectivity' }
          ]} 
        />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Connectivity Troubleshooting Guides
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Solve WiFi, Bluetooth, and cellular connectivity problems on your iPhone.
        </p>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <GuideCard
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

