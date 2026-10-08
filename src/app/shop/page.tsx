"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";
import { SlidersHorizontal, ChevronDown, X, Grid3X3, LayoutList } from "lucide-react";

type SortOption = "featured" | "best-selling" | "newest" | "price-low" | "price-high";
type CategoryFilter = "all" | "laddus" | "dry-fruits" | "sweets" | "gift-hampers" | "festive" | "corporate";

const categoryLabels: Record<CategoryFilter, string> = {
  all: "All Products",
  laddus: "Laddus",
  "dry-fruits": "Dry Fruits",
  sweets: "Sweets",
  "gift-hampers": "Gift Hampers",
  festive: "Festive",
  corporate: "Corporate",
};

const sortLabels: Record<SortOption, string> = {
  featured: "Featured",
  "best-selling": "Best Selling",
  newest: "Newest",
  "price-low": "Price: Low → High",
  "price-high": "Price: High → Low",
};

export default function ShopPage() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }

    switch (sort) {
      case "best-selling":
        filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [category, sort]);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="container-brand">
          <div className="text-center">
            <p className="section-label">Our Collection</p>
            <h1 className="section-title">Shop Jyotiraj Global</h1>
            <p className="section-subtitle mx-auto mt-3">
              Premium dry fruits, traditional laddus, sweets and curated gift
              hampers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-brand">
          {/* Category Tabs */}
          <Reveal>
            <div className="flex overflow-x-auto gap-2 mb-6 sm:mb-8 pb-3 sm:pb-6 border-b border-border-light scrollbar-hide">
              {(Object.keys(categoryLabels) as CategoryFilter[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 text-xs font-semibold tracking-[0.08em] uppercase transition-all whitespace-nowrap shrink-0 ${
                    category === cat
                      ? "bg-brand-burgundy text-white shadow-sm"
                      : "bg-transparent text-text-secondary border border-border-light hover:border-brand-burgundy hover:text-brand-burgundy"
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Toolbar */}
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-text-muted">
                Showing{" "}
                <span className="font-semibold text-charcoal">
                  {filteredProducts.length}
                </span>{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>
              <div className="flex items-center gap-3">
                {/* Filter toggle (mobile) */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-text-secondary border border-border-light px-3 py-2 hover:border-brand-burgundy transition-colors"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                </button>

                {/* Sort */}
                <div className="relative">
                  <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-text-secondary border border-border-light px-3 py-2 hover:border-brand-burgundy transition-colors"
                  >
                    Sort: {sortLabels[sort]}
                    <ChevronDown size={13} />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-1 bg-warm-white border border-border-light shadow-lg z-30 min-w-[200px]">
                      {(Object.keys(sortLabels) as SortOption[]).map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setSort(opt);
                            setSortOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                            sort === opt
                              ? "bg-brand-burgundy/5 text-brand-burgundy"
                              : "text-text-secondary hover:bg-cream"
                          }`}
                        >
                          {sortLabels[opt]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {filteredProducts.map((product, i) => (
                <Reveal key={product.id} delay={i * 60}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                No products found in this category.
              </p>
              <button
                onClick={() => setCategory("all")}
                className="btn-secondary mt-4"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
