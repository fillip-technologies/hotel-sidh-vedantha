import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  ChefHat,
  HeartHandshake,
  PartyPopper,
  Sparkles,
} from "lucide-react";

import { MasterLeadForm } from "@/components/landing/MasterLeadForm";
import { TestimonialCarousel } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Experiences | Hotel Sidh Vedantha Patna",
  description:
    "Discover stays, dining, celebrations, corporate events, nearby attractions, and hospitality experiences at Hotel Sidh Vedantha Patna.",
};

const experiences = [
  {
    title: "Luxury Stays",
    description: "Elegant rooms and suites designed for restful nights and composed mornings.",
    image: "/images/Rooms/room 4-Premium/0Z8A8929.JPG",
    icon: Sparkles,
  },
  {
    title: "Celebrations",
    description: "Wedding, birthday, and ring ceremony settings planned with warmth and polish.",
    image: "/images/wedding.png",
    icon: PartyPopper,
  },
  {
    title: "Dining",
    description: "Comforting meals, family dining, and hotel restaurant service through the day.",
    image: "/images/cooking.png",
    icon: ChefHat,
  },
  {
    title: "Corporate Events",
    description: "Meeting and gathering support for teams, conferences, and formal occasions.",
    image: "/images/event.png",
    icon: BriefcaseBusiness,
  },
];

const reasons = [
  "One destination for rooms, dining, and events",
  "Warm hospitality with personal attention",
  "Flexible spaces for families and corporate guests",
  "Comfortable location at New Bypass, Patna",
  "Elegant decor-friendly event environments",
  "Helpful planning support from enquiry to checkout",
];

export default function ExperiencesPage() {
  return (
    <main className="bg-background text-text-primary">
      <section className="relative isolate min-h-[86svh] overflow-hidden">
        <Image
          alt="Hotel Sidh Vedantha experiences"
          className="absolute inset-0 -z-10 size-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/wedding.png"
        />
        <span className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/88 via-primary/48 to-primary/24" />
        <span className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />
        <div className="page-shell flex min-h-[86svh] items-end pb-16 pt-32 md:pb-24">
          <div className="max-w-[58rem] text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Experiences
            </p>
            <h1 className="mt-5 text-heading-xl sm:text-display-lg">
              Stay, celebrate, dine, and gather beautifully.
            </h1>
            <p className="mt-6 max-w-[44rem] text-body-lg text-primary-foreground/82">
              Hotel Sidh Vedantha brings together refined stays, family
              celebrations, dining, meetings, and local discovery in one warm
              hospitality experience.
            </p>
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-20 md:py-28">
        <div className="page-shell">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Discover
          </p>
          <h2 className="mt-5 max-w-[48rem] text-heading-lg text-text-primary sm:text-heading-xl">
            Experiences crafted for different reasons to visit.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {experiences.map(({ description, icon: Icon, image, title }) => (
              <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-md" key={title}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    alt={`${title} at Hotel Sidh Vedantha`}
                    className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.05]"
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    src={image}
                  />
                </div>
                <div className="p-6">
                  <Icon className="size-5 text-accent-hover" aria-hidden="true" />
                  <h3 className="mt-4 text-heading-sm text-text-primary">{title}</h3>
                  <p className="mt-3 text-body-sm text-text-secondary">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Why People Prefer Us
            </p>
            <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">
              Hospitality that makes planning easier.
            </h2>
            <p className="mt-6 text-body-lg text-text-secondary">
              Guests choose us because each experience is supported by rooms,
              food, service, venue coordination, and a team that understands
              both comfort and occasion.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <p className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-body-md text-text-secondary shadow-sm" key={reason}>
                <HeartHandshake className="mt-1 size-5 shrink-0 text-accent-hover" aria-hidden="true" />
                {reason}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-dark-section py-20 md:py-28">
        <div className="page-shell grid gap-10 text-primary-foreground lg:grid-cols-[1fr_25rem] lg:items-center">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Plan With Us
            </p>
            <h2 className="mt-5 text-heading-lg sm:text-heading-xl">
              Tell us your occasion. We will help shape the experience.
            </h2>
            <p className="mt-6 text-body-lg text-primary-foreground/72">
              From room stays and dining to ceremonies and corporate gatherings,
              our team can guide you on availability, setup, and service.
            </p>
            <Link
              className="luxury-focus brand-gradient-link mt-8 inline-flex items-center gap-2 rounded-sm text-button text-primary-foreground hover:text-accent-hover"
              href="/contact-us"
            >
              Speak to Concierge
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <MasterLeadForm context="Experience enquiry" ctaLabel="Plan Experience" tone="light" />
        </div>
      </section>

      <TestimonialCarousel title="Why guests keep choosing Hotel Sidh Vedantha." />

      <section className="luxury-ivory-section py-16 md:py-20">
        <div className="page-shell flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Location
            </p>
            <h2 className="mt-4 text-heading-lg text-text-primary">
              Start planning your Patna visit.
            </h2>
          </div>
          <Link
            className="luxury-focus brand-gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-4 text-button"
            href="/contact-us"
          >
            Enquire Now
            <CalendarCheck className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
