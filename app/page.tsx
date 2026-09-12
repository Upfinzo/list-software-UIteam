import AboutSection from "@/components/Home/AboutSection";
import CTASection from "@/components/Home/CTASection";
import Hero from "@/components/Home/Hero";
import ServicesSection from "@/components/Home/ServicesSection";


export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CTASection />
    </>
  );
}