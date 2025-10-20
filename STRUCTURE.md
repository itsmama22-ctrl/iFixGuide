# iFixGuide - Project Structure

## 📁 Clean Architecture

```
iFixGuide/
│
├── app/                          # Next.js 14 App Router
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   ├── contact/             # Contact form API
│   │   └── newsletter/          # Newsletter API
│   ├── contact/                  # Contact page
│   ├── disclaimer/               # Disclaimer page
│   ├── newsletter/               # Newsletter signup page
│   ├── privacy-policy/           # Privacy policy page
│   ├── terms-of-service/         # Terms of service page
│   ├── troubleshooting/          # Troubleshooting hub
│   │   ├── iphone/              # iPhone category
│   │   │   ├── [slug]/          # Dynamic post pages
│   │   │   └── page.tsx         # Category listing
│   │   ├── battery/             # Battery category
│   │   ├── connectivity/        # Connectivity category
│   │   ├── camera/              # Camera category
│   │   ├── app-issues/          # App issues category
│   │   ├── ios-updates/         # iOS updates category
│   │   └── page.tsx             # Troubleshooting hub
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── icon.svg                 # App icon
│   ├── manifest.ts              # PWA manifest
│   ├── robots.ts                # Robots.txt
│   └── sitemap.ts               # Dynamic sitemap
│
├── components/                   # React Components
│   ├── BeautifulPostHeader.tsx  # Post header component
│   ├── Breadcrumbs.tsx          # Breadcrumbs navigation
│   ├── CategorySection.tsx      # Category display
│   ├── ContactForm.tsx          # Contact form
│   ├── FadeIn.tsx               # Animation wrapper
│   ├── FAQ.tsx                  # FAQ component
│   ├── Footer.tsx               # Site footer
│   ├── GuideCard.tsx            # Guide card component
│   ├── Hero.tsx                 # Hero section
│   ├── Navbar.tsx               # Navigation bar
│   ├── GuideCard.tsx             # Post card
│   └── RelatedPosts.tsx         # Related posts
│
├── lib/                          # Utilities & Logic
│   ├── analytics.ts             # Google Analytics
│   ├── categories.ts            # Category configuration
│   ├── constants.ts             # Site-wide constants
│   ├── images.ts                # Image management
│   ├── posts.ts                 # Post utilities
│   └── seo.ts                   # SEO utilities
│
├── content/posts/                # Markdown Content
│   ├── iphone/                  # iPhone posts (20+)
│   ├── battery/                 # Battery posts (20+)
│   ├── connectivity/            # Connectivity posts (15+)
│   ├── camera/                  # Camera posts (15+)
│   ├── app-issues/              # App posts (15+)
│   └── ios-updates/             # iOS posts (15+)
│
├── public/                       # Static Assets
│   └── images/                  # Image files
│
├── .env.local                    # Environment variables
├── .eslintrc.json               # ESLint config
├── .gitignore                   # Git ignore
├── next.config.js               # Next.js config
├── package.json                 # Dependencies
├── postcss.config.js            # PostCSS config
├── tailwind.config.js           # Tailwind config
├── tsconfig.json                # TypeScript config
│
├── README.md                    # Project overview
├── PROJECT_SUMMARY.md           # Detailed summary
├── QUICKSTART.md                # Quick start guide
├── DEPLOYMENT_GUIDE.md          # Deployment instructions
├── EMAIL_SETUP.md               # Email setup guide
├── GOOGLE_ANALYTICS_SETUP.md    # Analytics setup
├── GOOGLE_SEARCH_CONSOLE_SETUP.md # Search Console setup
└── START_HERE.md                # Getting started
```

## 🎯 Key Directories

### `/app`
Next.js 14 App Router pages and routes. Each folder represents a route.

### `/components`
Reusable React components. All client and server components.

### `/lib`
**Central utilities library** - matches IPTV5G structure:
- **analytics.ts** - Google Analytics integration
- **categories.ts** - Category definitions and helpers
- **constants.ts** - Site-wide configuration
- **images.ts** - Image URL management
- **posts.ts** - Post loading and filtering
- **seo.ts** - SEO metadata generation

### `/content/posts`
Markdown blog posts organized by category. Auto-publishes based on `publishDate`.

### `/public`
Static files served directly by Next.js.

## 📝 Content Structure

### Post Format (Markdown)
```markdown
---
title: "How to Fix iPhone Battery Drain"
description: "Complete guide to fixing battery issues"
date: "2025-10-13"
publishDate: "2025-10-13"
category: "battery"
author: "iFixGuide Team"
readTime: 5
keywords:
  - iPhone battery
  - battery drain
  - iOS battery fix
---

# Your content here
```

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Markdown**: remark, remark-html
- **Forms**: react-hook-form
- **Deployment**: Vercel

## 🎨 Design System

### Colors
- **Primary**: Blue to Purple gradient
- **iPhone**: Blue (`#3B82F6`)
- **Battery**: Green (`#10B981`)
- **Connectivity**: Purple (`#8B5CF6`)
- **Camera**: Orange (`#F97316`)
- **App Issues**: Red (`#EF4444`)
- **iOS Updates**: Cyan (`#06B6D4`)

### Typography
- **Font**: Inter
- **Headings**: Bold, tight leading
- **Body**: Regular, relaxed leading

## 🔧 Configuration Files

- **next.config.js** - Next.js settings, image domains
- **tailwind.config.js** - Tailwind customization
- **tsconfig.json** - TypeScript compiler options
- **package.json** - Dependencies and scripts

## 📊 Data Flow

```
Markdown Files (.md)
    ↓
lib/posts.ts (parse & filter)
    ↓
App Router Pages
    ↓
Components (render)
    ↓
User
```

## 🌟 Key Features

- ✅ 100+ SEO-optimized posts
- ✅ Auto-publishing system
- ✅ Dynamic sitemap
- ✅ PWA ready
- ✅ Mobile responsive
- ✅ Fast performance
- ✅ Clean architecture

---

**Structure Version**: 2.0
**Last Updated**: October 13, 2025
