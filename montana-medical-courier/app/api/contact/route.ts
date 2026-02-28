import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.issues },
        { status: 400 },
      );
    }

    const { name, organization, email, phone, message } = result.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@montanamedicalcourier.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "noreply@montanamedicalcourier.com";

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Contact: ${name}${organization ? ` (${organization})` : ""}`,
      text: [
        `Name: ${name}`,
        organization ? `Organization: ${organization}` : null,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      reply_to: email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
