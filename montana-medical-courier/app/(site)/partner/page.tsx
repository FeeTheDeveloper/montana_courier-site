import type { Metadata } from "next";
import { PartnerBlock } from "@/components/site/PartnerBlock";
import { ContactBlock } from "@/components/site/ContactBlock";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Build a custom medical courier program for your hospital, clinic, lab, or pharmacy. Dedicated account management and volume pricing.",
};

export default function PartnerPage() {
  return (
    <>
      <PartnerBlock />
      <ContactBlock />
    </>
  );
}
