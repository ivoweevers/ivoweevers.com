import Image from "next/image";
import Link from "next/link";

import { FollowOnLinkedIn } from "@/components/articles/FollowOnLinkedIn";

export function RyanairAppProfitEngine() {
  return (
    <>
      <p className="text-sm italic opacity-70">
        [Update]: Added new insights and two screenshots of notifications on my
        phone that demonstrate their mobile strategy.
      </p>

      <p className="text-sm italic opacity-70">
        (
        This article is based on a case study from my book{" "}
        <Link
          href="/pocket-winners"
          className="font-normal not-italic text-accent underline underline-offset-2 hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Pocket Winners
        </Link>
        .)
      </p>

      <p>
        There&apos;s something ironic about Europe&apos;s biggest (budget)
        airline Ryanair having one of the smartest mobile strategies in
        aviation.
      </p>

      <p>
        The airline famous for stripping flying back to its essentials has made
        its app central to how the business operates. It shifts costly processes
        onto mobile, owns the customer relationship, and turns every journey
        into an opportunity to sell. The result is a rare combination: lower
        operating costs and higher revenue, driven by the same digital product.
      </p>

      <h2 className="text-subheader mt-8">The App as a Core Operational Engine</h2>

      <p>
        Ryanair treats its app as core infrastructure. Check-in, boarding
        passes, seat management and flight updates all happen through the app.
        This isn&apos;t just about making flying more convenient; rather, it
        deliberately moves processes that once required airport staff, counters
        or paperwork onto the customer&apos;s phone, making Ryanair&apos;s
        operations simpler and cheaper to run.
      </p>

      <p>
        Moreover, in 2025, Ryanair moved to 100% digital boarding passes. It
        looks like a cost decision, but it&apos;s also a smart distribution
        strategy. The change was never just about the boarding pass. It became
        the reason to pull every passenger into the mobile app. The app no
        longer is optional. It&apos;s a mandatory step in the (virtual and real)
        journey. Ryanair owns this channel.
      </p>

      <figure className="my-2">
        <Image
          src="/images/ryanair-notification-1.png"
          alt="Ryanair push notification: all passengers need the Ryanair app to access their digital boarding pass"
          width={1024}
          height={290}
          className="w-full h-auto rounded-lg"
        />
        <figcaption className="mt-2 text-center text-sm italic opacity-70">
          A week before the flight, Ryanair sends the notification to use their
          app.
        </figcaption>
      </figure>

      <p>Every digital boarding pass means:</p>
      <ul className="list-disc pl-8 space-y-2">
        <li>One less printed document</li>
        <li>One less queue</li>
        <li>One less interaction with staff</li>
        <li>And often underestimated... one more opportunity to sell add-ons</li>
      </ul>

      <p>
        None of these changes saves a huge amount on its own. But across
        hundreds of millions of passenger journeys, the savings add up. The app
        makes self-service the default, reducing the people and physical
        processes needed to serve each passenger. And every interaction moved
        into the app creates another opportunity to sell a seat, bag, priority
        boarding or another add-on. It reduces the cost to serve while creating
        more opportunities to earn.
      </p>

      <h2 className="text-subheader mt-8">Turning Booking into Retail</h2>

      <p>
        Once these core operations move into the app, Ryanair also has many more
        opportunities to sell. Seat selection, priority boarding, extra baggage,
        car hire and hotels are nothing new. What Ryanair does well is offer them
        at moments when they are most relevant. Even 25 minutes before takeoff,
        you might get a notification inviting you to order food and drinks for
        the flight.
      </p>

      <figure className="my-2">
        <Image
          src="/images/ryanair-notification-2.png"
          alt="Ryanair lock screen notification: order to seat now, order food and drink before takeoff"
          width={665}
          height={1024}
          className="mx-auto w-full max-w-[320px] h-auto rounded-lg"
        />
        <figcaption className="mt-2 text-center text-sm italic opacity-70">
          Even 25 minutes before takeoff, you might get a notification inviting
          you to order food and drinks for the flight.
        </figcaption>
      </figure>

      <p>
        The app makes these add-ons easy to discover, well timed and quick to
        buy, because they are built directly into the journey rather than
        presented as a separate shop.
      </p>

      <p>
        And crucially, they are high-margin. Over 40% of Ryanair&apos;s
        revenue comes from these add-ons. Not because users love add-ons, but
        because the app makes saying &ldquo;yes&rdquo; effortless. This is
        where many products get it wrong. They separate &ldquo;core
        experience&rdquo; and &ldquo;monetisation.&rdquo; Ryanair merges them.
      </p>

      <FollowOnLinkedIn />

      <h2 className="text-subheader mt-8">
        Owning the Customer Relationship
      </h2>

      <p>
        There&apos;s another layer to this strategy that is less visible, but
        arguably more important: Direct bookings. Every time a customer books
        through the app instead of a third party:
      </p>
      <ul className="list-disc pl-8 space-y-2">
        <li>Ryanair avoids commission fees</li>
        <li>Retains full control over pricing</li>
        <li>Owns the customer relationship</li>
      </ul>

      <p>
        The app becomes a control centre. Push notifications reduce missed
        flights and customer service load. Logged-in users can rebook in
        seconds. The entire journey becomes tighter, faster, more predictable,
        and cheaper to run.
      </p>

      <h2 className="text-subheader mt-8">Data as the Multiplier</h2>

      <p>
        Behind the scenes, the app is constantly learning: what users search
        for, what they ignore, where they hesitate, and what they ultimately
        buy. That data feeds personalisation, pricing strategies and the timing
        of offers, so the system improves itself with better
        recommendations, smarter upsells and higher conversion, all without
        adding any visible complexity.
      </p>

      <h2 className="text-subheader mt-8">The Lesson</h2>

      <p>
        Ryanair&apos;s mobile strategy works because it starts with a different
        way of thinking about the role of the app.
      </p>

      <p>
        The app is not simply a digital companion to the airline. It is part of
        how Ryanair runs the airline. It moves operational work to the
        passenger, reduces the cost of serving them, keeps Ryanair in direct
        contact throughout the journey, and creates more opportunities to sell.
        The same product makes the business both more efficient and more
        profitable.
      </p>

      <p>
        That is the <em>Mobile Mindset</em> in practice: start with what mobile
        can fundamentally change about how your business works.
      </p>

      <h2 className="text-subheader mt-8">Closer to Home</h2>

      <p>
        There is also a personal reason I pay close attention to Ryanair. I
        spend part of my life in Cagliari, the capital of the beautiful
        Mediterranean island of Sardinia. Ryanair has, in many ways, unlocked
        the island for its residents including myself. Its network allows me to
        live and work between Cagliari, London and Amsterdam with remarkable
        ease.
      </p>

      <p>
        So I use the Ryanair app a lot. And the more I use it during my
        travels, the more I appreciate the thinking behind it.
      </p>
    </>
  );
}
