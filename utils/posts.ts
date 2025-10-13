import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  publishDate: string
  category: string
  keywords: string[]
  image: string
  content: string
  readTime: number
  author: string
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): Post[] {
  const categories = ['iphone', 'battery', 'connectivity', 'camera', 'app-issues', 'ios-updates']
  const allPosts: Post[] = []

  categories.forEach(category => {
    const categoryPath = path.join(postsDirectory, category)
    
    if (!fs.existsSync(categoryPath)) {
      return
    }

    const fileNames = fs.readdirSync(categoryPath)
    
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(categoryPath, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          publishDate: data.publishDate || data.date,
          category,
          keywords: data.keywords || [],
          image: data.image || `/images/${category}/${slug}.jpg`,
          content,
          readTime: Math.ceil(content.split(/\s+/).length / 200), // Approximate reading time
          author: data.author || 'iFixGuide Team',
        }
      })

    allPosts.push(...posts)
  })

  // Filter posts based on publish date
  const now = new Date()
  const publishedPosts = allPosts.filter(post => {
    const publishDate = new Date(post.publishDate)
    return publishDate <= now
  })

  // Sort by date descending
  return publishedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.category === category)
}

export function getPostBySlug(category: string, slug: string): Post | null {
  const fullPath = path.join(postsDirectory, category, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    publishDate: data.publishDate || data.date,
    category,
    keywords: data.keywords || [],
    image: data.image || `/images/${category}/${slug}.jpg`,
    content,
    readTime: Math.ceil(content.split(/\s+/).length / 200),
    author: data.author || 'iFixGuide Team',
  }
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  const allPosts = getAllPosts()
  
  // Filter out current post and get posts from same category
  const sameCategoryPosts = allPosts.filter(
    post => post.category === currentPost.category && post.slug !== currentPost.slug
  )

  // If not enough posts in same category, add posts from other categories
  if (sameCategoryPosts.length < limit) {
    const otherPosts = allPosts.filter(
      post => post.category !== currentPost.category && post.slug !== currentPost.slug
    )
    return [...sameCategoryPosts, ...otherPosts].slice(0, limit)
  }

  return sameCategoryPosts.slice(0, limit)
}

export function searchPosts(query: string): Post[] {
  const allPosts = getAllPosts()
  const lowercaseQuery = query.toLowerCase()

  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.description.toLowerCase().includes(lowercaseQuery) ||
    post.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery))
  )
}

