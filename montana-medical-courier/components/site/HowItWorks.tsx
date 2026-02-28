import { HOW_IT_WORKS } from "@/lib/constants";
import { Section } from "./Section";

export function HowItWorks() {
  return (
    <Section className="bg-gray-50" id="how-it-works">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
          Getting started is simple — three easy steps.
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        {HOW_IT_WORKS.map((item) => (
          <div key={item.step} className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-xl font-bold text-white">
              {item.step}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
