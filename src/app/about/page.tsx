import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Leaf, Award, Heart, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — Jyotiraj Global",
  description:
    "Discover the story behind Jyotiraj Global — a premium Indian food brand rooted in tradition, committed to quality and crafted for every celebration.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream py-20 lg:py-28">
        <div className="container-brand">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label">Our Story</p>
            <h1 className="section-title !text-4xl lg:!text-5xl">
              A Tradition Worth Passing On.
            </h1>
            <div className="gold-divider mx-auto mt-5 mb-5" />
            <p className="section-subtitle mx-auto">
              Rooted in Indian heritage. Crafted with care. Made for every
              celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="bg-ivory">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          <div className="relative bg-parchment min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden">
            <img
              src="/images/banners/heritage-craft.jpg"
              alt="Jyotiraj Global Heritage Artisanal Sweet Making"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
              <p className="text-[0.625rem] tracking-[0.2em] uppercase text-brand-gold font-semibold">Heritage Craft</p>
              <p className="text-sm font-serif">Master Sweetmakers of India</p>
            </div>
          </div>
          <div className="flex items-center px-8 lg:px-16 xl:px-20 py-14">
            <Reveal>
              <div className="max-w-md">
                <p className="section-label">The Beginning</p>
                <h2
                  className="text-2xl lg:text-3xl leading-tight text-charcoal"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Where It All Started
                </h2>
                <div className="gold-divider mt-4 mb-5" />
                <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                  <p>
                    Jyotiraj Global was founded with a clear vision — to bring
                    the authentic taste of premium Indian dry fruits, laddus and
                    traditional sweets to discerning customers who value quality
                    and craftsmanship.
                  </p>
                  <p>
                    What began as a passion for preserving traditional Indian
                    flavours has grown into a brand trusted by families, gifting
                    customers and businesses across the country.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-warm-white">
        <div className="container-brand">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="section-label">Our Philosophy</p>
              <h2
                className="text-2xl lg:text-3xl leading-tight text-charcoal"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Quality Without Compromise.
              </h2>
              <div className="gold-divider mx-auto mt-4 mb-5" />
              <p className="text-sm text-text-secondary leading-relaxed">
                At Jyotiraj Global, every product is a reflection of our
                commitment to quality. From sourcing the finest ingredients to
                handcrafting each item with care, we believe that premium taste
                should never come at the cost of authenticity.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-14">
            {[
              {
                icon: <Leaf size={24} />,
                title: "Purity",
                desc: "Only the finest, purest ingredients make it into our products.",
              },
              {
                icon: <Award size={24} />,
                title: "Craft",
                desc: "Traditional techniques perfected over time, never rushed.",
              },
              {
                icon: <Heart size={24} />,
                title: "Care",
                desc: "Every product is made with attention to detail and genuine care.",
              },
              {
                icon: <Globe size={24} />,
                title: "Vision",
                desc: "Bringing premium Indian flavours to customers everywhere.",
              },
            ].map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center text-brand-burgundy border border-brand-burgundy/15">
                    {value.icon}
                  </div>
                  <h3 className="text-base font-semibold text-charcoal mt-5 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients & Quality */}
      <section className="bg-cream">
        <div className="grid lg:grid-cols-2 min-h-[450px]">
          <div className="flex items-center px-8 lg:px-16 xl:px-20 py-14 order-2 lg:order-1">
            <Reveal>
              <div className="max-w-md">
                <p className="section-label">Ingredients</p>
                <h2
                  className="text-2xl lg:text-3xl leading-tight text-charcoal"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Sourced With Purpose
                </h2>
                <div className="gold-divider mt-4 mb-5" />
                <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                  <p>
                    We believe great taste starts with great ingredients. Every
                    almond, cashew, pistachio and spice is carefully selected for
                    quality, freshness and flavour.
                  </p>
                  <p>
                    Our commitment to ingredient quality extends to every step of
                    the process — from sourcing to preparation, ensuring that what
                    reaches you is nothing but the best.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="relative bg-parchment min-h-[300px] sm:min-h-[350px] overflow-hidden order-1 lg:order-2">
            <img
              src="/images/products/mixed-nuts.jpg"
              alt="Premium Sourced Dry Fruits and Nuts"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
              <p className="text-[0.625rem] tracking-[0.2em] uppercase text-brand-gold font-semibold">Finest Harvest</p>
              <p className="text-sm font-serif">100% Selected Nuts & Spices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-ivory">
        <div className="container-brand">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="section-label">Looking Ahead</p>
              <h2
                className="text-2xl lg:text-3xl leading-tight text-charcoal"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Building a Brand That Lasts
              </h2>
              <div className="gold-divider mx-auto mt-4 mb-5" />
              <p className="text-sm text-text-secondary leading-relaxed">
                Jyotiraj Global is more than a food brand — it is a commitment to
                preserving the finest traditions of Indian taste while meeting the
                expectations of modern consumers. As we grow, our promise remains
                the same: premium quality, authentic flavours and products worth
                sharing.
              </p>
              <div className="mt-8">
                <Link href="/shop" className="btn-primary">
                  Explore Our Products
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
