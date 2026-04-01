# AURA - Modern Fashion E-Commerce

A fully functional, production-ready front-end e-commerce website for a modern clothing brand. Built with React, Vite, Tailwind CSS, and Zustand.

## Features

- **Responsive Design**: Mobile-first approach, optimized for all screen sizes.
- **Modern UI/UX**: Clean, minimalist aesthetic with premium fashion branding.
- **Full Shopping Flow**: From product discovery to a complete mock checkout experience.
- **State Management**: Persistent cart and wishlist using Zustand.
- **Dynamic Routing**: Category filtering, product details, and policy pages using React Router.
- **Mock Data**: Realistic product catalog with variants (size, color), categories, and pricing.
- **Functional Interactions**: Working filters, sorting, cart updates, and form validations.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **State Management**: Zustand (with localStorage persistence)
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Project Structure

```
/src
  /components
    /layout       # Header, Footer, Layout wrapper
    /product      # ProductCard, etc.
    /ui           # Reusable UI components (Button, Input)
  /data           # Mock product and category data
  /lib            # Utility functions (cn)
  /pages          # Route components (Home, Shop, Cart, Checkout, etc.)
  /store          # Zustand stores (cartStore, wishlistStore)
  App.tsx         # Router configuration
  main.tsx        # Entry point
  index.css       # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

Create a production build:

```bash
npm run build
```

The compiled assets will be generated in the `dist` directory, ready to be served by any static file server.

## Deployment Notes

This project is a static front-end application and can be easily deployed to platforms like Vercel, Netlify, GitHub Pages, or any standard web host. 

*Note: CI/CD workflow files (like `.github/workflows/deploy.yml`) are intentionally omitted to allow you to configure deployment according to your preferred hosting provider.*
