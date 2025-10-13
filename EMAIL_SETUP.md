# 📧 Email Service Setup Guide

## ✅ Email Integration Complete!

Your forms are now configured to send emails using **Resend** (recommended free service).

## 🚀 Quick Setup (5 minutes)

### Step 1: Sign Up for Resend (Free)

1. **Go to:** https://resend.com
2. **Click:** "Sign Up"
3. **Sign up** with GitHub or email
4. **Verify** your email

### Step 2: Get API Key

1. **In Resend Dashboard:**
   - Click **"API Keys"** in sidebar
   - Click **"Create API Key"**
   - Name: `iFixGuide Production`
   - Permissions: **Full Access**
   - Click **"Add"**
   - **Copy the API key** (starts with `re_...`)

### Step 3: Add to Vercel

1. **Go to:** https://vercel.com/dashboard
2. **Click** your **iFixGuide** project
3. **Settings** → **Environment Variables**
4. **Add new variable:**
   - Name: `RESEND_API_KEY`
   - Value: `re_your_api_key_here` (paste your key)
   - Environments: Check all 3 (Production, Preview, Development)
   - Click **"Save"**

5. **Redeploy:**
   - Go to **Deployments** tab
   - Click **3 dots** on latest deployment
   - Click **"Redeploy"**
   - Wait 2-3 minutes

### Step 4: Test!

1. Visit: https://ifixguide.vercel.app/contact
2. Fill out contact form
3. Submit
4. **Check your email:** contact.ifixguide@gmail.com
5. You should receive the submission!

---

## 📋 What This Does

### Contact Form:
- User submits form on your website
- Email sent to **contact.ifixguide@gmail.com**
- Includes name, email, subject, message
- Professional HTML formatting

### Newsletter Form:
- User subscribes
- **You get notification** at contact.ifixguide@gmail.com
- **Subscriber gets welcome email**
- Both emails sent automatically

---

## 🎁 Resend Free Tier

**Includes:**
- 100 emails/day (3,000/month)
- Free forever
- Professional email delivery
- Email tracking
- No credit card required initially

**Perfect for:**
- Starting out
- Low-medium traffic sites
- Contact forms and newsletters

---

## 🔄 Alternative: Use Gmail SMTP

If you prefer sending directly from Gmail:

### Install Nodemailer

```bash
npm install nodemailer
```

### Update API routes to use Gmail

Edit `app/api/contact/route.ts`:

```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contact.ifixguide@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD, // Not your regular password!
  },
})

await transporter.sendMail({
  from: 'contact.ifixguide@gmail.com',
  to: 'contact.ifixguide@gmail.com',
  subject: `Contact Form: ${subject}`,
  html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
})
```

**Need to:**
1. Enable 2FA on Gmail
2. Create App Password in Google Account
3. Add to Vercel environment variables

**Resend is easier!** Recommended for most users.

---

## ✅ Current Setup

**Email Service:** Resend (configured, needs API key)
**Recipient:** contact.ifixguide@gmail.com
**Forms Ready:** Contact & Newsletter
**Status:** Needs API key to activate

**After adding Resend API key to Vercel:**
- ✅ Forms will email you
- ✅ Subscribers get welcome email
- ✅ Professional email delivery
- ✅ No spam folder issues

---

## 🎯 Next Steps

1. **Sign up for Resend** (5 min)
2. **Get API key** (1 min)
3. **Add to Vercel** (2 min)
4. **Redeploy** (3 min)
5. **Test forms** (2 min)

**Total time: 15 minutes**

Then your email integration is complete! 📧✅

