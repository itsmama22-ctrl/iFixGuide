'use client'

export default function ImageTestPage() {
  const testImages = [
    {
      name: 'iPhone Photo 1',
      url: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'iphone'
    },
    {
      name: 'iPhone Photo 2',
      url: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'iphone'
    },
    {
      name: 'Battery Photo',
      url: 'https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'battery'
    },
  ]

  return (
    <div className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-8">🔍 Image Loading Test</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Instructions:</h2>
        <ul className="space-y-2">
          <li>✅ If you see photos below = Images are working!</li>
          <li>❌ If you see gray boxes = Images not loading</li>
          <li>📱 Open browser console (F12) to see any errors</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {testImages.map((img, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold mb-4">{img.name}</h3>
            
            {/* Test Image */}
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img
                src={img.url}
                alt={img.name}
                className="w-full h-full object-cover"
                onLoad={() => console.log(`✅ LOADED: ${img.name}`)}
                onError={(e) => console.error(`❌ FAILED: ${img.name}`, e)}
              />
            </div>
            
            <p className="text-xs text-gray-500 break-all mb-2">
              <strong>URL:</strong> {img.url}
            </p>
            
            <p className="text-xs text-gray-500">
              <strong>Category:</strong> {img.category}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">✅ If Images Show Above:</h2>
        <p className="mb-4">
          Images ARE working! The homepage and post pages should also show images.
        </p>
        <p>
          If homepage/posts still don't show images, it might be a caching issue. 
          Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
        </p>
      </div>

      <div className="bg-red-50 p-6 rounded-lg mt-4">
        <h2 className="text-2xl font-bold mb-4">❌ If You See Gray Boxes:</h2>
        <p className="mb-4">
          Images are blocked. Check browser console (F12) for errors.
        </p>
        <p>
          Common causes:
        </p>
        <ul className="list-disc ml-6">
          <li>Ad blocker blocking Pexels</li>
          <li>Browser privacy settings</li>
          <li>Network restrictions</li>
        </ul>
      </div>
    </div>
  )
}

