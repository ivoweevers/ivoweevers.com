import type { ArticleMeta } from "@/types";

/**
 * Static article data. In the future this could be sourced from a CMS or MDX files.
 * The slug is used in the URL: /articles/{slug}
 */
export const articles: ArticleMeta[] = [
  {
    title: "Why I wrote 'Pocket Winners'",
    slug: "why-i-wrote-pocket-winners",
    description:
      "Every now and then, you find yourself in a team where you just *know*. When that happens, something shifts. A successful product is no longer something you chase — it becomes the almost inevitable outcome.",
    publishedAt: "2026-03-01",
    author: "Ivo Weevers",
    tags: ["mobile", "product", "book"],
  },
  {
    title:
      "Flying Higher for Less — How Ryanair Turned Its App into a Profit Engine",
    slug: "ryanair-app-profit-engine",
    description:
      "This is based on a case study in the book — there\u2019s a certain irony in one of Europe\u2019s most aggressively low-cost brands becoming a masterclass in high-impact digital strategy.",
    publishedAt: "2026-03-13",
    author: "Ivo Weevers",
    tags: ["mobile", "strategy", "case study"],
  },
];

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}
