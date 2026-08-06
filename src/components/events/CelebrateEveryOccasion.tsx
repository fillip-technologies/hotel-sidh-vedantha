import {
  BriefcaseBusiness,
  Crown,
  Heart,
  Sparkles,
} from "lucide-react";

import { EventCard, type EventItem } from "./EventCard";

const events: EventItem[] = [
  {
    title: "Wedding",
    description:
      "Elegant spaces, graceful service, and refined details for a celebration that feels deeply personal.",
    href: "/events/wedding",
    image: "/images/wedding.png",
    imageAlt: "Luxury wedding celebration venue at Hotel Sidh Vedantha",
    icon: Crown,
    amenities: ["Grand banquet setup", "Curated menus", "Guest rooms"],
  },
  {
    title: "Ring Ceremony",
    description:
      "An intimate setting for meaningful rituals, soft ambience, and memorable family moments.",
    href: "/events/ring-ceremony",
    image: "/images/ring-ceremony.png",
    imageAlt: "Premium ring ceremony venue at Hotel Sidh Vedantha",
    icon: Sparkles,
    amenities: ["Private venue styling", "Family dining", "Photography corners"],
  },
  {
    title: "Birthday Celebration",
    description:
      "Playful luxury, curated menus, and warm hospitality for milestone birthdays and private parties.",
    href: "/events/birthday-celebration",
    image: "/images/birthday-celebration.png",
    imageAlt: "Birthday celebration venue at Hotel Sidh Vedantha",
    icon: Heart,
    amenities: ["Theme decor", "Celebration cake", "Music-ready space"],
  },
  {
    title: "Business Event",
    description:
      "Polished venues for meetings, launches, and corporate gatherings with seamless guest care.",
    href: "/events/business-event",
    image: "/images/event.png",
    imageAlt: "Business event venue at Hotel Sidh Vedantha",
    icon: BriefcaseBusiness,
    amenities: ["Conference seating", "AV support", "Tea and lunch service"],
  },
];

const carouselEvents = [...events, ...events];

export function CelebrateEveryOccasion() {
  return (
    <section className="bg-background pb-16 pt-6 md:pb-24 md:pt-10 lg:pb-28 lg:pt-12" aria-labelledby="celebrate-heading">
      <div className="relative z-[var(--z-raised)] mx-auto w-full min-w-0 px-shell">
        <div className="relative mx-auto min-w-0 text-center">
          <div className="reveal-on-load mx-auto max-w-[var(--container-readable)] text-center">
            <p
              className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]"
            >
              Events
            </p>
            <h2
              className="mt-5 text-heading-xl text-text-primary sm:text-display-lg"
              id="celebrate-heading"
            >
              <span className="block sm:inline">Celebrate </span>
              <span className="block text-brand-pink sm:inline">Every Occasion</span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-[var(--container-readable)] text-body-lg text-text-secondary"
            >
              From dream weddings and ring ceremonies to birthdays and corporate
              events, Hotel Sidh Vedantha offers elegant venues, exceptional
              hospitality, and unforgettable experiences for every celebration.
            </p>
          </div>

          <div className="occasion-carousel mt-10 overflow-x-auto pb-4 text-left md:mt-12" aria-label="Event categories">
            <div className="occasion-carousel-track flex w-max snap-x gap-5 md:gap-6">
              {carouselEvents.map((event, index) => (
                <div className="snap-center" key={`${event.title}-${index}`}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
