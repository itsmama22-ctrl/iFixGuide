#!/bin/bash

# Array of categories
categories=("battery" "camera" "connectivity" "app-issues" "ios-updates")

for cat in "${categories[@]}"; do
  cat > "app/troubleshooting/$cat/[slug]/page.tsx" << 'ENDOFFILE'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/utils/posts'
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from '@/utils/seo'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedPosts from '@/components/RelatedPosts'
import PostHeader from '@/components/PostHeader'
import { remark } from 'remark'
import html from 'remark-html'

const CATEGORY = 'CATEGORY_NAME'

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
    section: 'CATEGORY_TITLE',
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
    { name: 'BREADCRUMB_NAME', url: `/troubleshooting/${CATEGORY}` },
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
              { name: 'BREADCRUMB_NAME', href: `/troubleshooting/${CATEGORY}` },
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
ENDOFFILE

  # Replace placeholders based on category
  case "$cat" in
    "battery")
      sed -i '' "s/CATEGORY_NAME/battery/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      sed -i '' "s/CATEGORY_TITLE/Battery Troubleshooting/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      sed -i '' "s/BREADCRUMB_NAME/Battery/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      ;;
    "camera")
      sed -i '' "s/CATEGORY_NAME/camera/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      sed -i '' "s/CATEGORY_TITLE/Camera Troubleshooting/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      sed -i '' "s/BREADCRUMB_NAME/Camera/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      ;;
    "connectivity")
      sed -i '' "s/CATEGORY_NAME/connectivity/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      sed -i '' "s/CATEGORY_TITLE/Connectivity Troubleshooting/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      sed -i '' "s/BREADCRUMB_NAME/Connectivity/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      ;;
    "app-issues")
      sed -i '' "s/CATEGORY_NAME/app-issues/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      sed -i '' "s/CATEGORY_TITLE/App Issues Troubleshooting/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      sed -i '' "s/BREADCRUMB_NAME/App Issues/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      ;;
    "ios-updates")
      sed -i '' "s/CATEGORY_NAME/ios-updates/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      sed -i '' "s/CATEGORY_TITLE/iOS Updates Troubleshooting/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      sed -i '' "s/BREADCRUMB_NAME/iOS Updates/g" "app/troubleshooting/$cat/[slug]/page.tsx"
      ;;
  esac
done

echo "All category pages updated!"

