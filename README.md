# TacticalRab — Partnership & Media Kit

Portfolio website for sponsor/partnership enquiries.

## Quick Start (Local)

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Deploy to Vercel

### Option A — Via GitHub (recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → import the repo
4. Vercel auto-detects Vite — just click Deploy
5. In Project Settings → Domains, add `tacticalrab.com`
6. Update your domain DNS as Vercel instructs

### Option B — Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts. Then add your domain:
```bash
vercel domains add tacticalrab.com
```

## Updating Content

All stats, channel data, and copy live in `src/data.js`.  
Just edit the numbers, push to GitHub, and Vercel auto-deploys.

## Images

All images are in `public/images/`. To swap:
- `hero-f1.jpg` — Hero background (F1 trackside)
- `about-photo.jpg` — About section portrait
- `avatar-cod.png` — CoD channel avatar
- `avatar-valorant.png` — Valorant channel avatar  
- `avatar-f1.png` — F1 channel avatar

## Stack

- [Vite](https://vite.dev) + [React 18](https://react.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- Fonts: Bebas Neue + Outfit (Google Fonts)
