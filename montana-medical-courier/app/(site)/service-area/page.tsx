import type { Metadata } from "next";
import { ServiceArea } from "@/components/site/ServiceArea";
import { ContactBlock } from "@/components/site/ContactBlock";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Montana Medical Courier serves healthcare facilities across Montana — Helena, Great Falls, Missoula, Billings, Bozeman, and beyond.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <ServiceArea />
      <ContactBlock />
    </>
  );
}
