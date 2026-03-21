import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Bonus Chapter",
  description: "Exclusive bonus chapter for Pocket Winners readers.",
  path: "/readers/bonus-chapter",
  noIndex: true,
});

export default function BonusChapterPage() {
  return (
    <section className="pt-20 md:pt-28 pb-36 md:pb-52">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Bonus Chapter
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Thank you for reading Pocket Winners! Here&apos;s your exclusive
            bonus content.
          </p>
          {/* Bonus chapter content will be populated from Figma designs */}
        </div>
      </Container>
    </section>
  );
}
