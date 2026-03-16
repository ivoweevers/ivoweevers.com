import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";

export function WorkWithMeSection() {
  return (
    <section id="work-with-me" className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Work With Me
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Whether you&apos;re launching your first app or scaling an existing
            product, I can help you navigate the journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Strategic advice on mobile app development, product-market fit,
                and go-to-market strategies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Speaking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Keynotes and workshops on entrepreneurship, digital products,
                and the app economy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mentoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                One-on-one guidance for founders and product teams looking to
                build winning apps.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <Button render={<Link href="/contact" />} size="lg">
            Let&apos;s Talk
          </Button>
        </div>
      </Container>
    </section>
  );
}
