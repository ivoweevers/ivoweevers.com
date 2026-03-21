import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLdArticle, JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { articleBodyBySlug } from "@/content/articles";
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

  const ArticleBody = articleBodyBySlug[slug];

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

      <article className="pt-5 md:pt-8 lg:pt-10 pb-21 md:pb-24 lg:pb-34">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <Link
              href="/articles"
              className="inline-block link-accent text-paragraph"
            >
              &lt; see all articles
            </Link>

            <div className="mt-6">
              <SectionHeading as="h1">{article.title}</SectionHeading>
            </div>

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

            <div className="mt-8 lg:mt-10 text-paragraph space-y-4">
              {ArticleBody && <ArticleBody />}
            </div>

            <hr className="mt-12 lg:mt-16 border-t border-border" />

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

            <p className="mt-8 lg:mt-10 text-center">
              <Link
                href="/my-story"
                className="link-accent text-paragraph"
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
