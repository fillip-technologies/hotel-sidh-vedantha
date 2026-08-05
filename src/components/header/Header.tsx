"use client";

import { useEffect, useState } from "react";

import { BookNowButton } from "./BookNowButton";
import { DesktopNav, type NavItem } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { MobileNav } from "./MobileNav";
import rooms from "@/data/rooms.json";

const navItems: NavItem[] = [
  {
    label: "Rooms",
    href: "/rooms",
    children: rooms.map((room) => ({
      label: room.title,
      href: `/rooms/${room.slug}`,
    })),
  },
  { label: "Experiences", href: "/experiences" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact-us" },
];

const scrollThreshold = 76;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateHeader = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    updateHeader();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 ${
          isMenuOpen ? "z-[var(--z-modal)]" : "z-[var(--z-sticky)]"
        } transition-[background-color,box-shadow,backdrop-filter,color] duration-[var(--duration-slow)] ${
          isScrolled || isMenuOpen
            ? "bg-surface text-text-primary shadow-sm backdrop-blur-md"
            : "bg-transparent text-primary-foreground shadow-none backdrop-blur-none"
        }`}
      >
        <div className="page-shell grid h-24 grid-cols-[auto_1fr_auto] items-center gap-8">
          <Logo isScrolled={isScrolled || isMenuOpen} />
          <DesktopNav items={navItems} isScrolled={isScrolled} />
          <div className="hidden items-center justify-end lg:flex">
            <BookNowButton variant="outline" />
          </div>
          <div className="flex justify-end lg:hidden">
            <MobileNav
              isOpen={isMenuOpen}
              isScrolled={isScrolled || isMenuOpen}
              onToggle={() => setIsMenuOpen((current) => !current)}
            />
          </div>
        </div>
      </header>
      <MobileMenu
        items={navItems}
        isOpen={isMenuOpen}
        onNavigate={() => setIsMenuOpen(false)}
      />
    </>
  );
}
