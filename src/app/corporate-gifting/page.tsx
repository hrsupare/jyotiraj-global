import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Users, Package, Palette, Truck, HeadphonesIcon, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Gifting — Jyotiraj Global",
  description:
    "Premium corporate gifting solutions from Jyotiraj Global. Custom hampers, bulk orders, branded packaging for clients, teams and business partners.",
};

export default function CorporateGiftingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-burgundy text-white py-20 lg:py-28">
        <div className="container-brand">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[0.6875rem] font-semibold tracking-[0.3em] uppercase text-brand-gold mb-3">
                For Business
              </p>
              <h1
                className="text-4xl lg:text-5xl leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Thoughtful Gifting.
                <br />
                Beautifully Presented.
              </h1>
              <div className="w-12 h-[2px] bg-brand-gold mt-5 mb-6" />
              <p className="text-base text-white/60 max-w-md leading-relaxed">
                Create memorable gifting experiences for your clients, teams and
                business partners with thoughtfully curated Jyotiraj Global
                hampers.
              </p>
              <div className="mt-8">
                <Link href="/contact?type=corporate" className="btn-gold">
                  Enquire for Corporate Gifting
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div className="block mt-8 lg:mt-0">
              <div className="aspect-[4/3] sm:aspect-square w-full max-w-md mx-auto bg-brand-deep overflow-hidden border border-brand-gold/30 shadow-2xl relative">
                <img
                  src="/images/products/corporate-hamper.jpg"
                  alt="Jyotiraj Global Corporate Gifting Box"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent lg:hidden" />
                <div className="absolute bottom-3 left-4 right-4 lg:hidden text-white">
                  <p className="text-[0.625rem] tracking-[0.2em] uppercase text-brand-gold font-semibold">Corporate Collection</p>
                  <p className="text-sm font-serif">Custom Packaging Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-ivory">
        <div className="container-brand">
          <Reveal>
            <div className="text-center mb-12 lg:mb-14">
              <p className="section-label">What We Offer</p>
              <h2 className="section-title">Gifting Made Effortless</h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {[
              {
                icon: <Package size={24} />,
                title: "Custom Quantities",
                desc: "Order from 25 to 5000+ hampers. We scale to your needs.",
              },
              {
                icon: <Palette size={24} />,
                title: "Custom Branding",
                desc: "Add your company logo and branding to the packaging.",
              },
              {
                icon: <Users size={24} />,
                title: "Dedicated Support",
                desc: "A dedicated team member handles your order from start to finish.",
              },
              {
                icon: <Truck size={24} />,
                title: "Pan-India Delivery",
                desc: "Reliable delivery across India, with tracking and support.",
              },
              {
                icon: <CheckCircle2 size={24} />,
                title: "Quality Assured",
                desc: "Every hamper goes through quality checks before dispatch.",
              },
              {
                icon: <HeadphonesIcon size={24} />,
                title: "Flexible Options",
                desc: "Choose from our curated range or create a custom selection.",
              },
            ].map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80}>
                <div className="p-6 bg-warm-white border border-border-light">
                  <div className="w-12 h-12 flex items-center justify-center text-brand-burgundy border border-brand-burgundy/15 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-charcoal mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-cream">
        <div className="container-brand">
          <Reveal>
            <div className="text-center mb-12">
              <p className="section-label">How It Works</p>
              <h2 className="section-title">Simple, Seamless Process</h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Enquire", desc: "Tell us your requirements and budget." },
              { step: "02", title: "Curate", desc: "We create a selection tailored to your needs." },
              { step: "03", title: "Approve", desc: "Review and confirm your order." },
              { step: "04", title: "Deliver", desc: "We handle packaging and delivery." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className="text-center">
                  <span
                    className="text-4xl font-light text-brand-gold/40"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {item.step}
                  </span>
                  <h3 className="text-base font-semibold text-charcoal mt-3 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center mt-12">
              <Link href="/contact?type=corporate" className="btn-primary">
                Start Your Corporate Order
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
