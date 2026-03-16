import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MeetIvoSection() {
  return (
    <section className="py-10 md:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Portrait */}
          <div className="w-full lg:max-w-[402px] shrink-0 overflow-hidden">
            <Image
              src="/images/ivo-portrait.jpg"
              alt="Portrait of Ivo Weevers"
              width={402}
              height={604}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="mt-10 lg:mt-0 flex-1">
            <SectionHeading>Meet Ivo</SectionHeading>

            <p className="mt-4 lg:mt-6 text-lg lg:text-[26px] font-bold leading-snug">
              Product builder, entrepreneur, investor and author
            </p>

            <div className="mt-4 lg:mt-6 text-lg lg:text-[26px] font-light leading-relaxed space-y-4">
              <p>
                Over 25 years, I&apos;ve co-founded and shipped products used by
                millions of people. I&apos;ve built and sold my own mobile
                startup within just 4 years with a team of just 7 people to
                global banking giant Santander. I have created high-growth
                products for startups, scale-ups, and enterprises.
              </p>
              <p>
                Recently I have been leading the creation of the first
                AI-powered education apps for schools worldwide.
              </p>
            </div>

            <div className="mt-8 lg:mt-10">
              <Button
                render={<Link href="/my-story" />}
                className="h-[63px] rounded-[10px] bg-accent text-white font-bold text-xl lg:text-[26px] px-8 hover:bg-accent-hover"
              >
                Read my full story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
