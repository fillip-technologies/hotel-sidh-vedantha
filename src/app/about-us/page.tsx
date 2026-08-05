import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartHandshake, Sparkles, UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Hotel Sidh Vedantha Patna",
  description:
    "Learn about Hotel Sidh Vedantha, a refined hotel in Patna for rooms, dining, events, and warm hospitality.",
};

const values = [
  "Warm Indian hospitality",
  "Comfort-led room experiences",
  "Memorable celebrations",
  "Thoughtful guest service",
];

const pillars = [
  {
    title: "Our Mission",
    body:
      "To create comfortable, elegant, and dependable hotel experiences where every guest feels personally welcomed and well cared for.",
    icon: HeartHandshake,
  },
  {
    title: "Our Vision",
    body:
      "To become one of Patna's most trusted hospitality destinations for premium stays, dining, weddings, and corporate gatherings.",
    icon: Sparkles,
  },
];

export default function AboutUsPage() {
  return (
    <main className="bg-background text-text-primary">
      <section className="relative isolate min-h-[86svh] overflow-hidden">
        <Image
          alt="Hotel Sidh Vedantha exterior"
          className="absolute inset-0 -z-10 size-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/hotel.png"
        />
        <span className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/88 via-primary/46 to-primary/22" />
        <span className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />

        <div className="page-shell flex min-h-[86svh] items-end pb-16 pt-32 md:pb-24">
          <div className="max-w-[58rem] text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              About Us
            </p>
            <h1 className="mt-5 text-heading-xl sm:text-display-lg">
              Hospitality shaped around comfort, care, and celebration.
            </h1>
            <p className="mt-6 max-w-[44rem] text-body-lg text-primary-foreground/82">
              Hotel Sidh Vedantha brings together refined rooms, thoughtful
              dining, elegant event spaces, and warm service for guests visiting
              Patna for business, family, and memorable occasions.
            </p>
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-20 md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Our Story
            </p>
            <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">
              A hotel designed for stays that feel effortless.
            </h2>
            <p className="mt-6 text-body-lg text-text-secondary">
              We built Hotel Sidh Vedantha as a complete hospitality destination:
              a place where guests can rest well, dine comfortably, celebrate
              beautifully, and host with confidence.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <p className="flex items-start gap-3 text-body-md text-text-secondary" key={value}>
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-success" aria-hidden="true" />
                  {value}
                </p>
              ))}
            </div>
          </div>

          <div className="relative min-h-[32rem] overflow-hidden rounded-[var(--radius-footer)] shadow-lg">
            <Image
              alt="Hotel Sidh Vedantha team hospitality"
              className="size-full object-cover"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              src="/images/team.webp"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-primary-foreground/16 bg-primary/34 p-5 text-primary-foreground backdrop-blur-md">
              <p className="text-caption text-primary-foreground/72">Our Team</p>
              <h3 className="mt-2 text-heading-sm">
                Trained to make every arrival feel personal.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="page-shell grid gap-5 md:grid-cols-2">
          {pillars.map(({ body, icon: Icon, title }) => (
            <article
              className="rounded-xl border border-border bg-card p-6 shadow-md md:p-8"
              key={title}
            >
              <span className="brand-gradient-border inline-flex size-12 items-center justify-center rounded-full">
                <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-heading-lg text-text-primary">{title}</h2>
              <p className="mt-5 text-body-lg text-text-secondary">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="luxury-dark-section py-20 md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div className="relative min-h-[30rem] overflow-hidden rounded-[var(--radius-footer)] shadow-lg">
            <Image
              alt="Hotel Sidh Vedantha rooms and service"
              className="size-full object-cover"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              src="/images/about.webp"
            />
          </div>
          <div className="text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Director Message
            </p>
            <h2 className="mt-5 text-heading-lg sm:text-heading-xl">
              Every guest should leave with a reason to return.
            </h2>
            <p className="mt-6 text-body-lg text-primary-foreground/72">
              At Hotel Sidh Vedantha, our focus is simple: make hospitality feel
              warm, reliable, and refined. Whether a guest arrives for one night,
              a family celebration, or an important business event, our team
              works to make the experience smooth from the first conversation to
              the final goodbye.
            </p>
            <p className="mt-6 text-heading-sm text-primary-foreground">
              Director, Hotel Sidh Vedantha
            </p>
          </div>
        </div>
      </section>

      <section className="luxury-glass-section py-20 md:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              What We Offer
            </p>
            <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">
              Rooms, dining, and celebrations under one roof.
            </h2>
            <p className="mt-6 text-body-lg text-text-secondary">
              From premium rooms and suites to Norton Classic Restaurant,
              wedding venues, ring ceremonies, birthdays, and corporate events,
              the hotel is planned around comfort and convenience.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {["Rooms & Suites", "Norton Classic Restaurant", "Wedding & Event Spaces", "Corporate Hospitality"].map((item) => (
              <article className="rounded-xl border border-border bg-card p-6 shadow-sm" key={item}>
                <UsersRound className="size-5 text-accent-hover" aria-hidden="true" />
                <h3 className="mt-5 text-heading-sm text-text-primary">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-16 md:py-20">
        <div className="page-shell flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Visit Us
            </p>
            <h2 className="mt-4 text-heading-lg text-text-primary">
              Experience Hotel Sidh Vedantha in Patna.
            </h2>
          </div>
          <Link
            className="luxury-focus brand-gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-4 text-button"
            href="/contact-us"
          >
            Contact Hotel
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
