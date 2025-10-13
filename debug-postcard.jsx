// Debug PostCard component to see what image URLs are being passed
import { getAllPosts } from '@/utils/posts'

export default function DebugPostCard() {
  const posts = getAllPosts()
  
  console.log('🔍 Debug PostCard - First 3 posts:')
  posts.slice(0, 3).forEach((post, index) => {
    console.log(`Post ${index + 1}:`)
    console.log(`  Title: ${post.title}`)
    console.log(`  Category: ${post.category}`)
    console.log(`  Slug: ${post.slug}`)
    console.log(`  Image URL: ${post.image}`)
    console.log(`  Image starts with http: ${post.image?.startsWith('http')}`)
    console.log('---')
  })
  
  return (
    <div>
      <h1>Debug PostCard</h1>
      <p>Check console for image URLs</p>
      {posts.slice(0, 3).map((post, index) => (
        <div key={index} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
          <h3>{post.title}</h3>
          <p>Category: {post.category}</p>
          <p>Slug: {post.slug}</p>
          <p>Image: {post.image}</p>
          <p>Is HTTP URL: {post.image?.startsWith('http') ? 'Yes' : 'No'}</p>
          {post.image?.startsWith('http') && (
            <img src={post.image} alt={post.title} style={{width: '200px', height: '150px', objectFit: 'cover'}} />
          )}
        </div>
      ))}
    </div>
  )
}
