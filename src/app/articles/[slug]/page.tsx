import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { JsonLdArticle, JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { articles, getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";
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
      <article className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <header>
              <time
                dateTime={article.publishedAt}
                className="text-sm text-muted-foreground"
              >
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight md:text-5xl">
                {article.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {article.description}
              </p>
            </header>

            <div className="mt-12">
              {/* Article body content will be populated from Figma designs / CMS */}
              <p className="text-muted-foreground">
                Article content goes here. This will be replaced with the actual
                article body when content is ready.
              </p>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
