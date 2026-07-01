# Abu Bakkar — AI Engineer Portfolio

A premium, cinematic, fully animated developer portfolio built with **React + Vite + TypeScript**, featuring a **Three.js** 3D hero scene, **Framer Motion** animations, **GSAP-ready** structure, **Lenis** smooth scrolling, glassmorphism UI, dark/light mode, a live **GitHub API** feed, and an **EmailJS** contact form.

## ✨ Features

- Cinematic hero with Three.js particle field, neural network visualization, and a distorted glowing 3D core
- Animated gradient blobs, glassmorphism cards, glowing borders
- Typing animation for role titles
- Smooth scrolling via Lenis
- Custom animated cursor (desktop only)
- Loading screen with progress animation
- Scroll progress bar + scroll-to-top button
- Dark / Light theme toggle (persisted to localStorage)
- Fully responsive (mobile, tablet, desktop)
- Sections: Hero, About, Skills, Projects (with modal details), Timeline, Achievements (animated counters), Services, Experience, Certificates, live GitHub stats, Contact form
- SEO meta tags + Open Graph tags
- Clean, scalable folder structure

## 🧱 Tech Stack

React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Three.js · React Three Fiber · @react-three/drei · GSAP · Lenis · React Icons · EmailJS

## 📁 Folder Structure

```
src/
  components/     # Reusable UI (Navbar, HeroScene, CustomCursor, LoadingScreen, ScrollUtils)
  sections/       # Page sections (Hero, About, Skills, Projects, Timeline, Contact, etc.)
  hooks/          # Custom hooks (useLenis, useCustomCursor, useCountUp, useGithubProfile, useTheme)
  constants/      # Centralized content/data (data.ts) — edit this to update your info
  assets/         # Images, icons, static assets
  index.css       # Tailwind + global theme styles
  App.tsx         # Composes all sections
  main.tsx        # App entry point
public/
  favicon.svg
  resume.pdf      # ⚠️ Add your own resume here
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:5173`.

### 3. Build for production

```bash
npm run build
```

Output is generated in `dist/`.

### 4. Preview the production build

```bash
npm run preview
```

## ⚙️ Configuration

### Personal Content

All personal information (name, roles, about text, skills, projects, timeline, services, experience, certificates) lives in **`src/constants/data.ts`**. Edit this single file to update the entire site's content.

### GitHub Section

The GitHub section (`src/sections/Github.tsx`) fetches live data from the GitHub REST API for the username set in the `GITHUB_USERNAME` constant at the top of the file. Update it to your GitHub username.

### Contact Form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Service and an Email Template with `user_name`, `user_email`, and `message` variables.
3. Open `src/sections/Contact.tsx` and replace:
   ```ts
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
   with your actual EmailJS credentials.

### Resume

Add your resume PDF to `public/resume.pdf` — the "Download CV" button links to `/resume.pdf`.

### Colors / Theme

Theme colors are defined as CSS variables in `src/index.css` under `@theme`:

```css
--color-primary: #2563EB;
--color-secondary: #38BDF8;
--color-accent: #00E5FF;
--color-bgdark: #050816;
```

## 🌐 Deployment

### Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. A `vercel.json` rewrite rule is already included for SPA routing.

Or via CLI:

```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify

1. Push this project to a GitHub repository.
2. Go to [app.netlify.com](https://app.netlify.com/) → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. A `public/_redirects` file is already included for SPA routing.

Or via CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Deploy via GitHub Pages

1. Install the gh-pages package: `npm i -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Set `base: '/your-repo-name/'` in `vite.config.ts`.
4. Run `npm run deploy`.

## 📄 License

Free to use and modify for personal portfolio purposes.
