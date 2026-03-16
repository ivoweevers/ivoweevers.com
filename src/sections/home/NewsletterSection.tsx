import { Container } from "@/components/layout/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="border-t border-border bg-muted/40 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Get insights on building apps, entrepreneurship, and my latest
            articles delivered to your inbox.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
