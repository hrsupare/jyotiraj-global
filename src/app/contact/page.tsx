"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [formType, setFormType] = useState<"general" | "corporate" | "bulk">("general");

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="container-brand">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label">Get in Touch</p>
            <h1 className="section-title !text-3xl lg:!text-4xl">
              We&apos;d Love to Hear From You.
            </h1>
            <p className="section-subtitle mx-auto mt-3">
              Questions, orders, corporate gifting or just a hello — reach out
              and we&apos;ll respond promptly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-brand">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="space-y-8">
                  <div>
                    <h2
                      className="text-xl text-charcoal mb-6"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      Contact Information
                    </h2>
                    <div className="space-y-5">
                      <a
                        href="https://wa.me/919999999999"
                        className="flex items-start gap-3 group"
                      >
                        <MessageCircle
                          size={18}
                          className="text-brand-burgundy mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-sm font-semibold text-charcoal group-hover:text-brand-burgundy transition-colors">
                            WhatsApp
                          </p>
                          <p className="text-sm text-text-secondary">
                            +91 99999 99999
                          </p>
                        </div>
                      </a>
                      <a href="tel:+919999999999" className="flex items-start gap-3 group">
                        <Phone
                          size={18}
                          className="text-brand-burgundy mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-sm font-semibold text-charcoal group-hover:text-brand-burgundy transition-colors">
                            Phone
                          </p>
                          <p className="text-sm text-text-secondary">
                            +91 99999 99999
                          </p>
                        </div>
                      </a>
                      <a
                        href="mailto:hello@jyotirajglobal.com"
                        className="flex items-start gap-3 group"
                      >
                        <Mail
                          size={18}
                          className="text-brand-burgundy mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-sm font-semibold text-charcoal group-hover:text-brand-burgundy transition-colors">
                            Email
                          </p>
                          <p className="text-sm text-text-secondary">
                            hello@jyotirajglobal.com
                          </p>
                        </div>
                      </a>
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={18}
                          className="text-brand-burgundy mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-sm font-semibold text-charcoal">
                            Address
                          </p>
                          <p className="text-sm text-text-secondary">
                            Jyotiraj Global
                            <br />
                            India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock
                          size={18}
                          className="text-brand-burgundy mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-sm font-semibold text-charcoal">
                            Business Hours
                          </p>
                          <p className="text-sm text-text-secondary">
                            Mon – Sat: 10:00 AM – 7:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="aspect-[4/3] bg-cream flex items-center justify-center border border-border-light">
                    <div className="text-center px-4">
                      <MapPin size={24} className="mx-auto text-text-muted mb-2" />
                      <p className="text-xs text-text-muted">
                        Google Maps embed
                        <br />
                        will be placed here
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Reveal delay={100}>
                <div className="bg-warm-white border border-border-light p-6 lg:p-8">
                  {/* Form Type Selector */}
                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {(
                      [
                        { key: "general", label: "General Enquiry" },
                        { key: "corporate", label: "Corporate Gifting" },
                        { key: "bulk", label: "Bulk Order" },
                      ] as const
                    ).map((type) => (
                      <button
                        key={type.key}
                        onClick={() => setFormType(type.key)}
                        className={`px-3.5 sm:px-4 py-2 text-xs font-semibold tracking-[0.06em] uppercase transition-all ${
                          formType === type.key
                            ? "bg-brand-burgundy text-white shadow-sm"
                            : "bg-transparent text-text-secondary border border-border-light hover:border-brand-burgundy"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-text-muted mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="w-full bg-ivory border border-border-light px-4 py-3 text-sm outline-none focus:border-brand-burgundy transition-colors"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-text-muted mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          className="w-full bg-ivory border border-border-light px-4 py-3 text-sm outline-none focus:border-brand-burgundy transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-text-muted mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-ivory border border-border-light px-4 py-3 text-sm outline-none focus:border-brand-burgundy transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>

                    {formType === "corporate" && (
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-text-muted mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            className="w-full bg-ivory border border-border-light px-4 py-3 text-sm outline-none focus:border-brand-burgundy transition-colors"
                            placeholder="Company name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-text-muted mb-2">
                            Quantity (approx.)
                          </label>
                          <input
                            type="text"
                            className="w-full bg-ivory border border-border-light px-4 py-3 text-sm outline-none focus:border-brand-burgundy transition-colors"
                            placeholder="e.g. 100 hampers"
                          />
                        </div>
                      </div>
                    )}

                    {formType === "bulk" && (
                      <div>
                        <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-text-muted mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          className="w-full bg-ivory border border-border-light px-4 py-3 text-sm outline-none focus:border-brand-burgundy transition-colors"
                          placeholder="e.g. 50 kg"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold tracking-[0.08em] uppercase text-text-muted mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        className="w-full bg-ivory border border-border-light px-4 py-3 text-sm outline-none focus:border-brand-burgundy transition-colors resize-none"
                        placeholder="Tell us how we can help..."
                        required
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      <Send size={14} />
                      Send Message
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
