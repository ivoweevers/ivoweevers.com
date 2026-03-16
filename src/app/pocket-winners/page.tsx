import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { JsonLdBook, JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Pocket Winners",
  description:
    "Pocket Winners — the book that teaches you how to turn your app idea into a successful mobile product.",
  path: "/pocket-winners",
});

export default function PocketWinnersPage() {
  return (
    <>
      <JsonLdBook />
      <JsonLdBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Pocket Winners", href: "/pocket-winners" },
        ]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Pocket Winners
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              The complete guide to building successful mobile apps — from idea
              validation to launch and beyond.
            </p>
            {/* Content will be populated from Figma designs */}
          </div>
        </Container>
      </section>
    </>
  );
}
