import { getResend, getSenderAddress } from "@/lib/resend";
import { handleApiRoute } from "@/lib/api";
import { buildBonusChapterNotificationHtml } from "@/lib/emails";
import { bonusChapterRequestSchema } from "@/lib/validations";

export async function POST(request: Request) {
  return handleApiRoute({
    request,
    schema: bonusChapterRequestSchema,
    errorMessage: "Failed to submit your request. Please try again.",
    async handler({ name, email }) {
      const resend = getResend();
      const notifyEmail =
        process.env.BONUS_CHAPTER_NOTIFY_EMAIL ??
        process.env.BOOK_REGISTER_NOTIFY_EMAIL ??
        process.env.CONTACT_EMAIL ??
        "ivo@ivoweevers.com";

      await resend.emails.send({
        from: getSenderAddress(),
        to: notifyEmail,
        replyTo: email,
        subject: `Pocket Winners — extra chapter request: ${name}`,
        html: buildBonusChapterNotificationHtml(name, email),
      });
    },
  });
}
