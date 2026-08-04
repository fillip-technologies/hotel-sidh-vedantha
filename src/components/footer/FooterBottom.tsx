import Link from "next/link";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export function FooterBottom() {
  return (
    <div className="mt-12 grid gap-6 border-t border-border pt-8 text-body-sm text-text-secondary md:grid-cols-[1fr_auto_1fr] md:items-center">
      <p>© 2026 Hotel Sidh Vedantha. All rights reserved.</p>
      <nav aria-label="Legal links">
        <ul className="flex flex-wrap gap-5">
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
      <p className="md:text-right">Designed with ❤️ for Hotel Sidh Vedantha</p>
    </div>
  );
}
