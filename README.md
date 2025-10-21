# iFixGuide - iPhone & iOS Troubleshooting Guides

Expert troubleshooting guides for iPhone and iOS problems. Built with Next.js 14 for optimal performance and SEO.

## 🚀 Features

- **98 High-Quality Troubleshooting Guides** - Original, well-researched content
- **Automated Publishing** - Posts publish automatically based on schedule
- **SEO Optimized** - Meta tags, schema markup, sitemaps
- **Mobile-First Design** - Responsive and accessible
- **Newsletter Integration** - Built-in signup functionality
- **Analytics Ready** - Google Analytics integration

## 🛠️ Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
RESEND_API_KEY=your-resend-api-key
```

3. **Run development server:**
```bash
npm run dev
```

## 📁 Project Structure

```
iFixGuide/
├── app/                    # Next.js App Router
├── components/             # React components
├── content/posts/         # Markdown blog posts
│   ├── iphone/           # iPhone guides
│   ├── battery/          # Battery guides
│   ├── connectivity/     # Connectivity guides
│   ├── camera/           # Camera guides
│   ├── app-issues/       # App issues guides
│   └── ios-updates/      # iOS update guides
├── lib/                  # Library functions
└── public/images/        # Static images
```

## 📝 Adding New Posts

Create a new `.md` file in the appropriate category folder:

```markdown
---
title: "Your Post Title"
description: "Brief description"
date: "2025-10-21"
publishDate: "2025-10-22"  # When to publish
keywords: ["keyword1", "keyword2"]
author: "iFixGuide Team"
---

Your content here...
```

## 🚀 Deployment

1. **Push to GitHub**
2. **Deploy on Vercel** - Import your repository
3. **Add environment variables** in Vercel dashboard

## 📊 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Schema.org markup
- ✅ Auto-generated sitemap
- ✅ Mobile-responsive
- ✅ Fast loading times

## 🎯 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** Markdown with gray-matter
- **Deployment:** Vercel

---

**Built with ❤️ for helping iPhone users solve their problems.**