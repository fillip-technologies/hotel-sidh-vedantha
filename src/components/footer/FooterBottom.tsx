import Link from "next/link";
import Image from "next/image";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export function FooterBottom() {
  return (
    <div className="mt-8 grid gap-5 border-t border-border pt-6 text-body-sm text-text-secondary lg:grid-cols-[1fr_auto_1fr] lg:items-center">
      <p>&copy; 2026 Hotel Sidh Vedantha. All rights reserved.</p>
      <p className="flex flex-wrap items-center gap-2 lg:justify-center">
        Designed and Developed by{" "}
        <Link
          className="luxury-focus inline-flex items-center rounded-sm"
          href="https://filliptechnologies.com/"
        >
          <Image
            alt="Fillip Technologies"
            className="object-contain"
            height={24}
            src="/images/fillip-technologies.webp"
            width={92}
          />
        </Link>
      </p>
      <nav aria-label="Legal links">
        <ul className="flex flex-wrap gap-5 md:justify-end">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="luxury-focus brand-gradient-link rounded-sm hover:text-accent-hover"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
