import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { PreRegisterCta } from "@/components/ui/pre-register-cta";

export function HeroSection() {
  return (
    <section className="pt-10 pb-6 md:pt-16 md:pb-10 lg:pt-20 lg:pb-14">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-[28px] lg:text-[36px] font-medium leading-[1.2]">
            Building mobile apps has never been easier; yet so few succeed.
          </p>

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

          <p className="text-xl md:text-[28px] lg:text-[36px] font-medium leading-[1.2]">
            My new book &lsquo;
            <span className="font-bold italic text-accent">
              Pocket Winners
            </span>
            &rsquo; is about how to become one of them.
          </p>

          <div className="mt-14 flex flex-col items-center">
            <PreRegisterCta />
          </div>
        </div>
      </Container>
    </section>
  );
}
