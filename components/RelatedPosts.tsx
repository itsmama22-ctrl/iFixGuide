import PostCard from './PostCard'
import { Post } from '@/utils/posts'

interface RelatedPostsProps {
  posts: Post[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-16 bg-gray-50 py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  )
}

