# 📋 Step-by-Step Guide: Publish Missed Posts

**Current Date:** January 11, 2026  
**Latest Published Post:** December 27, 2025  
**Missed Posts:** 11 posts (Dec 28, 2025 - Jan 10, 2026)

---

## 🎯 **QUICKEST SOLUTION: Manual Vercel Deployment**

### **Method 1: Trigger Deployment via Vercel Dashboard** ⚡ (Easiest)

1. **Open Vercel Dashboard**
   - Go to: https://vercel.com/dashboard
   - Log in with your account

2. **Find Your Project**
   - Look for your project: `iFixGuide` or `ifixguide`
   - Click on it

3. **Trigger Redeploy**
   - Click on the **"Deployments"** tab
   - Find the latest deployment (from Dec 27, 2025)
   - Click the **"⋯"** (three dots) menu next to it
   - Select **"Redeploy"**
   - Confirm the redeploy

4. **Wait for Deployment**
   - Monitor the build progress (usually 1-3 minutes)
   - Once complete, all missed posts will be live!

5. **Verify**
   - Visit: https://ifixguide.vercel.app/
   - Check that posts from Jan 2-10 are now visible
   - Latest post should be from Jan 10, 2026

---

### **Method 2: Trigger Deployment via Git Push** 🔄

1. **Make a Small Change**
   ```bash
   cd /Users/med/iFixGuide
   echo "# Updated $(date)" >> README.md
   git add README.md
   git commit -m "Trigger deployment for missed posts"
   git push
   ```

2. **Vercel Auto-Deploys**
   - Vercel will automatically detect the push
   - It will trigger a new deployment
   - All missed posts will be published

---

### **Method 3: Manual GitHub Actions Trigger** 🛠️

1. **Go to GitHub Repository**
   - Open: https://github.com/your-username/iFixGuide
   - (Replace `your-username` with your GitHub username)

2. **Open Actions Tab**
   - Click on **"Actions"** tab at the top

3. **Find the Workflow**
   - Look for **"Auto Publish Scheduled Posts"** workflow
   - Click on it

4. **Run Workflow Manually**
   - Click **"Run workflow"** button (top right)
   - Select your branch (usually `main` or `master`)
   - Click **"Run workflow"**

   ⚠️ **Note:** This will only work if you have posts scheduled for TODAY (Jan 11). 
   It won't catch up on missed posts.

---

## 🔍 **Verify Posts Are Now Live**

After deployment completes:

1. **Check Homepage**
   - Visit: https://ifixguide.vercel.app/
   - Latest posts should show dates from Jan 2-10, 2026

2. **Check Specific Category Pages**
   - Battery: https://ifixguide.vercel.app/troubleshooting/battery
   - Connectivity: https://ifixguide.vercel.app/troubleshooting/connectivity
   - Camera: https://ifixguide.vercel.app/troubleshooting/camera

3. **Check Individual Posts**
   - Jan 2: iPhone Photos Look Bad? (camera)
   - Jan 3: iPhone NFC Not Working? (connectivity)
   - Jan 10: MacBook Pro M3 Battery Draining Fast? (iphone)

---

## 🛠️ **FIX THE AUTOMATION (Prevent Future Issues)**

The GitHub Actions workflow only checks for posts scheduled for TODAY. 
It doesn't catch up on missed posts. Here's how to fix it:

### **Option A: Update Workflow to Check for Past-Due Posts**

1. **Create a new script** to catch up on missed posts
2. **Update the workflow** to deploy if there are ANY past-due posts

Would you like me to help you update the workflow to catch missed posts automatically?

---

## ✅ **Success Checklist**

After following the steps above:

- [ ] Vercel deployment triggered successfully
- [ ] Build completed without errors
- [ ] Homepage shows posts from Jan 2-10, 2026
- [ ] Latest post date is Jan 10, 2026 (or today's date)
- [ ] All 11 missed posts are visible on the site
- [ ] Site is accessible and functioning normally

---

## 🆘 **Need Help?**

If you encounter issues:

1. **Check Vercel Build Logs**
   - Go to Vercel Dashboard → Deployments → Click on failed deployment
   - Review the build logs for errors

2. **Verify Posts Exist Locally**
   - Run: `node scripts/check-scheduled-posts.js` (if it exists)
   - Or check: `content/posts/` directory

3. **Check Git Status**
   - Ensure all posts are committed and pushed to GitHub

---

**Next Steps:** After publishing missed posts, we should fix the automation 
to prevent this from happening again in the future.
