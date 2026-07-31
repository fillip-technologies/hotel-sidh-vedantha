import Link from "next/link";

import { BookNowButton } from "./BookNowButton";
import type { NavItem } from "./DesktopNav";

type MobileMenuProps = {
  items: NavItem[];
  isOpen: boolean;
  onNavigate: () => void;
};

export function MobileMenu({
  items,
  isOpen,
  onNavigate,
}: Readonly<MobileMenuProps>) {
  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-x-0 top-0 z-[var(--z-overlay)] min-h-screen bg-surface px-shell pb-10 pt-24 shadow-lg transition-[opacity,transform,visibility] duration-[var(--duration-slow)] lg:hidden ${
        isOpen
          ? "visible translate-x-0 opacity-100"
          : "invisible translate-x-full opacity-0"
      }`}
      id="mobile-menu"
    >
      <nav aria-label="Mobile navigation">
        <ul className="grid gap-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                className="luxury-focus block rounded-md px-4 py-4 text-body-lg text-text-primary hover:bg-surface-hover"
                href={item.href}
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 px-4">
        <BookNowButton className="w-full" />
      </div>
    </div>
  );
}
