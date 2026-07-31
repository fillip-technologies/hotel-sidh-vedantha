import { Menu, X } from "lucide-react";

type MobileNavProps = {
  isOpen: boolean;
  isScrolled: boolean;
  onToggle: () => void;
};

export function MobileNav({
  isOpen,
  isScrolled,
  onToggle,
}: Readonly<MobileNavProps>) {
  return (
    <button
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className={`luxury-focus inline-flex size-11 items-center justify-center rounded-full border lg:hidden ${
        isScrolled
          ? "border-border bg-card text-text-primary"
          : "border-primary-foreground/40 bg-transparent text-primary-foreground"
      }`}
      onClick={onToggle}
      type="button"
    >
      {isOpen ? (
        <X className="size-5" aria-hidden="true" />
      ) : (
        <Menu className="size-5" aria-hidden="true" />
      )}
    </button>
  );
}
