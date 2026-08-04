import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="luxury-cta-section px-shell py-16 md:py-24 lg:py-32" aria-labelledby="final-cta-heading">
      <div className="luxury-dark-section mx-auto overflow-hidden rounded-xl px-6 py-12 text-center text-primary-foreground shadow-glass md:px-10 md:py-16">
        <p className="text-caption tracking-[var(--tracking-eyebrow)] text-primary-foreground/68">
          Hotel Sidh Vedantha
        </p>
        <h2
          className="mx-auto mt-5 max-w-[50rem] text-heading-xl sm:text-display-lg"
          id="final-cta-heading"
        >
          Ready to plan your stay, meal, or celebration?
        </h2>
        <p className="mx-auto mt-5 max-w-[var(--container-readable)] text-body-lg text-primary-foreground/75">
          Tell us what you are planning and our team will help with rooms,
          dining, meetings, and event arrangements.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="luxury-focus brand-gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-3 text-button"
            href="/contact"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            Start Planning
          </Link>
          <Link
            className="luxury-focus brand-gradient-link inline-flex items-center gap-2 rounded-sm text-button text-primary-foreground hover:text-accent-hover"
            href="tel:+919876543210"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </Link>
        </div>
      </div>
    </section>
  );
}
