import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import { MasterLeadForm } from "@/components/landing";
import { siteContact } from "@/data/siteContact";

export const metadata: Metadata = {
  title: "Contact Us | Hotel Sidh Vedantha Patna",
  description:
    "Contact Hotel Sidh Vedantha for room bookings, dining, weddings, events, meetings, and venue enquiries in Patna.",
};

const contactCards = [
  {
    title: "Visit the Hotel",
    value: siteContact.address,
    href: siteContact.mapsHref,
    icon: MapPin,
  },
  {
    title: "Call Reservations",
    value: siteContact.phoneDisplay,
    href: siteContact.phoneHref,
    icon: Phone,
  },
  {
    title: "Write to Us",
    value: siteContact.email,
    href: siteContact.emailHref,
    icon: Mail,
  },
  {
    title: "Open All Days",
    value: "24 hours guest assistance",
    href: siteContact.phoneHref,
    icon: Clock,
  },
];

export default function ContactUsPage() {
  return (
    <main className="bg-background text-text-primary">
      <section className="relative isolate min-h-[86svh] overflow-hidden">
        <Image
          alt="Hotel Sidh Vedantha contact desk"
          className="absolute inset-0 -z-10 size-full object-auto"
          fill
          priority
          sizes="100vw"
          src="/images/hotel.png"
        />
        <span className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/88 via-primary/48 to-primary/24" />
        <span className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />

        <div className="page-shell grid min-h-[86svh] items-end gap-10 pb-16 pt-32 lg:grid-cols-[minmax(0,1fr)_25rem] lg:pb-24">
          <div className="max-w-[56rem] text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Contact Us
            </p>
            <h1 className="mt-5 text-heading-xl sm:text-display-lg">
              Let our concierge plan the details.
            </h1>
            <p className="mt-6 max-w-[44rem] text-body-lg text-primary-foreground/82">
              For rooms, dining, weddings, ring ceremonies, birthdays, meetings,
              and venue visits, share your requirement and our team will guide
              you with care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="luxury-focus brand-gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-3 text-button"
                href={siteContact.phoneHref}
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Us : {siteContact.phoneDisplay}
              </Link>
              <Link
                className="luxury-focus inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary/20 px-6 py-3 text-button text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/10"
                href={siteContact.emailHref}
              >
                <Mail className="size-4" aria-hidden="true" />
                Email Hotel
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-primary-foreground/16 bg-primary/30 p-5 text-primary-foreground shadow-glass backdrop-blur-md">
            <p className="text-caption text-primary-foreground/72">Hotel Address</p>
            <p className="mt-3 text-heading-sm">{siteContact.address}</p>
            <Link
              className="luxury-focus brand-gradient-link mt-5 inline-flex items-center gap-2 rounded-sm text-button text-primary-foreground hover:text-accent-hover"
              href={siteContact.mapsHref}
            >
              Open in Maps
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-20 md:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Concierge Desk
            </p>
            <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">
              Tell us what you are planning.
            </h2>
            <p className="mt-6 text-body-lg text-text-secondary">
              Whether it is a stay, meal, celebration, or corporate event, our
              team will help choose the right room, venue, or arrangement.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {contactCards.map(({ href, icon: Icon, title, value }) => (
                <Link
                  className="group min-w-0 rounded-xl border border-border bg-glass p-6 shadow-sm backdrop-blur-md transition-transform duration-slow hover:-translate-y-1 hover:shadow-md"
                  href={href}
                  key={title}
                >
                  <span className="brand-gradient-border inline-flex size-12 items-center justify-center rounded-full">
                    <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-heading-sm text-text-primary">{title}</h3>
                  <p className="mt-3 break-words text-body-md text-text-secondary group-hover:text-accent-hover">
                    {value}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <MasterLeadForm ctaLabel="Send Enquiry" context="Contact Hotel Sidh Vedantha" />
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Location
            </p>
            <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">
              Easy to reach from New Bypass, Patna.
            </h2>
            <p className="mt-6 text-body-lg text-text-secondary">
              Find us at West Ramkrishna Nagar, New Bypass, Patna-800027. Use
              the map to plan your route or call the hotel for assistance.
            </p>
            <Link
              className="luxury-focus brand-gradient-bg mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-button"
              href={siteContact.mapsHref}
            >
              Get Directions
              <MapPin className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-footer)] border border-border bg-card shadow-lg">
            <iframe
              allowFullScreen
              className="h-[30rem] w-full border-0 md:h-[34rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={siteContact.mapEmbedHref}
              title="Hotel Sidh Vedantha location map"
            />
          </div>
        </div>
      </section>

      <section className="luxury-dark-section py-20 md:py-28">
        <div className="page-shell grid gap-10 text-primary-foreground lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Social Media
            </p>
            <h2 className="mt-5 text-heading-lg sm:text-heading-xl">
              Stay connected with Hotel Sidh Vedantha.
            </h2>
            <p className="mt-6 text-body-lg text-primary-foreground/72">
              Follow us for hotel updates, rooms, dining moments, celebrations,
              and upcoming offers.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {siteContact.social.map((item) => (
              <Link
                className="group rounded-xl border border-primary-foreground/12 bg-primary-foreground/10 p-5 text-primary-foreground backdrop-blur-md transition-transform duration-slow hover:-translate-y-1"
                href={item.href}
                key={item.label}
              >
                <MessageCircle className="size-5 text-accent-hover" aria-hidden="true" />
                <h3 className="mt-5 text-heading-sm">{item.label}</h3>
                <p className="mt-2 text-body-sm text-primary-foreground/72">{item.handle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-16 md:py-20">
        <div className="page-shell flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Quick Support
            </p>
            <h2 className="mt-4 text-heading-lg text-text-primary">
              Ready to speak with our team?
            </h2>
          </div>
          <Link
            className="luxury-focus brand-gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-4 text-button"
            href={siteContact.phoneHref}
          >
            <Sparkles className="size-4" aria-hidden="true" />
            Call Reservations
          </Link>
        </div>
      </section>
    </main>
  );
}
