import { NextResponse } from 'next/server'
import { getAllPosts, getAllPostsIncludingScheduled } from '@/lib/posts'

export async function GET() {
  try {
    const publishedPosts = getAllPosts()
    const allPosts = getAllPostsIncludingScheduled()
    
    const now = new Date()
    const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    
    return NextResponse.json({
      status: 'success',
      data: {
        currentDate: currentDate.toISOString().split('T')[0],
        currentTime: now.toISOString(),
        publishedPosts: publishedPosts.length,
        totalPosts: allPosts.length,
        scheduledPosts: allPosts.length - publishedPosts.length,
        publishedPostTitles: publishedPosts.slice(0, 10).map(p => ({
          title: p.title,
          publishDate: p.publishDate,
          category: p.category
        })),
        recentScheduledPosts: allPosts
          .filter(p => new Date(p.publishDate + 'T00:00:00.000Z') > currentDate)
          .slice(0, 10)
          .map(p => ({
            title: p.title,
            publishDate: p.publishDate,
            category: p.category
          }))
      }
    })
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Failed to fetch post data',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
