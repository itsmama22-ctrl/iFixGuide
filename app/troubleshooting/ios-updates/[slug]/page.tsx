import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/utils/posts'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/utils/seo'
import BeautifulPostHeader from '@/components/BeautifulPostHeader'
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
  const post = getPostBySlug('iphone', params.slug)
  
  if (!post) {
    return {}
  }

  return generateSEO({
    title: post.title,
    description: post.description,
    url: `/troubleshooting/iphone/${params.slug}`,
    type: 'article',
    publishedTime: post.date,
    keywords: post.keywords,
    image: post.image,
    section: 'iPhone Troubleshooting',
  })
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('iphone', params.slug)

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
    url: `/troubleshooting/iphone/${params.slug}`,
    publishedTime: post.date,
    author: post.author,
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
        <BeautifulPostHeader
          title={post.title}
          date={post.date}
          readTime={post.readTime}
          author={post.author}
          category="iphone"
          breadcrumbs={[
            { name: 'Troubleshooting', href: '/troubleshooting' },
            { name: 'iPhone', href: '/troubleshooting/iphone' },
            { name: post.title, href: `/troubleshooting/iphone/${params.slug}` }
          ]}
        />

        {/* Content Section */}
        <div className="container-custom max-w-4xl py-16">
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

