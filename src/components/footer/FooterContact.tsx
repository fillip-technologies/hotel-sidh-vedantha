import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { siteContact } from "@/data/siteContact";

const contactItems = [
  {
    icon: MapPin,
    label: siteContact.address,
    href: siteContact.mapsHref,
  },
  { icon: Phone, label: siteContact.phoneDisplay, href: siteContact.phoneHref },
  {
    icon: Mail,
    label: siteContact.email,
    href: siteContact.emailHref,
    copyEmail: true,
  },
  { icon: Clock, label: "Open all days, 24 hours", href: "/contact-us" },
];

export function FooterContact() {
  return (
    <section aria-labelledby="footer-contact">
      <h2 className="text-heading-sm text-text-primary" id="footer-contact">
        Contact
      </h2>
      <address className="mt-6 grid gap-4 not-italic">
        {contactItems.map(({ copyEmail, href, icon: Icon, label }) => (
          <div className="flex items-start gap-2" key={label}>
            <Link
              className="luxury-focus brand-gradient-link group grid min-w-0 flex-1 grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-sm text-body-sm text-text-secondary hover:text-accent-hover"
              href={href}
            >
              <Icon
                className="mt-1 size-4 text-text-muted transition-colors duration-base group-hover:text-accent-hover"
                aria-hidden="true"
              />
              <span className="break-words">{label}</span>
            </Link>
            {copyEmail && (
              <CopyEmailButton className="luxury-focus mt-0.5 rounded-sm p-0.5 text-text-muted transition-colors duration-base hover:text-accent-hover" />
            )}
          </div>
        ))}
      </address>
    </section>
  );
}
