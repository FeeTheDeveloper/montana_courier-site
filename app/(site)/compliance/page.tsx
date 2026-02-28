import type { Metadata } from "next";
import {
  ShieldCheck,
  Link2,
  UserCheck,
  FileCheck,
  Thermometer,
  FileWarning,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { ContactBlock } from "@/components/site/ContactBlock";

export const metadata: Metadata = {
  title: "Compliance & Certifications",
  description:
    "Learn about our HIPAA compliance, chain-of-custody protocols, driver screening, and documentation standards.",
};

const complianceSections = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliance",
    paragraphs: [
      "Montana Medical Courier operates as a Business Associate under HIPAA. Every team member completes HIPAA Privacy and Security training before handling any protected health information (PHI), with annual refresher courses thereafter.",
      "We maintain written policies and procedures covering PHI access, breach notification, and minimum-necessary standards. Business Associate Agreements (BAAs) are executed with every healthcare partner before service begins.",
    ],
    bullets: [
      "Annual HIPAA training for all personnel",
      "Written BAA executed prior to first pickup",
      "Breach notification protocol aligned with the HITECH Act",
      "PHI access limited to minimum-necessary standard",
    ],
  },
  {
    icon: Link2,
    title: "Chain-of-Custody Protocols",
    paragraphs: [
      "Every package is scanned and logged at pickup, each transfer point, and delivery. Our chain-of-custody system creates an unbroken, auditable record from origin to destination.",
    ],
    bullets: [
      "Barcode or QR-code scanning at every hand-off",
      "Tamper-evident seals on all specimen and document containers",
      "Digital timestamp and GPS coordinates for each event",
      "Signed proof-of-delivery with recipient name and time",
      "Records retained per partner agreement (minimum 6 years)",
    ],
  },
  {
    icon: UserCheck,
    title: "Driver Screening & Training",
    paragraphs: [
      "All couriers undergo thorough pre-employment screening and ongoing training to ensure the highest standards of professionalism and compliance.",
    ],
    bullets: [
      "Background check (criminal, motor-vehicle, and reference)",
      "Drug screening at hire and random thereafter",
      "HIPAA Privacy, OSHA Bloodborne Pathogen, and DOT Hazmat training",
      "Defensive-driving certification",
      "Annual performance review and re-certification",
    ],
  },
  {
    icon: Thermometer,
    title: "Temperature Control & Monitoring",
    paragraphs: [
      "Specimens and pharmaceuticals are transported in validated packaging systems with continuous temperature monitoring. If an excursion occurs, our system immediately alerts dispatch and your team.",
    ],
    bullets: [
      "Pre-qualified insulated shippers for ambient, 2–8 °C, and frozen ranges",
      "Calibrated digital data loggers in every shipment",
      "Real-time alerts for temperature excursions",
      "Temperature logs delivered with each shipment for your QA records",
    ],
  },
  {
    icon: FileCheck,
    title: "Documentation & Record-Keeping",
    paragraphs: [
      "We maintain comprehensive records to support your regulatory audits and internal quality programs.",
    ],
    bullets: [
      "Chain-of-custody logs with full audit trail",
      "Delivery confirmations archived digitally",
      "Temperature logs stored per CAP / CLIA requirements",
      "Incident and corrective-action reports when applicable",
    ],
  },
];

export default function CompliancePage() {
  return (
    <>
      {/* Hero banner */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Compliance &amp; Certifications
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Your patients&apos; safety and privacy are our top priority. Here is
            how we meet — and exceed — industry requirements.
          </p>
        </div>
      </Section>

      {/* Compliance detail sections */}
      <Section>
        <div className="space-y-14">
          {complianceSections.map((section) => (
            <div key={section.title} className="rounded-xl border border-gray-200 bg-surface p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <section.icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-charcoal">
                  {section.title}
                </h2>
              </div>

              <div className="mt-4 space-y-3">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-slate">
                    {p}
                  </p>
                ))}
              </div>

              <ul className="mt-5 space-y-2">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Insurance & training document placeholders */}
      <Section className="bg-cool-gray">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-start gap-4">
            <FileWarning className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h2 className="text-2xl font-bold text-charcoal">
                Insurance &amp; Training Documentation
              </h2>
              <p className="mt-2 text-slate">
                We are happy to provide copies of the following documents upon
                request as part of your vendor qualification process:
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Certificate of Insurance (General Liability)",
              "Auto Liability Insurance Certificate",
              "Workers' Compensation Certificate",
              "HIPAA Training Completion Records",
              "OSHA Bloodborne Pathogen Training Records",
              "Driver Background Check Policy",
              "Business Associate Agreement (template)",
              "Temperature Validation Reports",
            ].map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-3 rounded-lg border border-dashed border-gray-300 bg-surface px-4 py-3 text-sm text-slate"
              >
                <FileCheck className="h-4 w-4 shrink-0 text-primary" />
                {doc}
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-slate">
            To request any of these documents, please{" "}
            <a href="/contact" className="font-medium text-primary underline">
              contact us
            </a>{" "}
            or call during business hours.
          </p>
        </div>
      </Section>

      <ContactBlock />
    </>
  );
}
