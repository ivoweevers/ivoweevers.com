import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { PreRegisterCta } from "@/components/ui/pre-register-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLdPerson, JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "My Story",
  description:
    "Ivo Weevers — product builder, entrepreneur, investor and author. Over 20 years of creating and shipping products used by millions.",
  path: "/my-story",
});

export default function MyStoryPage() {
  return (
    <>
      <JsonLdPerson />
      <JsonLdBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "My Story", href: "/my-story" },
        ]}
      />

      {/* Biography */}
      <section className="py-5 md:py-8 lg:py-10">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            {/* Portrait */}
            <div className="w-full lg:max-w-[402px] shrink-0 overflow-hidden">
              <Image
                src="/images/ivo-story-portrait.png"
                alt="Ivo Weevers"
                width={682}
                height={1024}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Content */}
            <div className="mt-10 lg:mt-0 flex-1">
              <SectionHeading as="h1">My Story</SectionHeading>

              <p className="mt-4 lg:mt-6 text-subheader">
                Product builder, entrepreneur, investor and author
              </p>

              <div className="mt-4 lg:mt-6 text-paragraph space-y-4">
                <p>Hey &ndash; pleased to meet.</p>

                <p>
                  I build and invest in tech products, specialising in mobile,
                  AI, edtech, fintech, and productivity. I am the author of{" "}
                  <Link
                    href="/pocket-winners"
                    className="font-normal text-accent underline underline-offset-2 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <em>
                      <span className="font-bold">Pocket Winners</span>{" "}
                      &mdash; Develop the Winning Mindset for Creating Standout
                      Mobile Apps
                    </em>
                  </Link>
                  .
                </p>

                <p>
                  Over 20 years, I have co-founded and shipped mobile products used by
                  millions of people. I have built and sold my own mobile startup
                  within just 4 years and with a team of just 7 people to global
                  banking giant Santander. I have created products for
                  startups, scaleups, and enterprises such as Natwest (banks),
                  Pearson (education), Medtronic (medical), Ubuntu (operating
                  systems), Mercedes (automotive), and Vodafone (mobile
                  operators). Recently i have been leading the creation of the first AI-enabled education apps for school students.
                </p>

                <p>
                  My work has picked up awards (a Cannes Gold Mobile Lion,
                  &ldquo;Best in Show&rdquo; at Mobile World Congress), global
                  press coverage (&ldquo;
                  <em>Setting new grounds, Unique and Beautiful</em>&rdquo; by
                  Wall Street Journal, &ldquo;
                  <em>More Elegant than Android</em>&rdquo; by FastCompany),
                  patent registrations, and features in books on mobile
                  development and fintech (more in{" "}
                  <Link
                    href="/articles"
                    className="link-accent"
                  >
                    articles
                  </Link>
                  ).
                </p>

                <p>
                I hold a Doctorate in User Interaction Design and an MSc in 
                Computer Science (ENIAC Award for Best Dissertation on multi-agent systems).
                </p>

                <p>
                  Fortunately I worked with fantastic people who taught and challenged me and
                  helped create and ship impactful products. Not every
                  project succeeded, but each taught me something about what
                  makes software stick and how to build it in the best way
                  together with others.
                </p>

                <p>
                  I invest in early-stage tech companies as a partner of
                  Amsterdam-based fund{" "}
                  <a
                    href="https://greatstuffventures.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent"
                  >
                    Great Stuff Ventures
                  </a>{" "}
                  and together we have invested in over 40 early-stage
                  companies, across exciting sectors including fintech, medtech,
                  and the latest AI-startups. I have helped enterprises, startups
                  and founders with creating unique products and roads to exit.
                </p>

                <p className="text-center">~</p>

                <p>
                  After more than 10 years in London, I moved to the
                  Mediterranean island of Sardinia, where I rebuilt a house that now
                  runs 90% on solar, located on a plot of land that grows olive
                  trees, citrus trees and many other vegetations and herbs. I
                  split my time between here, London and Amsterdam and, in this
                  way, combine my passion at technology&apos;s edge with a
                  Mediterranean and outdoor life.
                </p>
              </div>

              <div className="mt-8 lg:mt-10 mb-6 lg:mb-8 text-paragraph space-y-4">
                <p className="font-bold">
                  My current near-daily mobile app stack:
                </p>
                <p>
                  Claude, Bear, Spark, WhatsApp, Notion, Dropbox, Revolut, Chrome,
                  Flighty, ChatGPT, Spotify, Strava, WeatherRadar, Dashlane, iOS
                  suite (Podcasts, Photos, Camera, Mail), Google suite(Calendar,
                  Maps, Translate), Domestic apps (Daikin, Legrand, Bticino,
                  FusionSolar).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Book Promo */}
      <section className="bg-white pt-12 md:pt-16 lg:pt-20 pb-28 md:pb-32 lg:pb-44">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            {/* Book cover */}
            <div className="w-full max-w-[402px] mx-auto lg:mx-0 shrink-0">
              <Image
                src="/images/pocket-winners-my-story-flatlay.png"
                alt="Pocket Winners book with coffee, flat lay"
                width={1024}
                height={1024}
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="mt-10 lg:mt-0 flex-1">
              <SectionHeading>
                My Book &lsquo;Pocket Winners&rsquo;
              </SectionHeading>

              <p className="mt-4 lg:mt-6 text-subheader">
                Develop the Winning Mindset for Creating Standout Mobile Apps
              </p>

              <p className="mt-4 lg:mt-6 text-paragraph">
                We are in an era in which building mobile apps has never been easier; yet so few 
                companies create ones that succeed. This book explains how the best app teams think differently
                through a unique Mobile Mindset, and build indispensable apps.
              </p>

              <div className="mt-8 lg:mt-10 flex flex-wrap gap-4 items-start">
                <Button
                  render={<Link href="/pocket-winners" />}
                  className="btn-accent"
                >
                  Read more
                </Button>

                <PreRegisterCta />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
