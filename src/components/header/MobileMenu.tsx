"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MessageCircle, Phone, X } from "lucide-react";

import { siteContact } from "@/data/siteContact";

import { BookNowButton } from "./BookNowButton";
import type { NavItem } from "./DesktopNav";

type MobileMenuProps = {
  items: NavItem[];
  isOpen: boolean;
  onNavigate: () => void;
};

const linkClass =
  "luxury-focus block rounded-md px-3 py-3.5 text-body-lg text-text-primary transition-colors hover:bg-surface-hover hover:text-accent-hover";

export function MobileMenu({
  items,
  isOpen,
  onNavigate,
}: Readonly<MobileMenuProps>) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onNavigate();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onNavigate]);

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[var(--z-modal)] xl:hidden ${isOpen ? "visible" : "invisible"}`}
      id="mobile-menu"
    >
      <button
        aria-label="Close navigation menu"
        className={`absolute inset-0 bg-black/55 backdrop-blur-[2px] transition-opacity duration-[var(--duration-slow)] ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onNavigate}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />

      <aside
        aria-label="Site navigation"
        className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-surface shadow-2xl transition-transform duration-[var(--duration-slow)] ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Link aria-label="Hotel Sidh Vedantha home" className="luxury-focus relative block h-12 w-40" href="/" onClick={onNavigate}>
            <Image alt="" className="object-contain object-left" fill sizes="160px" src="/images/logo-hsv-gold.png" />
          </Link>
          <button
            aria-label="Close navigation menu"
            className="luxury-focus inline-flex size-10 items-center justify-center rounded-full border border-border text-text-primary hover:bg-surface-hover"
            onClick={onNavigate}
            tabIndex={isOpen ? 0 : -1}
            type="button"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="grid gap-0.5">
            {items.map((item) => (
              <li className="border-b border-border/60 last:border-b-0" key={item.href}>
                {item.children ? (
                  <details className="group">
                    <summary className={`${linkClass} flex cursor-pointer list-none items-center justify-between marker:hidden`}>
                      {item.label}
                      <ChevronDown aria-hidden="true" className="size-5 text-text-muted transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mb-2 ml-3 grid gap-0.5 border-l border-accent-hover/40 pl-3">
                      {item.href !== "/#experience-heading" && (
                        <li>
                          <Link className="luxury-focus block rounded-md px-3 py-2.5 text-body-md font-medium text-accent-hover hover:bg-surface-hover" href={item.href} onClick={onNavigate}>
                            View all {item.label}
                          </Link>
                        </li>
                      )}
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            className="luxury-focus block rounded-md px-3 py-2.5 text-body-md text-text-secondary transition-colors hover:bg-surface-hover hover:text-accent-hover"
                            href={child.href}
                            onClick={onNavigate}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link className={linkClass} href={item.href} onClick={onNavigate}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border bg-surface-hover/40 px-5 py-5">
          <BookNowButton className="w-full justify-center" />
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a className="luxury-focus btn btn-secondary btn-sm justify-center" href={siteContact.phoneHref}>
              <Phone aria-hidden="true" className="size-4" /> Call
            </a>
            <a className="luxury-focus btn btn-secondary btn-sm justify-center" href={siteContact.whatsappHref} rel="noreferrer" target="_blank">
              <MessageCircle aria-hidden="true" className="size-4" /> WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
