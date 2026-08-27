import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Coffee, MoonStar, Soup, Utensils } from "lucide-react";

import { DiningExperience } from "@/components/dining/DiningExperience";
import { MasterLeadForm } from "@/components/landing/MasterLeadForm";
import { TestimonialCarousel } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Dining | Hotel Sidh Vedantha Patna",
  description:
    "Explore dining at Hotel Sidh Vedantha Patna with breakfast, lunch, dinner, in-house guest meals, and a sample menu.",
};

const stayDining = [
  "Breakfast support for in-house guests",
  "Lunch and dinner dining at Norton Classic Restaurant",
  "Tea, coffee, and in-room refreshment support",
  "Family dining and small celebration meals",
  "Event and banquet food planning",
  "Room-service assistance based on availability",
];

const menu = [
  {
    title: "Breakfast",
    icon: Coffee,
    items: ["Masala omelette", "Aloo paratha with curd", "Poha", "Fresh fruit platter"],
  },
  {
    title: "Lunch",
    icon: Soup,
    items: ["Paneer butter masala", "Dal tadka", "Jeera rice", "Seasonal veg thali"],
  },
  {
    title: "Dinner",
    icon: MoonStar,
    items: ["Chicken curry", "Veg biryani", "Tandoori roti", "Chef's dessert"],
  },
];

export default function DiningPage() {
  return (
    <main className="bg-background text-text-primary">
      <section className="relative isolate min-h-[60svh] overflow-hidden md:min-h-[86svh]">
        <Image
          alt="Dining at Hotel Sidh Vedantha"
          className="absolute inset-0 -z-10 size-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/cooking.png"
        />
        <span className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/88 via-primary/48 to-primary/24" />
        <span className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />
        <div className="page-shell flex min-h-[60svh] items-end pb-10 pt-28 md:min-h-[86svh] md:pb-24 md:pt-32">
          <div className="max-w-[58rem] text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Norton Classic Restaurant
            </p>
            <h1 className="mt-5 text-heading-xl sm:text-display-lg">
              Dining made comforting, generous, and memorable.
            </h1>
            <p className="mt-6 max-w-[44rem] text-body-lg text-primary-foreground/82">
              From breakfast for staying guests to relaxed lunches, elegant
              dinners, and celebration meals, our dining experience is shaped
              around warmth and flavour.
            </p>
          </div>
        </div>
      </section>

      <DiningExperience />

      <section className="luxury-ivory-section py-20 md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              For Staying Guests
            </p>
            <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">
              Meals and service planned around your stay.
            </h2>
            <p className="mt-6 text-body-lg text-text-secondary">
              Guests staying with us can enjoy dining support throughout the
              day, from comforting morning plates to relaxed evening meals.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stayDining.map((item) => (
              <p className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-body-md text-text-secondary shadow-sm" key={item}>
                <Utensils className="mt-1 size-5 shrink-0 text-accent-hover" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="page-shell">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
                Sample Menu
              </p>
              <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">
                A preview of what we serve.
              </h2>
            </div>
            <p className="flex items-center gap-2 text-body-sm text-text-muted">
              <Clock className="size-4" aria-hidden="true" />
              Timings may vary by service.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {menu.map(({ icon: Icon, items, title }) => (
              <article className="rounded-xl border border-border bg-card p-6 shadow-md md:p-8" key={title}>
                <span className="brand-gradient-border inline-flex size-12 items-center justify-center rounded-full">
                  <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-heading-md text-text-primary">{title}</h3>
                <ul className="mt-5 grid gap-3">
                  {items.map((item) => (
                    <li className="text-body-sm text-text-secondary" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-dark-section py-20 md:py-28">
        <div className="page-shell grid gap-10 text-primary-foreground lg:grid-cols-[1fr_25rem] lg:items-center">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Dining Enquiry
            </p>
            <h2 className="mt-5 text-heading-lg sm:text-heading-xl">
              Reserve a table or plan dining for your event.
            </h2>
            <p className="mt-6 text-body-lg text-primary-foreground/72">
              Tell us your date, guest count, and meal preference. Our team will
              help with table availability or event dining support.
            </p>
            <Link
              className="luxury-focus brand-gradient-link mt-8 inline-flex items-center gap-2 rounded-sm text-button text-primary-foreground hover:text-accent-hover"
              href="/contact-us"
            >
              Contact Restaurant
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <MasterLeadForm context="Dining enquiry" ctaLabel="Send Dining Enquiry" tone="light" />
        </div>
      </section>

      <TestimonialCarousel
        eyebrow="Dining Testimonials"
        title="Meals remembered for warmth, flavour, and service."
      />
    </main>
  );
}
