import ConnectedCore from "@/components/Home/ConnectedCore";
import Hero from "@/components/Home/Hero";
import ProvenFoundationSection from "@/components/Home/ProvenFoundationSection";
import SolutionsSection from "@/components/Home/SolutionsSection";
import WhoWeServeSection from "@/components/Home/WhoWeServeSection";
import ProductStack from "@/components/Home/ProductStack";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import Whylist from "@/components/Home/Whylists";
import BankingFoundation from "@/components/Home/BankingFoundation";
import CoreBankingPortfolio from "@/components/Home/CoreBanking";
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