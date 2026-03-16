import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { mainNavItems } from "@/lib/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40" role="contentinfo">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-lg font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Ivo Weevers
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Author, entrepreneur, and digital product builder.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Pages
            </h2>
            <ul className="space-y-2">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Connect
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com/in/ivoweevers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Ivo Weevers. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
