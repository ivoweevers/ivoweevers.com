import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { PreRegisterCta } from "@/components/ui/pre-register-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export function PocketWinnersSection() {
  return (
    <section className="py-10 md:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          <div className="w-full max-w-[402px] mx-auto lg:mx-0 shrink-0">
            <Image
              src="/images/pocket-winners-book-standing.png"
              alt="Pocket Winners book cover"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </div>

          <div className="mt-10 lg:mt-0 flex-1">
            <SectionHeading>Pocket Winners</SectionHeading>

            <p className="mt-4 lg:mt-6 text-subheader">
              Develop the Winning Mindset for Creating Standout Mobile Apps
            </p>

            <p className="mt-4 lg:mt-6 text-paragraph">
              This book reveals how the most successful app teams think
              differently through a unique &ldquo;Mobile Mindset&rdquo;: A
              framework of practical behaviours spanning five crucial levels: 1)
              Seeing differently, 2) Proving promises fast, 3) Obsessing about
              the funnel, 4) Treasuring each detail, and 5) Navigating a
              non-mobile organisation.
            </p>

            <div className="mt-6 lg:mt-8">
              <TestimonialCard />
            </div>

            <p className="mt-6 lg:mt-8 text-[18px] lg:text-[22px] font-bold leading-tight">
              LAUNCH DATE: APRIL 2026
            </p>

            <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center">
              <Button
                render={<Link href="/pocket-winners" />}
                className="btn-accent"
              >
                Read about the book
              </Button>

              <PreRegisterCta />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
