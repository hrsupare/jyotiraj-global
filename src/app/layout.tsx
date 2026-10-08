import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jyotiraj Global — Premium Indian Dry Fruits, Laddus & Gifting",
  description:
    "Discover premium dry fruits, traditional laddus, Indian sweets and curated gift hampers from Jyotiraj Global. Crafted with heritage, made for every celebration.",
  keywords: [
    "premium dry fruits",
    "Indian sweets",
    "laddus",
    "gift hampers",
    "corporate gifting",
    "festive gifts",
    "Jyotiraj Global",
    "traditional Indian sweets",
    "dry fruit laddu",
    "premium almonds cashews",
  ],
  openGraph: {
    title: "Jyotiraj Global — Premium Indian Dry Fruits, Laddus & Gifting",
    description:
      "Premium dry fruits, traditional laddus and curated gift hampers crafted for every celebration.",
    siteName: "Jyotiraj Global",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
