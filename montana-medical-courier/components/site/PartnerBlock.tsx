import { Handshake } from "lucide-react";
import { Section } from "./Section";
import { CTAButtons } from "./CTAButtons";

export function PartnerBlock() {
  return (
    <Section id="partner">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you&apos;re a hospital, clinic, laboratory, pharmacy, or
            long-term care facility, we build custom courier programs that
            integrate seamlessly with your operations.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
              Dedicated account management
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
              Customizable pickup &amp; delivery schedules
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
              Volume-based pricing
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
              Real-time tracking dashboard
            </li>
          </ul>
          <div className="mt-8">
            <CTAButtons
              primaryLabel="Become a Partner"
              primaryHref="/contact"
              secondaryLabel="Learn More"
              secondaryHref="/services"
            />
          </div>
        </div>

        {/* Illustration placeholder */}
        <div className="flex items-center justify-center rounded-2xl bg-brand-50 p-12">
          <Handshake className="h-32 w-32 text-brand-300" />
        </div>
      </div>
    </Section>
  );
}
