import { HeroSection }        from "@/components/home/HeroSection";
import { FAQSection }         from "@/components/home/Faq";
import TestimonialSection  from "@/components/home/Testimonial";
import { ValuePropsSection } from "@/components/home/OurValues";
import { TrendingSection } from "@/components/home/Trending";
import { WhyFoodiesSection } from "@/components/home/DigitalExperience";
import AppDownload from "@/components/home/AppDownload";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropsSection />
      <TrendingSection />
      <WhyFoodiesSection />
      <TestimonialSection />
      <AppDownload />
      <FAQSection />
    </>
  );
}