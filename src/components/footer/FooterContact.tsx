import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    label: "Hotel Sidh Vedantha, Patna, Bihar",
    href: "https://www.google.com/maps/search/?api=1&query=Hotel%20Sidh%20Vedantha%20Patna",
  },
  { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
  {
    icon: Mail,
    label: "reservations@hotelsidhvedantha.com",
    href: "mailto:reservations@hotelsidhvedantha.com",
  },
  { icon: Clock, label: "Open all days, 24 hours", href: "/contact" },
];

export function FooterContact() {
  return (
    <section aria-labelledby="footer-contact">
      <h2 className="text-heading-sm text-text-primary" id="footer-contact">
        Contact
      </h2>
      <address className="mt-6 grid gap-4 not-italic">
        {contactItems.map(({ href, icon: Icon, label }) => (
          <Link
            className="luxury-focus brand-gradient-link group grid grid-cols-[auto_1fr] items-start gap-3 rounded-sm text-body-sm text-text-secondary hover:text-accent-hover"
            href={href}
            key={label}
          >
            <Icon
              className="mt-1 size-4 text-text-muted transition-colors duration-base group-hover:text-accent-hover"
              aria-hidden="true"
            />
            <span>{label}</span>
          </Link>
        ))}
      </address>
    </section>
  );
}
