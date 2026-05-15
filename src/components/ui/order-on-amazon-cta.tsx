import { Button } from "@/components/ui/button";
import { POCKET_WINNERS_ORDER_URL } from "@/lib/book";

type OrderOnAmazonCtaProps = {
  showBestSellerBadge?: boolean;
};

export function OrderOnAmazonCta({
  showBestSellerBadge = false,
}: OrderOnAmazonCtaProps) {
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
      {showBestSellerBadge ? (
        <img
          src="/images/amazon-best-seller.png"
          alt="Amazon #1 Best Seller"
          width={1343}
          height={315}
          className="mt-3 w-full max-w-[280px] h-auto"
        />
      ) : null}
    </div>
  );
}
