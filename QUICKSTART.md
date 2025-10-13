# iFixGuide - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed
- Vercel account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/itsmama22-ctrl/iFixGuide.git

# Navigate to project directory
cd iFixGuide

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/              # Next.js pages and routes
├── components/       # React components
├── lib/             # Utilities (posts, SEO, analytics)
├── content/posts/   # Markdown troubleshooting posts
└── public/          # Static assets
```

## 🎨 Key Features

1. **Homepage** - Hero section, categories, featured posts
2. **Troubleshooting Hub** - 6 categories, 100+ guides
3. **Individual Posts** - Title → Image → Content
4. **Legal Pages** - Privacy, Terms, Disclaimer
5. **Forms** - Contact, Newsletter

## 📝 Adding New Posts

Create a markdown file in `content/posts/{category}/{slug}.md`:

```markdown
---
title: "How to Fix iPhone Battery Drain"
description: "Quick guide to fix iPhone battery drain issues"
date: "2025-10-13"
publishDate: "2025-10-13"
category: "battery"
author: "iFixGuide Team"
readTime: 5
keywords:
  - iPhone battery drain
  - iOS battery fix
  - battery optimization
---

# How to Fix iPhone Battery Drain

Your solution content here...
```

## 🎯 Categories

- `iphone` - General iPhone issues
- `battery` - Power and charging problems
- `connectivity` - WiFi, Bluetooth, cellular
- `camera` - Photo and video issues
- `app-issues` - App crashes and performance
- `ios-updates` - Software and update problems

## 🚀 Deployment

### Deploy to Vercel

```bash
# Build the project
npm run build

# Push to GitHub
git add .
git commit -m "Update"
git push

# Vercel will auto-deploy from GitHub
```

### Environment Variables (Vercel)

Add these in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://ifixguide.vercel.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id
RESEND_API_KEY=your-resend-api-key
```

## 📧 Email Setup

1. Sign up at [Resend.com](https://resend.com)
2. Get your API key
3. Add `RESEND_API_KEY` to Vercel environment variables
4. Update email in forms to your address

## 🎨 Customization

### Colors
Edit `app/globals.css` and `tailwind.config.js`

### Components
All reusable components are in `/components`

### Utilities
All helper functions are in `/lib`

## 📊 Analytics

Add Google Analytics ID to environment variables:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🔍 SEO

- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots**: Auto-generated at `/robots.txt`
- **Meta Tags**: Configured in `lib/seo.ts`

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Testing

1. **Local**: `npm run dev` → http://localhost:3000
2. **Build**: `npm run build` to check for errors
3. **Preview**: `npm start` after build

## 🎯 Next Steps

1. Add more posts in `content/posts/`
2. Customize colors and branding
3. Set up Google Analytics
4. Configure email service
5. Submit to Google Search Console
6. Apply for Google AdSense

## 📚 Documentation

- `PROJECT_SUMMARY.md` - Full project overview
- `README.md` - General information
- `DEPLOYMENT_GUIDE.md` - Deployment details

## 🆘 Support

- **Email**: contact.ifixguide@gmail.com
- **GitHub**: [Issues](https://github.com/itsmama22-ctrl/iFixGuide/issues)

---

**Happy Coding! 🚀**
