"use client";

import { useState, type FormEvent } from "react";
import {
  contactSchema,
  FACILITY_TYPES,
  type ContactFormData,
} from "@/lib/validators";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Section } from "./Section";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin, CheckCircle2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactBlock() {
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerError("");

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    /* ── Client-side validation ───────────────────────── */
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    /* ── Submit to API ────────────────────────────────── */
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (res.ok) {
        setStatus("sent");
        return;
      }

      const body = await res.json().catch(() => null);

      if (res.status === 400 && body?.issues) {
        // Server-side validation errors
        const fieldErrors: typeof errors = {};
        for (const issue of body.issues) {
          const key = issue.field as keyof ContactFormData;
          if (!fieldErrors[key]) fieldErrors[key] = issue.message;
        }
        setErrors(fieldErrors);
        setStatus("idle");
        return;
      }

      setServerError(
        body?.error ?? "Something went wrong. Please try again or call us.",
      );
      setStatus("error");
    } catch {
      setServerError("Network error. Please check your connection and retry.");
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setErrors({});
    setServerError("");
  }

  return (
    <Section id="contact" className="bg-cool-gray">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* ── Info column ─────────────────────────────── */}
        <div>
          <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-slate">
            Ready to streamline your medical deliveries? Reach out and
            we&apos;ll respond within one business day.
          </p>

          <ul className="mt-8 space-y-4 text-charcoal">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <a
                href={`tel:${SITE.phone}`}
                className="hover:text-primary-hover"
              >
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-primary-hover"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              {SITE.address}
            </li>
          </ul>
        </div>

        {/* ── Form column ─────────────────────────────── */}
        <div className="rounded-xl border border-gray-200 bg-surface p-6 shadow-sm sm:p-8">
          {/* ✓ Success state */}
          {status === "sent" && (
            <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal">
                Message Sent!
              </h3>
              <p className="mt-2 max-w-sm text-slate">
                Thank you for reaching out. We&apos;ll be in touch within one
                business day.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 text-sm font-medium text-primary hover:text-primary-hover"
              >
                Send another message
              </button>
            </div>
          )}

          {/* Form (visible when idle, sending, or error) */}
          {status !== "sent" && (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Row 1: Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-charcoal">
                    Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    name="name"
                    placeholder="Jane Smith"
                    autoComplete="name"
                    error={errors.name}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-charcoal">
                    Email <span className="text-primary">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="jane@hospital.org"
                    autoComplete="email"
                    error={errors.email}
                  />
                </div>
              </div>

              {/* Row 2: Phone + Facility Type */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-charcoal">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="(406) 555-0100"
                    autoComplete="tel"
                    error={errors.phone}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-charcoal">
                    Facility Type
                  </label>
                  <select
                    name="facilityType"
                    defaultValue=""
                    className={cn(
                      "flex w-full rounded-lg border border-gray-300 bg-surface px-4 py-2.5 text-charcoal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                      errors.facilityType &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                    )}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {FACILITY_TYPES.map((ft) => (
                      <option key={ft} value={ft}>
                        {ft}
                      </option>
                    ))}
                  </select>
                  {errors.facilityType && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.facilityType}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-sm font-medium text-charcoal">
                  Message <span className="text-primary">*</span>
                </label>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your courier needs…"
                  error={errors.message}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </Button>

              {/* Server / network error banner */}
              {status === "error" && serverError && (
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
