import Link from 'next/link'
import Image from 'next/image'
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
        <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
          <div className="text-white text-center p-4">
            <div className="text-4xl mb-2">
              {category === 'iphone' && '📱'}
              {category === 'battery' && '🔋'}
              {category === 'connectivity' && '📡'}
              {category === 'camera' && '📷'}
              {category === 'app-issues' && '📲'}
              {category === 'ios-updates' && '⚙️'}
            </div>
            <div className="text-sm font-medium opacity-90">{categoryNames[category] || category}</div>
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

