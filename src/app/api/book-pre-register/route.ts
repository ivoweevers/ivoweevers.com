import { NextResponse } from "next/server";

import { getResend, getSenderAddress } from "@/lib/resend";
import { preRegisterSchema } from "@/lib/validations";
import {
  buildPreRegisterConfirmationHtml,
  buildPreRegisterNotificationHtml,
} from "@/lib/emails";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = preRegisterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email } = result.data;

    const resend = getResend();
    const notifyEmail =
      process.env.BOOK_REGISTER_NOTIFY_EMAIL ??
      process.env.CONTACT_EMAIL ??
      "ivo@ivoweevers.com";

    const from = getSenderAddress();

    await Promise.all([
      resend.emails.send({
        from,
        to: email,
        subject: "You\u2019re on the list \u2014 thank you",
        html: buildPreRegisterConfirmationHtml(name),
      }),
      resend.emails.send({
        from,
        to: notifyEmail,
        replyTo: email,
        subject: `Book pre-registration: ${name}`,
        html: buildPreRegisterNotificationHtml(name, email),
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Registration successful!",
    });
  } catch (error) {
    console.error("Book pre-register error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to register. Please try again.",
      },
      { status: 500 }
    );
  }
}
