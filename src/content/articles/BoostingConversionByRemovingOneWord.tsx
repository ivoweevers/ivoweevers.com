import Link from "next/link";

export function BoostingConversionByRemovingOneWord() {
  return (
    <>
      <p className="italic text-paragraph">
        This article is based on a case study from my book{" "}
        <Link
          href="/pocket-winners"
          className="font-normal not-italic text-accent underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Pocket Winners
        </Link>
        .
      </p>

      <p>
        On mobile, every word carries weight. Not just because screen space is
        limited, but because each word competes for the user&apos;s
        attention&mdash;and, more importantly, their interpretation. A single
        misplaced word can introduce hesitation, confusion, or even distrust. And
        in onboarding, those moments matter more than anywhere else.
      </p>

      <p>
        While building our <strong>Albert</strong> bookkeeping app, we
        introduced a Dropbox integration. It was a straightforward addition, and
        one that users had explicitly asked for. The goal was simple: make it
        easier for people to store and organise their financial documents.
      </p>

      <p>
        As part of onboarding, we added a set of friendly progress messages to
        guide users through the setup process:
      </p>
      <ul className="list-disc pl-8 space-y-2">
        <li>&ldquo;Setting up account&hellip;&rdquo;</li>
        <li>&ldquo;Creating Dropbox folder&hellip;&rdquo;</li>
      </ul>

      <p>
        It felt like good product thinking. Transparent. Reassuring. Helpful.
        At least, that&apos;s what we thought.
      </p>

      <p>
        When we tested the onboarding flow with users, the reaction was
        immediate&mdash;and not in the way we expected. The moment people saw
        the word <em>Dropbox</em>, their focus shifted. Not towards progress,
        but towards doubt:
      </p>
      <ul className="list-disc pl-8 space-y-2">
        <li>
          <em>What does Dropbox have to do with this app?</em>
        </li>
        <li>
          <em>What exactly is being connected?</em>
        </li>
        <li>
          <em>What else is happening with my data?</em>
        </li>
      </ul>

      <p>
        Nothing about the feature itself had changed. But the perception had.
        The mere mention of Dropbox&mdash;at the wrong moment&mdash;introduced
        uncertainty into what should have been a smooth, low-friction
        experience.
      </p>

      <p>
        The interesting part is that the feature itself was not the problem.
        Once users had completed onboarding and encountered the integration in
        context, they understood it. They valued it. Many even appreciated it.
        But during onboarding, when trust is still being established, the same
        feature created the opposite effect. One word &ndash; Dropbox &ndash;
        was hurting our onboarding conversion.
      </p>

      <p>So we made a small change. We removed the word.</p>

      <p>
        The progress message still communicated movement. The feature still
        existed. The experience remained intact. But the unnecessary cognitive
        load &ndash; the question mark in the user&apos;s mind &ndash;
        disappeared.
      </p>

      <p>
        The result? Conversion increased by over 10%. No redesign. No new
        functionality. No complex experimentation. Just one word, removed at
        the right moment.
      </p>

      <p>
        The lesson is simple, but easy to overlook. We spend a lot of time
        designing features, flows, and interfaces. But words are part of the
        product too. They shape perception, influence trust, and guide
        behaviour. And sometimes, the best thing you can do is not to add
        clarity &ndash; but to remove the source of confusion altogether.
      </p>

      <p>
        Good products are not just about what you build. It&apos;s also about
        what you choose to leave out. Especially on a screen where space is
        limited.
      </p>
    </>
  );
}
