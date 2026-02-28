import type { Metadata } from "next";
import { ComplianceBlock } from "@/components/site/ComplianceBlock";
import { ContactBlock } from "@/components/site/ContactBlock";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Learn about our HIPAA, OSHA, and DOT compliance standards that keep your patients and specimens safe.",
};

export default function CompliancePage() {
  return (
    <>
      <ComplianceBlock />
      <ContactBlock />
    </>
  );
}
