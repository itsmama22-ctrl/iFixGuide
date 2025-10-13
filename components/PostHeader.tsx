import { format } from 'date-fns'

interface PostHeaderProps {
  title: string
  date: string
  readTime: number
  author: string
  image: string
  category: string
}

const categoryData: { [key: string]: { name: string; icon: string; gradient: string } } = {
  'iphone': {
    name: 'iPhone Troubleshooting',
    icon: '📱',
    gradient: 'from-blue-500 to-blue-700'
  },
  'battery': {
    name: 'Battery Solutions',
    icon: '🔋',
    gradient: 'from-green-500 to-green-700'
  },
  'connectivity': {
    name: 'Connectivity Fixes',
    icon: '📡',
    gradient: 'from-purple-500 to-purple-700'
  },
  'camera': {
    name: 'Camera Guides',
    icon: '📷',
    gradient: 'from-orange-500 to-orange-700'
  },
  'app-issues': {
    name: 'App Issues',
    icon: '📲',
    gradient: 'from-red-500 to-red-700'
  },
  'ios-updates': {
    name: 'iOS Updates',
    icon: '⚙️',
    gradient: 'from-cyan-500 to-cyan-700'
  }
}

export default function PostHeader({ title, date, readTime, author, image, category }: PostHeaderProps) {
  const data = categoryData[category] || categoryData['iphone']

  return (
    <div className={`relative w-full h-96 bg-gradient-to-br ${data.gradient} mb-12 overflow-hidden`}>
      {/* Gradient Background with Pattern */}
      <div className="absolute inset-0">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full border-4 border-white/30 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border-2 border-white/20 -ml-24 -mb-24"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/10"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
      
      {/* Category Icon Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <div className="text-[200px]">{data.icon}</div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
        <div className="container-custom max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-white/30 backdrop-blur-sm mb-4 shadow-xl">
            <span className="mr-2">{data.icon}</span>
            {data.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/95 drop-shadow-lg">
            <time dateTime={date} className="font-medium">
              {format(new Date(date), 'MMMM dd, yyyy')}
            </time>
            <span className="font-bold">•</span>
            <span className="font-medium">{readTime} min read</span>
            <span className="font-bold">•</span>
            <span className="font-medium">By {author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

