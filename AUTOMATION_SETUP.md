# 🤖 Automated Publishing Setup Guide

This guide will help you set up automatic publishing for your scheduled posts.

## 🎯 What This Does

- **Runs daily at midnight UTC** (adjustable)
- **Checks for posts** scheduled for today
- **Automatically deploys** to Vercel if posts are found
- **Sends notifications** about deployment status
- **No manual intervention** required

## 🔧 Setup Steps

### 1. Get Vercel Credentials

You need to add these secrets to your GitHub repository:

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Add these repository secrets:

#### Required Secrets:
- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID  
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### 2. Get Vercel Credentials

#### Get Vercel Token:
1. Go to [Vercel Dashboard](https://vercel.com/account/tokens)
2. Click **Create Token**
3. Name it "GitHub Actions"
4. Copy the token

#### Get Vercel Org ID and Project ID:
1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Settings** → **General**
3. Copy the **Project ID**
4. Copy the **Team ID** (this is your Org ID)

### 3. Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret:
   - Name: `VERCEL_TOKEN`, Value: `your_vercel_token`
   - Name: `VERCEL_ORG_ID`, Value: `your_org_id`
   - Name: `VERCEL_PROJECT_ID`, Value: `your_project_id`

### 4. Test the Automation

1. Go to **Actions** tab in your GitHub repository
2. Find **"Auto Publish Scheduled Posts"** workflow
3. Click **Run workflow** to test manually
4. Check the logs to ensure it works

## 📅 How It Works

### Daily Schedule:
- **Runs at**: 00:00 UTC (midnight)
- **Checks**: All posts in `content/posts/` directory
- **Filters**: Posts with `publishDate` matching today's date
- **Deploys**: Only if scheduled posts are found

### Manual Trigger:
- You can manually run the workflow anytime
- Go to Actions → Auto Publish → Run workflow

## 🕐 Timezone Configuration

The workflow runs at midnight UTC. To change the timezone:

1. Edit `.github/workflows/auto-publish.yml`
2. Change the cron schedule:
   ```yaml
   schedule:
     - cron: '0 0 * * *'  # Midnight UTC
   ```

### Common Timezone Examples:
- **EST (UTC-5)**: `'0 5 * * *'` (5 AM UTC = midnight EST)
- **PST (UTC-8)**: `'0 8 * * *'` (8 AM UTC = midnight PST)
- **CET (UTC+1)**: `'0 23 * * *'` (11 PM UTC = midnight CET)

## 📊 Monitoring

### Check Workflow Status:
1. Go to **Actions** tab
2. Look for **"Auto Publish Scheduled Posts"**
3. Green checkmark = success
4. Red X = failed (check logs)

### View Logs:
1. Click on the workflow run
2. Click on **"check-and-publish"** job
3. Expand steps to see detailed logs

## 🚨 Troubleshooting

### Common Issues:

1. **Workflow not running**:
   - Check if secrets are properly set
   - Verify Vercel credentials are correct

2. **Deployment fails**:
   - Check Vercel project settings
   - Verify API token permissions

3. **Posts not found**:
   - Check `publishDate` format (must be YYYY-MM-DD)
   - Verify file paths are correct

### Debug Mode:
To test locally:
```bash
node scripts/check-scheduled-posts.js
```

## ✅ Success Indicators

When working correctly, you'll see:
- ✅ Workflow runs daily at midnight
- ✅ Finds scheduled posts automatically
- ✅ Triggers Vercel deployment
- ✅ New posts appear on your website
- ✅ No manual intervention needed

## 🎉 You're All Set!

Once configured, your scheduled posts will automatically publish without any manual work!

---

**Need help?** Check the GitHub Actions logs or create an issue in your repository.
