import { Button } from "@/components/ui/button";
import { POCKET_WINNERS_ORDER_URL } from "@/lib/book";

export function OrderOnAmazonCta() {
  return (
    <div className="inline-flex flex-col items-center m-2">
      <Button
        variant="ghost"
        render={
          <a
            href={POCKET_WINNERS_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
        className="btn-order-amazon"
      >
        Order on Amazon
      </Button>
      <p className="mt-1 text-sm italic text-center">Out now.</p>
    </div>
  );
}
