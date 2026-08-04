import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type FooterLinksProps = {
  title: string;
  links: FooterLink[];
};

export function FooterLinks({ title, links }: Readonly<FooterLinksProps>) {
  return (
    <nav aria-label={title}>
      <h2 className="text-heading-sm text-text-primary">{title}</h2>
      <ul className="mt-6 grid gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="luxury-focus brand-gradient-link inline-flex rounded-sm text-body-sm text-text-secondary hover:text-accent-hover"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
