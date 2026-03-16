import { NextResponse } from "next/server";

import { getResend } from "@/lib/resend";
import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email } = result.data;

    const resend = getResend();
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: email,
      subject: "Welcome to the newsletter!",
      html: `
        <h1>Welcome!</h1>
        <p>Thanks for subscribing to the Ivo Weevers newsletter. You'll receive insights on building apps, entrepreneurship, and more.</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed!",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
