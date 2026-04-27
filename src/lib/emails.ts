import { escapeHtml } from "@/lib/utils";

const FONT_STACK = "Arial, Helvetica, sans-serif";

/** Inline attachment content-id; must match `contentId` on the Resend attachment and `cid:` in HTML. */
export const PRE_REGISTER_BOOK_COVER_CONTENT_ID = "pocket-winners-cover";

export function buildPreRegisterConfirmationHtml(name: string): string {
  const firstName = escapeHtml(name.split(" ")[0]);
  const bookImageSrc = `cid:${PRE_REGISTER_BOOK_COVER_CONTENT_ID}`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f9f5ec;font-family:${FONT_STACK};">
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f9f5ec;">
  <tr>
    <td align="center" style="padding:40px 20px;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;">

        <!-- Book cover -->
        <tr>
          <td align="center" style="padding-bottom:30px;">
            <img src="${bookImageSrc}" alt="Pocket Winners book cover" width="300" style="display:block;border:0;max-width:300px;width:100%;height:auto;" />
          </td>
        </tr>

        <!-- Heading -->
        <tr>
          <td align="center" style="padding-bottom:30px;">
            <h1 style="margin:0;font-size:28px;font-weight:bold;color:#000000;font-family:${FONT_STACK};text-transform:uppercase;">You&rsquo;re on the list!</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="font-size:16px;line-height:1.6;color:#000000;font-family:${FONT_STACK};">
            <p style="margin:0 0 16px 0;">Hi ${firstName} &ndash;</p>
            <p style="margin:0 0 16px 0;">Thank you for pre-registering for the launch of Pocket Winners. I really appreciate your early support.</p>
            <p style="margin:0 0 12px 0;">Here&rsquo;s what will happen next:</p>
            <ul style="margin:0 0 16px 0;padding-left:24px;">
              <li style="margin-bottom:8px;">A few days before launch, you&rsquo;ll receive a reminder with all the details.</li>
              <li style="margin-bottom:8px;">On Wednesday May 13th 2026 (launch day), I&rsquo;ll send you a direct link to access the book at the special launch price.</li>
            </ul>
            <p style="margin:0 0 16px 0;">As an early registrant, you&rsquo;ll be able to purchase the book at a 30% discount on launch day<br />Wednesday May 13th 2026.</p>
            <p style="margin:0 0 16px 0;">This offer is only available on the launch day itself: Wednesday May 13th 2026.</p>
            <p style="margin:0 0 16px 0;">I&rsquo;m looking forward to sharing the book with you very soon.</p>
            <p style="margin:0;">Warm regards,<br />&ndash; Ivo</p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export function buildPreRegisterNotificationHtml(
  name: string,
  email: string
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;font-family:${FONT_STACK};font-size:14px;color:#333;">
  <h2 style="margin:0 0 16px;">New Book Pre-Registration</h2>
  <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
  <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
  <p style="margin:0 0 8px;"><strong>Source:</strong> /pocket-winners</p>
  <p style="margin:0;"><strong>Time:</strong> ${new Date().toISOString()}</p>
</body>
</html>`;
}
