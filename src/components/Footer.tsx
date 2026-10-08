import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
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
              <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border border-white/15 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-brand-gold transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-brand-burgundy text-white text-xs font-semibold tracking-[0.12em] uppercase hover:bg-brand-deep transition-colors whitespace-nowrap"
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
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/50 hover:text-white hover:border-brand-gold transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/50 hover:text-white hover:border-brand-gold transition-all"
                aria-label="YouTube"
              >
                <Youtube size={16} />
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
            <p>© {new Date().getFullYear()} Jyotiraj Global. All rights reserved.</p>
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
