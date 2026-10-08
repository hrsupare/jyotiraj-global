"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, ingredients, reviews } from "@/data/products";
import {
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Award,
  Gift,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { useState, useRef } from "react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BestsellersSection />
      <SignatureCampaign />
      <WhyJyotirajSection />
      <IngredientsSection />
      <BrandStorySection />
      <CraftsmanshipSection />
      <GiftingSection />
      <CorporateGiftingSection />
      <SeasonalCampaign />
      <ReviewsSection />
      <InstagramSection />
    </>
  );
}

/* ======================================================================
   1. HERO
   ====================================================================== */
function HeroSection() {
  return (
    <section className="relative bg-charcoal overflow-hidden">
      {/* Background — will be replaced with actual campaign photography */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40 z-10" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #3A2E28 0%, #5C1A28 40%, #6B1D2A 60%, #3D0F1A 100%)",
          }}
        />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] z-[5]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-brand relative z-20">
        <div className="min-h-[80vh] lg:min-h-[90vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full py-12 lg:py-0">
            {/* Left — Content */}
            <div className="max-w-xl">
              <p className="text-[0.6875rem] font-semibold tracking-[0.3em] uppercase text-brand-gold mb-3 sm:mb-4">
                Crafted with Tradition
              </p>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl leading-[1.12] text-white"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Tradition,
                <br />
                <span className="text-brand-gold-light">Made to Be Gifted.</span>
              </h1>
              <div className="w-12 h-[2px] bg-brand-gold mt-4 sm:mt-6 mb-4 sm:mb-6" />
              <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-md">
                Premium dry fruits, laddus and timeless Indian flavours — crafted
                for moments worth celebrating.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
                <Link href="/shop" className="btn-primary !bg-brand-saffron hover:!bg-[#be8220] justify-center text-center">
                  Explore Collection
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/shop?sort=best-selling"
                  className="btn-secondary !border-white/25 !text-white/80 hover:!bg-white/10 hover:!border-white/40 justify-center text-center"
                >
                  Shop Bestsellers
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 text-center sm:text-left">
                <div>
                  <p className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    500+
                  </p>
                  <p className="text-[0.625rem] sm:text-[0.6875rem] text-white/50 mt-0.5">
                    Happy Customers
                  </p>
                </div>
                <div className="border-l border-white/10 pl-2 sm:pl-4">
                  <p className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    4.8★
                  </p>
                  <p className="text-[0.625rem] sm:text-[0.6875rem] text-white/50 mt-0.5">
                    Average Rating
                  </p>
                </div>
                <div className="border-l border-white/10 pl-2 sm:pl-4">
                  <p className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    100%
                  </p>
                  <p className="text-[0.625rem] sm:text-[0.6875rem] text-white/50 mt-0.5">
                    Pure Desi Ghee
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Hero Product Visual (Responsive on both Mobile & Desktop) */}
            <div className="block mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] bg-black/40 border border-brand-gold/20 overflow-hidden shadow-2xl relative group">
                  <img
                    src="/images/banners/hero-banner.jpg"
                    alt="Jyotiraj Global Royal Dry Fruit & Artisanal Laddu Platter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent lg:hidden" />
                  <div className="absolute bottom-3 left-4 right-4 lg:hidden text-white/90">
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-brand-gold font-medium">Artisanal Heritage</p>
                    <p className="text-sm font-serif">Handcrafted with Pure Desi Ghee</p>
                  </div>
                </div>
                {/* Decorative gold corners */}
                <div className="absolute -top-2.5 -left-2.5 w-10 h-10 border-l-2 border-t-2 border-brand-gold/60" />
                <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-r-2 border-b-2 border-brand-gold/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
   2. SHOP BY CATEGORY
   ====================================================================== */
function CategoriesSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <Reveal>
          <div className="text-center mb-12 lg:mb-14">
            <p className="section-label">Our Finest</p>
            <h2 className="section-title">Explore Our Finest</h2>
            <p className="section-subtitle mx-auto mt-3">
              From everyday indulgence to thoughtful gifting, discover flavours
              crafted for every occasion.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <Link
                href={`/shop?category=${cat.id}`}
                className="group block relative overflow-hidden"
              >
                <div className="aspect-[4/3] bg-cream relative overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-black/10 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 z-20">
                    <h3
                      className="text-white text-base sm:text-lg lg:text-xl font-semibold leading-tight"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {cat.name}
                    </h3>
                    <p className="text-white/70 text-[0.7rem] sm:text-xs mt-1 line-clamp-1">{cat.description}</p>
                    <span className="inline-flex items-center gap-1 text-[0.625rem] sm:text-[0.6875rem] text-brand-gold-light font-semibold tracking-wide uppercase mt-1.5 sm:mt-2 group-hover:gap-2 transition-all">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
   3. BESTSELLERS
   ====================================================================== */
function BestsellersSection() {
  const bestsellers = products.filter((p) => p.isBestSeller);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-brand">
        <Reveal>
          <div className="flex items-end justify-between mb-10 lg:mb-12">
            <div>
              <p className="section-label">Customer Favourites</p>
              <h2 className="section-title">Loved by Our Customers</h2>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 border border-border-medium flex items-center justify-center text-text-muted hover:border-brand-burgundy hover:text-brand-burgundy transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 border border-border-medium flex items-center justify-center text-text-muted hover:border-brand-burgundy hover:text-brand-burgundy transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Product Grid — scrollable on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {bestsellers.map((product, i) => (
            <Reveal key={product.id} delay={i * 100} className="min-w-[260px] lg:min-w-0 snap-start">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-10">
            <Link href="/shop" className="btn-secondary">
              View All Products
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================================================================
   4. SIGNATURE PRODUCT CAMPAIGN
   ====================================================================== */
function SignatureCampaign() {
  return (
    <section className="bg-cream">
      <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
        {/* Left — Image */}
        <div className="relative bg-parchment min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden">
          <img
            src="/images/products/dry-fruit-laddu.jpg"
            alt="Artisanal Dry Fruit Laddu Close-Up"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
          <div className="absolute bottom-4 left-4 right-4 lg:hidden">
            <span className="px-3 py-1 bg-brand-burgundy text-white text-[0.625rem] font-semibold tracking-wider uppercase">
              Artisanal Handcraft
            </span>
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 xl:px-20 py-12 lg:py-0">
          <Reveal>
            <div className="max-w-md">
              <p className="section-label">The Signature Collection</p>
              <h2
                className="text-3xl lg:text-4xl leading-tight text-charcoal"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Made with the Goodness of Premium Dry Fruits.
              </h2>
              <div className="gold-divider mt-5 mb-6" />
              <p className="text-text-secondary leading-relaxed">
                Our signature collection brings together the finest dry fruits and
                traditional craftsmanship. Each piece is handcrafted with care,
                using recipes perfected across generations.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Premium ingredients sourced with care",
                  "Traditional craft, modern quality standards",
                  "Gift-ready packaging for every occasion",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-saffron mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/shop?collection=premium" className="btn-primary">
                  Discover the Collection
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
   5. WHY JYOTIRAJ GLOBAL
   ====================================================================== */
function WhyJyotirajSection() {
  const values = [
    {
      icon: <Leaf size={24} />,
      title: "Premium Ingredients",
      description:
        "Carefully selected ingredients for exceptional taste and quality in every product we craft.",
    },
    {
      icon: <Award size={24} />,
      title: "Traditional Craft",
      description:
        "Time-honoured recipes with a modern standard of quality, hygiene and consistency.",
    },
    {
      icon: <Gift size={24} />,
      title: "Made for Gifting",
      description:
        "Beautifully presented for celebrations, festivals and every moment worth sharing.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Quality You Can Trust",
      description:
        "Unwavering commitment to consistency, purity and attention to every detail.",
    },
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <Reveal>
          <div className="text-center mb-12 lg:mb-14">
            <p className="section-label">Our Promise</p>
            <h2 className="section-title">Made with More Than Ingredients.</h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto flex items-center justify-center text-brand-burgundy border border-brand-burgundy/15">
                  {value.icon}
                </div>
                <h3 className="text-base font-semibold text-charcoal mt-5 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
   6. INGREDIENTS STORY
   ====================================================================== */
function IngredientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-brand">
        <Reveal>
          <div className="text-center mb-10 lg:mb-12">
            <p className="section-label">Quality First</p>
            <h2 className="section-title">Where Great Taste Begins</h2>
            <p className="section-subtitle mx-auto mt-3">
              Every product starts with premium, carefully sourced ingredients.
            </p>
          </div>
        </Reveal>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ingredients.map((ingredient, i) => (
            <Reveal key={ingredient.name} delay={i * 60}>
              <div className="min-w-[180px] lg:min-w-[200px] snap-start">
                <div className="aspect-square bg-cream relative overflow-hidden">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-sm font-semibold text-charcoal mt-3">
                  {ingredient.name}
                </h4>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  {ingredient.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
   7. BRAND STORY
   ====================================================================== */
function BrandStorySection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Left — Visual */}
        <div className="relative bg-brand-burgundy/5 min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden order-1 lg:order-1">
          <img
            src="/images/banners/heritage-craft.jpg"
            alt="Artisanal Heritage Cooking at Jyotiraj Global"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <p className="text-[0.625rem] tracking-[0.25em] uppercase text-brand-gold font-semibold">Artisanal Craft</p>
            <p className="text-base font-serif">Slow-Roasted in Pure Desi Ghee</p>
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex items-center px-8 lg:px-16 xl:px-20 py-16 order-1 lg:order-2 bg-ivory">
          <Reveal>
            <div className="max-w-md">
              <p className="section-label">Our Story</p>
              <h2
                className="text-3xl lg:text-4xl leading-tight text-charcoal"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                A Tradition Worth Passing On.
              </h2>
              <div className="gold-divider mt-5 mb-6" />
              <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                <p>
                  Jyotiraj Global was born from a simple belief — that the finest
                  Indian flavours deserve to be shared with the world. Rooted in
                  tradition and crafted with care, every product carries forward a
                  legacy of quality, authenticity and taste.
                </p>
                <p>
                  From handcrafted laddus made with premium dry fruits to
                  thoughtfully curated gift hampers, we bring the warmth of Indian
                  hospitality to every celebration.
                </p>
                <p>
                  Our commitment extends beyond taste — it is a promise of purity,
                  quality and the care that goes into every detail, from
                  ingredient sourcing to packaging.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn-secondary">
                  Discover Our Story
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
   8. CRAFTSMANSHIP
   ====================================================================== */
function CraftsmanshipSection() {
  const steps = [
    {
      number: "01",
      title: "Ingredients Selected",
      description: "Premium ingredients carefully sourced for quality and flavour.",
    },
    {
      number: "02",
      title: "Preparation",
      description: "Traditional recipes followed with precision and care.",
    },
    {
      number: "03",
      title: "Craftsmanship",
      description: "Handcrafted by skilled artisans using time-honoured techniques.",
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Every batch checked for consistency, taste and quality.",
    },
    {
      number: "05",
      title: "Packaging",
      description: "Premium, gift-ready packaging that preserves freshness.",
    },
    {
      number: "06",
      title: "Delivered to You",
      description: "Carefully shipped to reach you in perfect condition.",
    },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container-brand">
        <Reveal>
          <div className="text-center mb-12 lg:mb-14">
            <p className="section-label">The Process</p>
            <h2 className="section-title">Crafted With Care</h2>
            <p className="section-subtitle mx-auto mt-3">
              From selecting the finest ingredients to delivering the finished
              product — every step is handled with precision and pride.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80}>
              <div className="flex gap-4">
                <span
                  className="text-3xl font-light text-brand-gold/40 shrink-0 leading-none"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-charcoal mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
   9. GIFTING
   ====================================================================== */
function GiftingSection() {
  const giftCategories = [
    { title: "Festive Gifting", image: "/images/categories/festive.jpg", desc: "Diwali, Holi, Rakhi & more" },
    { title: "Wedding Gifting", image: "/images/products/kaju-katli.jpg", desc: "Elegant gifts for the big day" },
    { title: "Corporate Gifting", image: "/images/products/corporate-hamper.jpg", desc: "For teams and clients" },
    { title: "Family Gifting", image: "/images/products/besan-laddu.jpg", desc: "Share the love" },
    { title: "Premium Hampers", image: "/images/products/gift-hamper.jpg", desc: "Curated luxury hampers" },
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <Reveal>
          <div className="text-center mb-10 lg:mb-14">
            <p className="section-label">Gifting</p>
            <h2 className="section-title">Make Every Celebration Sweeter.</h2>
            <p className="section-subtitle mx-auto mt-3">
              Thoughtfully curated gifts for festivals, weddings, family moments
              and every occasion that matters.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {giftCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <Link href="/gifting" className="group block">
                <div className="aspect-[3/4] bg-cream relative overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20">
                    <h3 className="text-white text-xs sm:text-sm font-semibold">{cat.title}</h3>
                    <p className="text-white/70 text-[0.6875rem] sm:text-xs mt-0.5 line-clamp-1">{cat.desc}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Link href="/gifting" className="btn-primary">
              Explore Gifting
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact?type=bulk" className="btn-secondary">
              Request Bulk Order
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================================================================
   10. CORPORATE GIFTING
   ====================================================================== */
function CorporateGiftingSection() {
  return (
    <section className="bg-brand-burgundy text-white">
      <div className="grid lg:grid-cols-2 min-h-[450px]">
        {/* Left — Content */}
        <div className="flex items-center px-8 lg:px-16 xl:px-20 py-14">
          <Reveal>
            <div className="max-w-md">
              <p className="text-[0.6875rem] font-semibold tracking-[0.3em] uppercase text-brand-gold mb-3">
                For Business
              </p>
              <h2
                className="text-3xl lg:text-4xl leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Thoughtful Gifting.
                <br />
                Beautifully Presented.
              </h2>
              <div className="w-12 h-[2px] bg-brand-gold mt-5 mb-6" />
              <p className="text-white/60 leading-relaxed">
                Create memorable gifting experiences for your clients, teams and
                business partners with thoughtfully curated Jyotiraj Global
                hampers.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Custom quantities & bulk orders",
                  "Premium corporate packaging",
                  "Custom branding options",
                  "Pan-India delivery support",
                  "Dedicated assistance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact?type=corporate"
                  className="btn-gold"
                >
                  Enquire for Corporate Gifting
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — Visual */}
        <div className="relative bg-brand-deep min-h-[300px] sm:min-h-[380px] lg:min-h-[450px] overflow-hidden">
          <img
            src="/images/products/corporate-hamper.jpg"
            alt="Bespoke Executive Corporate Gifting Box"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
            <p className="text-[0.625rem] tracking-[0.2em] uppercase text-brand-gold font-semibold">Custom Branding</p>
            <p className="text-sm font-serif">Executive Gifting Hampers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
   11. SEASONAL CAMPAIGN
   ====================================================================== */
function SeasonalCampaign() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <Reveal>
          <div className="relative bg-cream overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[350px]">
              {/* Content */}
              <div className="flex items-center p-8 lg:p-14">
                <div>
                  <p className="text-[0.6875rem] font-semibold tracking-[0.3em] uppercase text-brand-saffron mb-3">
                    Festive Season 2026
                  </p>
                  <h2
                    className="text-3xl lg:text-4xl leading-tight text-charcoal"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    This Diwali,
                    <br />
                    Gift Something Special.
                  </h2>
                  <p className="text-text-secondary text-sm mt-4 max-w-sm leading-relaxed">
                    Discover our festive collection — premium laddus, curated gift
                    hampers and traditional sweets, all wrapped in celebration.
                  </p>
                  <div className="mt-6">
                    <Link href="/shop?category=festive" className="btn-primary">
                      Shop Festive Collection
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative bg-parchment min-h-[260px] sm:min-h-[320px] overflow-hidden">
                <img
                  src="/images/banners/hero-banner.jpg"
                  alt="Festive Diwali Sweets & Dry Fruits Collection"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="px-2.5 py-0.5 bg-brand-saffron text-white text-[0.625rem] font-semibold tracking-wider uppercase">
                    Festive Edition
                  </span>
                  <p className="text-base font-serif mt-1">Royal Gifting Collection</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================================================================
   12. REVIEWS
   ====================================================================== */
function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-warm-white">
      <div className="container-brand">
        <Reveal>
          <div className="text-center mb-10 lg:mb-12">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">Shared With Love.</h2>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center">
              <Quote
                size={32}
                className="mx-auto text-brand-gold/30 mb-6"
              />
              <p
                className="text-base sm:text-lg lg:text-xl text-charcoal leading-relaxed"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                &ldquo;{reviews[activeIndex].text}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-1 mt-5">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-brand-saffron text-brand-saffron"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-charcoal mt-3">
                {reviews[activeIndex].name}
              </p>
              <p className="text-xs text-text-muted">
                {reviews[activeIndex].location} •{" "}
                {reviews[activeIndex].product}
              </p>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeIndex
                        ? "bg-brand-burgundy w-6"
                        : "bg-border-medium hover:bg-brand-gold-muted"
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ======================================================================
   13. INSTAGRAM
   ====================================================================== */
function InstagramSection() {
  const instagramImages = [
    { src: "/images/products/dry-fruit-laddu.jpg", alt: "Dry Fruit Laddu" },
    { src: "/images/products/kaju-katli.jpg", alt: "Kaju Katli" },
    { src: "/images/products/mixed-nuts.jpg", alt: "Royal Mixed Nuts" },
    { src: "/images/products/besan-laddu.jpg", alt: "Besan Laddu" },
    { src: "/images/products/gift-hamper.jpg", alt: "Luxury Gift Hamper" },
    { src: "/images/products/motichoor-laddu.jpg", alt: "Motichoor Laddu" },
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <Reveal>
          <div className="text-center mb-8 sm:mb-12">
            <p className="section-label">Follow Us</p>
            <h2 className="section-title">From Our Kitchen to Your Feed</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {instagramImages.map((post, i) => (
            <Reveal key={post.alt} delay={i * 60}>
              <a
                href="https://www.instagram.com/jyotirajglobal/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="aspect-square bg-cream relative overflow-hidden">
                  <img
                    src={post.src}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-burgundy/0 group-hover:bg-brand-burgundy/60 transition-colors flex items-center justify-center">
                    <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 tracking-wider uppercase transition-opacity">
                      View
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/jyotirajglobal/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Follow @jyotirajglobal
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
