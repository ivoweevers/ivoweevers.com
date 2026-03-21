import { getResend, getSenderAddress } from "@/lib/resend";
import { handleApiRoute } from "@/lib/api";
import { escapeHtml } from "@/lib/utils";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  return handleApiRoute({
    request,
    schema: contactSchema,
    errorMessage: "Failed to send message. Please try again.",
    async handler({ name, email, subject, message }) {
      const resend = getResend();
      await resend.emails.send({
        from: getSenderAddress(),
        to: process.env.CONTACT_EMAIL ?? "hello@ivoweevers.com",
        replyTo: email,
        subject: `Contact Form: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      });
    },
  });
}
