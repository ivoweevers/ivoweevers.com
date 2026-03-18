import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="pt-10 pb-6 md:pt-16 md:pb-10 lg:pt-20 lg:pb-14">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Lead question */}
          <p className="text-lg md:text-[28px] lg:text-[36px] font-medium leading-[1.2]">
            When building a mobile app has never been easier... why do so few
            become truly successful?
          </p>

          {/* Trophy strip */}
          <div className="my-8 lg:my-10 flex justify-center">
            <Image
              src="/images/trophy-strip.png"
              alt="Row of app trophies — most are greyed out, only one is golden"
              width={1371}
              height={156}
              className="w-full max-w-[320px] md:max-w-[600px] lg:max-w-[900px] h-auto"
              priority
            />
          </div>

          {/* Answer line */}
          <p className="text-lg md:text-[28px] lg:text-[36px] font-medium leading-[1.2]">
            My new book &lsquo;
            <span className="font-bold italic text-accent">
              Pocket Winners
            </span>
            &rsquo; is about that.
          </p>

          {/* Pre-register CTA (also shown in the hero) */}
          <div className="mt-14 flex flex-col items-center">
            <Button
              render={<Link href="/#contact" />}
              className="inline-flex h-11 rounded-lg border-2 border-foreground bg-transparent text-foreground font-semibold text-sm px-6 hover:bg-foreground/5"
            >
              Pre-register!
            </Button>
            <p className="mt-1 text-sm italic text-center">
              50% discount on launch day
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
