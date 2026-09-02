import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { siteContact } from "@/data/siteContact";

export function FinalCTA() {
  return (
    <section className="bg-background px-shell section-y" aria-labelledby="final-cta-heading">
      <div className="luxury-dark-section mx-auto max-w-[var(--container-page)] overflow-hidden rounded-lg px-6 py-14 text-center text-primary-foreground md:px-12 md:py-20">
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
            className="luxury-focus btn btn-primary"
            href="/contact-us"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            Start Planning
          </Link>
          <Link
            className="luxury-focus btn btn-secondary btn-secondary--invert"
            href={siteContact.phoneHref}
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </Link>
        </div>
      </div>
    </section>
  );
}
