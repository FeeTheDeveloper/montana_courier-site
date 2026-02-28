import { z } from "zod";

export const FACILITY_TYPES = [
  "Hospital",
  "Clinic / Physician Office",
  "Laboratory",
  "Pharmacy",
  "Long-Term Care / Nursing Facility",
  "Blood Bank / Donor Center",
  "Government / Tribal Health",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(120, "Name must be under 120 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(254, "Email must be under 254 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s()+-]{7,20}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  facilityType: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2,000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
