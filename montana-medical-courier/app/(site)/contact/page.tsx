import type { Metadata } from "next";
import { ContactBlock } from "@/components/site/ContactBlock";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Montana Medical Courier. Request a quote, schedule a pickup, or ask about partnership opportunities.",
};

export default function ContactPage() {
  return <ContactBlock />;
}
