import AboutSection from "@/components/Home/AboutSection";
import CTASection from "@/components/Home/CTASection";
import Hero from "@/components/Home/Hero";
import ServicesSection from "@/components/Home/ServicesSection";
import ProductStack from "@/components/Home/ProductStack";
import Whylist from "@/components/Home/Whylists";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductStack/>
      <Whylist/>
      <CTASection />
    </>
  );
}