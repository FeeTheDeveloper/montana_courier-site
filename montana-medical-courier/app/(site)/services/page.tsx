import type { Metadata } from "next";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ContactBlock } from "@/components/site/ContactBlock";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Specimen transport, pharmaceutical delivery, medical records, equipment — explore our full range of HIPAA-compliant medical courier services.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid />
      <HowItWorks />
      <ContactBlock />
    </>
  );
}
