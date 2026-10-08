# Jyotiraj Global

> **Flagship Indian Food & Gifting Brand Website**  
> Premium dry fruits, traditional laddus, artisanal Indian sweets, and curated gift hampers crafted for every celebration.

---

## ✨ Features & Pages

- **Editorial Homepage (`/`)**: Rich culinary storytelling, royal festive hero banner, interactive category grid, bestsellers showcase, pure ingredient pledge, heritage story, corporate gifting feature, verified customer reviews, and social showcase.
- **Catalog & Shop (`/shop`)**: Filter by collection (Laddus, Dry Fruits, Sweets, Gift Hampers, Festive, Corporate) with sort options (Featured, Best Selling, Price Low to High, Price High to Low).
- **Product Detail Pages (`/product/[slug]`)**: Dynamic variant weights (250g, 500g, 1kg), interactive image gallery with thumbnail preview, nutritional details, pure ingredients breakdown, and mobile sticky purchase bar.
- **Curated Gifting (`/gifting`)**: Bespoke gift hampers for festive celebrations, weddings, family moments, and royal gifting.
- **Corporate Gifting (`/corporate-gifting`)**: Dedicated corporate catalog, custom volume tiers, personalized branding options, and RFP inquiry forms.
- **Heritage & Story (`/about`)**: Authentic brand journey, craftsmanship philosophy, and zero-compromise purity standards.
- **Contact & Bulk Orders (`/contact`)**: Multi-tab inquiry forms for general inquiries, corporate gifting, and distributor bulk orders.
- **Cart & Order Summary (`/cart`)**: Real-time quantity adjustments, ₹999 free shipping progress indicator, and gift box add-on.
- **100% Mobile Responsive**: Fluid typography, responsive grids, touch-friendly pill tabs, and slide-out mobile navigation drawer.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a custom luxury Indian heritage palette (Burgundy, Royal Gold, Saffron, Ivory, Cream)
- **Typography**: Playfair Display (Serif) & DM Sans / Plus Jakarta Sans (Sans-serif)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG icons
- **Animations**: Framer Motion

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── public/
│   └── images/
│       ├── banners/       # Hero, heritage & campaign photography
│       ├── categories/    # Category collection covers
│       ├── ingredients/   # Pure ingredient showcase photos
│       └── products/      # High-res artisanal product photography
├── src/
│   ├── app/
│   │   ├── about/         # Brand story & heritage
│   │   ├── cart/          # Cart & checkout preview
│   │   ├── contact/       # Contact & corporate enquiry
│   │   ├── corporate-gifting/
│   │   ├── gifting/       # Curated gifting hampers
│   │   ├── product/[slug]/# Dynamic Product PDP
│   │   ├── shop/          # Catalog & filters
│   │   ├── globals.css    # Design tokens & responsive utilities
│   │   ├── layout.tsx     # Root layout with fonts & metadata
│   │   └── page.tsx       # Homepage
│   ├── components/
│   │   ├── Footer.tsx     # Newsletter & site footer
│   │   ├── Header.tsx     # Announcement bar, mega menu & mobile drawer
│   │   ├── ProductCard.tsx# Reusable e-commerce card
│   │   └── Reveal.tsx     # Scroll-triggered entrance animations
│   └── data/
│       └── products.ts    # Product catalog, categories & review data
```

---

## 📄 License

Private & Proprietary — © 2026 Jyotiraj Global. All rights reserved.
