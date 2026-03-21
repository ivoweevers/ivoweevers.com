import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/section-heading";
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
  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
        ]}
      />

      {/* Articles */}
      <section className="py-5 md:py-8 lg:py-10">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <SectionHeading as="h1">Articles</SectionHeading>

            <div className="mt-8 lg:mt-10 divide-y divide-border">
              {articles.map((article) => (
                <div key={article.slug} className="py-10 lg:py-14 first:pt-0">
                  <h2 className="text-[22px] md:text-[28px] lg:text-[32px] font-medium leading-[1.15]">
                    {article.title}
                  </h2>

                  <p className="mt-4 lg:mt-6 text-paragraph">
                    {article.description}
                  </p>

                  <div className="mt-6 lg:mt-8">
                    <Button
                      render={
                        <Link href={`/articles/${article.slug}`} />
                      }
                      className="btn-accent"
                    >
                      Read article
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <hr className="border-t border-border max-w-[800px] mx-auto" />

      {/* Selected Previous Works */}
      <section className="pt-5 md:pt-8 lg:pt-10 pb-21 md:pb-24 lg:pb-34">
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
                      className="link-accent"
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
