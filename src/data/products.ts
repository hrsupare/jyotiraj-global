export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  mrp?: number;
  weight: string;
  weightOptions: string[];
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  badge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  ingredients?: string[];
  highlights?: string[];
  shelfLife?: string;
  storageInstructions?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Dry Fruit Laddu",
    slug: "dry-fruit-laddu",
    category: "laddus",
    shortDescription: "Premium blend of almonds, cashews, pistachios & dates",
    description:
      "Handcrafted with a premium selection of almonds, cashews, pistachios and naturally sweet dates. Our signature Dry Fruit Laddu is made with pure ghee and carefully selected dry fruits for an indulgent, wholesome treat.",
    price: 599,
    mrp: 699,
    weight: "250g",
    weightOptions: ["250g", "500g", "1kg"],
    rating: 4.8,
    reviewCount: 124,
    image: "/images/products/dry-fruit-laddu.jpg",
    images: [
      "/images/products/dry-fruit-laddu.jpg",
      "/images/products/dry-fruit-laddu-2.jpg",
    ],
    badge: "Best Seller",
    isBestSeller: true,
    highlights: [
      "Made with pure desi ghee",
      "No artificial sweeteners",
      "Premium dry fruits",
      "Gift-ready packaging",
    ],
    ingredients: ["Almonds", "Cashews", "Pistachios", "Dates", "Ghee", "Cardamom"],
    shelfLife: "30 days",
    storageInstructions: "Store in a cool, dry place. Refrigerate after opening.",
  },
  {
    id: "2",
    name: "Premium Kaju Katli",
    slug: "premium-kaju-katli",
    category: "sweets",
    shortDescription: "Silky smooth cashew fudge with silver leaf",
    description:
      "Our Premium Kaju Katli is crafted using the finest cashews, ground to perfection and finished with a delicate silver leaf. A timeless Indian classic for gifting and celebrations.",
    price: 749,
    mrp: 849,
    weight: "500g",
    weightOptions: ["250g", "500g", "1kg"],
    rating: 4.9,
    reviewCount: 89,
    image: "/images/products/kaju-katli.jpg",
    images: ["/images/products/kaju-katli.jpg"],
    badge: "Premium",
    isBestSeller: true,
    highlights: [
      "100% pure cashews",
      "Handcrafted with precision",
      "Silver leaf finish",
      "Premium presentation box",
    ],
    ingredients: ["Cashews", "Sugar", "Ghee", "Silver leaf"],
    shelfLife: "21 days",
    storageInstructions: "Store in a cool, dry place away from direct sunlight.",
  },
  {
    id: "3",
    name: "Royal Mixed Nuts",
    slug: "royal-mixed-nuts",
    category: "dry-fruits",
    shortDescription: "Premium assortment of almonds, cashews, walnuts & more",
    description:
      "A thoughtfully curated selection of premium almonds, cashews, walnuts, pistachios and raisins. Ideal for daily nutrition or as a premium gift.",
    price: 899,
    mrp: 999,
    weight: "500g",
    weightOptions: ["250g", "500g", "1kg"],
    rating: 4.7,
    reviewCount: 67,
    image: "/images/products/mixed-nuts.jpg",
    images: ["/images/products/mixed-nuts.jpg"],
    isBestSeller: true,
    highlights: [
      "Carefully selected varieties",
      "No added salt or oil",
      "Resealable premium packaging",
      "Ideal for gifting",
    ],
    ingredients: ["Almonds", "Cashews", "Walnuts", "Pistachios", "Raisins"],
    shelfLife: "6 months",
    storageInstructions: "Store in a cool, dry place. Seal after every use.",
  },
  {
    id: "4",
    name: "Besan Laddu",
    slug: "besan-laddu",
    category: "laddus",
    shortDescription: "Traditional gram flour laddus with aromatic cardamom",
    description:
      "A beloved classic — our Besan Laddus are slow-roasted in pure ghee with aromatic cardamom and topped with almonds. Made the traditional way, with no shortcuts.",
    price: 449,
    mrp: 549,
    weight: "500g",
    weightOptions: ["250g", "500g", "1kg"],
    rating: 4.6,
    reviewCount: 156,
    image: "/images/products/besan-laddu.jpg",
    images: ["/images/products/besan-laddu.jpg"],
    badge: "Traditional",
    highlights: [
      "Slow roasted in pure ghee",
      "Premium gram flour",
      "Aromatic cardamom",
      "Topped with almonds",
    ],
    ingredients: ["Gram flour", "Ghee", "Sugar", "Cardamom", "Almonds"],
    shelfLife: "30 days",
    storageInstructions: "Store in an airtight container at room temperature.",
  },
  {
    id: "5",
    name: "Celebration Gift Hamper",
    slug: "celebration-gift-hamper",
    category: "gift-hampers",
    shortDescription: "Curated hamper with laddus, dry fruits & sweets",
    description:
      "The Celebration Gift Hamper brings together the finest from Jyotiraj Global — an assortment of our best-selling laddus, premium dry fruits and traditional sweets, beautifully presented for any celebration.",
    price: 1999,
    mrp: 2499,
    weight: "1.2kg",
    weightOptions: ["1.2kg", "2.5kg"],
    rating: 4.9,
    reviewCount: 43,
    image: "/images/products/gift-hamper.jpg",
    images: ["/images/products/gift-hamper.jpg"],
    badge: "Gift Ready",
    isBestSeller: true,
    highlights: [
      "Premium curated selection",
      "Gift-ready luxury packaging",
      "Includes personal message card",
      "Perfect for any celebration",
    ],
    shelfLife: "21 days",
    storageInstructions: "Store in a cool, dry place. Consume within shelf life.",
  },
  {
    id: "6",
    name: "Premium Almonds",
    slug: "premium-almonds",
    category: "dry-fruits",
    shortDescription: "Hand-selected California almonds, raw & unprocessed",
    description:
      "Our Premium Almonds are hand-selected California-grade almonds known for their rich flavour, satisfying crunch and superior quality. Ideal for snacking, cooking or gifting.",
    price: 649,
    mrp: 749,
    weight: "500g",
    weightOptions: ["250g", "500g", "1kg"],
    rating: 4.8,
    reviewCount: 98,
    image: "/images/products/almonds.jpg",
    images: ["/images/products/almonds.jpg"],
    highlights: [
      "California-grade quality",
      "Raw and unprocessed",
      "No added preservatives",
      "Premium resealable pouch",
    ],
    ingredients: ["100% Natural Almonds"],
    shelfLife: "6 months",
    storageInstructions: "Store in a cool, dry place. Seal tightly after use.",
  },
  {
    id: "7",
    name: "Motichoor Laddu",
    slug: "motichoor-laddu",
    category: "laddus",
    shortDescription: "Golden, melt-in-mouth gram flour laddus",
    description:
      "Our Motichoor Laddus are made from finely sieved gram flour boondi, soaked in sugar syrup and shaped by hand into soft, golden spheres. A festive favourite that melts in your mouth.",
    price: 399,
    mrp: 499,
    weight: "500g",
    weightOptions: ["250g", "500g", "1kg"],
    rating: 4.7,
    reviewCount: 112,
    image: "/images/products/motichoor-laddu.jpg",
    images: ["/images/products/motichoor-laddu.jpg"],
    badge: "Festive Favourite",
    highlights: [
      "Finely sieved boondi",
      "Handmade with care",
      "Perfect for festivals",
      "Traditional recipe",
    ],
    ingredients: ["Gram flour", "Sugar", "Ghee", "Cardamom", "Saffron"],
    shelfLife: "21 days",
    storageInstructions: "Store in a cool, dry place.",
  },
  {
    id: "8",
    name: "Soan Papdi Premium",
    slug: "soan-papdi-premium",
    category: "sweets",
    shortDescription: "Flaky, melt-in-mouth traditional sweet",
    description:
      "Our Soan Papdi is a delicately layered, flaky sweet made using traditional techniques. Each piece melts in your mouth leaving behind a rich flavour of ghee, cardamom and pistachios.",
    price: 349,
    mrp: 399,
    weight: "500g",
    weightOptions: ["250g", "500g", "1kg"],
    rating: 4.5,
    reviewCount: 76,
    image: "/images/products/soan-papdi.jpg",
    images: ["/images/products/soan-papdi.jpg"],
    highlights: [
      "Layered flaky texture",
      "Rich ghee flavour",
      "Topped with pistachios",
      "Perfect tea-time treat",
    ],
    ingredients: ["Gram flour", "Sugar", "Ghee", "Cardamom", "Pistachios"],
    shelfLife: "45 days",
    storageInstructions: "Store in an airtight container.",
  },
];

export const categories = [
  {
    id: "laddus",
    name: "Laddus",
    description: "Traditional & Dry Fruit Laddus",
    image: "/images/categories/laddus.jpg",
  },
  {
    id: "dry-fruits",
    name: "Dry Fruits",
    description: "Premium Nuts & Dry Fruits",
    image: "/images/categories/dry-fruits.jpg",
  },
  {
    id: "sweets",
    name: "Sweets",
    description: "Traditional Indian Mithai",
    image: "/images/categories/sweets.jpg",
  },
  {
    id: "gift-hampers",
    name: "Gift Hampers",
    description: "Curated Gifts for Every Occasion",
    image: "/images/categories/gift-hampers.jpg",
  },
  {
    id: "festive",
    name: "Festive Collection",
    description: "Celebration Specials",
    image: "/images/categories/festive.jpg",
  },
  {
    id: "corporate",
    name: "Corporate Gifting",
    description: "Thoughtful Gifts for Teams & Clients",
    image: "/images/categories/corporate.jpg",
  },
];

export const ingredients = [
  {
    name: "Premium Almonds",
    description: "Selected for their rich flavour and satisfying crunch.",
    image: "/images/ingredients/almonds.jpg",
  },
  {
    name: "Golden Cashews",
    description: "Creamy, whole cashews sourced for their superior taste.",
    image: "/images/ingredients/cashews.jpg",
  },
  {
    name: "Pistachios",
    description: "Vibrant green pistachios adding colour and crunch.",
    image: "/images/ingredients/pistachios.jpg",
  },
  {
    name: "Medjool Dates",
    description: "Naturally sweet dates for wholesome indulgence.",
    image: "/images/ingredients/dates.jpg",
  },
  {
    name: "Pure Saffron",
    description: "The finest threads for aroma and authenticity.",
    image: "/images/ingredients/saffron.jpg",
  },
  {
    name: "Aromatic Cardamom",
    description: "Hand-selected green cardamom for its warm fragrance.",
    image: "/images/ingredients/cardamom.jpg",
  },
  {
    name: "Golden Raisins",
    description: "Sweet, plump raisins dried to perfection.",
    image: "/images/ingredients/raisins.jpg",
  },
  {
    name: "Pure Desi Ghee",
    description: "Slow-simmered ghee for rich, authentic flavour.",
    image: "/images/ingredients/ghee.jpg",
  },
];

export const reviews = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "The Dry Fruit Laddus from Jyotiraj Global are exceptional. Sent them as Diwali gifts and everyone was impressed by the quality and packaging.",
    product: "Dry Fruit Laddu",
    date: "October 2026",
  },
  {
    id: "2",
    name: "Rajesh Mehta",
    location: "Mumbai",
    rating: 5,
    text: "We ordered corporate gift hampers for our entire team. The presentation was premium and the sweets were delicious. Will definitely order again.",
    product: "Celebration Gift Hamper",
    date: "September 2026",
  },
  {
    id: "3",
    name: "Anita Gupta",
    location: "Jaipur",
    rating: 5,
    text: "The Kaju Katli is the best I have tasted. Smooth, not overly sweet, and beautifully presented. Reminds me of homemade quality.",
    product: "Premium Kaju Katli",
    date: "August 2026",
  },
  {
    id: "4",
    name: "Vikram Singh",
    location: "Bangalore",
    rating: 4,
    text: "Ordered the mixed nuts and premium almonds. The quality is clearly superior to what you find in regular stores. Great for daily snacking.",
    product: "Royal Mixed Nuts",
    date: "September 2026",
  },
  {
    id: "5",
    name: "Sunita Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Sent the Celebration Gift Hamper to my parents and they absolutely loved it. The variety and quality were outstanding. Perfect for festivals.",
    product: "Celebration Gift Hamper",
    date: "October 2026",
  },
];
