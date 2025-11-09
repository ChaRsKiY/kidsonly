# Kids Only - Children's Fashion Website

A modern Next.js website for Kids Only children's clothing store, featuring two locations in Parndorf and Salzburg, Austria.

## Features

- 🎨 Modern, responsive design with dark/light theme support
- 🏪 Two store locations with detailed information
- 📱 Mobile-first responsive design
- ⚡ Fast performance with Next.js 16
- 🎭 Smooth animations with Framer Motion
- 🎨 Beautiful UI components with Radix UI and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── parndorf/          # Parndorf store page
│   ├── salzburg/          # Salzburg store page
│   ├── impressum/         # Legal notice page
│   ├── privacy/           # Privacy policy page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── HomePage.tsx      # Home page component
│   ├── BranchPage.tsx    # Store page component
│   ├── ThemeContext.tsx  # Theme management
│   └── ImageWithFallback.tsx # Image component with fallback
└── globals.css           # Global styles
```

## Pages

- **Home** (`/`) - Main landing page with store overview
- **Parndorf** (`/parndorf`) - Designer Outlet Parndorf store details
- **Salzburg** (`/salzburg`) - Getreidegasse Salzburg store details
- **Impressum** (`/impressum`) - Legal notice and company information
- **Privacy** (`/privacy`) - Privacy policy and data protection

## Store Information

### Parndorf Location
- **Address**: Designer Outlet Parndorf, 7111 Parndorf, Austria
- **Phone**: +43 2166 12345
- **Email**: parndorf@kidsonly.at

### Salzburg Location
- **Address**: Getreidegasse 15, 5020 Salzburg, Austria
- **Phone**: +43 662 87654
- **Email**: salzburg@kidsonly.at

## Development

- **Linting**: Biome for code formatting and linting
- **Type Checking**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system

## Build

```bash
npm run build
```

## License

© 2025 Kids Only. All rights reserved.