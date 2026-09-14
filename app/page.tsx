import AboutSection from "@/components/Home/AboutSection";
import CTASection from "@/components/Home/CTASection";
import Hero from "@/components/Home/Hero";
import ServicesSection from "@/components/Home/ServicesSection";
import ProductStack from "@/components/Home/ProductStack";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import BeyondProductSection from "@/components/BeyondProductSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductStack />
      <CapabilitiesSection />
      <BeyondProductSection />
      <CTASection />
    </>
  );
}
