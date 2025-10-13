import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/utils/posts'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/utils/seo'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedPosts from '@/components/RelatedPosts'
import { remark } from 'remark'
import html from 'remark-html'
import { format } from 'date-fns'

export async function generateStaticParams() {
  const posts = getAllPosts()
  const batteryPosts = posts.filter(post => post.category === 'battery')
  
  return batteryPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('battery', params.slug)
  
  if (!post) {
    return {}
  }

  return generateSEO({
    title: post.title,
    description: post.description,
    url: `/troubleshooting/battery/${params.slug}`,
    type: 'article',
    publishedTime: post.date,
    keywords: post.keywords,
    image: post.image,
    section: 'Battery Troubleshooting',
  })
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('battery', params.slug)

  if (!post) {
    notFound()
  }

  const processedContent = await remark()
    .use(html)
    .process(post.content)
  const contentHtml = processedContent.toString()

  const relatedPosts = getRelatedPosts(post)

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    image: post.image,
    url: `/troubleshooting/battery/${params.slug}`,
    publishedTime: post.date,
    author: post.author,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Troubleshooting', url: '/troubleshooting' },
    { name: 'Battery', url: '/troubleshooting/battery' },
    { name: post.title, url: `/troubleshooting/battery/${params.slug}` },
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

      <article className="bg-white py-12">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs 
            items={[
              { name: 'Troubleshooting', href: '/troubleshooting' },
              { name: 'Battery', href: '/troubleshooting/battery' },
              { name: post.title, href: `/troubleshooting/battery/${params.slug}` }
            ]} 
          />

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </time>
              <span>•</span>
              <span>{post.readTime} min read</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          <div 
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>

      <RelatedPosts posts={relatedPosts} />
    </>
  )
}

