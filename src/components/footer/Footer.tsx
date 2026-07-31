import Link from "next/link";

import { Logo } from "@/components/header";

const footerLinks = [
  { label: "Rooms", href: "/rooms" },
  { label: "Experiences", href: "/experiences" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary py-section text-primary-foreground">
      <div className="page-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-[var(--container-narrow)] text-body-md text-muted">
            A quiet luxury retreat shaped by timeless hospitality, refined comfort,
            and thoughtful experiences.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="mb-4 text-heading-sm">Explore</h2>
          <ul className="grid gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="luxury-focus inline-flex rounded-sm text-body-sm text-muted hover:text-gold"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-4 text-heading-sm">Contact</h2>
          <address className="not-italic text-body-sm text-muted">
            <p>reservations@hsv.example</p>
            <p className="mt-2">Varanasi, India</p>
          </address>
        </div>
      </div>
    </footer>
  );
}
