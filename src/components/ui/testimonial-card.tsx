import Image from "next/image";
import type { ReactNode } from "react";

interface TestimonialCardProps {
  quote?: string;
  attribution?: ReactNode;
}

export function TestimonialCard({
  quote = "The most practical guide to building apps that actually succeed.",
  attribution = "Tushar Nallan, Director of Mobile Engineering at Pearson and formerly at Delivery Hero",
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-border bg-vanilla p-6 text-center">
      <Image
        src="/images/five-stars.png"
        alt="Five out of five stars"
        width={487}
        height={114}
        className="mx-auto mb-3 h-auto w-28"
      />
      <p className="text-nav-item italic leading-[1.6]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-2 text-nav-item font-light leading-[1.6]">
        {attribution}
      </p>
    </div>
  );
}
