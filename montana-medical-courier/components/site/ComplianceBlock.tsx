import { ShieldCheck } from "lucide-react";
import { COMPLIANCE_ITEMS } from "@/lib/constants";
import { Section } from "./Section";

export function ComplianceBlock() {
  return (
    <Section dark id="compliance">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Compliance &amp; Certifications
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-blue-200">
          Your patients&apos; safety and privacy are our top priority.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {COMPLIANCE_ITEMS.map((item) => (
          <div key={item.title} className="flex gap-4">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-blue-300" />
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-blue-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
