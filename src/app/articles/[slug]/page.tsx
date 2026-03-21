import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLdArticle, JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";
import { createMetadata } from "@/lib/metadata";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return createMetadata({ title: "Article Not Found", noIndex: true });
  }

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/articles/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <JsonLdArticle
        title={article.title}
        description={article.description}
        slug={article.slug}
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
      />
      <JsonLdBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: article.title, href: `/articles/${article.slug}` },
        ]}
      />

      <article className="py-5 md:py-8 lg:py-10">
        <Container>
          <div className="max-w-[800px] mx-auto">
            {/* Back link */}
            <Link
              href="/articles"
              className="inline-block font-bold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent text-paragraph"
            >
              &lt; see all articles
            </Link>

            {/* Title */}
            <div className="mt-6">
              <SectionHeading as="h1">{article.title}</SectionHeading>
            </div>

            {/* Book cover */}
            {slug === "why-i-wrote-pocket-winners" && (
              <div className="mt-8 lg:mt-10 flex justify-center">
                <Image
                  src="/images/pocket-winners-cover.png"
                  alt="Pocket Winners book cover"
                  width={322}
                  height={319}
                  className="w-full max-w-[322px] h-auto"
                />
              </div>
            )}

            {/* Article body */}
            <div className="mt-8 lg:mt-10 text-paragraph space-y-4">
              {slug === "why-i-wrote-pocket-winners" && (
                <WhyIWrotePocketWinners />
              )}
              {slug === "ryanair-app-profit-engine" && (
                <RyanairAppProfitEngine />
              )}
            </div>

            {/* Separator */}
            <hr className="mt-12 lg:mt-16 border-t border-border" />

            {/* About the author */}
            <div className="mt-8 lg:mt-10 flex items-start gap-6">
              <Image
                src="/images/ivo-profile-round.png"
                alt="Ivo Weevers"
                width={174}
                height={174}
                className="shrink-0 w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] rounded-full object-cover"
              />
              <div>
                <p className="text-subheader">About the author</p>
                <p className="mt-2 text-paragraph">
                  Hi, I&apos;m Ivo. Over 20 years, I&apos;ve created and
                  shipped high-growth products used by millions of people.
                  I&apos;ve co-founded and sold my own mobile startup within
                  just 4 years with a team of just 7 people to global banking
                  giant Santander. I have launched products for startups,
                  scale-ups, and enterprises.
                </p>
              </div>
            </div>

            {/* Read more link */}
            <p className="mt-8 lg:mt-10 text-center">
              <Link
                href="/my-story"
                className="font-bold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent text-paragraph"
              >
                Read more about my book and me
              </Link>
            </p>
          </div>
        </Container>
      </article>
    </>
  );
}

function RyanairAppProfitEngine() {
  return (
    <>
      <p>
        This is based on a case study in the book &ndash; there&apos;s a
        certain irony in one of Europe&apos;s most aggressively low-cost brands
        becoming a masterclass in high-impact digital strategy.
      </p>

      <p>
        Ryanair doesn&apos;t win by adding more. It wins by stripping
        everything back to what matters &ndash; and then using mobile to make
        that experience work harder. The result is not just a convenient app.
        It&apos;s a system that rewires the economics of flying.
      </p>

      <h2 className="text-subheader mt-8">The App as an Operational Engine</h2>

      <p>
        Ryanair treats their app as core infrastructure. Check-in, boarding
        passes, seat management, flight updates &ndash; everything sits in the
        app. Not as a feature set, but as a deliberate shift away from physical
        operations.
      </p>

      <p>Every digital boarding pass means:</p>
      <ul className="list-disc pl-8 space-y-2">
        <li>One less printed document</li>
        <li>One less queue</li>
        <li>One less interaction with staff</li>
      </ul>

      <p>
        Individually, these are small efficiencies. At Ryanair scale, they
        compound into something far more powerful: a structurally lower
        operational cost per passenger.
      </p>

      <h2 className="text-subheader mt-8">Turning Booking into Retail</h2>

      <p>
        Once the operational layer is digitised, something interesting happens.
        The booking flow becomes a shop. Seat selection, priority boarding,
        extra baggage, car hire, hotels &ndash; none of these are new. But the
        way they are presented inside the app changes everything.
      </p>

      <p>They are:</p>
      <ul className="list-disc pl-8 space-y-2">
        <li>Contextually timed</li>
        <li>Frictionless to purchase</li>
        <li>Embedded in the flow</li>
      </ul>

      <p>
        And crucially, they are high-margin. Over 40% of Ryanair&apos;s
        revenue comes from these add-ons. Not because users love add-ons, but
        because the app makes saying &ldquo;yes&rdquo; effortless. This is
        where many products get it wrong. They separate &ldquo;core
        experience&rdquo; and &ldquo;monetisation.&rdquo; Ryanair merges them.
      </p>

      <h2 className="text-subheader mt-8">
        Owning the Customer Relationship
      </h2>

      <p>
        There&apos;s another layer to this strategy that is less visible, but
        arguably more important.
      </p>

      <p>
        Direct bookings. Every time a customer books through the app instead of
        a third party:
      </p>
      <ul className="list-disc pl-8 space-y-2">
        <li>Ryanair avoids commission fees</li>
        <li>Retains full control over pricing</li>
        <li>Owns the customer relationship</li>
        <li>Captures the data</li>
      </ul>

      <p>
        The app becomes a control centre. Push notifications reduce missed
        flights and customer service load. Logged-in users can rebook in
        seconds. The entire journey becomes tighter, faster, more predictable,
        and cheaper to run.
      </p>

      <h2 className="text-subheader mt-8">Data as a Silent Multiplier</h2>

      <p>
        Behind the scenes, the app is learning. What users search for. What
        they ignore. Where they hesitate. What they ultimately buy. This data
        feeds personalisation, pricing strategies, and offer timing. The result
        is a system that improves itself:
      </p>
      <ul className="list-disc pl-8 space-y-2">
        <li>Better recommendations</li>
        <li>Smarter upsells</li>
        <li>Higher conversion</li>
      </ul>

      <p>All without adding visible complexity.</p>

      <h2 className="text-subheader mt-8">The Real Lesson</h2>

      <p>
        Ryanair&apos;s app is not successful because it looks good. It&apos;s
        successful because it aligns perfectly with the business model. Low-cost
        airline &rarr; low operational cost &rarr; high ancillary revenue &rarr;
        direct customer ownership. Ryanair uses the app as leverage:
      </p>

      <p>A way to:</p>
      <ul className="list-disc pl-8 space-y-2">
        <li>Remove cost</li>
        <li>Increase revenue</li>
        <li>Strengthen the relationship with the customer</li>
      </ul>

      <p>
        All at the same time and when that happens, something powerful emerges.
        The product stops being an interface and becomes the business.
      </p>
    </>
  );
}

function WhyIWrotePocketWinners() {
  return (
    <>
      <p>
        Every now and then, you find yourself in a team where you just{" "}
        <em>know</em>. No org charts, no noise, no distractions &ndash; you
        can feel it. Conversations are sharper, questions go deeper, trade-offs
        make sense, and, most importantly, everyone is solving the{" "}
        <em>same problem</em>, not adjacent ones. When that happens, something
        shifts. A successful product is no longer something you chase &ndash;
        it becomes the almost inevitable outcome.
      </p>

      <p>
        I&apos;ve been lucky enough to be part of a few of those teams across
        the many mobile products I&apos;ve worked on: in my own startup, in
        scale-ups, and in enterprise environments. Almost without exception,
        they built defining products in an unreasonably short amount of time
        (yes, even in enterprise&hellip;).
      </p>

      <p>
        And many of those apps had something in common. They found their way
        into people&apos;s daily lives and stayed there. In a world where
        hundreds of thousands of apps are launched every year, only a handful
        end up in everyone&apos;s pocket and rise to the top of the charts.
        They create new behaviours and redefine business. These are the ones I
        call <em>Pocket Winners</em>: apps so valuable they become
        indispensable.
      </p>

      <p>
        A few years ago, after finishing one of those projects, two people said
        something that stayed with me: <em>&ldquo;You should write this
        down.&rdquo;</em> I assumed they were being polite, but I started
        anyway.
      </p>

      <p>
        Looking back across the mobile teams I&apos;d worked with, I noticed
        something curious. Different companies, different people, different
        contexts &mdash; yet the same patterns kept appearing: similar ways of
        thinking, deciding, and working together. Maybe this wasn&apos;t luck.
        Maybe it was something you could describe.
      </p>

      <p>
        There&apos;s a persistent myth that high-performing app teams are
        magical accidents &ndash; a rare mix of brilliant individuals that
        somehow just <em>works</em>. I don&apos;t believe that. In my
        experience, great teams emerge when the conditions are right: when
        talent is trusted, clarity beats noise, communication thrives, and
        people are genuinely enabled to do their best work.
      </p>

      <p>
        Get that right, and you unlock something rare: speed <em>and</em>{" "}
        quality, ambition <em>and</em> focus, high standards <em>and</em>{" "}
        happy teams.
      </p>

      <p>
        At the same time, we&apos;re entering a world where building apps has
        never been easier. AI is lowering the barrier at an extraordinary pace.
        More people can build, more ideas can be tested, more products can
        ship. That&apos;s exciting &ndash; but it changes the game. If
        everyone can build, standing out becomes much harder. The tools
        won&apos;t differentiate you. The mindset will.
      </p>

      <p>
        <em>Pocket Winners</em> is my attempt to capture that winning mindset.
        It&apos;s shaped by years of working with exceptional people who
        challenged me, corrected me, and consistently raised the bar. Many of
        the ideas in this book aren&apos;t mine alone &ndash; they&apos;re the
        product of teams who simply refused to build average things.
      </p>

      <p>
        If it helps a few teams think a little clearer, move a little faster,
        and build something that truly matters, then it will have been worth
        writing.
      </p>

      <p>
        The book will be out in <strong>April 2026</strong>. If you are
        interested,{" "}
        <Link
          href="/pocket-winners"
          className="font-bold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          please register your details here
        </Link>
        .
      </p>

      <p>I hope you will enjoy it.</p>
    </>
  );
}
