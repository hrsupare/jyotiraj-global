import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Gift, Building2, Heart, Sparkles, PartyPopper } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gifting — Jyotiraj Global | Premium Indian Gift Hampers",
  description:
    "Discover premium gift hampers, festive gifting, corporate gifting and wedding gifting from Jyotiraj Global. Beautifully presented for every celebration.",
};

const giftingCategories = [
  {
    title: "Festive Gifting",
    description:
      "Celebrate Diwali, Holi, Rakhi, Ganesh Chaturthi and every Indian festival with beautifully curated gift hampers that carry the warmth of tradition.",
    icon: <Sparkles size={24} />,
    image: "/images/categories/festive.jpg",
    features: ["Festival-themed packaging", "Customizable selections", "Pan-India delivery"],
  },
  {
    title: "Wedding Gifting",
    description:
      "Mark the most special celebrations with premium dry fruit boxes and sweet hampers that leave a lasting impression on your guests.",
    icon: <Heart size={24} />,
    image: "/images/products/kaju-katli.jpg",
    features: ["Luxury presentation", "Bulk order support", "Custom messages"],
  },
  {
    title: "Corporate Gifting",
    description:
      "Create memorable gifting experiences for clients, teams and business partners with thoughtfully curated premium hampers.",
    icon: <Building2 size={24} />,
    image: "/images/products/corporate-hamper.jpg",
    features: ["Custom branding", "Bulk quantities", "Dedicated support"],
  },
  {
    title: "Family Gifting",
    description:
      "Send love to family and friends with handpicked assortments of laddus, dry fruits and traditional sweets.",
    icon: <Gift size={24} />,
    image: "/images/products/besan-laddu.jpg",
    features: ["Personal touch", "Variety packs", "Fresh delivery"],
  },
  {
    title: "Premium Hampers",
    description:
      "Our most luxurious offering — premium hampers combining the finest dry fruits, laddus and sweets in elegant presentation boxes.",
    icon: <PartyPopper size={24} />,
    image: "/images/products/gift-hamper.jpg",
    features: ["Luxury packaging", "Premium selection", "Gift-ready"],
  },
];

export default function GiftingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-burgundy text-white py-20 lg:py-28">
        <div className="container-brand relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[0.6875rem] font-semibold tracking-[0.3em] uppercase text-brand-gold mb-3">
              Gifting by Jyotiraj Global
            </p>
            <h1
              className="text-4xl lg:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Make Every Celebration Sweeter.
            </h1>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto mt-5 mb-5" />
            <p className="text-base text-white/60 max-w-lg mx-auto leading-relaxed">
              Thoughtfully curated gifts for festivals, weddings, family moments
              and every occasion that matters.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link href="/shop?category=gift-hampers" className="btn-gold">
                Explore Gift Hampers
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact?type=corporate"
                className="btn-secondary !border-white/25 !text-white/80 hover:!bg-white/10"
              >
                Corporate Gifting Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gifting Categories */}
      <section className="section-padding bg-ivory">
        <div className="container-brand">
          <Reveal>
            <div className="text-center mb-12 lg:mb-14">
              <p className="section-label">Our Gifting Range</p>
              <h2 className="section-title">A Gift for Every Occasion</h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {giftingCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 80}>
                <div className="grid lg:grid-cols-5 gap-0 bg-warm-white border border-border-light">
                  {/* Image */}
                  <div
                    className={`lg:col-span-2 relative bg-cream min-h-[260px] sm:min-h-[300px] overflow-hidden ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-3 flex items-center p-8 lg:p-12 ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div>
                      <div className="w-12 h-12 flex items-center justify-center text-brand-burgundy border border-brand-burgundy/15 mb-5">
                        {cat.icon}
                      </div>
                      <h3
                        className="text-xl lg:text-2xl text-charcoal"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {cat.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mt-3 max-w-md">
                        {cat.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        {cat.features.map((f) => (
                          <span
                            key={f}
                            className="text-[0.6875rem] text-text-muted px-3 py-1 bg-cream border border-border-light"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Link
                          href={
                            cat.title === "Corporate Gifting"
                              ? "/contact?type=corporate"
                              : "/shop?category=gift-hampers"
                          }
                          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-brand-burgundy border-b border-brand-burgundy/40 pb-0.5 hover:border-brand-burgundy transition-colors"
                        >
                          {cat.title === "Corporate Gifting"
                            ? "Enquire Now"
                            : "Explore Collection"}
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-brand">
          <Reveal>
            <div className="max-w-xl mx-auto text-center">
              <p className="section-label">Need Help?</p>
              <h2
                className="text-2xl lg:text-3xl text-charcoal"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Let Us Help You Find the Perfect Gift.
              </h2>
              <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                Whether it&apos;s a festival, wedding, corporate event or a
                personal celebration — our team is ready to help you create the
                ideal gifting experience.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
