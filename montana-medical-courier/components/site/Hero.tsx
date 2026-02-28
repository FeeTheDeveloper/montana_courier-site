import { Shield, Truck, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";
import { CTAButtons } from "./CTAButtons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-600 to-brand-500 text-white">
      {/* Decorative dots */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/20" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
            {SITE.description}
          </p>

          <div className="mt-10">
            <CTAButtons
              primaryLabel="Request a Quote"
              secondaryLabel="View Services"
            />
          </div>

          {/* Mini trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-blue-200">
            <span className="flex items-center gap-2">
              <Shield className="h-5 w-5" /> HIPAA Compliant
            </span>
            <span className="flex items-center gap-2">
              <Truck className="h-5 w-5" /> Statewide Coverage
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5" /> 24/7 Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
