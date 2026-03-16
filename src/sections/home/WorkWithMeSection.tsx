import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WorkWithMeSection() {
  return (
    <section id="work-with-me" className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="max-w-[1115px]">
          <SectionHeading>Work with me</SectionHeading>

          <p className="mt-6 lg:mt-8 text-subheader">
            As an early-stage investor and product leader, I love helping
            companies and founders with their product plans.
          </p>

          <div className="mt-6 lg:mt-8 text-paragraph space-y-4">
            <p>
              I invest as a partner of early-stage and Amsterdam-based fund{" "}
              <span className="font-bold text-accent">
                Great Stuff Ventures
              </span>{" "}
              and we have done so far in over 40 early-stage companies, across
              many sectors including fintech, medtech, and the latest
              AI-startups.
            </p>
            <p>
              I have helped various companies an startups with creating
              differentiating, high-growth products and their road to exit.
            </p>
          </div>

          <p className="mt-6 lg:mt-8 text-paragraph">
            If you are building a product or company, please{" "}
            <a
              href="#contact"
              className="font-bold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              reach out
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
