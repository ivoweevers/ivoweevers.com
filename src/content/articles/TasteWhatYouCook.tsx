import Image from "next/image";
import Link from "next/link";

export function TasteWhatYouCook() {
  return (
    <>
      <p className="text-subheader">
        The best mobile opportunities are often discovered away from your desk.
      </p>

      <div className="mt-6 lg:mt-8">
        <Image
          src="/images/taste-what-you-cook.png"
          alt="Chef tasting from a spoon"
          width={1536}
          height={471}
          className="w-full h-auto rounded-lg"
        />
      </div>

      <p>Top chefs taste what they cook. Most app teams don&apos;t.</p>

      <p>
        Apps are often built behind desks with fast Wi-Fi, quiet rooms, and
        high-end devices. Real users are on trains, in queues, on sofas,
        distracted, tired, and using one hand.
      </p>

      <p>
        The gap between building and using is larger than many teams assume.
        And it&apos;s not just a UX problem. It&apos;s a strategy problem.
      </p>

      <p>
        By using products in the real world, you discover opportunities that
        never appear in a meeting room: new ways to differentiate, hidden
        adoption barriers, and moments that matter more than entire feature
        lists.
      </p>

      <p>
        <a
          href="https://www.strava.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
        >
          Strava
        </a>{" "}
        understood that runners wanted more than data. They wanted motivation,
        competition, and personal connection. That insight helped transform a
        fitness tracker into a global social competition.
      </p>

      <p>
        We saw similar lessons when building Albert, our bookkeeping app. One
        single mother told us she loved it because she could do her bookkeeping
        while cooking dinner for her child. Another customer said he sent
        invoices while waiting for his meal at McDonald&apos;s. Neither story
        was about accounting. Both were about fitting into real life.
      </p>

      <p>That&apos;s why I ask three simple things from my product teams:</p>

      <ul className="list-disc pl-8 space-y-2">
        <li>Everyone uses the product, regardless of role or experience.</li>
        <li>
          I regularly ask where they used our app over the weekend and what
          they observed.
        </li>
        <li>
          Prototypes get tested on the move. Open the Figma prototype in a
          cafe. Load the Cursor prototype in a park. Don&apos;t evaluate it
          from your desk.
        </li>
      </ul>

      <p>
        And when you do, pay attention to the micro moments. What frustrated
        you because you couldn&apos;t do it right then? What made you postpone
        something? What pushed you into another app? What became harder with one
        hand, on the move, or with only half your attention?
      </p>

      <p>
        Those small moments often reveal the biggest opportunities: new
        features, adjacent services, vertical and horizontal integrations, new
        business models, and ways to create a unique experience that works
        better on mobile than anywhere else.
      </p>

      <p>
        The lesson is simple: stop making assumptions about users and start
        experiencing the world they live in.
      </p>

      <p>Like top chefs do.</p>

      <p>
        It&apos;s one of the first behaviours I encourage in my book{" "}
        <Link href="/pocket-winners" className="link-accent">
          Pocket Winners
        </Link>
        . The teams that build the best mobile products don&apos;t just build
        from their desks. They spend time living in the mobile world of their
        users.
      </p>
    </>
  );
}
