import Image from "next/image";

export function FollowOnLinkedIn() {
  return (
    <a
      href="https://linkedin.com/in/ivoweevers"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto my-8 flex w-fit flex-col items-center gap-1 rounded-xl border border-border bg-vanilla px-6 py-4 text-center text-nav-item font-light leading-[1.6] no-underline transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span>For sharper thinking on what makes products succeed,</span>
      <span className="flex items-center gap-2">
        follow me on
        <Image
          src="/images/linkedin-logo.png"
          alt="LinkedIn"
          width={398}
          height={108}
          className="inline-block h-5 w-auto"
        />
      </span>
    </a>
  );
}
