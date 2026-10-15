import { siteContact } from "@/data/siteContact";

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
    <a
      className={`luxury-focus btn ${variants[variant]} ${className}`}
      href={siteContact.bookingHref}
      rel="noopener noreferrer"
      target="_blank"
    >
      Book Now
    </a>
  );
}
