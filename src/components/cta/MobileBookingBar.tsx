"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { siteContact } from "@/data/siteContact";

const revealRatio = 0.6;

export function MobileBookingBar() {
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

  return (
    <div
      className="mobile-booking-bar lg:hidden"
      data-visible={isVisible}
    >
      <Link
        className="luxury-focus btn btn-primary btn-sm"
        href="/contact-us"
      >
        <CalendarCheck aria-hidden="true" className="size-4" />
        Book Now
      </Link>
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
