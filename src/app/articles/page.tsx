import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLd";
import { articles } from "@/lib/articles";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Articles",
  description:
    "Articles by Ivo Weevers on entrepreneurship, mobile apps, and building digital products.",
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
        ]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Articles
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Insights and thoughts on apps, entrepreneurship, and digital
              product building.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-lg"
              >
                <Card className="transition-shadow group-hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription>
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {article.description}
                    </p>
                    {article.tags && article.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
