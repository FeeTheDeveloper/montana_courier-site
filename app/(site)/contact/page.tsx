import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/site/Section";
import { ContactBlock } from "@/components/site/ContactBlock";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Montana Medical Courier. Request a quote, schedule a pickup, or ask about partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Questions, quotes, or ready to schedule? We&apos;re here to help.
          </p>
        </div>
      </Section>

      {/* Quick-reference contact info */}
      <Section>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Phone,
              label: "Phone",
              value: SITE.phone,
              href: `tel:${SITE.phone}`,
            },
            {
              icon: Mail,
              label: "Email",
              value: SITE.email,
              href: `mailto:${SITE.email}`,
            },
            {
              icon: MapPin,
              label: "Address",
              value: SITE.address,
              href: undefined,
            },
            {
              icon: Clock,
              label: "Hours",
              value: "24 / 7 Dispatch",
              href: undefined,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center"
            >
              <item.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate">
                {item.label}
              </h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-1 text-lg font-semibold text-charcoal hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-lg font-semibold text-charcoal">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Reuse the shared contact form */}
      <ContactBlock />
    </>
  );
}
