import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { JsonLdPerson, JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "My Story",
  description:
    "Learn about Ivo Weevers — his journey as an author, entrepreneur, and digital product builder.",
  path: "/my-story",
});

export default function MyStoryPage() {
  return (
    <>
      <JsonLdPerson />
      <JsonLdBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "My Story", href: "/my-story" },
        ]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <article className="prose prose-lg mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              My Story
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A personal look at the journey behind the work.
            </p>
            {/* Biography content will be populated from Figma designs */}
          </article>
        </Container>
      </section>
    </>
  );
}
