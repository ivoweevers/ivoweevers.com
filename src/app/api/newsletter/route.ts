import { getResend, getSenderAddress } from "@/lib/resend";
import { handleApiRoute } from "@/lib/api";
import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  return handleApiRoute({
    request,
    schema: newsletterSchema,
    errorMessage: "Failed to subscribe. Please try again.",
    async handler({ email }) {
      const resend = getResend();
      await resend.emails.send({
        from: getSenderAddress(),
        to: email,
        subject: "Welcome to the newsletter!",
        html: `
          <h1>Welcome!</h1>
          <p>Thanks for subscribing to the Ivo Weevers newsletter. You'll receive insights on building apps, entrepreneurship, and more.</p>
        `,
      });
    },
  });
}
