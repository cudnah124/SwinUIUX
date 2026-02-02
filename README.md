"""
frontend/
├── .env.local                      # Environment variables (local development)
├── .env.example                    # Example env file (committed to git)
├── .gitignore                      # Git ignore rules
├── .dockerignore                   # Docker ignore rules
├── .eslintrc.json                  # ESLint configuration
├── .prettierrc                     # Prettier code formatting
├── Dockerfile                      # Docker container definition
├── docker-compose.yml              # Docker Compose setup (app + optional db)
├── .github/
│   └── workflows/
│       ├── ci.yml                  # CI pipeline (lint, test, build)
│       └── deploy.yml              # Auto-deploy to Vercel/AWS
│
├── package.json                    # Dependencies: Next.js, React, TypeScript, Tailwind CSS
├── package-lock.json               # Lock file for dependencies
├── next.config.js                  # Next.js configuration
├── tsconfig.json                   # TypeScript config
├── tailwind.config.ts              # Tailwind customization (Aella brand colors)
├── postcss.config.js               # PostCSS for Tailwind
│
├── public/                         # Static assets
│   ├── logo.png                    # Logo Aella
│   ├── hero-phone.png              # Phone mockup
│   ├── qr-code.png                 # QR code
│   └── images/
│       └── partners/               # CBN, NDIC logos
│
├── src/
│   ├── app/                        # App Router (Next.js 14+)
│   │   ├── layout.tsx              # Root layout (Header + Footer wrapper)
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Global styles + Tailwind imports
│   │   │
│   │   ├── payments/
│   │   │   └── page.tsx            # Personal Banking - Payments
│   │   ├── card/
│   │   │   └── page.tsx            # Personal Banking - Card
│   │   ├── credit/
│   │   │   └── page.tsx            # Personal Banking - Credit
│   │   ├── savings/
│   │   │   └── page.tsx            # Personal Banking - Vault/Savings
│   │   │
│   │   ├── business-banking/
│   │   │   └── page.tsx            # Business overview
│   │   ├── business-support/
│   │   │   └── page.tsx            # Merchant Support
│   │   ├── payment-and-collection/
│   │   │   └── page.tsx            # Payments & Collections
│   │   ├── fintech-as-a-service/
│   │   │   └── page.tsx            # FaaS
│   │   │
│   │   ├── about-us/
│   │   │   └── page.tsx            # Company - About
│   │   ├── career/
│   │   │   └── page.tsx            # Company - Careers
│   │   │
│   │   ├── faq/
│   │   │   └── page.tsx            # Resources - FAQ
│   │   │
│   │   ├── terms-and-conditions/
│   │   │   └── page.tsx            # Legal - Terms
│   │   ├── privacy-policy/
│   │   │   └── page.tsx            # Legal - Privacy
│   │   └── security/
│   │       └── page.tsx            # Legal - Security
│   │
│   ├── components/                 # Reusable components
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navigation bar (sticky, responsive)
│   │   │   └── Footer.tsx          # Footer with multi-column links
│   │   │
│   │   ├── home/                   # Homepage-specific components
│   │   │   ├── HeroSection.tsx     # Hero with phone mockup + CTA
│   │   │   ├── FeaturesSection.tsx # Features grid (Payments, Card, etc.)
│   │   │   └── TrustSection.tsx    # Trust badges, partner logos
│   │   │
│   │   ├── ui/                     # Shared UI components
│   │   │   ├── Button.tsx          # CTA buttons (primary, secondary)
│   │   │   ├── Card.tsx            # Feature cards
│   │   │   ├── FeatureIcon.tsx     # Icon wrapper
│   │   │   └── DownloadBanner.tsx  # QR code + app store buttons
│   │   │
│   │   └── animations/
│   │       └── ScrollReveal.tsx    # Scroll-triggered animations
│   │
│   ├── lib/
│   │   ├── constants.ts            # Brand colors, URLs, text content
│   │   └── utils.ts                # Helper functions (cn for classnames)
│   │
│   └── types/
│       └── index.ts                # TypeScript interfaces
│
└── README.md                       # Project documentation
"""
