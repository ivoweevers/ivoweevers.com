import Image from "next/image";

import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="pt-10 pb-6 md:pt-16 md:pb-10 lg:pt-20 lg:pb-14">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Lead question */}
          <p className="text-lg md:text-[32px] lg:text-[42px] font-medium leading-snug">
            When building a mobile app has never been easier...{" "}
            <br className="hidden md:block" aria-hidden="true" />
            why do so few become truly successful?
          </p>

          {/* Trophy strip */}
          <div className="my-8 lg:my-10 flex justify-center">
            <Image
              src="/images/trophy-strip.png"
              alt="Row of app trophies — most are greyed out, only one is golden"
              width={1371}
              height={156}
              className="w-full max-w-[264px] md:max-w-[600px] lg:max-w-[900px] h-auto"
              priority
            />
          </div>

          {/* Answer line */}
          <p className="text-2xl md:text-[32px] lg:text-[42px] font-medium leading-snug">
            My new book &lsquo;
            <span className="font-bold italic text-accent">
              Pocket Winners
            </span>
            &rsquo; is about that.
          </p>
        </div>
      </Container>
    </section>
  );
}
