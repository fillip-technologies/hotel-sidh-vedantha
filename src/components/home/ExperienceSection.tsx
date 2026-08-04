"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CalendarDays, LayoutPanelTop, Users } from "lucide-react";

import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import { FadeIn } from "@/components/ui/FadeIn";

const venues = [
  {
    id: "banquet",
    title: "Banquet Hall",
    image: "/images/nn.png",
    description:
      "A graceful indoor venue for receptions, engagement ceremonies, corporate dinners, and milestone gatherings.",
    capacity: "Up to 250 guests",
    format: "Banquet, theatre, cluster",
    support: "Decor, dining, AV",
  },
  {
    id: "meetings",
    title: "Meeting Room",
    image: "/images/event.png",
    description:
      "A composed setting for board meetings, training sessions, presentations, and private business conversations.",
    capacity: "Intimate to mid-size",
    format: "Boardroom, classroom",
    support: "Tea, lunch, projection",
  },
  {
    id: "celebrations",
    title: "Celebration Setup",
    image: "/images/wedding.png",
    description:
      "Warm, decor-ready spaces for weddings, ring ceremonies, birthdays, and close family celebrations.",
    capacity: "Flexible planning",
    format: "Stage, lounge, dining",
    support: "Menus and guest stays",
  },
];

export function ExperienceSection() {
  const [activeVenue, setActiveVenue] = useState(venues[0]);

  return (
    <section
      aria-labelledby="experience-heading"
      className="banquet-section-bg relative isolate overflow-hidden py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto w-full px-shell">
        <FadeIn className="mx-auto max-w-[var(--container-readable)] text-center">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Banquets & Meetings
          </p>
          <h2
            className="mt-5 text-heading-xl text-text-primary sm:text-display-lg"
            id="experience-heading"
          >
            <span className="block">Spaces Made for </span>
            <span className="block text-brand-pink">Meaningful Gatherings</span>
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary">
            From focused meetings to elegant celebrations, our versatile venues
            bring together thoughtful planning, warm service, and a setting that
            feels effortlessly refined.
          </p>
        </FadeIn>

        <FadeIn className="mt-14 md:mt-16" delay={0.12}>
          <div className="banquet-card grid overflow-hidden rounded-xl border border-border shadow-lg lg:grid-cols-[0.62fr_0.38fr]">
            <div className="relative min-h-[28rem] overflow-hidden md:min-h-[34rem]">
              <Image
                alt={`${activeVenue.title} at Hotel Sidh Vedantha`}
                className="size-full object-cover transition-transform duration-slow"
                fill
                priority={false}
                sizes="(min-width: 1024px) 62vw, 100vw"
                src={activeVenue.image}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/12 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-[36rem] p-6 text-primary-foreground md:p-8">
                <p className="text-caption tracking-[var(--tracking-eyebrow)] text-primary-foreground/70">
                  Featured Space
                </p>
                <h3 className="mt-3 text-heading-lg">{activeVenue.title}</h3>
                <p className="mt-4 text-body-md text-primary-foreground/82">
                  {activeVenue.description}
                </p>
              </div>
            </div>

            <div className="banquet-panel flex flex-col p-6 md:p-8">
              <div className="grid gap-4">
                <VenueMetric icon={Users} label="Capacity" value={activeVenue.capacity} />
                <VenueMetric icon={LayoutPanelTop} label="Formats" value={activeVenue.format} />
                <VenueMetric icon={CalendarDays} label="Support" value={activeVenue.support} />
              </div>

              <div className="mt-8 grid gap-3">
                {venues.map((venue) => {
                  const isActive = activeVenue.id === venue.id;

                  return (
                    <button
                      className={`luxury-focus group flex items-center justify-between border-b border-border py-4 text-left transition-colors duration-base ${
                        isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                      }`}
                      key={venue.id}
                      onClick={() => setActiveVenue(venue)}
                      type="button"
                    >
                      <span>
                        <span className="block text-heading-sm">{venue.title}</span>
                        <span className="mt-1 block text-body-sm text-text-muted">
                          {venue.capacity}
                        </span>
                      </span>
                      <ArrowRight
                        className={`size-5 shrink-0 transition-transform duration-base ${
                          isActive ? "translate-x-1 text-accent-hover" : "group-hover:translate-x-1"
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>

              <Link
                className="luxury-focus brand-gradient-bg group mt-8 inline-flex items-center gap-2 self-start rounded-full px-5 py-3 text-button"
                href="/events"
              >
                Enquire Now
                <AnimatedArrow />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function VenueMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Users;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-sm border border-border bg-background p-4">
      <span className="brand-gradient-border inline-flex size-11 shrink-0 items-center justify-center rounded-full">
        <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-caption text-text-muted">{label}</p>
        <p className="mt-1 text-body-sm text-text-primary">{value}</p>
      </div>
    </div>
  );
}
