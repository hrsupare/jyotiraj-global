"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Phone,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/shop",
    megaMenu: true,
  },
  { label: "Laddus", href: "/shop?category=laddus" },
  { label: "Dry Fruits", href: "/shop?category=dry-fruits" },
  { label: "Sweets", href: "/shop?category=sweets" },
  { label: "Gifting", href: "/gifting" },
  { label: "Our Story", href: "/about" },
];

const megaMenuData = {
  products: [
    { label: "Laddus", href: "/shop?category=laddus", desc: "Traditional & Dry Fruit Laddus" },
    { label: "Dry Fruits", href: "/shop?category=dry-fruits", desc: "Premium Nuts & Dry Fruits" },
    { label: "Sweets", href: "/shop?category=sweets", desc: "Traditional Indian Mithai" },
    { label: "Gift Hampers", href: "/shop?category=gift-hampers", desc: "Curated for Every Occasion" },
    { label: "Festive Collection", href: "/shop?category=festive", desc: "Celebration Specials" },
  ],
  featured: [
    { label: "Best Sellers", href: "/shop?sort=best-selling" },
    { label: "New Arrivals", href: "/shop?sort=newest" },
    { label: "Premium Collection", href: "/shop?collection=premium" },
    { label: "Corporate Gifting", href: "/corporate-gifting" },
  ],
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMegaEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShowMegaMenu(true);
  };

  const handleMegaLeave = () => {
    timerRef.current = setTimeout(() => setShowMegaMenu(false), 200);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-brand-burgundy text-white text-center text-[0.6875rem] sm:text-xs tracking-[0.08em] sm:tracking-[0.15em] uppercase font-medium py-1.5 sm:py-2 px-3">
        Premium Indian Flavours&ensp;•&ensp;Crafted for Every Celebration
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.06)] py-2"
            : "bg-warm-white py-3 lg:py-4"
        }`}
      >
        <div className="container-brand">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Trigger */}
            <button
              className="lg:hidden p-2 -ml-2 text-charcoal"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="flex flex-col items-center leading-none">
                <span
                  className="text-brand-burgundy tracking-[0.2em] uppercase font-semibold"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: scrolled ? "1.1rem" : "1.3rem",
                    transition: "font-size 0.3s ease",
                  }}
                >
                  Jyotiraj
                </span>
                <span className="text-[0.55rem] tracking-[0.35em] uppercase text-brand-gold-muted font-semibold mt-0.5">
                  Global
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative nav-item"
                  onMouseEnter={link.megaMenu ? handleMegaEnter : undefined}
                  onMouseLeave={link.megaMenu ? handleMegaLeave : undefined}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3.5 py-2 text-[0.8125rem] font-medium text-charcoal hover:text-brand-burgundy tracking-wide transition-colors duration-200"
                  >
                    {link.label}
                    {link.megaMenu && <ChevronDown size={13} className="mt-0.5 opacity-50" />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1">
              <button
                className="p-2 text-charcoal hover:text-brand-burgundy transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link
                href="/account"
                className="hidden md:flex p-2 text-charcoal hover:text-brand-burgundy transition-colors"
                aria-label="Account"
              >
                <User size={20} />
              </Link>
              <Link
                href="/wishlist"
                className="hidden md:flex p-2 text-charcoal hover:text-brand-burgundy transition-colors"
                aria-label="Wishlist"
              >
                <Heart size={20} />
              </Link>
              <Link
                href="/cart"
                className="relative p-2 text-charcoal hover:text-brand-burgundy transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-saffron text-white text-[0.6rem] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {showMegaMenu && (
            <motion.div
              ref={megaRef}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 w-full bg-warm-white border-t border-border-light shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <div className="container-brand py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Products */}
                  <div className="col-span-4">
                    <h3 className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-brand-gold-muted mb-4">
                      Products
                    </h3>
                    <div className="space-y-3">
                      {megaMenuData.products.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block group"
                          onClick={() => setShowMegaMenu(false)}
                        >
                          <span className="text-sm font-medium text-charcoal group-hover:text-brand-burgundy transition-colors">
                            {item.label}
                          </span>
                          <span className="block text-xs text-text-muted mt-0.5">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Featured */}
                  <div className="col-span-3">
                    <h3 className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-brand-gold-muted mb-4">
                      Featured
                    </h3>
                    <div className="space-y-2.5">
                      {megaMenuData.featured.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block text-sm font-medium text-charcoal hover:text-brand-burgundy transition-colors"
                          onClick={() => setShowMegaMenu(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="col-span-5">
                    <div className="relative w-full h-48 bg-cream overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-brand-saffron font-semibold">
                            New Season
                          </p>
                          <p
                            className="text-xl mt-1 text-charcoal"
                            style={{ fontFamily: "var(--font-playfair), serif" }}
                          >
                            Festive Collection 2026
                          </p>
                          <Link
                            href="/shop?collection=festive"
                            className="inline-block mt-3 text-xs font-semibold tracking-[0.15em] uppercase text-brand-burgundy border-b border-brand-burgundy pb-0.5 hover:text-brand-deep transition-colors"
                            onClick={() => setShowMegaMenu(false)}
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 w-full bg-warm-white border-t border-border-light shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="container-brand py-6">
                <div className="flex items-center gap-4 max-w-2xl mx-auto">
                  <Search size={20} className="text-text-muted shrink-0" />
                  <input
                    type="text"
                    placeholder="Search for laddus, dry fruits, gifts..."
                    className="flex-1 bg-transparent text-base text-charcoal placeholder:text-text-muted outline-none border-b border-border-medium pb-2 focus:border-brand-burgundy transition-colors"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-1 text-text-muted hover:text-charcoal"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="max-w-2xl mx-auto mt-4">
                  <p className="text-[0.6875rem] tracking-[0.15em] uppercase text-text-muted font-semibold mb-2">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Dry Fruit Laddu", "Premium Almonds", "Gift Hamper", "Kaju Katli", "Mixed Nuts"].map((term) => (
                      <span
                        key={term}
                        className="text-xs px-3 py-1.5 border border-border-light text-text-secondary hover:border-brand-burgundy hover:text-brand-burgundy cursor-pointer transition-colors"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-[100]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[300px] bg-warm-white z-[101] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 border-b border-border-light">
                <span
                  className="text-brand-burgundy tracking-[0.15em] uppercase font-semibold text-lg"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Jyotiraj
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 text-charcoal"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="p-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block py-3 text-[0.9375rem] font-medium text-charcoal border-b border-border-light/60 hover:text-brand-burgundy transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="p-5 mt-2 border-t border-border-light">
                <Link
                  href="/account"
                  className="flex items-center gap-3 py-2.5 text-sm text-text-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  <User size={18} /> My Account
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-3 py-2.5 text-sm text-text-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  <Heart size={18} /> Wishlist
                </Link>
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-3 py-2.5 text-sm text-text-secondary"
                >
                  <Phone size={18} /> Call Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
