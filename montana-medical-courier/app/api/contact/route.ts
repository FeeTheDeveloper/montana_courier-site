import { NextResponse } from "next/server";
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

    // ----------------------------------------------------------------
    // TODO: Replace this console log with your preferred email service
    // (e.g., Resend, SendGrid, Nodemailer with SMTP, etc.)
    // ----------------------------------------------------------------
    console.log("📬 New contact form submission:", {
      name,
      organization,
      email,
      phone,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
