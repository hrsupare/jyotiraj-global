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
        <div className="min-h-[85vh] lg:min-h-[90vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-16 lg:py-0">
            {/* Left — Content */}
            <div className="max-w-xl">
              <p className="text-[0.6875rem] font-semibold tracking-[0.3em] uppercase text-brand-gold mb-4">
                Crafted with Tradition
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.1] text-white"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Tradition,
                <br />
                <span className="text-brand-gold-light">Made to Be Gifted.</span>
              </h1>
              <div className="w-12 h-[2px] bg-brand-gold mt-6 mb-6" />
              <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-md">
                Premium dry fruits, laddus and timeless Indian flavours — crafted
                for moments worth celebrating.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/shop" className="btn-primary !bg-brand-saffron hover:!bg-[#be8220]">
                  Explore Collection
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/shop?sort=best-selling"
                  className="btn-secondary !border-white/25 !text-white/80 hover:!bg-white/10 hover:!border-white/40"
                >
                  Shop Bestsellers
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
                <div>
                  <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    500+
                  </p>
                  <p className="text-[0.6875rem] text-white/40 mt-0.5">
                    Happy Customers
                  </p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    4.8★
                  </p>
                  <p className="text-[0.6875rem] text-white/40 mt-0.5">
                    Average Rating
                  </p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    100%
                  </p>
                  <p className="text-[0.6875rem] text-white/40 mt-0.5">
                    Pure Ingredients
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Product Visual Placeholder */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="aspect-[4/5] bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-brand-gold/10 flex items-center justify-center">
                      <span className="text-4xl">✦</span>
                    </div>
                    <p
                      className="text-white/60 text-lg"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      Hero Product Photography
                    </p>
                    <p className="text-white/30 text-xs mt-2 max-w-xs mx-auto">
                      Replace with premium product photography — styled laddu box
                      or gift hamper on elegant Indian-inspired surface
                    </p>
                  </div>
                </div>
                {/* Decorative gold corner */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-brand-gold/30" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-brand-gold/30" />
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
                <div
                  className={`aspect-[4/3] ${
                    i === 0 || i === 3 ? "lg:aspect-[4/3]" : "lg:aspect-[4/3]"
                  } bg-cream relative`}
                >
                  {/* Placeholder for category photography */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl lg:text-4xl opacity-30">
                      {cat.id === "laddus"
                        ? "🟡"
                        : cat.id === "dry-fruits"
                        ? "🥜"
                        : cat.id === "sweets"
                        ? "🍬"
                        : cat.id === "gift-hampers"
                        ? "🎁"
                        : cat.id === "festive"
                        ? "🪔"
                        : "🏢"}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 z-20">
                    <h3
                      className="text-white text-lg lg:text-xl font-semibold"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {cat.name}
                    </h3>
                    <p className="text-white/60 text-xs mt-1">{cat.description}</p>
                    <span className="inline-flex items-center gap-1 text-[0.6875rem] text-brand-gold-light font-semibold tracking-wide uppercase mt-2 group-hover:gap-2 transition-all">
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
        <div className="relative bg-parchment">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-brand-gold/10 flex items-center justify-center">
                <span className="text-3xl">✦</span>
              </div>
              <p
                className="text-text-muted text-lg"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Product Close-Up Photography
              </p>
              <p className="text-text-muted/50 text-xs mt-2 max-w-xs mx-auto">
                Large, editorial-style close-up of the signature dry fruit laddu
                or premium collection packaging
              </p>
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex items-center px-8 lg:px-16 xl:px-20 py-16 lg:py-0">
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
                <div className="aspect-square bg-cream flex items-center justify-center">
                  <div className="text-center px-4">
                    <p className="text-3xl mb-2 opacity-40">
                      {ingredient.name.includes("Almond")
                        ? "🌰"
                        : ingredient.name.includes("Cashew")
                        ? "🥜"
                        : ingredient.name.includes("Pistachio")
                        ? "🟢"
                        : ingredient.name.includes("Date")
                        ? "🫘"
                        : ingredient.name.includes("Saffron")
                        ? "🌸"
                        : ingredient.name.includes("Cardamom")
                        ? "🌿"
                        : ingredient.name.includes("Raisin")
                        ? "🍇"
                        : "🧈"}
                    </p>
                    <p className="text-[0.6rem] text-text-muted uppercase tracking-wider">
                      Photo
                    </p>
                  </div>
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
        <div className="relative bg-brand-burgundy/5 order-2 lg:order-1">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-brand-burgundy/10 flex items-center justify-center">
                <span className="text-3xl">📖</span>
              </div>
              <p
                className="text-text-muted text-lg"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Brand Story Photography
              </p>
              <p className="text-text-muted/50 text-xs mt-2 max-w-xs mx-auto">
                Founder, family, production or packaging photography that
                communicates the brand&apos;s heritage
              </p>
            </div>
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
    { title: "Festive Gifting", image: "🪔", desc: "Diwali, Holi, Rakhi & more" },
    { title: "Wedding Gifting", image: "💐", desc: "Elegant gifts for the big day" },
    { title: "Corporate Gifting", image: "🏢", desc: "For teams and clients" },
    { title: "Family Gifting", image: "🏠", desc: "Share the love" },
    { title: "Premium Hampers", image: "🎁", desc: "Curated luxury hampers" },
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <Reveal>
          <div className="text-center mb-12 lg:mb-14">
            <p className="section-label">Gifting</p>
            <h2 className="section-title">Make Every Celebration Sweeter.</h2>
            <p className="section-subtitle mx-auto mt-3">
              Thoughtfully curated gifts for festivals, weddings, family moments
              and every occasion that matters.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {giftCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <Link href="/gifting" className="group block">
                <div className="aspect-[3/4] bg-cream relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent z-10" />
                  <span className="text-4xl opacity-30">{cat.image}</span>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-white text-sm font-semibold">{cat.title}</h3>
                    <p className="text-white/50 text-xs mt-0.5">{cat.desc}</p>
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
        <div className="relative bg-brand-deep flex items-center justify-center">
          <div className="text-center px-8">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/5 flex items-center justify-center">
              <span className="text-3xl">🏢</span>
            </div>
            <p
              className="text-white/40 text-lg"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Corporate Gifting Photography
            </p>
            <p className="text-white/20 text-xs mt-2 max-w-xs mx-auto">
              Premium corporate hampers with branded packaging
            </p>
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
              <div className="relative bg-parchment flex items-center justify-center min-h-[250px]">
                <div className="text-center px-8">
                  <span className="text-5xl opacity-30">🪔</span>
                  <p className="text-text-muted/60 text-xs mt-3 max-w-xs mx-auto">
                    Festive campaign photography — replace with seasonal
                    creative
                  </p>
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
                className="text-lg lg:text-xl text-charcoal leading-relaxed"
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
  const posts = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-brand">
        <Reveal>
          <div className="text-center mb-10 lg:mb-12">
            <p className="section-label">Follow Us</p>
            <h2 className="section-title">From Our Kitchen to Your Feed</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {posts.map((i) => (
            <Reveal key={i} delay={i * 60}>
              <a
                href="https://www.instagram.com/jyotirajglobal/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="aspect-square bg-cream relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl opacity-20">📸</span>
                  </div>
                  <div className="absolute inset-0 bg-brand-burgundy/0 group-hover:bg-brand-burgundy/40 transition-colors flex items-center justify-center">
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
