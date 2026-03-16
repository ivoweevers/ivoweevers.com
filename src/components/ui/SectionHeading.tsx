import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-heading text-[28px] lg:text-[45px] uppercase leading-tight",
        className
      )}
    >
      <span className="text-accent">/</span> {children}
    </Tag>
  );
}
