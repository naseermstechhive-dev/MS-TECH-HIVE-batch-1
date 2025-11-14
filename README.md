# 🌐 MS Tech Hive – Business Automation Website

**⭐ Responsive React + Vite + Tailwind CSS Project with Dark/Light Mode, AOS Animations & Multi-Language Support**

---

## 📖 Overview

MS Tech Hive is a fully responsive business automation website built using modern frontend tooling. This repository is a replica of the MS Tech Hive UI with added features: AOS animations, theme mode (dark/white), and language settings. The project uses React, Vite and Tailwind CSS.

---

## 🎯 Features

- Responsive UI for mobile, tablet and desktop  
- Dark / Light theme toggle (Context API)  
- AOS scroll animations on sections  
- Language selector (dropdown)  
- React Router navigation with multiple pages  
- Clean component structure: Navbar, Footer, Pages, Context

---

## 🧭 Project Structure (short)
src/
├── components/
│ ├── navbar/
│ ├── footer/
│ └── dropdown/
├── context/
│ └── Context.jsx
├── pages/
│ ├── home/
│ ├── about/
│ └── industries/
├── App.jsx
├── main.jsx
└── index.css


---

## 🛠 Tech Stack

- **React** (component-based UI)  
- **Vite** (dev server + bundler)  
- **Tailwind CSS** (utility-first styling)  
- **AOS** (Animate On Scroll)  
- **React Router** (client-side routing)  
- **Lucide Icons** (icons)

---

## 🚀 How to Run (VS Code)

1. Install Node.js (v16+ recommended): https://nodejs.org/  
2. Clone the repo:
   ```bash
   git clone https://github.com/your-username/MS-TECH-HIVE-batch-1.git
   cd MS-TECH-HIVE-batch-1
Open in VS Code:

code .


Install dependencies:

npm install


Start dev server:

npm run dev


Open http://localhost:5173 in your browser.

⚡ Build & Preview

Build:

npm run build


Output folder: dist/

Preview production build locally:

npm run preview

🌍 Deploy to Vercel (Simple Steps)

Go to https://vercel.com
 and sign in.

Click New Project → Import Git Repository and select this repo.

For Framework preset pick Vite (if shown).

Set build command: npm run build
Output directory: dist

Click Deploy. Vercel will build and host your app.

Alternatively you can deploy via the Vercel CLI:

npm i -g vercel
vercel

🎛 Theme Mode & Context

Theme is managed through a simple Context (context/Context.jsx) exposing mode and setMode.

Components (Navbar, Footer, pages) use mode to apply different Tailwind classes for dark/light.

🎞 AOS (Animate On Scroll)

Elements use attributes like:

data-aos="fade-up" 
data-aos-duration="800"


Initialize AOS in a top-level component (useEffect) - e.g.:

import AOS from "aos";
import "aos/dist/aos.css";

useEffect(() => {
  AOS.init({ once: true });
}, []);
