"use client";

import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { mainNavItems } from "@/lib/navigation";

export function Header() {
  return (
    <header className="w-full py-6 lg:py-8">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
          aria-label="Ivo weevers — Home"
        >
          <Image
            src="/images/logo-wordmark.png"
            alt="Ivo weevers"
            width={566}
            height={90}
            priority
            className="h-7 w-auto lg:h-[31px]"
          />
        </Link>

        <nav
          className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8"
          aria-label="Main navigation"
        >
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-nav-item whitespace-nowrap transition-colors hover:text-accent hover:underline hover:underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
