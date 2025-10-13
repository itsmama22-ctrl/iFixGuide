import Link from 'next/link'
import { format } from 'date-fns'

interface PostCardProps {
  title: string
  description: string
  date: string
  category: string
  slug: string
  image: string
  readTime: number
}

export default function PostCard({
  title,
  description,
  date,
  category,
  slug,
  image,
  readTime,
}: PostCardProps) {
  const categoryNames: { [key: string]: string } = {
    'iphone': 'iPhone',
    'battery': 'Battery',
    'connectivity': 'Connectivity',
    'camera': 'Camera',
    'app-issues': 'App Issues',
    'ios-updates': 'iOS Updates',
  }


  return (
    <article className="card overflow-hidden h-full flex flex-col">
      <Link href={`/troubleshooting/${category}/${slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          {/* Gradient background with category colors */}
          <div className={`w-full h-full ${
            category === 'iphone' ? 'bg-gradient-to-br from-blue-500 to-blue-700' :
            category === 'battery' ? 'bg-gradient-to-br from-green-500 to-green-700' :
            category === 'connectivity' ? 'bg-gradient-to-br from-purple-500 to-purple-700' :
            category === 'camera' ? 'bg-gradient-to-br from-yellow-500 to-yellow-700' :
            category === 'app-issues' ? 'bg-gradient-to-br from-red-500 to-red-700' :
            'bg-gradient-to-br from-cyan-500 to-cyan-700'
          }`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-center p-4">
                <div className="text-4xl mb-2">
                  {category === 'iphone' && '📱'}
                  {category === 'battery' && '🔋'}
                  {category === 'connectivity' && '📡'}
                  {category === 'camera' && '📷'}
                  {category === 'app-issues' && '📲'}
                  {category === 'ios-updates' && '⚙️'}
                </div>
                <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  {categoryNames[category] || category}
                </div>
                <div className="text-xs mt-2 opacity-80">
                  {category === 'iphone' && 'iPhone Repair & Troubleshooting'}
                  {category === 'battery' && 'Battery & Charging Issues'}
                  {category === 'connectivity' && 'WiFi, Bluetooth & Network'}
                  {category === 'camera' && 'Camera & Photo Problems'}
                  {category === 'app-issues' && 'App Crashes & Software'}
                  {category === 'ios-updates' && 'iOS Updates & System'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <Link 
            href={`/troubleshooting/${category}`}
            className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full hover:bg-primary-100 transition-colors"
          >
            {categoryNames[category] || category}
          </Link>
          <span className="text-sm text-gray-500">
            {readTime} min read
          </span>
        </div>
        
        <Link href={`/troubleshooting/${category}/${slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <time className="text-sm text-gray-500" dateTime={date}>
            {format(new Date(date), 'MMM dd, yyyy')}
          </time>
          <Link
            href={`/troubleshooting/${category}/${slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group"
          >
            Read More
            <svg
              className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

