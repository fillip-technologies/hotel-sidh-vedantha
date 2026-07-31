import Link from "next/link";

type BookNowButtonProps = {
  variant?: "primary" | "outline" | "gold";
  className?: string;
};

export function BookNowButton({
  variant = "gold",
  className = "",
}: Readonly<BookNowButtonProps>) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-text-primary",
    outline:
      "border border-current bg-transparent text-current hover:border-gold hover:text-gold",
    gold: "bg-gold text-accent-foreground shadow-gold hover:bg-accent",
  };

  return (
    <Link
      className={`luxury-focus inline-flex items-center justify-center rounded-none px-8 py-4 text-body-md ${variants[variant]} ${className}`}
      href="/contact"
    >
      Book Now
    </Link>
  );
}
