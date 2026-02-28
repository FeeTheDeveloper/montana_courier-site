import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface CTAButtonsProps {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CTAButtons({
  primaryHref = "/contact",
  primaryLabel = "Request a Quote",
  secondaryHref = "/services",
  secondaryLabel = "Our Services",
}: CTAButtonsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link href={primaryHref}>
        <Button size="lg">{primaryLabel}</Button>
      </Link>
      <Link href={secondaryHref}>
        <Button variant="outline" size="lg">
          {secondaryLabel}
        </Button>
      </Link>
    </div>
  );
}
