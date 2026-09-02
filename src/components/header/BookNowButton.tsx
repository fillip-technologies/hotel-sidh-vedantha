import Link from "next/link";

type BookNowButtonProps = {
  variant?: "primary" | "outline" | "brand";
  className?: string;
};

export function BookNowButton({
  variant = "brand",
  className = "",
}: Readonly<BookNowButtonProps>) {
  const variants = {
    primary: "btn-primary",
    outline: "btn-secondary",
    brand: "btn-primary",
  };

  return (
    <Link
      className={`luxury-focus btn ${variants[variant]} ${className}`}
      href="/contact-us"
    >
      Book Now
    </Link>
  );
}
