import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Ivo Weevers. Send a message or inquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Contact
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question, proposal, or just want to say hello? Fill out the
              form below and I&apos;ll get back to you.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
