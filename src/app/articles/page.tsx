import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { articles } from "@/lib/articles";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Articles",
  description:
    "Articles by Ivo Weevers on mobile apps, entrepreneurship, and building digital products.",
  path: "/articles",
});

const externalWorks = [
  {
    text: "Firefox OS and Ubuntu for Phones - Digital book:",
    linkText: "Designing Mobile Apps",
    href: "https://appdesignbook.com/en/contents/firefox-os-and-ubuntu-for-phones",
  },
  {
    text: "Design is No Longer an Option \u2013 User Experience (UX) in FinTech:",
    linkText: "Wiley.com",
    href: "https://onlinelibrary.wiley.com/doi/10.1002/9781119218906.ch9",
  },
  {
    text: "App Design Guidelines For High-Performance Mobile User Experiences:",
    linkText: "Smashing Magazine",
    href: "https://www.smashingmagazine.com/2011/07/seven-guidelines-for-designing-high-performance-mobile-user-experiences/",
  },
  {
    text: "GAZE-2: conveying eye contact in group video conferencing using eye-controlled camera direction:",
    linkText: "ACM.org",
    href: "https://dl.acm.org/doi/10.1145/642611.642702",
  },
  {
    text: "Patent US20140189606A1: User interface for a computing device.",
    linkText: null,
    href: null,
  },
];

export default function ArticlesPage() {
  const featuredArticle = articles[0];

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
        ]}
      />

      {/* Featured Article */}
      <section className="py-5 md:py-8 lg:py-10">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <SectionHeading as="h1">Articles</SectionHeading>

            <h2 className="mt-8 lg:mt-10 text-[28px] md:text-[36px] lg:text-[45px] font-medium leading-[1.15]">
              {featuredArticle.title}
            </h2>

            <p className="mt-4 lg:mt-6 text-paragraph">
              {featuredArticle.description}
            </p>

            <div className="mt-6 lg:mt-8">
              <Button
                render={
                  <Link href={`/articles/${featuredArticle.slug}`} />
                }
                className="inline-flex h-11 rounded-lg bg-accent text-white font-semibold text-sm px-6 hover:bg-accent-hover"
              >
                Read article
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Previous Works */}
      <section className="py-5 md:py-8 lg:py-10">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <SectionHeading>Selected Previous Works</SectionHeading>

            <ul className="mt-6 lg:mt-8 list-disc pl-8 space-y-4 text-paragraph">
              {externalWorks.map((work, i) => (
                <li key={i}>
                  {work.text}{" "}
                  {work.linkText && work.href && (
                    <a
                      href={work.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {work.linkText}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
