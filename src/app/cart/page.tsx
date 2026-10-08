"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck, Gift } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([
    { id: "1", name: "Dry Fruit Laddu", weight: "250g", price: 599, quantity: 2, image: "/images/products/dry-fruit-laddu.jpg" },
    { id: "5", name: "Celebration Gift Hamper", weight: "1.2kg", price: 1999, quantity: 1, image: "/images/products/gift-hamper.jpg" },
  ]);
  const [giftOrder, setGiftOrder] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <>
      {/* Header */}
      <section className="bg-cream py-10 lg:py-12">
        <div className="container-brand">
          <h1
            className="section-title !text-2xl lg:!text-3xl text-center"
          >
            Your Cart
          </h1>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-brand">
          {items.length === 0 ? (
            <Reveal>
              <div className="text-center py-16">
                <ShoppingBag size={48} className="mx-auto text-text-muted/30 mb-4" />
                <h2
                  className="text-xl text-charcoal mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Your cart is empty
                </h2>
                <p className="text-sm text-text-muted mb-6">
                  Explore our collection and add something special.
                </p>
                <Link href="/shop" className="btn-primary">
                  Continue Shopping
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Reveal>
                  <div className="space-y-0">
                    {/* Header */}
                    <div className="hidden sm:grid grid-cols-12 gap-4 pb-3 border-b border-border-light text-[0.625rem] font-semibold tracking-[0.15em] uppercase text-text-muted">
                      <div className="col-span-6">Product</div>
                      <div className="col-span-2 text-center">Price</div>
                      <div className="col-span-2 text-center">Quantity</div>
                      <div className="col-span-2 text-right">Total</div>
                    </div>

                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="grid sm:grid-cols-12 gap-4 py-5 border-b border-border-light items-center"
                      >
                        {/* Product */}
                        <div className="sm:col-span-6 flex items-center gap-3 sm:gap-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cream overflow-hidden border border-border-light shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-charcoal truncate">
                              {item.name}
                            </h3>
                            <p className="text-xs text-text-muted mt-0.5">
                              {item.weight}
                            </p>
                            <p className="text-xs font-semibold text-brand-burgundy sm:hidden mt-1">
                              ₹{item.price} each
                            </p>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-xs text-text-muted hover:text-red-600 mt-1.5 flex items-center gap-1 transition-colors"
                            >
                              <X size={11} /> Remove
                            </button>
                          </div>
                        </div>

                        {/* Quantity & Total Row on mobile */}
                        <div className="flex sm:contents items-center justify-between pt-2 sm:pt-0 border-t border-dashed border-border-light/60 sm:border-none mt-2 sm:mt-0">
                          {/* Price (Desktop only) */}
                          <div className="hidden sm:block sm:col-span-2 text-center">
                            <span className="text-sm text-charcoal">
                              ₹{item.price}
                            </span>
                          </div>

                          {/* Quantity */}
                          <div className="sm:col-span-2 flex justify-start sm:justify-center">
                            <div className="inline-flex items-center border border-border-light bg-warm-white">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-charcoal transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-8 h-8 flex items-center justify-center text-xs font-medium text-charcoal border-x border-border-light">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-charcoal transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>

                          {/* Total */}
                          <div className="sm:col-span-2 text-right">
                            <span className="text-sm font-bold sm:font-semibold text-charcoal">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal>
                  <div className="mt-6">
                    <Link
                      href="/shop"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] uppercase text-text-muted hover:text-brand-burgundy transition-colors"
                    >
                      ← Continue Shopping
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Summary */}
              <div>
                <Reveal delay={100}>
                  <div className="bg-warm-white border border-border-light p-6">
                    <h3 className="text-base font-semibold text-charcoal mb-5">
                      Order Summary
                    </h3>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Subtotal</span>
                        <span className="font-medium text-charcoal">₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Shipping</span>
                        <span className="font-medium text-charcoal">
                          {shipping === 0 ? (
                            <span className="text-green-700">Free</span>
                          ) : (
                            `₹${shipping}`
                          )}
                        </span>
                      </div>
                      {shipping > 0 && (
                        <p className="text-xs text-text-muted bg-cream p-2">
                          <Truck size={12} className="inline mr-1" />
                          Free shipping on orders above ₹999
                        </p>
                      )}
                    </div>

                    <hr className="border-border-light my-4" />

                    <div className="flex justify-between text-base font-bold text-charcoal">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                    <p className="text-[0.625rem] text-text-muted mt-1">
                      Inclusive of all taxes
                    </p>

                    {/* Gift option */}
                    <label className="flex items-center gap-2 mt-5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={giftOrder}
                        onChange={(e) => setGiftOrder(e.target.checked)}
                        className="w-4 h-4 accent-brand-burgundy"
                      />
                      <span className="text-sm text-text-secondary flex items-center gap-1.5">
                        <Gift size={14} className="text-brand-saffron" />
                        Gift this order
                      </span>
                    </label>

                    <button className="btn-primary w-full mt-6">
                      Proceed to Checkout
                      <ArrowRight size={15} />
                    </button>

                    <p className="text-[0.625rem] text-text-muted text-center mt-3">
                      Secure checkout • 100% quality guaranteed
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
