import type { Metadata } from "next";

import { BonusChapterForm } from "@/components/forms/BonusChapterForm";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Bonus Chapter",
  description:
    "Request The Starting Playbook for a Mobile Team, the extra chapter for Pocket Winners readers.",
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
          <p className="mt-6 text-paragraph">
            Thanks so much for reading Pocket Winners. The extra chapter,{" "}
            <em>The Starting Playbook for a Mobile Team</em>, explores three
            essential questions: What role does this app play in the business?
            Which technology should we build it with? And what does it
            realistically cost in the real world? Enter your details below and
            I&apos;ll send the extra chapter straight to your inbox.
          </p>

          <div className="mx-auto max-w-[532px]">
            <div className="mt-6 rounded-xl border border-border p-6">
              <BonusChapterForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
