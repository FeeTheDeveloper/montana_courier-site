import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Section } from "./Section";

export function ServiceArea() {
  return (
    <Section id="service-area">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Service Area
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
          We serve healthcare facilities across Montana — from major cities to
          rural communities.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {SERVICE_AREAS.map((city) => (
          <Badge
            key={city}
            variant="info"
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm"
          >
            <MapPin className="h-3.5 w-3.5" />
            {city}
          </Badge>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        Don&apos;t see your area? Contact us — we regularly expand our routes to
        meet demand.
      </p>
    </Section>
  );
}
