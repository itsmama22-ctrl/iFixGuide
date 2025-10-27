import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/posts'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { getImageForPost } from '@/lib/images'
import { getCategoryById } from '@/lib/categories'
import RelatedPosts from '@/components/RelatedPosts'
import { marked } from 'marked'

export async function generateStaticParams() {
  const posts = getAllPosts()
  const iPhonePosts = posts.filter(post => post.category === 'iphone')
  
  return iPhonePosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('iphone', params.slug)
  
  if (!post) {
    return {}
  }

  return generateSEO({
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  })
}

export default async function iPhonePostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('iphone', params.slug)

  if (!post) {
    notFound()
  }

  // Get category info
  const categoryInfo = getCategoryById(post.category)
  const postImage = post.image

  // Convert markdown to HTML
  const contentHtml = marked(post.content)

  // Get related posts
  const relatedPosts = getRelatedPosts(post)

  // Schema.org structured data
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    publishedTime: post.date,
    modifiedTime: post.date,
    author: post.author,
    image: postImage,
    url: `/troubleshooting/iphone/${params.slug}`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Troubleshooting', url: '/troubleshooting' },
    { name: 'iPhone', url: '/troubleshooting/iphone' },
    { name: post.title, url: `/troubleshooting/iphone/${params.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="bg-white">
        <div className="container-custom max-w-4xl py-12">
          {/* 1. POST TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {post.title}
          </h1>

          {/* 2. HTML PICTURE */}
          <div className="mb-8">
            <img
              src={postImage}
              alt={post.title}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* 3. CONTENT (PARAGRAPHS) */}
          <div 
            className="prose prose-lg prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>

      <RelatedPosts posts={relatedPosts} />
    </>
  )
}