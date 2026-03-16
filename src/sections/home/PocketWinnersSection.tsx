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

            <p className="mt-4 lg:mt-6 text-lg lg:text-[26px] font-bold leading-snug">
              Develop the Winning Mindset for Creating Standout Mobile Apps
            </p>

            <p className="mt-4 lg:mt-6 text-lg lg:text-[26px] font-light leading-relaxed">
              This book reveals how the best app teams think differently through
              a unique &ldquo;Mobile Mindset&rdquo;: A framework of practical
              behaviours spanning five crucial levels: 1) Seeing differently, 2)
              Proving promises fast, 3) Obsessing about the funnel, 4)
              Treasuring each detail, and 5) Navigating a non-mobile
              organisation.
            </p>

            {/* Testimonial */}
            <div className="mt-6 lg:mt-8">
              <p className="text-lg lg:text-[26px] italic leading-snug">
                &ldquo;I&apos;ve never read a book like this.&rdquo;
              </p>
              <p className="text-lg lg:text-[26px] font-bold leading-snug">
                -Name, mobile engineering at DeliveryHero and Pearson
              </p>
            </div>

            {/* Coming out date */}
            <p className="mt-6 lg:mt-8 text-[32px] lg:text-[44px] font-bold leading-tight">
              COMING OUT: APRIL 2026
            </p>

            {/* CTA buttons */}
            <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                render={<Link href="/pocket-winners" />}
                className="h-[63px] rounded-[10px] bg-accent text-white font-bold text-xl lg:text-[26px] px-8 hover:bg-accent-hover"
              >
                Read about the book
              </Button>

              <div className="flex flex-col items-center">
                <Button
                  className="h-[63px] rounded-[10px] bg-secondary text-white font-bold text-xl lg:text-[22px] px-8 hover:bg-secondary/90 w-full sm:w-auto"
                >
                  Pre-register!
                </Button>
                <p className="mt-1 text-lg lg:text-[26px] italic text-center">
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
