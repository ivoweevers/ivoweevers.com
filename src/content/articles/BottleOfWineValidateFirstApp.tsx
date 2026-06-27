import Image from "next/image";
import Link from "next/link";

export function BottleOfWineValidateFirstApp() {
  return (
    <>
      <p className="text-subheader">
        How do you get early customer feedback on your new app when you
        don&apos;t have customers yet? We used a bottle of wine.
      </p>

      <div className="mt-6 lg:mt-8">
        <Image
          src="/images/bottle-of-wine-validate-first-app.png"
          alt="A bottle of red wine on a wooden table against an exposed brick wall"
          width={1024}
          height={1024}
          className="w-full h-auto rounded-lg"
        />
      </div>

      <p>
        This was early days of our bookkeeping app Albert. We needed real
        behaviours and reactions on our app but didn&apos;t have users yet. So I
        brought a bottle of wine to a few industry meetups in London and made a
        deal with the other attendees:
      </p>

      <ul className="space-y-2 pl-2">
        <li>→ Guess the price of the bottle</li>
        <li>→ Download our app Albert</li>
        <li>→ Send me an invoice with the app for your guessed amount</li>
        <li>→ Closest guess wins the wine</li>
      </ul>

      <p>
        Silly? Maybe. But surprisingly close to real-world use (except for the
        wine ;-)). The app was designed for creating invoices quickly, on the
        move, sitting next to strangers. That&apos;s exactly what this
        recreated.
      </p>

      <p>
        After the game, I asked a few simple questions: First impression? Would
        you use this again? What worried you? Those conversations uncovered
        issues no data dashboard would have shown us.
      </p>

      <p>
        The insights led directly to our first onboarding redesign and
        highlighted the importance of some features we initially did not
        consider of the same importance. For example, customisation of the
        invoice numbering format to the customer&apos;s own format was hugely
        important for people who would consider switching to Albert.
      </p>

      <p>
        If a few people from your test group highlight the same issue, you can
        count on the fact that it is going to be an issue for a larger group of
        customers as well. Better address it.
      </p>

      <p>
        Sometimes the best research doesn&apos;t need a lab or big budgets. It
        needs a decent Malbec and a room of curious people willing to play
        along.
      </p>

      <p>
        I&apos;ve written about this and dozens of other simple but impactful
        tactics in{" "}
        <Link href="/pocket-winners" className="link-accent">
          Pocket Winners
        </Link>
        , my upcoming book on the mindset required to build apps people
        genuinely can&apos;t live without.
      </p>
    </>
  );
}
