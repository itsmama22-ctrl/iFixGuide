export const categories = [
  {
    id: 'iphone',
    name: 'iPhone Issues',
    slug: 'iphone',
    icon: '📱',
    gradient: 'from-blue-500 to-blue-700',
    description: 'Screen, battery, and hardware fixes',
    color: 'blue'
  },
  {
    id: 'battery',
    name: 'Battery Problems',
    slug: 'battery',
    icon: '🔋',
    gradient: 'from-green-500 to-green-700',
    description: 'Power and charging solutions',
    color: 'green'
  },
  {
    id: 'connectivity',
    name: 'Connectivity',
    slug: 'connectivity',
    icon: '📡',
    gradient: 'from-purple-500 to-purple-700',
    description: 'WiFi, Bluetooth, and network fixes',
    color: 'purple'
  },
  {
    id: 'camera',
    name: 'Camera Issues',
    slug: 'camera',
    icon: '📷',
    gradient: 'from-orange-500 to-orange-700',
    description: 'Photo and video troubleshooting',
    color: 'orange'
  },
  {
    id: 'app-issues',
    name: 'App Problems',
    slug: 'app-issues',
    icon: '📲',
    gradient: 'from-red-500 to-red-700',
    description: 'App crashes and performance',
    color: 'red'
  },
  {
    id: 'ios-updates',
    name: 'iOS Updates',
    slug: 'ios-updates',
    icon: '⚙️',
    gradient: 'from-cyan-500 to-cyan-700',
    description: 'Software and update issues',
    color: 'cyan'
  }
] as const

export type CategoryId = typeof categories[number]['id']

export function getCategoryById(id: string) {
  return categories.find(cat => cat.id === id)
}

export function getCategoryBySlug(slug: string) {
  return categories.find(cat => cat.slug === slug)
}
