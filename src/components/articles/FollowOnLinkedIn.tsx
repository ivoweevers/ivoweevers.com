import Image from "next/image";

export function FollowOnLinkedIn() {
  return (
    <a
      href="https://linkedin.com/in/ivoweevers"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-xl border border-border bg-vanilla px-6 py-4 text-center no-underline transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span>For more practical insights and ideas, follow me on</span>
      <Image
        src="/images/linkedin-logo.png"
        alt="LinkedIn"
        width={398}
        height={108}
        className="inline-block h-5 w-auto"
      />
    </a>
  );
}
