import Link from "next/link";

export function WhySpotifyNeverLetsTheMusicStop() {
  return (
    <>
      <p>
        Last weekend I was driving with friends to the north of Sardinia for a
        sailing trip. The route cuts through Gallura, the rugged northeastern
        corner of the island, all granite hills and cork oaks. Beautiful. Also
        a place where your phone signal comes and goes without warning. And
        yet my music never stopped.
      </p>

      <p>That&apos;s by design.</p>

      <p>
        The Spotify mobile app anticipates these moments by caching enough
        upcoming audio to keep playback going when connectivity becomes
        unreliable. Most users never notice it when it works. They would
        absolutely notice it if it didn&apos;t.
      </p>

      <p>
        In{" "}
        <Link
          href="/pocket-winners"
          className="font-normal text-accent underline underline-offset-2 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          my book
        </Link>
        , I call this the <em>Tunnel Moment</em>: the moment when a user is
        about to lose access before they realise it themselves. Great mobile
        apps do not wait for the problem to occur. They solve it before the
        user encounters it. Spotify treats it as a default, not an edge case:
        anticipate the gap, fill it before the user falls into it.
      </p>

      <p>
        What I find particularly interesting is that many people would
        classify this as a clever product detail or a nice piece of
        engineering. In reality, it helps the business on multiple levels.
      </p>

      <ul className="list-disc pl-8 space-y-2">
        <li>
          <strong>It prevents the switch.</strong> The dangerous moment is not
          the silence; it is what the listener does next. When the music cuts
          out, they reach for something already on their phone that does not
          need a connection &ndash; a downloaded podcast in Apple Podcasts, or
          even another different app. Once they leave to solve the problem
          elsewhere, getting them back is the hardest job in mobile.
        </li>
        <li>
          <strong>It protects the habit.</strong> Listening is a daily ritual,
          and rituals are fragile. Every interruption is a small crack in it.
          Keep sessions unbroken and the habit stays intact, which is what
          keeps the subscription quietly renewing month after month.
        </li>
        <li>
          <strong>
            It turns engagement into retention, and retention is where the
            money actually is.
          </strong>{" "}
          For a paying subscriber, Spotify earns the same whether you play one
          song or three hundred this month. The revenue is not in the minutes
          themselves; it is in whether you are still a subscriber next year.
          Engaged listeners churn less, and lower churn is the whole game.
        </li>
      </ul>

      <p>
        Does this benefit artists as well? Yes, it benefits the whole chain.
      </p>

      <p>
        More plays increase an artist&apos;s slice of the royalty pool, and
        unbroken listening keeps subscribers paying in, which is what fills
        that pool in the first place. So the chain runs from engagement to
        revenue to payout, and continuous play protects the very first link.
      </p>

      <p>
        What I find most interesting is this: buffering the next few songs is
        a neat piece of engineering. But it guards retention, revenue, and
        artist payouts all at once. Strong mobile teams understand this and
        obsess over it.
      </p>

      <p>
        The lesson travels well beyond music. Your customers do not use your
        product in the perfect conditions of your office. They use it on
        trains, in lifts, halfway up a hill in Gallura, with a sailing boat
        waiting. Build for the world where connections fail but expectations
        do not.
      </p>

      <p>
        By the way, we completed our sailing trip around the breathtaking La
        Maddalena archipelago and made it all the way back to the south of
        Sardinia. The playlists held up for the entire journey.
      </p>
    </>
  );
}
