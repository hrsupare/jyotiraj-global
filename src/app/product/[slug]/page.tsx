"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import {
  Star,
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import { useParams } from "next/navigation";

function ProductDetailContent() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find((p) => p.slug === slug);

  const [selectedWeight, setSelectedWeight] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"about" | "ingredients" | "reviews">("about");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product?.image || "/images/products/dry-fruit-laddu.jpg");

  if (!product) {
    return (
      <section className="section-padding bg-ivory">
        <div className="container-brand text-center py-20">
          <h1 className="section-title mb-4">Product Not Found</h1>
          <p className="text-text-secondary mb-6">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream py-3 border-b border-border-light">
        <div className="container-brand">
          <nav className="flex items-center gap-1.5 text-xs text-text-muted">
            <Link href="/" className="hover:text-brand-burgundy transition-colors">
              Home
            </Link>
            <ChevronRight size={11} />
            <Link href="/shop" className="hover:text-brand-burgundy transition-colors">
              Shop
            </Link>
            <ChevronRight size={11} />
            <Link
              href={`/shop?category=${product.category}`}
              className="hover:text-brand-burgundy transition-colors capitalize"
            >
              {product.category.replace("-", " ")}
            </Link>
            <ChevronRight size={11} />
            <span className="text-charcoal font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="section-padding bg-ivory">
        <div className="container-brand">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left — Gallery */}
            <Reveal>
              <div>
                <div className="aspect-square bg-cream relative overflow-hidden border border-border-light shadow-sm">
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  {discount > 0 && (
                    <span className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-brand-burgundy text-white text-xs font-semibold tracking-wider uppercase">
                      {discount}% OFF
                    </span>
                  )}
                </div>
                {/* Thumbnail Gallery */}
                <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1">
                  {(product.images?.length ? product.images : [product.image]).map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className={`w-18 h-18 sm:w-20 sm:h-20 shrink-0 bg-cream overflow-hidden border-2 transition-all ${
                        selectedImage === img
                          ? "border-brand-burgundy shadow-sm"
                          : "border-border-light hover:border-brand-gold-muted opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt={`${product.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right — Details */}
            <Reveal delay={100}>
              <div>
                {/* Badge */}
                {product.badge && (
                  <span className="inline-block px-3 py-1 bg-brand-burgundy text-white text-[0.625rem] font-semibold tracking-[0.1em] uppercase mb-4">
                    {product.badge}
                  </span>
                )}

                {/* Name */}
                <h1
                  className="text-2xl lg:text-3xl text-charcoal leading-tight"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-brand-saffron text-brand-saffron"
                            : "fill-sand text-sand"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text-secondary">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mt-4">
                  <span className="text-2xl font-bold text-charcoal">
                    ₹{product.price}
                  </span>
                  {product.mrp && product.mrp > product.price && (
                    <>
                      <span className="text-base text-text-muted line-through">
                        ₹{product.mrp}
                      </span>
                      <span className="text-sm font-semibold text-green-700 bg-green-50 px-2 py-0.5">
                        {discount}% off
                      </span>
                    </>
                  )}
                </div>
                <p className="text-xs text-text-muted mt-1">
                  Inclusive of all taxes
                </p>

                <hr className="border-border-light my-6" />

                {/* Short Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Weight Selector */}
                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-text-muted mb-2.5">
                    Weight
                  </p>
                  <div className="flex gap-2">
                    {product.weightOptions.map((w, i) => (
                      <button
                        key={w}
                        onClick={() => setSelectedWeight(i)}
                        className={`px-4 py-2.5 text-sm font-medium border transition-all ${
                          selectedWeight === i
                            ? "border-brand-burgundy text-brand-burgundy bg-brand-burgundy/5"
                            : "border-border-light text-text-secondary hover:border-brand-burgundy"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-text-muted mb-2.5">
                    Quantity
                  </p>
                  <div className="inline-flex items-center border border-border-light">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-charcoal transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-12 h-10 flex items-center justify-center text-sm font-medium text-charcoal border-x border-border-light">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-charcoal transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-8">
                  <button className="btn-primary flex-1">
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                  <button className="btn-gold flex-1">Buy Now</button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`w-12 h-12 flex items-center justify-center border transition-all ${
                      isWishlisted
                        ? "border-brand-burgundy text-brand-burgundy bg-brand-burgundy/5"
                        : "border-border-light text-text-muted hover:border-brand-burgundy hover:text-brand-burgundy"
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      size={18}
                      className={isWishlisted ? "fill-brand-burgundy" : ""}
                    />
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 pt-6 border-t border-border-light">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <Truck size={16} className="text-brand-burgundy shrink-0" />
                    <span>Free shipping above ₹999</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <ShieldCheck size={16} className="text-brand-burgundy shrink-0" />
                    <span>Quality assured</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <RotateCcw size={16} className="text-brand-burgundy shrink-0" />
                    <span>Easy returns</span>
                  </div>
                </div>

                {/* Delivery Pincode */}
                <div className="mt-6 p-4 bg-cream">
                  <p className="text-xs font-semibold tracking-[0.08em] uppercase text-text-muted mb-2">
                    Check Delivery
                  </p>
                  <div className="flex gap-0">
                    <input
                      type="text"
                      placeholder="Enter pincode"
                      className="flex-1 bg-white border border-border-light px-3 py-2 text-sm outline-none focus:border-brand-burgundy transition-colors"
                      maxLength={6}
                    />
                    <button className="px-4 py-2 bg-brand-burgundy text-white text-xs font-semibold tracking-wide uppercase hover:bg-brand-deep transition-colors">
                      Check
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Product Information Tabs */}
          <Reveal>
            <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-border-light pt-8 sm:pt-10">
              <div className="flex overflow-x-auto border-b border-border-light mb-6 sm:mb-8 scrollbar-hide">
                {(["about", "ingredients", "reviews"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase border-b-2 transition-all whitespace-nowrap ${
                      activeTab === tab
                        ? "border-brand-burgundy text-brand-burgundy"
                        : "border-transparent text-text-muted hover:text-charcoal"
                    }`}
                  >
                    {tab === "about"
                      ? "About"
                      : tab === "ingredients"
                      ? "Ingredients"
                      : `Reviews (${product.reviewCount})`}
                  </button>
                ))}
              </div>

              <div className="max-w-3xl">
                {activeTab === "about" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-semibold text-charcoal mb-2">
                        About this Product
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    {product.highlights && (
                      <div>
                        <h3 className="text-base font-semibold text-charcoal mb-2">
                          Key Highlights
                        </h3>
                        <ul className="space-y-2">
                          {product.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-sm text-text-secondary"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-saffron shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {product.shelfLife && (
                        <div className="p-3 bg-cream">
                          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                            Shelf Life
                          </p>
                          <p className="text-sm text-charcoal">
                            {product.shelfLife}
                          </p>
                        </div>
                      )}
                      {product.storageInstructions && (
                        <div className="p-3 bg-cream">
                          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                            Storage
                          </p>
                          <p className="text-sm text-charcoal">
                            {product.storageInstructions}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "ingredients" && (
                  <div>
                    <h3 className="text-base font-semibold text-charcoal mb-3">
                      Ingredients
                    </h3>
                    {product.ingredients ? (
                      <div className="flex flex-wrap gap-2">
                        {product.ingredients.map((ing) => (
                          <span
                            key={ing}
                            className="px-3 py-1.5 bg-cream text-sm text-text-secondary border border-border-light"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-text-muted">
                        Ingredient information will be updated soon.
                      </p>
                    )}
                    <p className="text-xs text-text-muted mt-4 p-3 bg-cream">
                      Note: Please refer to the product packaging for the most
                      accurate and up-to-date ingredient and allergen
                      information.
                    </p>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div>
                        <span className="text-3xl font-bold text-charcoal">
                          {product.rating}
                        </span>
                        <span className="text-lg text-text-muted">/5</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < Math.floor(product.rating)
                                  ? "fill-brand-saffron text-brand-saffron"
                                  : "fill-sand text-sand"
                              }
                            />
                          ))}
                        </div>
                        <p className="text-xs text-text-muted mt-0.5">
                          Based on {product.reviewCount} reviews
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-text-muted p-4 bg-cream">
                      Customer reviews will be displayed here. Only verified
                      purchase reviews are shown.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <Reveal>
              <div className="mt-16 lg:mt-20 pt-10 border-t border-border-light">
                <h2 className="section-title text-2xl mb-8">You May Also Like</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                  {relatedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-warm-white/95 backdrop-blur-md px-4 py-3 border-t border-border-light shadow-[0_-4px_16px_rgba(0,0,0,0.06)] flex items-center justify-between gap-3 lg:hidden">
        <div>
          <p className="text-[0.625rem] text-text-muted uppercase tracking-wider">Total Price</p>
          <p className="text-base font-bold text-charcoal">₹{product.price * quantity}</p>
        </div>
        <div className="flex items-center gap-2 flex-1 max-w-[220px]">
          <button className="flex-1 h-10 bg-brand-burgundy text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 active:bg-brand-deep transition-colors shadow-sm">
            <ShoppingBag size={14} /> Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] bg-ivory flex items-center justify-center">
          <div className="text-brand-burgundy font-serif text-lg tracking-wider">
            Loading...
          </div>
        </div>
      }
    >
      <ProductDetailContent />
    </Suspense>
  );
}
