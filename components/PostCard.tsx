import GuideCard from './GuideCard'

interface PostCardProps {
  title: string
  description: string
  date: string
  category: string
  slug: string
  image: string
  readTime: number
}

export default function PostCard(props: PostCardProps) {
  return <GuideCard {...props} />
}

