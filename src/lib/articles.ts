import type { ArticleMeta } from "@/types";

/**
 * Static article data. In the future this could be sourced from a CMS or MDX files.
 * The slug is used in the URL: /articles/{slug}
 */
export const articles: ArticleMeta[] = [
  {
    title: "Taste What You Cook",
    slug: "taste-what-you-cook",
    description:
      "The best mobile opportunities are often discovered away from your desk. The gap between how apps are built and how they're actually used is usually where the strongest strategic opportunities appear.",
    publishedAt: "2026-06-16",
    author: "Ivo Weevers",
    tags: ["mobile", "strategy", "product"],
  },
  {
    title: "Why the Spotify Mobile App Never Lets the Music Stop",
    slug: "why-spotify-never-lets-the-music-stop",
    description:
      "Driving through Sardinia with a patchy signal, the music never stopped \u2014 by design. How Spotify quietly handles the Tunnel Moment to protect habits, subscriptions, and artist payouts all at once.",
    publishedAt: "2026-06-01",
    author: "Ivo Weevers",
    tags: ["mobile", "product", "case study"],
  },
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
  {
    title: "Boosting Conversion by Removing One Word",
    slug: "boosting-conversion-by-removing-one-word",
    description:
      "This is based on a case study in the book \u2014 On mobile, every word carries weight. Not just because screen space is limited, but because each word competes for the user\u2019s attention\u2014and, more importantly, their interpretation.",
    publishedAt: "2026-03-13",
    author: "Ivo Weevers",
    tags: ["mobile", "conversion", "case study"],
  },
];

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}
