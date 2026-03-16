import { siteConfig } from "@/lib/metadata";

interface JsonLdProps {
  data: Record<string, unknown>;
}

function JsonLdScript({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLdWebSite() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        author: {
          "@type": "Person",
          name: siteConfig.author.name,
          url: siteConfig.author.url,
        },
      }}
    />
  );
}

export function JsonLdPerson() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.author.name,
        url: siteConfig.url,
        jobTitle: "Author & Entrepreneur",
        sameAs: ["https://linkedin.com/in/ivoweevers"],
      }}
    />
  );
}

export function JsonLdBook() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Book",
        name: "Pocket Winners",
        author: {
          "@type": "Person",
          name: siteConfig.author.name,
        },
        url: `${siteConfig.url}/pocket-winners`,
      }}
    />
  );
}

export function JsonLdArticle({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url: `${siteConfig.url}/articles/${slug}`,
        datePublished: publishedAt,
        ...(updatedAt && { dateModified: updatedAt }),
        author: {
          "@type": "Person",
          name: siteConfig.author.name,
          url: siteConfig.url,
        },
        publisher: {
          "@type": "Person",
          name: siteConfig.author.name,
        },
      }}
    />
  );
}

export function JsonLdBreadcrumb({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.href}`,
        })),
      }}
    />
  );
}
