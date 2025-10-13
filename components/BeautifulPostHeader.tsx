import { format } from 'date-fns'

interface BeautifulPostHeaderProps {
  title: string
  date: string
  readTime: number
  author: string
  category: string
  breadcrumbs: Array<{ name: string; href: string }>
}

const categoryData: { [key: string]: { name: string; icon: string; gradient: string } } = {
  'iphone': {
    name: 'iPhone Troubleshooting',
    icon: '📱',
    gradient: 'from-blue-600 to-blue-800'
  },
  'battery': {
    name: 'Battery Solutions',
    icon: '🔋',
    gradient: 'from-green-600 to-green-800'
  },
  'connectivity': {
    name: 'Connectivity Fixes',
    icon: '📡',
    gradient: 'from-purple-600 to-purple-800'
  },
  'camera': {
    name: 'Camera Guides',
    icon: '📷',
    gradient: 'from-orange-600 to-orange-800'
  },
  'app-issues': {
    name: 'App Issues',
    icon: '📲',
    gradient: 'from-red-600 to-red-800'
  },
  'ios-updates': {
    name: 'iOS Updates',
    icon: '⚙️',
    gradient: 'from-cyan-600 to-cyan-800'
  }
}

export default function BeautifulPostHeader({ 
  title, 
  date, 
  readTime, 
  author, 
  category, 
  breadcrumbs 
}: BeautifulPostHeaderProps) {
  const data = categoryData[category] || categoryData['iphone']

  return (
    <div className={`bg-gradient-to-br ${data.gradient} text-white py-20`}>
      <div className="container-custom max-w-4xl">
        <nav className="flex items-center space-x-2 text-white/80 mb-8">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              <span className="text-sm hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </nav>

        <header className="mt-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-white/20 backdrop-blur-sm mb-6">
            <span className="mr-2">{data.icon}</span>
            {data.name}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={date}>
                {format(new Date(date), 'MMMM dd, yyyy')}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>By {author}</span>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
