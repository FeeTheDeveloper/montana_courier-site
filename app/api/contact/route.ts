import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    /* ── Parse & validate ─────────────────────────────── */
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 },
      );
    }

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: result.error.issues.map((i) => ({
            field: i.path.join("."),
            message: i.message,
          })),
        },
        { status: 400 },
      );
    }

    const { name, email, phone, facilityType, message } = result.data;

    /* ── Resend configuration ─────────────────────────── */
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "Email delivery is not configured",
          detail:
            "Set the RESEND_API_KEY environment variable to enable email delivery.",
        },
        { status: 501 },
      );
    }

    const toEmail =
      process.env.CONTACT_TO_EMAIL ?? "info@montanamedicalcourier.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ?? "noreply@montanamedicalcourier.com";

    /* ── Build & send email ───────────────────────────── */
    const resend = new Resend(apiKey);

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      facilityType ? `Facility Type: ${facilityType}` : null,
      "",
      "Message:",
      message,
    ]
      .filter((l): l is string => l !== null)
      .join("\n");

    const subject = facilityType
      ? `New Contact: ${name} (${facilityType})`
      : `New Contact: ${name}`;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      text: lines,
      reply_to: email,
    });

    return NextResponse.json({ success: true });
  } catch {
    // Intentionally omit error details to avoid leaking sensitive data
    return NextResponse.json(
      { error: "Unable to deliver your message. Please try again later." },
      { status: 500 },
    );
  }
}
