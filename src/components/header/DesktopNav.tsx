import Link from "next/link";

export type NavItem = {
  label: string;
  href: string;
};

type DesktopNavProps = {
  items: NavItem[];
  isScrolled: boolean;
};

export function DesktopNav({ items, isScrolled }: Readonly<DesktopNavProps>) {
  return (
    <nav aria-label="Primary navigation" className="hidden lg:block">
      <ul className="flex items-center justify-center gap-8">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              className={`luxury-focus rounded-sm py-2 text-body-md ${
                isScrolled
                  ? "text-text-primary hover:text-gold"
                  : "text-primary-foreground hover:text-gold"
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
