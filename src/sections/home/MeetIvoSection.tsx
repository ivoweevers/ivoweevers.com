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

            <p className="mt-4 lg:mt-6 text-subheader">
              Product builder, entrepreneur, investor and author
            </p>

            <div className="mt-4 lg:mt-6 text-paragraph space-y-4">
              <p>
                Over 20 years, I&apos;ve created and shipped high-growth
                products used by millions of people. I&apos;ve co-founded and
                sold my own mobile startup within just 4 years with a team of
                just 7 people to global banking giant Santander. I have
                launched products for startups, scale-ups, and enterprises.
              </p>
              <p>
                Recently I have been leading the creation of the first
                AI-powered education apps for schools worldwide.
              </p>
            </div>

            <div className="mt-8 lg:mt-10">
              <Button
                render={<Link href="/my-story" />}
                className="h-11 rounded-lg bg-accent text-white font-semibold text-sm px-6 hover:bg-accent-hover"
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
