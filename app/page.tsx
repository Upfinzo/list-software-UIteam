import AboutSection from "@/components/Home/AboutSection";
import ConnectedCore from "@/components/Home/ConnectedCore";
import CTASection from "@/components/Home/CTASection";
import Hero from "@/components/Home/Hero";
import ProvenFoundationSection from "@/components/Home/ProvenFoundationSection";
import TrustControlSection from "@/components/Home/TrustControlSection";
import WhoWeServeSection from "@/components/Home/WhoWeServeSection";
import ProductStack from "@/components/Home/ProductStack";
import Whylist from "@/components/Home/Whylists";
import BankingFoundation from "@/components/Home/BankingFoundation";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProvenFoundationSection />
      <ConnectedCore />
      <ProductStack/>
      <Whylist/>
      <TrustControlSection />
      <WhoWeServeSection />
      <CTASection />
      <BankingFoundation/>
    </>
  );
}