import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/section-heading";

export function WorkWithMeSection() {
  return (
    <section
      id="work-with-me"
      className="bg-white pt-16 md:pt-20 lg:pt-24 pb-32 md:pb-40 lg:pb-48"
    >
      <Container>
        <div className="max-w-[800px] mx-auto">
          <SectionHeading>Work with me</SectionHeading>

          <p className="mt-6 lg:mt-8 text-subheader">
            As an early-stage investor and product leader, I love helping
            companies and founders with their product plans.
          </p>

          <div className="mt-6 lg:mt-8 text-paragraph space-y-4">
            <p>
              I invest in early-stage tech companies as a partner of
              Amsterdam-based fund{" "}
              <a
                href="https://greatstuffventures.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                Great Stuff Ventures
              </a>{" "}
              and we have done so far in over 40 early-stage companies,
              across exciting sectors including fintech, medtech, and the latest
              AI-startups.
            </p>
            <p>
              I have helped enterprises, startups and founders with making their
              products more successful, and also their roads to exit.
            </p>
          </div>

          <p className="mt-6 lg:mt-8 text-paragraph">
            If you are building a product or company, please reach out via{" "}
            <a
              href="mailto:ivo@ivoweevers.com"
              className="link-accent"
            >
              email
            </a>{" "}
            or{" "}
            <a
              href="https://linkedin.com/in/ivoweevers"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              LinkedIn.
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
