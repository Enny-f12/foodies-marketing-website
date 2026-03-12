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
  LucideIcon
} from "lucide-react";

export interface MenuItem {
  name: string;
  image: string;
  icon: LucideIcon; 
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  desc: string;
  items: MenuItem[];
}

export const categories: MenuCategory[] = [
  {
    id: "soups",
    title: "Soups & Stews",
    icon: Soup,
    desc: "From rich, nutty Egusi to draw soups like Ogbono and Okro, our soups are made with traditional techniques and the freshest ingredients.",
    items: [
      { name: "Egusi Soup", image: "https://i.pinimg.com/1200x/0f/5b/d2/0f5bd267d61559281921fe0c64bc56f5.jpg", icon: Soup },
      { name: "Oha Soup", image: "https://i.pinimg.com/1200x/33/54/4a/33544a780071ea22ffe18f73f3b3b3e5.jpg", icon: Leaf },
      { name: "Ogbono Soup", image: "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg", icon: Soup },
      { name: "Okro Soup", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: UtensilsCrossed },
      { name: "Bitterleaf Soup", image: "https://i.pinimg.com/1200x/8f/77/c4/8f77c41fb4b4194ae9dd176107ac5ac2.jpg", icon: Leaf },
      { name: "Pepper Soup", image: "https://i.pinimg.com/1200x/34/a7/d9/34a7d90cdf09466b888829b4eb064b85.jpg", icon: Flame },
    ],
  },
  {
    id: "swallow",
    title: "Swallow",
    icon: Disc,
    desc: "The perfect partner to our soups. Choose from pounded yam, amala, eba, semo, fufu, or starch. Made fresh to order.",
    items: [
      { name: "Pounded Yam", image: "https://i.pinimg.com/736x/38/7f/e8/387fe89bcb8f193ec91f031bd2960f44.jpg", icon: Disc },
      { name: "Amala", image: "https://i.pinimg.com/1200x/8a/60/42/8a6042f0638ef2767ae75feed2fa6718.jpg", icon: Disc },
      { name: "Eba", image: "https://i.pinimg.com/1200x/0f/5b/d2/0f5bd267d61559281921fe0c64bc56f5.jpg", icon: Disc },
      { name: "Semo", image: "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg", icon: Disc },
      { name: "Fufu", image: "https://i.pinimg.com/1200x/06/91/5b/06915b6a2ea976f5fb450f76a0786ce0.jpg", icon: Disc },
      { name: "Starch", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: Disc },
    ],
  },
  {
    id: "proteins",
    title: "Proteins",
    icon: Drumstick,
    desc: "Grilled, sauced, fried, or peppered. Our proteins are the stars of any meal. From classic grilled chicken to specialty bushmeat and snails.",
    items: [
      { name: "Asun Goat Meat", image: "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg", icon: Beef },
      { name: "Grilled Turkey", image: "https://i.pinimg.com/1200x/35/c0/f6/35c0f6e05a25dcc44ed45262bacfd5d9.jpg", icon: Drumstick },
      { name: "Peppered Snails", image: "https://i.pinimg.com/1200x/8f/77/c4/8f77c41fb4b4194ae9dd176107ac5ac2.jpg", icon: Waves },
      { name: "Bushmeat", image: "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg", icon: Beef },
      { name: "Cow Leg", image: "https://i.pinimg.com/1200x/0f/5b/d2/0f5bd267d61559281921fe0c64bc56f5.jpg", icon: Beef },
      { name: "Grilled Chicken", image: "https://i.pinimg.com/1200x/06/91/5b/06915b6a2ea976f5fb450f76a0786ce0.jpg", icon: Drumstick },
    ],
  },
  {
    id: "intercontinental",
    title: "Intercontinental",
    icon: Globe,
    desc: "Our famous Jollof Rice, fragrant Biryani, creamy pasta, and more. Global flavors with a Foodies touch.",
    items: [
      { name: "Jollof Rice", image: "https://i.pinimg.com/1200x/bc/00/d2/bc00d298bcf0d9f64b4a8dc96ba4629a.jpg", icon: Flame },
      { name: "Coconut Fried Rice", image: "https://i.pinimg.com/1200x/37/5f/34/375f34c3c340cfdc1bd0ba84d7fbeb8a.jpg", icon: Leaf },
      { name: "Seafood Pasta", image: "https://i.pinimg.com/1200x/06/91/5b/06915b6a2ea976f5fb450f76a0786ce0.jpg", icon: UtensilsCrossed },
      { name: "Biryani", image: "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg", icon: Globe },
      { name: "Fried Rice", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: Wheat },
      { name: "Noodles", image: "https://i.pinimg.com/1200x/34/a7/d9/34a7d90cdf09466b888829b4eb064b85.jpg", icon: UtensilsCrossed },
    ],
  },
  {
    id: "africana",
    title: "Africana Delicacies",
    icon: CookingPot,
    desc: "Traditional specialties: Nkwobi, Isi Ewu, Abacha, and more. For those who appreciate authentic Nigerian culinary heritage.",
    items: [
      { name: "Nkwobi", image: "https://i.pinimg.com/1200x/8f/77/c4/8f77c41fb4b4194ae9dd176107ac5ac2.jpg", icon: CookingPot },
      { name: "Isi Ewu", image: "https://i.pinimg.com/1200x/2e/84/68/2e84685d04d47f0e402f2a01aeca1f0d.jpg", icon: Beef },
      { name: "Abacha", image: "https://i.pinimg.com/1200x/06/91/5b/06915b6a2ea976f5fb450f76a0786ce0.jpg", icon: Salad },
      { name: "Catfish Pepper Soup", image: "https://i.pinimg.com/1200x/34/a7/d9/34a7d90cdf09466b888829b4eb064b85.jpg", icon: Waves },
      { name: "Oxtail", image: "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg", icon: Beef },
      { name: "Cow Skin (Ponmo)", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: Beef },
    ],
  },
  {
    id: "pastries",
    title: "Pastries & Sides",
    icon: Croissant,
    desc: "From flaky meat pies to sweet puff puff, our pastries are perfect for any time of day.",
    items: [
      { name: "Meat Pie", image: "https://i.pinimg.com/736x/f2/b1/ae/f2b1aefa9340f15eb97ea4611d80255a.jpg", icon: Croissant },
      { name: "Puff Puff", image: "https://i.pinimg.com/736x/96/0b/4e/960b4e47dfe7e09ed1f1988e9e26c24b.jpg", icon: Zap },
      { name: "Spring Rolls", image: "https://i.pinimg.com/1200x/06/91/5b/06915b6a2ea976f5fb450f76a0786ce0.jpg", icon: UtensilsCrossed },
      { name: "Samosas", image: "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg", icon: Croissant },
      { name: "Chin Chin", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: Zap },
      { name: "Plantain", image: "https://i.pinimg.com/1200x/8f/77/c4/8f77c41fb4b4194ae9dd176107ac5ac2.jpg", icon: Wheat },
    ],
  },
  {
    id: "salads",
    title: "Salads & Juices",
    icon: Salad,
    desc: "Fresh, vibrant, and healthy. Our salads and freshly pressed juices are the perfect complement.",
    items: [
      { name: "Chicken Salad", image: "https://i.pinimg.com/736x/20/a2/b6/20a2b6ec316a6f0b7fda066d578ebd32.jpg", icon: Salad },
      { name: "Smoothies", image: "https://i.pinimg.com/1200x/4e/c4/8e/4ec48e33267c97cfdb5c0a631bb00831.jpg", icon: Wine },
      { name: "Fruit Juice", image: "https://i.pinimg.com/1200x/34/a7/d9/34a7d90cdf09466b888829b4eb064b85.jpg", icon: GlassWater },
      { name: "Chapman", image: "https://i.pinimg.com/1200x/47/8d/21/478d21c7e2442373e6ec7eac8016037c.jpg", icon: GlassWater },
      { name: "Zobo drink", image: "https://i.pinimg.com/736x/a2/60/cf/a260cfaee1aed6aae3544cb8ff96e2df.jpg", icon: GlassWater },
      { name: "Palm Wine", image: "https://i.pinimg.com/1200x/0f/5b/d2/0f5bd267d61559281921fe0c64bc56f5.jpg", icon: Wine },
    ],
  },
];