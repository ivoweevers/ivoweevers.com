import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { footerNavItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white" role="contentinfo">
      <Container className="py-16 lg:py-20">
        {/* Section heading */}
        <h2 className="font-heading text-[28px] lg:text-[45px] uppercase">
          <span className="text-accent">/</span> Contact me
        </h2>

        <div className="mt-10 lg:mt-14 grid gap-12 lg:grid-cols-[1fr_auto]">
          {/* Left column: contact info */}
          <div className="space-y-8">
            {/* Email */}
            <a
              href="mailto:ivo@ivoweevers.com"
              className="flex items-center gap-4 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
            >
              <Image
                src="/images/icon-email.png"
                alt=""
                width={52}
                height={52}
                className="shrink-0"
                aria-hidden="true"
              />
              <span className="text-accent font-bold text-lg lg:text-[26px] group-hover:underline">
                ivo@ivoweevers.com
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ivoweevers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
            >
              <Image
                src="/images/icon-linkedin.png"
                alt=""
                width={59}
                height={59}
                className="shrink-0"
                aria-hidden="true"
              />
              <span className="text-accent font-bold text-lg lg:text-[26px] group-hover:underline">
                Linkedin page
              </span>
            </a>

            {/* Bio blurb */}
            <p className="font-light text-lg lg:text-[26px] leading-relaxed max-w-[752px] text-white/90 mt-8 lg:mt-12">
              I split my time between London, Amsterdam and Cagliari (capital of
              the Italian island Sardinia) - combining work at technology&apos;s
              edge with a Mediterranean lifestyle. I tend to be in the place
              where my impact can be the most helpful.
            </p>
          </div>

          {/* Right column: footer nav */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-col items-end text-right gap-1"
          >
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-light text-lg lg:text-[26px] leading-[40px] text-white transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <p className="mt-12 lg:mt-16 text-xs lg:text-[20px] font-light text-white/70">
          &copy; {new Date().getFullYear()} Copyright Ivo Weevers. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
