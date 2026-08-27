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
    primary: "brand-gradient-bg",
    outline:
      "brand-gradient-link bg-transparent text-current hover:text-accent-hover",
    brand: "brand-gradient-bg",
  };

  return (
    <Link
      className={`luxury-focus inline-flex items-center justify-center rounded-none px-8 py-4 text-body-md ${variants[variant]} ${className}`}
      href="/contact-us"
    >
      Book Now
    </Link>
  );
}
