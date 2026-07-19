import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { JsonLdBook, JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { OrderOnAmazonCta } from "@/components/ui/order-on-amazon-cta";
import { BookPreviewGallery } from "@/components/book/BookPreviewGallery";

export const metadata: Metadata = createMetadata({
  title: "Pocket Winners",
  description:
    "Pocket Winners — how to develop the winning mindset to create standout mobile apps in the A.I. era. Out now.",
  path: "/pocket-winners",
});

const insideTheBookItems = [
  "The Mobile Mindset framework with 20 practical behaviours for mobile product teams",
  "Over 25 case studies and examples, covering Spotify, Strava, Instagram, Wise, Revolut and Ivo\u2019s own mobile startup and products.",
  "Why mobile app projects often fail.",
  "Lessons from things that did not go well.",
  "Background on key strategic business topics, including industry thinking, product-market fit, funnel thinking, and mobile economics.",
  "How to organise teams and workflows for mobile product development",
];

const bookPageImages = [
  { src: "/images/book-pages/page-3.png", alt: "Pocket Winners page 33 — Level 1: Seeing Differently, chapter opener with illustration" },
  { src: "/images/book-pages/page-2.png", alt: "Pocket Winners page 57 — Triple A-ha! moment case study with funnel diagram" },
  { src: "/images/book-pages/page-1.png", alt: "Pocket Winners page 81 — Develop Your Value Engine, covering retention, revenue and referral stages of the funnel" },
];

export default function PocketWinnersPage() {
  return (
    <>
      <JsonLdBook />
      <JsonLdBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Pocket Winners", href: "/pocket-winners" },
        ]}
      />

      {/* Hero */}
      <section className="py-5 md:py-8 lg:py-10">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            <div className="w-full max-w-[402px] mx-auto lg:mx-0 shrink-0">
              <Image
                src="/images/pocket-winners-book-cover.png"
                alt="Pocket Winners book cover"
                width={1024}
                height={1024}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="mt-10 lg:mt-0 flex-1">
              <h1 className="font-heading text-[36px] lg:text-[60px] leading-none uppercase">
                Pocket Winners
              </h1>
              <p className="mt-4 lg:mt-6 text-lg md:text-[22px] lg:text-[26px] font-medium leading-[1.2]">
                How to Develop the Winning Mindset to Create Standout Mobile Apps.
              </p>
              <div className="mt-6 lg:mt-8 flex flex-row items-center gap-4 justify-center lg:justify-start">
                <img
                  src="/images/amazon-best-seller-stacked.png"
                  alt="Amazon #1 Best Seller"
                  width={830}
                  height={561}
                  className="w-[120px] sm:w-[140px] h-auto shrink-0"
                />
                <OrderOnAmazonCta />
              </div>

              <div className="mt-6 lg:mt-8 flex justify-center lg:justify-start">
                <div className="rounded-xl border border-border bg-vanilla px-6 py-4 text-center">
                  <Image
                    src="/images/five-stars.png"
                    alt="Five out of five stars"
                    width={487}
                    height={114}
                    className="mx-auto mb-2 h-auto w-28"
                  />
                  <a href="#reviews" className="link-accent text-nav-item">
                    Read the reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About the Book */}
      <section className="py-5 md:py-8 lg:py-10">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <SectionHeading>About the book</SectionHeading>

            <div className="mt-6 lg:mt-8 text-paragraph space-y-6">
              <p>
                Why do some mobile apps win our time and attention, whilst most
                fade into obscurity? In this A.I. era when building an app has never been
                easier, why do so few companies create one that becomes truly
                indispensable?
              </p>
              <p>
                In Pocket Winners, Ivo Weevers &mdash; serial product builder
                whose mobile startup was acquired by Santander &mdash; reveals how
                the winners think differently through what he calls the
                &ldquo;Mobile Mindset&rdquo;. It is a framework of behaviours
                spanning five crucial levels: 1) Seeing differently, 2) Proving
                promises fast, 3) Obsessing about the funnel, 4) Treasuring each
                detail, and 5) Navigating a non-mobile organisation.
              </p>
              <p>
                Ivo cuts through buzzwords and abstract theory. He draws on 20
                years of building his own mobile startup and creating and shipping
                products used by millions for scaleups and enterprises such as
                Natwest (banks), Pearson (education), Medtronic (medical), Ubuntu
                (operating systems), Mercedes (automotive), and Vodafone (mobile
                operators).
              </p>
              <p>
                Pocket Winners is a practical guide for product managers,
                designers, engineers, marketers, business leaders, start-up
                founders, and anyone determined to make mobile a real engine of
                business success. With case studies from his own work and examples
                of leading apps such as Spotify, Instagram, and Strava, the book
                offers actionable approaches that you can apply to build apps that
                people don&rsquo;t just download but find indispensable in their
                daily lives.
              </p>
            </div>

            <div className="mt-10 lg:mt-14 flex justify-center">
              <Image
                src="/images/trophy-strip.png"
                alt="Row of app trophies — most are greyed out, only one is golden"
                width={1371}
                height={156}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Example Pages */}
      <section className="py-5 md:py-8 lg:py-10">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <SectionHeading>Example pages</SectionHeading>
            <p className="mt-2 text-paragraph italic font-normal">
              (click pages to enlarge)
            </p>
            <div className="mt-6 lg:mt-8">
              <BookPreviewGallery images={bookPageImages} />
            </div>
          </div>
        </Container>
      </section>

      {/* Inside the Book */}
      <section className="py-5 md:py-8 lg:py-10">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <SectionHeading>Inside the book</SectionHeading>
            <div className="mt-6 lg:mt-8 space-y-6">
              {insideTheBookItems.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Image
                    src="/images/bullet-cup.png"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0 w-[1.25em] h-[1.25em] mt-[0.15em] object-contain"
                    aria-hidden="true"
                  />
                  <p className="text-paragraph">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bonus Materials */}
      <section className="py-5 md:py-8 lg:py-10">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <SectionHeading>Bonus materials</SectionHeading>
            <div className="mt-6 lg:mt-8 text-paragraph">
              <p>
                Readers can download an extra chapter containing a Mobile Team
                Starter Playbook, including:
              </p>
              <ul className="mt-4 list-disc pl-8 space-y-2">
                <li>How to classify your app</li>
                <li>How to select the right technology approach</li>
                <li>Cost benchmarks for mobile app development</li>
                <li>
                  A practical starting framework for mobile product teams
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonial + order repeat */}
      <section
        id="reviews"
        className="scroll-mt-24 pt-5 md:pt-8 lg:pt-10 pb-21 md:pb-24 lg:pb-34"
      >
        <Container>
          <div className="max-w-[800px] mx-auto">
            <div className="space-y-4">
              <TestimonialCard />
              <TestimonialCard
                quote="This book covers everything you should do with your mobile app, but probably don't"
                attribution="Martin Alderson, AI author at martinalderson.com and founder catchmetrics.io"
              />
              <TestimonialCard
                quote="Read this book if you want loyal customers, not just downloads."
                attribution="H.L. Lamberts - founder essence.eu, customer experience agency, the Netherlands"
              />
              <TestimonialCard
                quote="Devoured it in an afternoon…"
                attribution="Dan - CTO, startup founder, and ex-mobile developer BBC, United Kingdom"
              />
              <TestimonialCard
                quote="A must read for product and tech leaders who want to build world-class mobile apps"
                attribution="Anusha - Germany"
              />
              <TestimonialCard
                quote="A Practical, Insight-Packed Read for App Builders"
                attribution="Ruslan Padnevych - Android Engineering Manager, Spain"
              />
              <TestimonialCard
                quote="A must read. The Mobile Mindset framework is refreshingly practical"
                attribution="Pho - Senior Mobile Marketing Manager, France"
              />
              <TestimonialCard
                quote="Not just for apps. This book contains lots of relevant information for anyone building ANY sort of product or service in today's digital world."
                attribution="Amazon Customer - United Kingdom"
              />
            </div>

            <div className="mt-14 lg:mt-20">
              <div className="mx-auto max-w-[532px] flex justify-center">
                <OrderOnAmazonCta />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
