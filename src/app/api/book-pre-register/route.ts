import { readFile } from "node:fs/promises";
import path from "node:path";

import { getResend, getSenderAddress } from "@/lib/resend";
import { handleApiRoute } from "@/lib/api";
import { preRegisterSchema } from "@/lib/validations";
import {
  buildPreRegisterConfirmationHtml,
  buildPreRegisterNotificationHtml,
  PRE_REGISTER_BOOK_COVER_CONTENT_ID,
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

      const coverPath = path.join(
        process.cwd(),
        "public",
        "images",
        "pocket-winners-cover.png"
      );
      const coverBuffer = await readFile(coverPath);

      await Promise.all([
        resend.emails.send({
          from,
          to: email,
          subject: "You\u2019re on the list \u2014 thank you",
          html: buildPreRegisterConfirmationHtml(name),
          attachments: [
            {
              filename: "pocket-winners-cover.png",
              content: coverBuffer,
              contentType: "image/png",
              contentId: PRE_REGISTER_BOOK_COVER_CONTENT_ID,
            },
          ],
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
