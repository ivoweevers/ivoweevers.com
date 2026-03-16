import type { ArticleMeta } from "@/types";

/**
 * Static article data. In the future this could be sourced from a CMS or MDX files.
 * The slug is used in the URL: /articles/{slug}
 */
export const articles: ArticleMeta[] = [
  {
    title: "Article Title One",
    slug: "article-title-one",
    description: "A brief description of the first article.",
    publishedAt: "2026-03-01",
    author: "Ivo Weevers",
    tags: ["business", "apps"],
  },
  {
    title: "Article Title Two",
    slug: "article-title-two",
    description: "A brief description of the second article.",
    publishedAt: "2026-03-10",
    author: "Ivo Weevers",
    tags: ["entrepreneurship"],
  },
];

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}
