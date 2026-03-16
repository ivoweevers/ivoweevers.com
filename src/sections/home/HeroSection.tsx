import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 lg:py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Ivo Weevers
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Author, entrepreneur, and digital product builder. Helping people
            turn ideas into successful mobile apps.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button render={<Link href="/pocket-winners" />} size="lg">
              Discover Pocket Winners
            </Button>
            <Button render={<Link href="/contact" />} variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
