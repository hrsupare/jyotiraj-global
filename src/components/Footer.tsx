"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerShop = [
  { label: "Laddus", href: "/shop?category=laddus" },
  { label: "Dry Fruits", href: "/shop?category=dry-fruits" },
  { label: "Sweets", href: "/shop?category=sweets" },
  { label: "Gift Hampers", href: "/shop?category=gift-hampers" },
  { label: "Festive Collection", href: "/shop?category=festive" },
];

const footerCompany = [
  { label: "Our Story", href: "/about" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
];

const footerHelp = [
  { label: "Shipping", href: "/shipping" },
  { label: "Returns & Exchange", href: "/returns" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const footerBusiness = [
  { label: "Corporate Gifting", href: "/corporate-gifting" },
  { label: "Bulk Orders", href: "/contact?type=bulk" },
  { label: "Become a Partner", href: "/contact?type=partner" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-brand py-12 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="section-label !text-brand-gold !mb-2">Stay Connected</p>
              <h3
                className="text-2xl lg:text-3xl text-white"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Be the First to Know.
              </h3>
              <p className="text-sm text-white/50 mt-2">
                New launches, festive offers and more — delivered to your inbox.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-2 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border border-white/15 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-brand-gold transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-brand-burgundy text-white text-xs font-semibold tracking-[0.12em] uppercase hover:bg-brand-deep transition-colors whitespace-nowrap text-center"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-white/30 mt-2">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-brand py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Link href="/" className="inline-block">
              <span
                className="text-white tracking-[0.2em] uppercase font-semibold text-xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Jyotiraj
              </span>
              <span className="block text-[0.6rem] tracking-[0.35em] uppercase text-brand-gold-muted font-semibold mt-0.5">
                Global
              </span>
            </Link>
            <p className="text-sm text-white/40 mt-4 leading-relaxed max-w-xs">
              Premium Indian dry fruits, traditional laddus and curated gifting
              — crafted with heritage for every celebration.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/jyotirajglobal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/50 hover:text-white hover:border-brand-gold transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/50 hover:text-white hover:border-brand-gold transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/50 hover:text-white hover:border-brand-gold transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-brand-gold-muted mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {footerShop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-brand-gold-muted mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-brand-gold-muted mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {footerHelp.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-brand-gold-muted mb-4">
              Business
            </h4>
            <ul className="space-y-2.5">
              {footerBusiness.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:hello@jyotirajglobal.com"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                <Mail size={13} /> hello@jyotirajglobal.com
              </a>
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                <Phone size={13} /> +91 99999 99999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-brand py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <p>© 2026 Jyotiraj Global. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white/60 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white/60 transition-colors">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white/60 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
