import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PocketWinnersSection() {
  return (
    <section className="py-10 md:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Book cover image */}
          <div className="w-full max-w-[402px] mx-auto lg:mx-0 shrink-0">
            <Image
              src="/images/pocket-winners-cover.jpg"
              alt="Pocket Winners book cover"
              width={402}
              height={398}
              className="w-full h-auto shadow-[8px_8px_10px_0px_rgba(0,0,0,0.25)]"
              priority
            />
          </div>

          {/* Content */}
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

            {/* Testimonial */}
            <div className="mt-6 lg:mt-8">
              <p className="text-paragraph italic">
                &ldquo;The most practical guide to building apps that actually
                succeed.&rdquo;
              </p>
              <p className="text-paragraph">
                Tushar Nallan, Director of Mobile Engineering at Pearson and
                formerly DeliveryHero
              </p>
            </div>

            {/* Coming out date */}
            <p className="mt-6 lg:mt-8 text-[32px] lg:text-[44px] font-bold leading-tight">
              COMING OUT: APRIL 2026
            </p>

            {/* CTA buttons */}
            <div className="mt-6 lg:mt-8 flex flex-wrap gap-4 items-start">
              <Button
                render={<Link href="/pocket-winners" />}
                className="inline-flex h-11 rounded-lg bg-accent text-white font-semibold text-sm px-6 hover:bg-accent-hover"
              >
                Read about the book
              </Button>

              <div className="inline-flex flex-col items-center">
                <Button
                  className="inline-flex h-11 rounded-lg border-2 border-foreground bg-transparent text-foreground font-semibold text-sm px-6 hover:bg-foreground/5"
                >
                  Pre-register!
                </Button>
                <p className="mt-1 text-sm italic text-center">
                  Discount on launch day
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
