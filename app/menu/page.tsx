import { MenuHero }       from "@/components/menu/Hero";
import { MenuCategories } from "@/components/menu/Categories";
import { MenuCTA }        from "@/components/menu/Cta";

export const metadata = {
  title: "Menu | Foodies Hot & Spicy — 255+ Authentic Nigerian Dishes",
  description: "Explore our 255+ dishes including soups, swallows, proteins, intercontinental, and African delicacies.",
  keywords: "Nigerian food menu, Lagos restaurant menu, Abuja restaurant menu, jollof rice, egusi soup",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MenuCategories />
      <MenuCTA />
    </>
  );
}