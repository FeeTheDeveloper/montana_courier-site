import { CheckCircle2 } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/constants";
import { Section } from "./Section";

export function WhyChoose() {
  return (
    <Section className="bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Why Choose Us
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
          Montana healthcare facilities trust us for dependable, compliant
          courier services.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {WHY_CHOOSE.map((item) => (
          <div key={item.title} className="flex gap-4">
            <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
