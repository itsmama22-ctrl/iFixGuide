import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/posts'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
import RelatedPosts from '@/components/RelatedPosts'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  const posts = getAllPosts()
  const iPhonePosts = posts.filter(post => post.category === 'iphone')
  
  return iPhonePosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, 'iphone')
  
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
  const post = getPostBySlug(params.slug, 'iphone')

  if (!post) {
    notFound()
  }

  // Get category-specific image from Pexels
  const getCategoryImage = () => {
    const iPhoneImages = [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
    const index = Math.abs(post.slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % iPhoneImages.length
    return iPhoneImages[index]
  }

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(post.content)
  const contentHtml = processedContent.toString()

  // Get related posts
  const relatedPosts = getRelatedPosts(post)

  // Schema.org structured data
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    publishedTime: post.date,
    modifiedTime: post.date,
    author: post.author,
    image: getCategoryImage(),
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
              src={getCategoryImage()}
              alt={post.title}
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="eager"
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