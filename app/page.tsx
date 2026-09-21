import AboutSection from "@/components/Home/AboutSection";
import ConnectedCore from "@/components/Home/ConnectedCore";
import Hero from "@/components/Home/Hero";
import ProvenFoundationSection from "@/components/Home/ProvenFoundationSection";
import SolutionsSection from "@/components/Home/SolutionsSection";
import TrustControlSection from "@/components/Home/TrustControlSection";
import WhoWeServeSection from "@/components/Home/WhoWeServeSection";
import ProductStack from "@/components/Home/ProductStack";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import BeyondProductSection from "@/components/BeyondProductSection";
import Whylist from "@/components/Home/Whylists";
import BankingFoundation from "@/components/Home/BankingFoundation";
import CoreBankingPortfolio from "@/components/Home/CoreBanking";
import BusinessOutcomes from "@/components/Home/BankingOutcome";
import FAQPage from "./faq/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProvenFoundationSection />
      <ConnectedCore />

      <ProductStack />

      <CapabilitiesSection />

      <CoreBankingPortfolio />

      <SolutionsSection />

      <Whylist />

      {/* <TrustControlSection />

      <BusinessOutcomes /> */}
      <WhoWeServeSection />

      {/* <BeyondProductSection /> */}
      <FAQPage />

      <BankingFoundation />
    </>
  );
}