import ConnectedCore from "@/components/Home/ConnectedCore";
import Hero from "@/components/Home/Hero";
import ProvenInBankingSection from "@/components/Home/ProvenInBankingSection";
import InstitutionOperatesSection from "@/components/Home/InstitutionOperatesSection";
import SolutionsSection from "@/components/Home/SolutionsSection";
import WhoWeServeSection from "@/components/Home/WhoWeServeSection";
import ProductStack from "@/components/Home/ProductStack";
import CapabilitiesSection from "@/components/Home/components/CapabilitiesSection";
import Whylist from "@/components/Home/Whylists";
import BankingFoundation from "@/components/Home/BankingFoundation";
import CoreBankingPortfolio from "@/components/Home/CoreBanking";
import ClientsSection from "@/components/Home/ClientsSection";
import SuccessStoriesSection from "@/components/Home/SuccessStoriesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import AwardsSection from "@/components/Home/AwardsSection";
import FAQPage from "./faq/page";

import { Custodiancbs } from "@/components/Home/Custodiancbs";
import { FAQ } from "@/components/Home/Faq";
import CapabilityConnected from "@/components/Home/CapabilityConnected";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProvenInBankingSection />
      <CapabilitiesSection />
      <SolutionsSection />
      <Custodiancbs />
      <CapabilityConnected />
      <InstitutionOperatesSection />
      <ClientsSection />
      <TestimonialsSection />
      <AwardsSection />
      <SuccessStoriesSection />
      <FAQ />



      <BankingFoundation />
    </>
  );
}
