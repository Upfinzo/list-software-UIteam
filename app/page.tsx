import AboutSection from "@/components/Home/AboutSection";
import ConnectedCore from "@/components/Home/ConnectedCore";
import CTASection from "@/components/Home/CTASection";
import Hero from "@/components/Home/Hero";
import ProvenFoundationSection from "@/components/Home/ProvenFoundationSection";
import ServicesSection from "@/components/Home/ServicesSection";
import ProductStack from "@/components/Home/ProductStack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProvenFoundationSection />
      <ConnectedCore />
      <ServicesSection />
      <ProductStack/>
      <CTASection />
    </>
  );
}