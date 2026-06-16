# yanixx.ip — Web3 Portfolio

A premium, dark-futuristic personal portfolio built for Web3 creators, meme strategists, and crypto-native community builders.

## Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **Vercel**

## Design Direction

- **Palette:** Void black (`#050507`), violet glow (`#8B5CF6`), cyan glow (`#06B6D4`), acid green (`#A3E635`)
- **Typography:** Inter (body) + Space Grotesk (display)
- **Signature:** Terminal-holographic aesthetic — orbital SVG lines, animated gradient blobs, glassmorphism cards, and a blinking cursor hero
- **Motion:** Scroll-reveal sections, spring-based hover glows, category-tab layout animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
```

Deploy the output on **Vercel** by pushing to a GitHub repo and importing the project.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AnimatedBackground.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Works.tsx
│   ├── WorkCard.tsx
│   ├── SelectedProjects.tsx
│   ├── Stats.tsx
│   ├── Contact.tsx
│   └── SectionReveal.tsx
├── src/data/
│   ├── works.ts
│   └── projects.ts
└── public/
```

## Customization Guide

### 1. Works / X Posts

Edit `src/data/works.ts` to replace placeholder items with real tweet links, descriptions, and image URLs.

### 2. Selected Projects

Edit `src/data/projects.ts` to showcase ambassador roles, collabs, or launches.

### 3. Stats

Update follower counts and engagement metrics in `components/Stats.tsx`.

### 4. Contact Links

Replace `mailto:hello@yanixx.ip` and the Telegram placeholder in `components/Contact.tsx` with your real contacts.

### 5. Images

Add real images to `public/work/` and reference them in the data files, or swap gradient placeholders for `<img>` tags.

## SEO

Metadata is configured in `app/layout.tsx`. Update `metadataBase`, title, and OpenGraph details for your domain.

---

Built with signal. 🛰️
