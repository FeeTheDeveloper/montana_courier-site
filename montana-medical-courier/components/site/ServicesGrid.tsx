import {
  TestTube2,
  Pill,
  FileText,
  Package,
  Clock,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Section } from "./Section";

const iconMap: Record<string, LucideIcon> = {
  TestTube2,
  Pill,
  FileText,
  Package,
  Clock,
  Building2,
};

export function ServicesGrid() {
  return (
    <Section id="services">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
          Comprehensive medical courier solutions designed for Montana&apos;s
          healthcare providers.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Card
              key={service.title}
              className="group transition hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
