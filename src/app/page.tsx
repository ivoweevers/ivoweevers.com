import type { Metadata } from "next";

import { JsonLdPerson } from "@/components/seo/JsonLd";
import { HeroSection } from "@/sections/home/HeroSection";
import { PocketWinnersSection } from "@/sections/home/PocketWinnersSection";
import { MeetIvoSection } from "@/sections/home/MeetIvoSection";
import { WorkWithMeSection } from "@/sections/home/WorkWithMeSection";

const HOME_DESCRIPTION =
  "Ivo Weevers is a product builder and author of Pocket Winners - Develop the winning mindset for creating standout mobile apps.";

export const metadata: Metadata = {
  description: HOME_DESCRIPTION,
  openGraph: {
    description: HOME_DESCRIPTION,
  },
  twitter: {
    description: HOME_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLdPerson />
      <HeroSection />
      <PocketWinnersSection />
      <MeetIvoSection />
      <WorkWithMeSection />
    </>
  );
}
