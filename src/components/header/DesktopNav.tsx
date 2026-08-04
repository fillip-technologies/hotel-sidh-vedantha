import Link from "next/link";
import { ChevronDown } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
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
          <li className="group relative" key={item.href}>
            <div className="flex items-center gap-1">
              <Link
                className={`luxury-focus rounded-sm py-2 text-body-md ${
                  isScrolled
                    ? "brand-gradient-link text-text-primary hover:text-accent-hover"
                    : "brand-gradient-link text-primary-foreground hover:text-accent-hover"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
              {item.children ? (
                <ChevronDown
                  className={`size-4 transition-transform duration-base group-hover:rotate-180 ${
                    isScrolled ? "text-text-primary" : "text-primary-foreground"
                  }`}
                  aria-hidden="true"
                />
              ) : null}
            </div>
            {item.children ? (
              <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-3 rounded-xl border border-border bg-surface p-3 opacity-0 shadow-lg transition-all duration-slow group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="grid gap-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        className="luxury-focus block rounded-lg px-4 py-3 text-body-sm text-text-primary hover:bg-surface-hover hover:text-accent-hover"
                        href={child.href}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
