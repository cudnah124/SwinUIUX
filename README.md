# Aella Website - Next.js Recreation

A modern recreation of the Aella banking website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - Mobile-first approach
- **Login System** - Simple localStorage-based authentication (user / 1)
- **Modern UI** - Beautiful gradients, animations, and hover effects
- **SEO Optimized** - Meta tags and semantic HTML

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Or with yarn
yarn install
```

## 🏃‍♂️ Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Login Credentials

- **Username**: `user`
- **Password**: `1`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| React 18 | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first CSS |
| Framer Motion | Animations |
| Lucide React | Icons |

## 📂 Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── layout/       # Header, Footer
│   │   ├── home/         # Homepage sections
│   │   └── ui/           # Reusable UI components
│   ├── lib/              # Utilities and constants
│   └── types/            # TypeScript types
├── public/               # Static assets
└── ...config files
```

## 🎯 Features Implemented

### Homepage
- ✅ Hero section with gradient background
- ✅ Features section (Personal & Business banking)
- ✅ Trust section with badges
- ✅ Responsive navigation
- ✅ Login modal with localStorage

### Components
- ✅ Reusable Button component (primary, secondary, outline)
- ✅ Card component with hover effects
- ✅ Header with dropdown menus
- ✅ Footer with multi-column links

## 🔄 Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint

# Format code
npm run format
```

## 📝 License

All Rights Reserved - AellaMFB

## 👨‍💻 Development Notes

- Login uses localStorage for demo purposes (username: user, password: 1)
- All pages use shared Header and Footer from layout.tsx
- Tailwind configured with Aella brand colors
- TypeScript strict mode enabled
