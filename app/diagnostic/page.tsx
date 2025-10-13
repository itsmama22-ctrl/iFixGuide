import { getAllPosts } from '@/utils/posts'

export default function DiagnosticPage() {
  const posts = getAllPosts()
  const firstPost = posts[0]

  return (
    <div className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-8">Diagnostic Page</h1>
      
      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Posts Data</h2>
          <p className="mb-2"><strong>Total Posts:</strong> {posts.length}</p>
          <p className="mb-2"><strong>Published Posts:</strong> {posts.length}</p>
        </section>

        {firstPost && (
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">First Post Example</h2>
            <div className="space-y-2 text-sm">
              <p><strong>Title:</strong> {firstPost.title}</p>
              <p><strong>Category:</strong> {firstPost.category}</p>
              <p><strong>Slug:</strong> {firstPost.slug}</p>
              <p><strong>Image:</strong> {firstPost.image}</p>
              <p><strong>Date:</strong> {firstPost.date}</p>
              <p><strong>Read Time:</strong> {firstPost.readTime} min</p>
            </div>
          </section>
        )}

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Categories Breakdown</h2>
          <div className="space-y-2">
            {['iphone', 'battery', 'connectivity', 'camera', 'app-issues', 'ios-updates'].map(cat => {
              const count = posts.filter(p => p.category === cat).length
              return (
                <p key={cat}>
                  <strong>{cat}:</strong> {count} posts
                </p>
              )
            })}
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Recent Posts (Last 10)</h2>
          <div className="space-y-2">
            {posts.slice(0, 10).map((post, i) => (
              <div key={i} className="border-b pb-2">
                <p className="font-semibold">{post.title}</p>
                <p className="text-sm text-gray-600">
                  {post.category} • {post.date}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

