import {
  Soup,
  Disc,
  Drumstick,
  CookingPot,
  UtensilsCrossed,
  Croissant,
  Salad,
  Beef,
  Leaf,
  Waves,
  Flame,
  Zap,
  Globe,
  GlassWater,
  Wheat,
  Wine,
  type LucideIcon,
} from "lucide-react";

export interface MenuItem {
  name: string;
  image: string;
  icon: LucideIcon;
  desc?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  titleLine1: string;
  titleLine2: string;
  label: string;
  icon: LucideIcon;
  desc: string;
  items: MenuItem[];
}

export const categories: MenuCategory[] = [
  {
    id: "soups",
    title: "Soups & Stews",
    titleLine1: "Soups",
    titleLine2: "Stews",
    label: "The Collection",
    icon: Soup,
    desc: "From rich, nutty Egusi to draw soups like Ogbono and Okro, our soups are made with traditional techniques and the freshest ingredients.",
    items: [
       { name: "Oha Soup", image: "https://i.pinimg.com/1200x/33/54/4a/33544a780071ea22ffe18f73f3b3b3e5.jpg", icon: Leaf, desc: "Slow-cooked Igbo delicacy made with tender oha leaves and cocoyam thickener." },
      { name: "Egusi Soup", image: "https://i.pinimg.com/1200x/0f/5b/d2/0f5bd267d61559281921fe0c64bc56f5.jpg", icon: Soup, desc: "A hearty West African classic simmered with ground melon seeds, palm oil and assorted meats." },
     
      { name: "Ogbono Soup", image: "https://i.pinimg.com/736x/71/c7/32/71c73298611ef7142c3d5bd5b425ee24.jpg", icon: Soup },
      { name: "Okro Soup", image: "https://i.pinimg.com/736x/ae/b6/fc/aeb6fc5265bea42e11230908647d95b8.jpg", icon: UtensilsCrossed },
      { name: "Bitterleaf Soup", image: "https://i.pinimg.com/1200x/8f/77/c4/8f77c41fb4b4194ae9dd176107ac5ac2.jpg", icon: Leaf },
      { name: "Pepper Soup", image: "https://i.pinimg.com/1200x/34/a7/d9/34a7d90cdf09466b888829b4eb064b85.jpg", icon: Flame },
    ],
  },
  {
    id: "swallow",
    title: "Swallow",
    titleLine1: "Swallow",
    titleLine2: "Sides",
    label: "Traditional Staples",
    icon: Disc,
    desc: "The perfect partner to our soups. Choose from pounded yam, amala, eba, semo, fufu, or starch. Made fresh to order.",
    items: [
      { name: "Pounded Yam", image: "https://i.pinimg.com/736x/38/7f/e8/387fe89bcb8f193ec91f031bd2960f44.jpg", icon: Disc, desc: "Silky smooth and freshly pounded — the gold standard of Nigerian swallows." },
      { name: "Amala", image: "https://i.pinimg.com/1200x/8a/60/42/8a6042f0638ef2767ae75feed2fa6718.jpg", icon: Disc, desc: "Dark and velvety yam flour swallow, best paired with Ewedu or Gbegiri." },
      { name: "Eba", image: "https://i.pinimg.com/736x/fe/30/7b/fe307b79550f79949254a8c57f8dcd95.jpg", icon: Disc },
      { name: "Semo", image: "https://i.pinimg.com/1200x/5a/1b/7d/5a1b7dd2f1500bc0d6c16f0e9cb2adc6.jpg", icon: Disc },
      { name: "Fufu", image: "https://i.pinimg.com/1200x/06/91/5b/06915b6a2ea976f5fb450f76a0786ce0.jpg", icon: Disc },
      { name: "Starch", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: Disc },
    ],
  },
  {
    id: "proteins",
    title: "Proteins",
    titleLine1: "Grills",
    titleLine2: "Proteins",
    label: "Signature Proteins",
    icon: Drumstick,
    desc: "Grilled, sauced, fried, or peppered. Our proteins are the stars of any meal. From classic grilled chicken to specialty bushmeat and snails.",
    items: [
      { name: "Asun Goat Meat", image: "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg", icon: Beef, desc: "Spicy peppered goat meat, smoked and tossed in our signature hot sauce." },
      { name: "Grilled Turkey", image: "https://i.pinimg.com/1200x/35/c0/f6/35c0f6e05a25dcc44ed45262bacfd5d9.jpg", icon: Drumstick, desc: "Marinated and slow-grilled turkey leg with a perfectly charred exterior." },
      { name: "Peppered Snails", image: "https://i.pinimg.com/736x/c7/95/14/c79514d3edb5594c050a4bf1503acd41.jpg", icon: Waves },
      { name: "Grilled Chicken", image: "https://i.pinimg.com/1200x/f0/5b/73/f05b733366391c30c361d10fe961500f.jpg", icon: Drumstick },
      { name: "Bushmeat", image: "https://i.pinimg.com/736x/51/2f/7c/512f7c7235e4037f53876eadae4a36aa.jpg", icon: Beef },
      { name: "Cow Leg", image: "https://i.pinimg.com/1200x/0f/5b/d2/0f5bd267d61559281921fe0c64bc56f5.jpg", icon: Beef },
    ],
  },
  {
    id: "intercontinental",
    title: "Intercontinental",
    titleLine1: "World",
    titleLine2: "Flavours",
    label: "Global Kitchen",
    icon: Globe,
    desc: "Our famous Jollof Rice, fragrant Biryani, creamy pasta, and more. Global flavors with a Foodies touch.",
    items: [
      { name: "Jollof Rice", image: "https://i.pinimg.com/1200x/bc/00/d2/bc00d298bcf0d9f64b4a8dc96ba4629a.jpg", icon: Flame, desc: "The legendary smoky party Jollof — cooked over open flame for that irreplaceable bottom pot flavour." },
      { name: "Coconut Fried Rice", image: "https://i.pinimg.com/1200x/37/5f/34/375f34c3c340cfdc1bd0ba84d7fbeb8a.jpg", icon: Leaf, desc: "Fragrant rice infused with coconut milk, tossed with mixed vegetables and prawns." },
      { name: "Seafood Pasta", image: "https://i.pinimg.com/736x/a2/24/1e/a2241ec52fba61fe251fba15d09c5ae5.jpg", icon: UtensilsCrossed },
      { name: "Biryani", image: "https://i.pinimg.com/1200x/f1/ce/ab/f1ceabe13456ee265f0d8de95798ce8b.jpg", icon: Globe },
      { name: "Fried Rice", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: Wheat },
      { name: "Noodles", image: "https://i.pinimg.com/1200x/34/a7/d9/34a7d90cdf09466b888829b4eb064b85.jpg", icon: UtensilsCrossed },
    ],
  },
  {
    id: "africana",
    title: "Africana Delicacies",
    titleLine1: "Africana",
    titleLine2: "Delicacies",
    label: "Heritage Dishes",
    icon: CookingPot,
    desc: "Traditional specialties: Nkwobi, Isi Ewu, Abacha, and more. For those who appreciate authentic Nigerian culinary heritage.",
    items: [
      { name: "Nkwobi", image: "https://i.pinimg.com/1200x/8f/77/c4/8f77c41fb4b4194ae9dd176107ac5ac2.jpg", icon: CookingPot, desc: "Spiced cow foot in a rich palm oil ukpaka sauce — a true Eastern Nigerian classic." },
      { name: "Isi Ewu", image: "https://i.pinimg.com/1200x/2e/84/68/2e84685d04d47f0e402f2a01aeca1f0d.jpg", icon: Beef, desc: "Seasoned goat head in a boldly spiced sauce, garnished with utazi leaves." },
      { name: "Abacha", image: "https://i.pinimg.com/736x/1f/af/4c/1faf4c6d43b81b25fcc11d0f2c9a499e.jpg", icon: Salad },
      { name: "Catfish Pepper Soup", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: Waves },
      { name: "Oxtail", image: "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg", icon: Beef },
      { name: "Cow Skin (Ponmo)", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: Beef },
    ],
  },
  {
    id: "pastries",
    title: "Pastries & Sides",
    titleLine1: "Pastries",
    titleLine2: "Sides",
    label: "Bites & Snacks",
    icon: Croissant,
    desc: "From flaky meat pies to sweet puff puff, our pastries are perfect for any time of day.",
    items: [
      { name: "Meat Pie", image: "/assets/menu/meatpie.jpg", icon: Croissant, desc: "Golden flaky pastry filled with seasoned minced meat, potatoes and carrots." },
      { name: "Puff Puff", image: "https://i.pinimg.com/736x/96/0b/4e/960b4e47dfe7e09ed1f1988e9e26c24b.jpg", icon: Zap, desc: "Light, pillowy deep-fried dough dusted with sugar — Nigeria's favourite street snack." },
      { name: "Spring Rolls", image: "https://i.pinimg.com/1200x/ca/ce/9b/cace9bfe070775a592d7700c54d9332d.jpg", icon: UtensilsCrossed },
      { name: "Samosas", image: "https://i.pinimg.com/736x/2e/b1/c1/2eb1c180c90ad9e91e0f3137920e22f8.jpg", icon: Croissant },
      { name: "Chin Chin", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: Zap },
      { name: "Plantain", image: "https://i.pinimg.com/1200x/8f/77/c4/8f77c41fb4b4194ae9dd176107ac5ac2.jpg", icon: Wheat },
    ],
  },
  {
    id: "salads",
    title: "Salads & Juices",
    titleLine1: "Salads",
    titleLine2: "Juices",
    label: "Fresh & Healthy",
    icon: Salad,
    desc: "Fresh, vibrant, and healthy. Our salads and freshly pressed juices are the perfect complement.",
    items: [
      { name: "Beetroot and Ginger", image: "/assets/menu/zobo.jpg", icon: GlassWater, desc: "Cold-pressed beetroot and ginger juice — earthy, zingy and packed with antioxidants." },
      { name: "Chicken Salad", image: "https://i.pinimg.com/736x/20/a2/b6/20a2b6ec316a6f0b7fda066d578ebd32.jpg", icon: Salad, desc: "Grilled chicken strips over crisp greens with our house vinaigrette dressing." },
      { name: "Smoothies", image: "https://i.pinimg.com/1200x/4e/c4/8e/4ec48e33267c97cfdb5c0a631bb00831.jpg", icon: Wine },
      { name: "Chapman", image: "https://i.pinimg.com/736x/cb/0a/7c/cb0a7c0a0f77ef251ee2026ab1d6c6fd.jpg", icon: GlassWater },
      { name: "Zobo Drink", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: GlassWater },
      { name: "Palm Wine", image: "https://i.pinimg.com/1200x/0f/5b/d2/0f5bd267d61559281921fe0c64bc56f5.jpg", icon: Wine },
    ],
  },
];