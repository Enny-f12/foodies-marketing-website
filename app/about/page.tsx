import { AboutHero }        from "@/components/about/Hero";
import { OurStorySection }  from "@/components/about/OurStory";
import { PhilosophySection } from "@/components/about/Phillosophy";

import { OurSpacesSection } from "@/components/about/Spaces";

export const metadata = {
  title: "Our Story | Foodies Hot & Spicy",
  description:
    "Learn about our heritage, philosophy, and the people behind the finest Nigerian dining experience.",
    keywords: [
    "about Foodies", 
    "Nigerian restaurant story", 
    "Lagos restaurant history",
  ],
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStorySection />
      <PhilosophySection />
      <OurSpacesSection/>
      
    </>
  );
}