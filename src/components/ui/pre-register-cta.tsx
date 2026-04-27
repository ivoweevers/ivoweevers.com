import Link from "next/link";

import { Button } from "@/components/ui/button";

export function PreRegisterCta() {
  return (
    <div className="inline-flex flex-col items-center">
      <Button
        variant="ghost"
        render={<Link href="/pocket-winners" />}
        className="btn-outline-dark"
      >
        Pre-register!
      </Button>
      <p className="mt-1 text-sm italic text-center">
        30% discount on launch day
        <br />
        Wednesday May 13th 2026
      </p>
    </div>
  );
}
