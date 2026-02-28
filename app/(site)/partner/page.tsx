import type { Metadata } from "next";
import {
  Building2,
  Stethoscope,
  FlaskConical,
  Pill,
  BedDouble,
  Phone,
  ClipboardList,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Build a custom medical courier program for your hospital, clinic, lab, or pharmacy. Dedicated account management and volume pricing.",
};

const facilityTypes = [
  { icon: Building2, label: "Hospitals & Health Systems" },
  { icon: Stethoscope, label: "Clinics & Physician Offices" },
  { icon: FlaskConical, label: "Laboratories & Reference Labs" },
  { icon: Pill, label: "Pharmacies & Compounding Centers" },
  { icon: BedDouble, label: "Long-Term Care & Assisted Living" },
];

const infoNeeded = [
  "Facility name, address, and primary contact",
  "Types of items to be transported (specimens, meds, records, equipment)",
  "Estimated volume and frequency (daily, weekly, on-demand)",
  "Preferred pickup and delivery windows",
  "Any special handling or temperature requirements",
  "Current courier provider (if applicable)",
];

export default function PartnerPage() {
  return (
    <>
      {/* Hero banner */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Partner With Us
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            We build courier programs that fit your operations — not the other
            way around. One conversation is all it takes to get started.
          </p>
        </div>
      </Section>

      {/* Facilities we serve */}
      <Section>
        <h2 className="text-center text-2xl font-bold text-charcoal sm:text-3xl">
          Facilities We Serve
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate">
          Whether you are a critical-access hospital in rural Montana or a
          multi-campus health system, we tailor our service to your needs.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilityTypes.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-surface p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <span className="font-medium text-charcoal">{f.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* What we need to get started */}
      <Section className="bg-cool-gray">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-start gap-4">
            <ClipboardList className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <h2 className="text-2xl font-bold text-charcoal">
              What We Need to Get Started
            </h2>
          </div>
          <p className="mt-3 text-slate">
            To design a route and pricing proposal, we just need a few details
            from you:
          </p>
          <ul className="mt-6 space-y-3">
            {infoNeeded.map((item) => (
              <li key={item} className="flex items-start gap-2 text-charcoal">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Ready to Talk?
          </h2>
          <p className="mt-3 text-slate">
            Request a call — we&apos;ll review your needs and have a proposal
            back to you within two business days.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg">Request a Call</Button>
            </Link>
            <a href={`tel:${SITE.phone}`}>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                {SITE.phone}
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
