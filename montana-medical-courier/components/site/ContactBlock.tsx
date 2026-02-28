"use client";

import { useState, type FormEvent } from "react";
import { contactSchema, type ContactFormData } from "@/lib/validators";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Section } from "./Section";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactBlock() {
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactFormData;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="bg-gray-50">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready to streamline your medical deliveries? Reach out and
            we&apos;ll respond within one business day.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-brand-500" />
              <a href={`tel:${SITE.phone}`} className="hover:text-brand-600">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-brand-500" />
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-brand-600"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-brand-500" />
              {SITE.address}
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {status === "sent" ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Message Sent!
              </h3>
              <p className="mt-2 text-gray-600">
                We&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <Input
                    name="name"
                    placeholder="Jane Smith"
                    error={errors.name}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Organization
                  </label>
                  <Input
                    name="organization"
                    placeholder="St. Peter's Hospital"
                    error={errors.organization}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="jane@hospital.org"
                    error={errors.email}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="(406) 555-0100"
                    error={errors.phone}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your courier needs…"
                  error={errors.message}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </Button>

              {status === "error" && (
                <p className="text-center text-sm text-red-600">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
