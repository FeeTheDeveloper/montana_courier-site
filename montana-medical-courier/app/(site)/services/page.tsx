import type { Metadata } from "next";
import {
  TestTube2,
  Pill,
  FileText,
  Package,
  Clock,
  Building2,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ContactBlock } from "@/components/site/ContactBlock";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Specimen transport, pharmaceutical delivery, medical records, equipment — explore our full range of HIPAA-compliant medical courier services.",
};

const services = [
  {
    icon: TestTube2,
    title: "Specimen Transport",
    description:
      "Temperature-controlled transport of laboratory specimens with full chain-of-custody documentation.",
    sop: [
      "Pre-validated insulated containers with digital temperature loggers",
      "Chain-of-custody barcode scanning at pickup and delivery",
      "Specimen-specific packaging per IATA and DOT Category B guidelines",
      "Real-time temperature alerts sent to your lab team",
    ],
    bestFor: [
      "Hospital labs sending specimens to reference laboratories",
      "Rural clinics without on-site pathology",
      "Time-sensitive cultures, blood draws, and tissue samples",
    ],
  },
  {
    icon: Pill,
    title: "Pharmaceutical Delivery",
    description:
      "Secure, time-sensitive delivery of medications and pharmaceutical supplies between facilities.",
    sop: [
      "Tamper-evident, lockable transport totes",
      "Cold-chain validated for 2–8 °C and frozen shipments",
      "Signature verification at point of delivery",
      "Controlled-substance log kept per DEA requirements",
    ],
    bestFor: [
      "Pharmacies fulfilling hospital or clinic orders",
      "Long-term care facilities needing daily med runs",
      "Compounding pharmacies with same-day delivery needs",
    ],
  },
  {
    icon: FileText,
    title: "Medical Records",
    description:
      "Confidential transport of physical medical records, imaging, and sensitive patient documents.",
    sop: [
      "Sealed, tamper-evident envelopes or locked pouches",
      "HIPAA-trained couriers with signed confidentiality agreements",
      "Delivery confirmation with date/time stamp and recipient signature",
      "Secure chain-of-custody log retained for audit compliance",
    ],
    bestFor: [
      "Facilities transitioning to or between EHR systems",
      "Legal or insurance requests requiring physical records",
      "Imaging centers delivering film or disc-based studies",
    ],
  },
  {
    icon: Package,
    title: "Equipment & Supplies",
    description:
      "Reliable delivery of medical equipment, surgical instruments, and critical supplies.",
    sop: [
      "White-glove handling for fragile or sterile-packed equipment",
      "Weight- and dimension-appropriate vehicle selection",
      "Delivery confirmation with photo proof when required",
      "Expedited dispatch for emergency equipment needs",
    ],
    bestFor: [
      "Hospitals lending surgical trays to outpatient centers",
      "Suppliers distributing PPE and disposables statewide",
      "Facilities needing same-day instrument reprocessing loops",
    ],
  },
  {
    icon: Clock,
    title: "STAT & Scheduled Runs",
    description:
      "On-demand STAT pickups and recurring scheduled routes tailored to your facility's needs.",
    sop: [
      "STAT requests dispatched within 30 minutes of call",
      "Scheduled routes with guaranteed pickup/delivery windows",
      "Dedicated driver assignment for recurring routes",
      "Route optimization reviewed monthly for efficiency",
    ],
    bestFor: [
      "Emergency departments needing urgent lab transport",
      "Multi-site health systems with daily inter-campus runs",
      "Facilities that need weekend or holiday coverage",
    ],
  },
  {
    icon: Building2,
    title: "Inter-Facility Transfers",
    description:
      "Coordinated transfers between hospitals, clinics, labs, and long-term care facilities.",
    sop: [
      "Single point of contact for multi-stop coordination",
      "Chain-of-custody maintained across every transfer point",
      "Cross-dock capabilities for regional distribution",
      "Flexible scheduling — daily, weekly, or on-demand",
    ],
    bestFor: [
      "Health networks coordinating across multiple campuses",
      "Reference labs collecting from multiple draw sites",
      "Pharmacies distributing to satellite locations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Comprehensive, HIPAA-compliant medical courier solutions — from
            routine scheduled runs to urgent STAT pickups.
          </p>
        </div>
      </Section>

      {/* Expanded service cards */}
      <Section>
        <div className="space-y-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-gray-200 bg-surface p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-charcoal">
                    {service.title}
                  </h2>
                  <p className="mt-1 text-slate">{service.description}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {/* SOP bullets */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate">
                    Standard Operating Procedures
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {service.sop.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best-for use cases */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate">
                    Best For
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {service.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <HowItWorks />
      <ContactBlock />
    </>
  );
}
