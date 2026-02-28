export const SITE = {
  name: "Montana Medical Courier",
  tagline: "HIPAA-Compliant Medical Courier Services Across Montana",
  description:
    "Professional, reliable, and fully HIPAA-compliant medical courier services serving healthcare facilities throughout Montana. Specimens, pharmaceuticals, medical records, and equipment — delivered safely and on time.",
  phone: "(406) 555-0199",
  email: "contact@montmedicalcourier.com",
  address: "123 Main Street, Helena, MT 59601",
  url: "https://montmedicalcourier.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Area", href: "/service-area" },
  { label: "Compliance", href: "/compliance" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Specimen Transport",
    description:
      "Temperature-controlled transport of laboratory specimens with full chain-of-custody documentation.",
    icon: "TestTube2" as const,
  },
  {
    title: "Pharmaceutical Delivery",
    description:
      "Secure, time-sensitive delivery of medications and pharmaceutical supplies between facilities.",
    icon: "Pill" as const,
  },
  {
    title: "Medical Records",
    description:
      "Confidential transport of physical medical records, imaging, and sensitive patient documents.",
    icon: "FileText" as const,
  },
  {
    title: "Equipment & Supplies",
    description:
      "Reliable delivery of medical equipment, surgical instruments, and critical supplies.",
    icon: "Package" as const,
  },
  {
    title: "Stat & Scheduled Runs",
    description:
      "On-demand STAT pickups and recurring scheduled routes tailored to your facility's needs.",
    icon: "Clock" as const,
  },
  {
    title: "Inter-Facility Transfers",
    description:
      "Coordinated transfers between hospitals, clinics, labs, and long-term care facilities.",
    icon: "Building2" as const,
  },
] as const;

export const SERVICE_AREAS = [
  "Helena",
  "Great Falls",
  "Missoula",
  "Billings",
  "Bozeman",
  "Butte",
  "Kalispell",
  "Havre",
  "Miles City",
  "Lewistown",
  "Anaconda",
  "Dillon",
  "Glasgow",
  "Sidney",
  "Wolf Point",
] as const;

export const COMPLIANCE_ITEMS = [
  {
    title: "HIPAA Compliant",
    description:
      "Every courier is HIPAA-trained and background-checked. We maintain strict chain-of-custody protocols for all protected health information.",
  },
  {
    title: "OSHA Standards",
    description:
      "Our vehicles and handling procedures meet OSHA bloodborne pathogen and hazardous material standards.",
  },
  {
    title: "DOT Regulations",
    description:
      "Full compliance with Department of Transportation rules for the transport of biological substances and diagnostic specimens.",
  },
  {
    title: "Temperature Monitoring",
    description:
      "Real-time temperature logging and validated cold-chain packaging ensure specimen integrity from pickup to delivery.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Request a Pickup",
    description: "Call us or submit a request online. STAT and scheduled options available.",
  },
  {
    step: 2,
    title: "Secure Handling",
    description:
      "Our trained courier arrives with proper containers, scans the package, and logs chain-of-custody.",
  },
  {
    step: 3,
    title: "Safe Delivery",
    description:
      "Your shipment is delivered on time with real-time tracking and a signed proof of delivery.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Montana-Based & Locally Owned",
    description: "We know Montana's roads, weather, and healthcare landscape better than anyone.",
  },
  {
    title: "24 / 7 Availability",
    description: "Round-the-clock service so your critical deliveries never wait.",
  },
  {
    title: "Dedicated Fleet",
    description:
      "GPS-tracked, temperature-controlled vehicles maintained to the highest standards.",
  },
  {
    title: "Proven Reliability",
    description: "99.8 % on-time delivery rate with real-time status updates.",
  },
] as const;
