import GuideCard from '@/components/GuideCard'

export default function TestCardsPage() {
  // Test data
  const testCards = [
    {
      title: "iPhone Screen Not Responding",
      description: "Fix your unresponsive iPhone screen with these proven troubleshooting steps.",
      date: "2025-01-10",
      category: "iphone",
      slug: "iphone-screen-not-responding",
      image: "",
      readTime: 5
    },
    {
      title: "iPhone Battery Draining Fast",
      description: "Learn how to identify and fix the causes of rapid battery drain on your iPhone.",
      date: "2025-01-09",
      category: "battery",
      slug: "iphone-battery-draining-fast",
      image: "",
      readTime: 7
    },
    {
      title: "iPhone WiFi Not Working",
      description: "Step-by-step guide to fix WiFi connectivity issues on your iPhone.",
      date: "2025-01-08",
      category: "connectivity",
      slug: "iphone-wifi-not-working",
      image: "",
      readTime: 6
    }
  ]

  return (
    <div className="container-custom py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Card Design Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {testCards.map((card) => (
          <GuideCard key={card.slug} {...card} />
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Card Features:</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Beautiful gradient backgrounds</li>
          <li>✅ Animated emoji icons</li>
          <li>✅ Smooth hover effects</li>
          <li>✅ Category-specific colors</li>
          <li>✅ Professional badges</li>
          <li>✅ No external images needed</li>
        </ul>
      </div>
    </div>
  )
}

