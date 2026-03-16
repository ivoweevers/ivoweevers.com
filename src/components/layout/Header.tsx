"use client";

import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { mainNavItems } from "@/lib/navigation";

export function Header() {
  return (
    <header className="w-full py-6 lg:py-8">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-2xl lg:text-[45px] leading-none tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent uppercase"
          aria-label="Ivo Weevers — Home"
        >
          Ivo Weevers
        </Link>

        <nav
          className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8"
          aria-label="Main navigation"
        >
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl xl:text-[32px] font-medium whitespace-nowrap transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="text-accent">/</span>{" "}
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
