# IT Support Portal

A simple, modern support portal built using React, Vite, Tailwind CSS, and React Router. Designed to showcase dark mode toggling, routing, and basic support-related functionality.

## 🚀 Features

- 🔄 Dark mode toggle (with persistent setting)
- 🧭 Multi-page routing (Home, Knowledge Base, Dashboard)
- 🎨 Tailwind CSS for sleek styling
- ⚡ Lightning-fast Vite development

## 📁 Folder Structure

```
.
├── index.html
├── src/
│   ├── index.jsx
│   ├── App.jsx
│   ├── pages/
│   └── components/
├── public/
│   └── _redirects
└── vite.config.js
```

## 🛠 Setup

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## 📦 Deploy

### 🔗 Vercel (Recommended)
- Push to GitHub
- Import your repo at [vercel.com](https://vercel.com)
- Select "Vite" as framework
- Use `npm run build`, `dist/` as output

### 🌐 Netlify
- Drag & drop `/dist` folder after running `npm run build`
- Or link repo & configure:
  - Build command: `npm run build`
  - Publish directory: `dist`

---

Created by Antoine – Junior Cloud Architect 🚀
