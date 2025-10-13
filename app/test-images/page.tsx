'use client'

import Image from 'next/image'
import { getAllPosts } from '@/utils/posts'

export default function TestImagesPage() {
  const posts = getAllPosts()
  const testPosts = posts.slice(0, 6)

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testPosts.map((post, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg">
            <h3 className="font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Category: {post.category}</p>
            <p className="text-sm text-gray-600 mb-2">Slug: {post.slug}</p>
            <p className="text-xs text-gray-500 mb-4 break-all">
              Image URL: {post.image}
            </p>
            
            <div className="relative h-48 border border-gray-200 rounded">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded"
                onError={(e) => {
                  console.log('Image failed to load:', post.image)
                  console.log('Error:', e)
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', post.image)
                }}
              />
            </div>
            
            <p className="text-xs text-gray-500 mt-2">
              Status: Check console for load/error messages
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="font-bold mb-2">Instructions:</h2>
        <p>1. Open browser console (F12)</p>
        <p>2. Look for "Image loaded successfully" or "Image failed to load" messages</p>
        <p>3. Check if images are visible above</p>
      </div>
    </div>
  )
}
