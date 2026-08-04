import Link from "next/link";
import { BriefcaseBusiness, Camera, MessageCircle, PlayCircle } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com", icon: Camera },
  { label: "Facebook", href: "https://www.facebook.com", icon: MessageCircle },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: BriefcaseBusiness },
  { label: "YouTube", href: "https://www.youtube.com", icon: PlayCircle },
];

export function FooterSocial() {
  return (
    <ul className="mt-8 flex flex-wrap gap-3" aria-label="Social links">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <li key={label}>
          <Link
            aria-label={label}
            className="luxury-focus brand-gradient-social inline-flex size-11 items-center justify-center rounded-full border border-border bg-background shadow-xs"
            href={href}
          >
            <Icon className="size-4" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
