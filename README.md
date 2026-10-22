# AI & Automation Engineer Portfolio

Modern, high-performance portfolio website built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**, optimized for 1-click deployment on **Vercel**.

## 🚀 Key Features

- **High-Impact Engineering Hero:** Quantified production metrics (590+ workflows, 35+ stores, zero-duplicate idempotency).
- **Core Engineering Pillars:** Bento grid highlighting Workflow Automation, Serverless APIs, Grounded AI, and Database Security.
- **5 Featured Production Case Studies:**
  1. *FSA Multi-Store E-Commerce Fulfillment Hub* (n8n + PostgreSQL + Multi-channel APIs)
  2. *Serverless Image Processing API & Backend Extension* (Vercel Serverless + Sharp + Vercel Blob)
  3. *Autonomous Sports News & Grounded AI Publishing* (LangChain `postgresTool` + Gemini Vision + WordPress)
  4. *Localis-AI (LKP) Geospatial Platform* (React 18 + MapLibre GL + Framer Motion)
  5. *Internal Workflow Security Gateway* (JWT + RBAC + Transactional Outbox)
- **Interactive Sharp Canvas Simulator:** Live interactive Before/After comparison simulating Sharp morphological thresholding, alpha masking, and multi-panel POD canvas assembly.
- **Interactive Code & SQL Snippets:** Parameterized CTE queries and Sharp canvas composition snippets with copy-to-clipboard functionality.
- **Modern Web Standards:** Dark/light color-scheme compliance, custom responsive typography, and mobile-friendly layouts.

---

## 🛠 Local Development

```bash
# Navigate to the portfolio folder
cd d:\Code\portfolio

# Run development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploying to Vercel

### Option 1: Via Vercel CLI (Fastest)

```bash
npm i -g vercel
cd d:\Code\portfolio
vercel
```

### Option 2: Via GitHub Repository

1. Initialize git and commit:
   ```bash
   cd d:\Code\portfolio
   git init
   git add .
   git commit -m "feat: initial ai & automation engineer portfolio"
   ```
2. Create a new repository on your GitHub (e.g. `https://github.com/DuongNgoKhanh/portfolio.git`).
3. Push code:
   ```bash
   git remote add origin https://github.com/DuongNgoKhanh/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Connect to **Vercel** (`vercel.com/new`), select the repository, and click **Deploy**. Vercel will automatically detect `vercel.json` and Vite.
