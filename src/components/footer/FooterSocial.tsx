import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";

import { siteContact } from "@/data/siteContact";

const socialIcons = {
  Instagram: Camera,
  Facebook: MessageCircle,
};

export function FooterSocial() {
  return (
    <ul className="mt-8 flex flex-wrap gap-3" aria-label="Social links">
      {siteContact.social.map(({ href, label }) => {
        const Icon = socialIcons[label as keyof typeof socialIcons] ?? MessageCircle;

        return (
        <li key={label}>
          <Link
            aria-label={label}
            className="luxury-focus brand-gradient-social inline-flex size-11 items-center justify-center rounded-full border border-border bg-background shadow-xs"
            href={href}
          >
            <Icon className="size-4" aria-hidden="true" />
          </Link>
        </li>
        );
      })}
    </ul>
  );
}
