import Image from "next/image";

export function TestimonialCard() {
  return (
    <div className="rounded-xl border border-border bg-vanilla p-6 text-center">
      <Image
        src="/images/five-stars.png"
        alt="Five out of five stars"
        width={505}
        height={361}
        className="mx-auto -mb-3 -mt-2 h-auto w-24"
      />
      <p className="text-nav-item italic leading-[1.6]">
        &ldquo;The most practical guide to building apps that actually
        succeed.&rdquo;
      </p>
      <p className="mt-2 text-nav-item font-light leading-[1.6]">
        Tushar Nallan, Director of Mobile Engineering at Pearson and formerly at
        Delivery Hero
      </p>
    </div>
  );
}
