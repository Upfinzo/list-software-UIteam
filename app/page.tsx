import ConnectedCore from "@/components/Home/ConnectedCore";
import Hero from "@/components/Home/Hero";
import ProvenInBankingSection from "@/components/Home/ProvenInBankingSection";
import SolutionsSection from "@/components/Home/SolutionsSection";
import WhoWeServeSection from "@/components/Home/WhoWeServeSection";
import ProductStack from "@/components/Home/ProductStack";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import Whylist from "@/components/Home/Whylists";
import BankingFoundation from "@/components/Home/BankingFoundation";
import CoreBankingPortfolio from "@/components/Home/CoreBanking";
import ClientsSection from "@/components/Home/ClientsSection";
import SuccessStoriesSection from "@/components/Home/SuccessStoriesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import AwardsSection from "@/components/Home/AwardsSection";
import FAQPage from "./faq/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProvenInBankingSection />
      <ConnectedCore />

      <ProductStack />

      <CapabilitiesSection />

      <CoreBankingPortfolio />

      <SolutionsSection />

      <Whylist />

      <ClientsSection />

      

      <TestimonialsSection />

      <AwardsSection />
      <SuccessStoriesSection />

      {/* <TrustControlSection />

      <BusinessOutcomes /> */}
      <WhoWeServeSection />

      {/* <BeyondProductSection /> */}
      <FAQPage />

      <BankingFoundation />
    </>
  );
}