"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Phone } from "lucide-react";

import { siteContact } from "@/data/siteContact";

const revealRatio = 0.6;

export function MobileBookingBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * revealRatio);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Room detail pages render their own "Reserve Now" bar in the same spot.
  if (pathname.startsWith("/rooms/")) {
    return null;
  }

  return (
    <div
      className="mobile-booking-bar lg:hidden"
      data-visible={isVisible}
    >
      <a
        className="luxury-focus btn btn-primary btn-sm"
        href={siteContact.bookingHref}
        rel="noopener noreferrer"
        target="_blank"
      >
        <CalendarCheck aria-hidden="true" className="size-4" />
        Book Now
      </a>
      <Link
        aria-label={`Call ${siteContact.phoneDisplay}`}
        className="luxury-focus btn btn-sm btn-icon mobile-booking-call"
        href={siteContact.phoneHref}
      >
        <Phone aria-hidden="true" className="size-4" />
      </Link>
    </div>
  );
}
