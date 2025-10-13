export default function TestSimplePage() {
  return (
    <div className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-8">🔍 Simple Image Test</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Test 1: Direct HTML Image</h2>
        <img 
          src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="iPhone test" 
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <p className="text-center text-sm text-gray-600 mt-2">Direct HTML img tag - should show iPhone photo</p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Test 2: Image with CSS</h2>
        <div 
          className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800)'
          }}
        >
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">CSS background image - should show iPhone photo</p>
      </div>

      <div className="bg-red-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Test 3: If you see this text only</h2>
        <p>If you only see gray boxes above, then images are being blocked by:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Ad blocker</li>
          <li>Browser privacy settings</li>
          <li>Network restrictions</li>
          <li>Pexels domain blocking</li>
        </ul>
      </div>
    </div>
  )
}

