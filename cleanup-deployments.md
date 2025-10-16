# Deployment Cleanup Guide

## Current Situation
You have two Vercel deployments:
- ✅ **KEEP**: `https://ifixguide.vercel.app/` (cleaner domain)
- ❌ **DELETE**: `https://i-fix-guide.vercel.app/` (hyphenated domain)

## Steps to Clean Up

### 1. Deploy Current Code (with redirects)
```bash
# Deploy the current code with the redirect configuration
git add .
git commit -m "Add redirect from hyphenated domain to clean domain"
git push
```

### 2. Delete the Hyphenated Deployment
Go to your Vercel dashboard:
1. Navigate to your project
2. Go to "Deployments" tab
3. Find the deployment with `i-fix-guide.vercel.app`
4. Click the three dots (⋯) next to it
5. Select "Delete"

### 3. Verify the Redirect Works
After deletion, the hyphenated domain should automatically redirect to the clean domain.

## Benefits of This Cleanup
- ✅ Single source of truth for your site
- ✅ Better SEO (no duplicate content)
- ✅ Cleaner URLs for sharing
- ✅ Automatic redirects for any existing links
- ✅ Easier maintenance

## Important Notes
- The redirect will be permanent (301) which is good for SEO
- Any existing bookmarks or links to the hyphenated domain will automatically redirect
- Your main domain `https://ifixguide.vercel.app/` will continue working normally
