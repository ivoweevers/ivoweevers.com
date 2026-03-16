import { JsonLdPerson } from "@/components/seo/JsonLd";
import { HeroSection } from "@/sections/home/HeroSection";
import { WorkWithMeSection } from "@/sections/home/WorkWithMeSection";
import { NewsletterSection } from "@/sections/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <JsonLdPerson />
      <HeroSection />
      <WorkWithMeSection />
      <NewsletterSection />
    </>
  );
}
