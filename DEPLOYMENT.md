# स्वराज्य करिअर अकॅडमी — Deployment Guide

This guide explains how to deploy the **Swarajya Career Academy** website to live production hosting for free with zero server maintenance.

---

## ⚡ Deployment Prerequisites Check

- **Framework:** Vite + React + TypeScript + Tailwind CSS
- **Build Output:** Static HTML/CSS/JS in `dist/`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **SPA Routing Support:** Configured via `vercel.json` and `public/_redirects` (ensures routes like `/courses` or `/admission` never 404 when refreshed).
- **GitHub Repository:** [https://github.com/Shivam-83/swarajya-career-academy](https://github.com/Shivam-83/swarajya-career-academy)

---

## 🥇 Option 1: Deploy on Vercel (Recommended — 2 Minutes)

Vercel provides automatic SSL (HTTPS), instant global CDN, and automatic deployments whenever you push to GitHub.

### Steps:
1. Go to **[https://vercel.com](https://vercel.com)** and click **Sign Up** (or Log in).
2. Choose **Continue with GitHub** (log in as `Shivam-83`).
3. Click **"Add New..."** ➔ **"Project"**.
4. In the list of repositories, find **`swarajya-career-academy`** and click **Import**.
5. Configure Project:
   - **Framework Preset:** `Vite` (automatically detected)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**.
7. In ~30 seconds, your site will be live at `https://swarajya-career-academy.vercel.app` (or similar URL)!

---

## 🥈 Option 2: Deploy on Netlify

Netlify is another top-tier free static host with automatic GitHub deployments.

### Steps:
1. Go to **[https://www.netlify.com](https://www.netlify.com)** and sign up with **GitHub**.
2. Click **"Add new site"** ➔ **"Import an existing project"**.
3. Select **GitHub** and choose `Shivam-83/swarajya-career-academy`.
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy swarajya-career-academy**.
6. Your site will be live instantly with a free `.netlify.app` domain and HTTPS.

---

## 🥉 Option 3: Deploy on Cloudflare Pages

Cloudflare Pages offers unlimited bandwidth and edge caching worldwide.

### Steps:
1. Log in to **[Cloudflare Dashboard](https://dash.cloudflare.com/)**.
2. Go to **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
3. Select repository `Shivam-83/swarajya-career-academy`.
4. Set:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

---

## 🌐 Custom Domain Setup (Optional)

If the academy buys an official domain (e.g. `swarajyacareeracademy.com` from GoDaddy, Namecheap, or Hostinger):

1. In your **Vercel** or **Netlify** project settings, click **Domains** ➔ **Add Domain**.
2. Enter your domain: `swarajyacareeracademy.com`.
3. In your domain registrar (GoDaddy/Namecheap), add the DNS records shown by Vercel/Netlify:
   - **Type A:** `@` ➔ `76.76.21.21` (for Vercel)
   - **Type CNAME:** `www` ➔ `cname.vercel-dns.com` (for Vercel)
4. SSL certificate is generated automatically for free within 5 minutes.

---

## 🔄 Automatic Continuous Deployment (CI/CD)

Whenever you make any changes to the code in the future:
```bash
git add .
git commit -m "Update course details"
git push origin main
```
Your hosting provider (Vercel / Netlify / Cloudflare) will automatically detect the push, rebuild, and deploy your updates within 30 seconds!
