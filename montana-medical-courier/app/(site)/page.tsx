import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyChoose } from "@/components/site/WhyChoose";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ServiceArea } from "@/components/site/ServiceArea";
import { ComplianceBlock } from "@/components/site/ComplianceBlock";
import { PartnerBlock } from "@/components/site/PartnerBlock";
import { ContactBlock } from "@/components/site/ContactBlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChoose />
      <HowItWorks />
      <ServiceArea />
      <ComplianceBlock />
      <PartnerBlock />
      <ContactBlock />
    </>
  );
}
