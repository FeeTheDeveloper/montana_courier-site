import type { Metadata } from "next";
import { MapPin, Route, Phone } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactBlock } from "@/components/site/ContactBlock";
import { SITE, SERVICE_AREAS } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Montana Medical Courier serves healthcare facilities across Montana — Helena, Great Falls, Missoula, Billings, Bozeman, and beyond.",
};

const regions = [
  {
    name: "Western Montana",
    cities: ["Missoula", "Kalispell", "Butte", "Anaconda", "Dillon"],
    note: "Daily scheduled routes through the I-90 and US-93 corridors.",
  },
  {
    name: "Central Montana",
    cities: ["Helena", "Great Falls", "Lewistown"],
    note: "Hub-and-spoke model centered around Helena with same-day reach to Great Falls.",
  },
  {
    name: "Eastern Montana",
    cities: ["Billings", "Bozeman", "Miles City", "Glasgow", "Sidney", "Wolf Point", "Havre"],
    note: "Scheduled and on-demand service along the I-94 and US-2 corridors.",
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      {/* Hero banner */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Service Area
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Statewide coverage — from the western valleys to the eastern plains.
            We reach the facilities others can&apos;t.
          </p>
        </div>
      </Section>

      {/* City badges */}
      <Section>
        <h2 className="text-center text-2xl font-bold text-charcoal sm:text-3xl">
          Communities We Serve
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
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
      </Section>

      {/* Regional breakdown */}
      <Section className="bg-cool-gray">
        <h2 className="text-center text-2xl font-bold text-charcoal sm:text-3xl">
          Regional Coverage
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate">
          Our routes are organized into three regions, each with dedicated
          drivers who know the roads, weather patterns, and facilities.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {regions.map((region) => (
            <div
              key={region.name}
              className="rounded-xl border border-gray-200 bg-surface p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-charcoal">
                {region.name}
              </h3>
              <ul className="mt-3 space-y-1">
                {region.cities.map((city) => (
                  <li
                    key={city}
                    className="flex items-center gap-2 text-sm text-slate"
                  >
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {city}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate">{region.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Expansion & custom routes */}
      <Section>
        <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-surface p-8 text-center shadow-sm">
          <Route className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-bold text-charcoal">
            Custom Contract Routes Available
          </h2>
          <p className="mt-3 text-slate">
            Need service to a location not listed? We regularly expand our
            network to meet partner demand. We can design a dedicated route,
            add your facility to an existing run, or arrange ad-hoc STAT
            coverage — whatever fits your workflow.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-charcoal">
            Expansion Plan
          </h3>
          <p className="mt-2 text-sm text-slate">
            We are actively building scheduled routes into under-served
            communities including Cut Bank, Glendive, Plentywood, and the
            Flathead Reservation corridor. Contact us to discuss timing and
            availability.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button>Request a Custom Route</Button>
            </Link>
            <a href={`tel:${SITE.phone}`}>
              <Button variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                {SITE.phone}
              </Button>
            </a>
          </div>
        </div>
      </Section>

      <ContactBlock />
    </>
  );
}
