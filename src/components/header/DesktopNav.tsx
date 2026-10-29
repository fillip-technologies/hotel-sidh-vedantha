"use client";

import { useState, type FocusEvent } from "react";
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
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <nav aria-label="Primary navigation" className="hidden min-w-0 xl:block">
      <ul className="flex items-center justify-center gap-6">
        {items.map((item, index) => (
          <li
            className="relative"
            key={item.href}
            onPointerEnter={() => {
              if (item.children) setOpenItem(item.href);
            }}
            onPointerLeave={() => {
              if (item.children) setOpenItem(null);
            }}
            onFocus={() => {
              if (item.children) setOpenItem(item.href);
            }}
            onBlur={(event: FocusEvent<HTMLLIElement>) => {
              if (item.children && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setOpenItem(null);
              }
            }}
          >
            <div className="flex items-center gap-1">
              <Link
                className={`luxury-focus rounded-sm py-2 text-body-md ${
                  isScrolled
                    ? "brand-gradient-link text-text-primary hover:text-accent-hover"
                    : "brand-gradient-link text-primary-foreground hover:text-accent-hover"
                }`}
                href={item.href}
                onClick={() => {
                  if (item.children) setOpenItem(null);
                }}
              >
                {item.label}
              </Link>
              {item.children ? (
                <ChevronDown
                  className={`size-4 opacity-70 transition-transform duration-base ${openItem === item.href ? "rotate-180" : ""} ${
                    isScrolled ? "text-text-primary" : "text-primary-foreground"
                  }`}
                  aria-hidden="true"
                />
              ) : null}
            </div>
            {item.children ? (
              <div className={`absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-xl border border-border bg-surface p-3 shadow-lg transition-[opacity,transform,visibility] duration-slow ${openItem === item.href ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"}`}>
                <ul aria-label={`${item.label} submenu`} className="grid gap-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        className="luxury-focus block rounded-lg px-4 py-3 text-body-sm text-text-primary hover:bg-surface-hover hover:text-accent-hover"
                        href={child.href}
                        onClick={() => setOpenItem(null)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {index < items.length - 1 ? (
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute left-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 ${
                  isScrolled ? "text-text-primary/45" : "text-primary-foreground/50"
                }`}
              >
                |
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
