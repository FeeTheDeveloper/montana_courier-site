import { ShieldCheck, Award, Thermometer, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "HIPAA Certified" },
  { icon: Award, label: "Fully Insured" },
  { icon: Thermometer, label: "Cold-Chain Verified" },
  { icon: BadgeCheck, label: "Background-Checked Couriers" },
];

export function TrustBar() {
  return (
    <div className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-5 sm:px-6 lg:px-8">
        {items.map((item) => (
          <span
            key={item.label}
            className="flex items-center gap-2 text-sm font-medium text-gray-600"
          >
            <item.icon className="h-5 w-5 text-brand-500" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
