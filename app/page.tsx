import AboutSection from "@/components/Home/AboutSection";
import ConnectedCore from "@/components/Home/ConnectedCore";
import CTASection from "@/components/Home/CTASection";
import Hero from "@/components/Home/Hero";
import ProvenFoundationSection from "@/components/Home/ProvenFoundationSection";
import ServicesSection from "@/components/Home/ServicesSection";
import TrustControlSection from "@/components/Home/TrustControlSection";
import WhoWeServeSection from "@/components/Home/WhoWeServeSection";
import ProductStack from "@/components/Home/ProductStack";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import BeyondProductSection from "@/components/BeyondProductSection";
import Whylist from "@/components/Home/Whylists";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProvenFoundationSection />
      <ConnectedCore />
      <ProductStack />
      <CapabilitiesSection />
      <BeyondProductSection />
      <Whylist />
      <TrustControlSection />
      <WhoWeServeSection />
      <CTASection />
    </>
  );
}
