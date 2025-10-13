import Image from 'next/image'
import { format } from 'date-fns'

interface PostHeaderProps {
  title: string
  date: string
  readTime: number
  author: string
  image: string
  category: string
}

const categoryData: { [key: string]: { name: string; icon: string; gradient: string; placeholder: string } } = {
  'iphone': {
    name: 'iPhone Troubleshooting',
    icon: '📱',
    gradient: 'from-blue-500 to-blue-700',
    placeholder: 'https://placehold.co/1200x600/3b82f6/ffffff?text=iPhone+Troubleshooting'
  },
  'battery': {
    name: 'Battery Solutions',
    icon: '🔋',
    gradient: 'from-green-500 to-green-700',
    placeholder: 'https://placehold.co/1200x600/10b981/ffffff?text=Battery+Solutions'
  },
  'connectivity': {
    name: 'Connectivity Fixes',
    icon: '📡',
    gradient: 'from-purple-500 to-purple-700',
    placeholder: 'https://placehold.co/1200x600/8b5cf6/ffffff?text=Connectivity+Fixes'
  },
  'camera': {
    name: 'Camera Guides',
    icon: '📷',
    gradient: 'from-orange-500 to-orange-700',
    placeholder: 'https://placehold.co/1200x600/f97316/ffffff?text=Camera+Guides'
  },
  'app-issues': {
    name: 'App Issues',
    icon: '📲',
    gradient: 'from-red-500 to-red-700',
    placeholder: 'https://placehold.co/1200x600/ef4444/ffffff?text=App+Issues'
  },
  'ios-updates': {
    name: 'iOS Updates',
    icon: '⚙️',
    gradient: 'from-cyan-500 to-cyan-700',
    placeholder: 'https://placehold.co/1200x600/06b6d4/ffffff?text=iOS+Updates'
  }
}

export default function PostHeader({ title, date, readTime, author, image, category }: PostHeaderProps) {
  const data = categoryData[category] || categoryData['iphone']
  const imageUrl = image && image.startsWith('http') ? image : data.placeholder

  return (
    <div className={`relative w-full h-96 bg-gradient-to-br ${data.gradient} mb-12`}>
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      
      {/* Category Icon Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="text-9xl">{data.icon}</div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
        <div className="container-custom max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm mb-4">
            {data.icon} {data.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <time dateTime={date}>
              {format(new Date(date), 'MMMM dd, yyyy')}
            </time>
            <span>•</span>
            <span>{readTime} min read</span>
            <span>•</span>
            <span>By {author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

