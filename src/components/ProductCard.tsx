"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Star, ShoppingBag, Eye } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  return (
    <div className="product-card group">
      {/* Image */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="product-image-wrapper relative overflow-hidden bg-sand/30 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-brand-burgundy text-white text-[0.625rem] font-semibold tracking-[0.1em] uppercase">
              {product.badge}
            </span>
          )}

          {/* Hover Actions */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
            <button
              className="w-9 h-9 bg-white flex items-center justify-center shadow-sm hover:bg-brand-burgundy hover:text-white transition-all"
              aria-label="Quick view"
            >
              <Eye size={15} />
            </button>
            <button
              className="w-9 h-9 bg-white flex items-center justify-center shadow-sm hover:bg-brand-burgundy hover:text-white transition-all"
              aria-label="Add to cart"
            >
              <ShoppingBag size={15} />
            </button>
          </div>
        </div>
      </Link>

      {/* Details */}
      <div className="p-3 sm:p-4">
        {/* Category */}
        <p className="text-[0.625rem] tracking-[0.15em] uppercase text-text-muted font-medium mb-1">
          {product.category.replace("-", " ")}
        </p>

        {/* Name */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-semibold text-charcoal leading-snug hover:text-brand-burgundy transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="text-xs text-text-muted mt-1 line-clamp-1">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={
                  i < Math.floor(product.rating)
                    ? "fill-brand-saffron text-brand-saffron"
                    : "fill-sand text-sand"
                }
              />
            ))}
          </div>
          <span className="text-[0.625rem] text-text-muted">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price + Weight */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-charcoal">
              ₹{product.price}
            </span>
            {product.mrp && product.mrp > product.price && (
              <>
                <span className="text-xs text-text-muted line-through">
                  ₹{product.mrp}
                </span>
                <span className="text-[0.625rem] font-semibold text-green-700 bg-green-50 px-1.5 py-0.5">
                  {discount}% off
                </span>
              </>
            )}
          </div>
          <span className="text-[0.6875rem] text-text-muted">
            {product.weight}
          </span>
        </div>

        {/* Wishlist + Add to Cart */}
        <div className="flex items-center gap-1.5 sm:gap-2 mt-3">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center border transition-all ${
              isWishlisted
                ? "border-brand-burgundy text-brand-burgundy bg-brand-burgundy/5"
                : "border-border-light text-text-muted hover:border-brand-burgundy hover:text-brand-burgundy"
            }`}
            aria-label="Add to wishlist"
          >
            <Heart
              size={13}
              className={isWishlisted ? "fill-brand-burgundy" : ""}
            />
          </button>
          <button className="flex-1 h-8 sm:h-9 bg-brand-burgundy text-white text-[0.6875rem] sm:text-xs font-semibold tracking-[0.05em] sm:tracking-[0.08em] uppercase hover:bg-brand-deep transition-colors whitespace-nowrap px-1">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
