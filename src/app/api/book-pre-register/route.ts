import { getResend, getSenderAddress } from "@/lib/resend";
import { handleApiRoute } from "@/lib/api";
import { preRegisterSchema } from "@/lib/validations";
import {
  buildPreRegisterConfirmationHtml,
  buildPreRegisterNotificationHtml,
} from "@/lib/emails";

export async function POST(request: Request) {
  return handleApiRoute({
    request,
    schema: preRegisterSchema,
    errorMessage: "Failed to register. Please try again.",
    async handler({ name, email }) {
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
    },
  });
}
