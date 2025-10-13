import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/utils/posts'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/utils/seo'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedPosts from '@/components/RelatedPosts'
import PostHeader from '@/components/PostHeader'
import { remark } from 'remark'
import html from 'remark-html'

const CATEGORY = 'battery'

export async function generateStaticParams() {
  const posts = getAllPosts()
  const categoryPosts = posts.filter(post => post.category === CATEGORY)
  
  return categoryPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(CATEGORY, params.slug)
  
  if (!post) {
    return {}
  }

  return generateSEO({
    title: post.title,
    description: post.description,
    url: `/troubleshooting/${CATEGORY}/${params.slug}`,
    type: 'article',
    publishedTime: post.date,
    keywords: post.keywords,
    image: post.image,
    section: 'Battery Troubleshooting',
  })
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(CATEGORY, params.slug)

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
    url: `/troubleshooting/${CATEGORY}/${params.slug}`,
    publishedTime: post.date,
    author: post.author,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Troubleshooting', url: '/troubleshooting' },
    { name: 'Battery', url: `/troubleshooting/${CATEGORY}` },
    { name: post.title, url: `/troubleshooting/${CATEGORY}/${params.slug}` },
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
        <PostHeader
          title={post.title}
          date={post.date}
          readTime={post.readTime}
          author={post.author}
          image={post.image}
          category={CATEGORY}
        />

        <div className="container-custom max-w-4xl py-12">
          <Breadcrumbs 
            items={[
              { name: 'Troubleshooting', href: '/troubleshooting' },
              { name: 'Battery', href: `/troubleshooting/${CATEGORY}` },
              { name: post.title, href: `/troubleshooting/${CATEGORY}/${params.slug}` }
            ]} 
          />

          <div 
            className="prose-custom mt-8"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>

      <RelatedPosts posts={relatedPosts} />
    </>
  )
}
