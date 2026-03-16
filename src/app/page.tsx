import { JsonLdPerson } from "@/components/seo/JsonLd";
import { HeroSection } from "@/sections/home/HeroSection";
import { PocketWinnersSection } from "@/sections/home/PocketWinnersSection";
import { MeetIvoSection } from "@/sections/home/MeetIvoSection";
import { WorkWithMeSection } from "@/sections/home/WorkWithMeSection";

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
