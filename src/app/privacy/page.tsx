import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for ivoweevers.com — how your personal data is collected, used, and protected.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="pt-5 md:pt-8 lg:pt-10 pb-21 md:pb-24 lg:pb-34">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <SectionHeading as="h1">Privacy Policy</SectionHeading>

            <div className="mt-6 lg:mt-8 text-paragraph space-y-6">
              <p>Last updated: March 2026</p>

              <div>
                <p className="font-bold">1. Introduction</p>
                <p className="mt-2">
                  Welcome to ivoweevers.com (&ldquo;the Website&rdquo;).
                </p>
                <p className="mt-2">
                  Your privacy matters. This Privacy Policy explains how your
                  personal data is collected, used, and protected when you visit
                  this website or interact with its services.
                </p>
                <p className="mt-2">
                  The Website is operated by Ivo Weevers, based in the European
                  Union, acting as the Data Controller under applicable data
                  protection laws, including the General Data Protection
                  Regulation (GDPR).
                </p>
              </div>

              <div>
                <p className="font-bold">2. What Data Is Collected</p>
                <p className="mt-2">a. Information You Provide</p>
                <p className="mt-2">
                  You may voluntarily provide personal data, including:
                </p>
                <ul className="mt-2 list-disc pl-8 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>
                    Any information submitted via contact forms or registration
                    forms
                  </li>
                </ul>
                <p className="mt-4">b. Automatically Collected Data</p>
                <p className="mt-2">
                  When you use the Website, certain information may be collected
                  automatically:
                </p>
                <ul className="mt-2 list-disc pl-8 space-y-1">
                  <li>IP address (anonymised; not stored in raw form)</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Device type</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">3. How Your Data Is Used</p>
                <p className="mt-2">
                  Your data is used only where necessary and for the following
                  purposes:
                </p>
                <ul className="mt-2 list-disc pl-8 space-y-1">
                  <li>To operate and maintain the Website</li>
                  <li>To respond to your enquiries</li>
                  <li>
                    To send updates related to the book or services (only if you
                    opt in)
                  </li>
                  <li>To improve the Website and user experience</li>
                  <li>To ensure security and prevent misuse</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">4. Legal Basis for Processing</p>
                <p className="mt-2">
                  Under GDPR, personal data is processed based on:
                </p>
                <ul className="mt-2 list-disc pl-8 space-y-1">
                  <li>
                    Consent (e.g. when you sign up or contact us)
                  </li>
                  <li>
                    Legitimate interests (e.g. improving the Website, basic
                    analytics)
                  </li>
                  <li>Legal obligations, where applicable</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">5. Cookies</p>
                <p className="mt-2">The Website does not use cookies.</p>
              </div>

              <div>
                <p className="font-bold">6. Third-Party Services</p>
                <p className="mt-2">
                  We may use trusted third-party providers to operate the
                  Website, such as:
                </p>
                <ul className="mt-2 list-disc pl-8 space-y-1">
                  <li>Hosting providers (e.g. Vercel)</li>
                  <li>
                    Email services (for form responses, e.g. Resend)
                  </li>
                  <li>
                    Privacy-friendly analytics (Umami &mdash; cookie-free,
                    anonymised, EU-hosted)
                  </li>
                </ul>
                <p className="mt-2">
                  These providers process data only on our behalf and under
                  appropriate safeguards.
                </p>
              </div>

              <div>
                <p className="font-bold">7. Data Retention</p>
                <p className="mt-2">
                  Personal data is kept only for as long as necessary to:
                </p>
                <ul className="mt-2 list-disc pl-8 space-y-1">
                  <li>
                    Fulfil the purposes outlined in this policy
                  </li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-2">
                  You can request deletion of your data at any time.
                </p>
              </div>

              <div>
                <p className="font-bold">8. Your Rights (GDPR)</p>
                <p className="mt-2">You have the right to:</p>
                <ul className="mt-2 list-disc pl-8 space-y-1">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>
                    Request deletion (&ldquo;right to be forgotten&rdquo;)
                  </li>
                  <li>Restrict or object to processing</li>
                  <li>Withdraw consent at any time</li>
                  <li>Request data portability</li>
                  <li>
                    Lodge a complaint with your local data protection authority
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">9. Data Security</p>
                <p className="mt-2">
                  Appropriate technical and organisational measures are in place
                  to protect your data.
                </p>
                <p className="mt-2">
                  However, no system is completely secure, and transmission of
                  data is at your own risk.
                </p>
              </div>

              <div>
                <p className="font-bold">10. Changes to This Policy</p>
                <p className="mt-2">
                  This Privacy Policy may be updated from time to time. The
                  latest version will always be available on this page.
                </p>
              </div>

              <div>
                <p className="font-bold">11. Contact</p>
                <p className="mt-2">
                  For any questions or requests regarding this Privacy Policy or
                  your data:
                </p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:ivo@ivoweevers.com"
                    className="underline hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    ivo@ivoweevers.com
                  </a>
                  <br />
                  Website:{" "}
                  <a
                    href="https://ivoweevers.com"
                    className="underline hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    https://ivoweevers.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
