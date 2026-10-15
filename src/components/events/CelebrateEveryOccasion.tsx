"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Occasion = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const occasions: Occasion[] = [
  {
    title: "Wedding",
    description:
      "Elegant spaces, graceful service, and refined details for a celebration that feels deeply personal.",
    image: "/images/wedding.png",
    imageAlt: "Luxury wedding celebration venue at Hotel Sidh Vedantha",
  },
  {
    title: "Ring Ceremony",
    description:
      "An intimate setting for meaningful rituals, soft ambience, and memorable family moments.",
    image: "/images/ring-ceremony.png",
    imageAlt: "Premium ring ceremony venue at Hotel Sidh Vedantha",
  },
  {
    title: "Birthday Celebration",
    description:
      "Playful luxury, curated menus, and warm hospitality for milestone birthdays and private parties.",
    image: "/images/birthday-celebration.png",
    imageAlt: "Birthday celebration venue at Hotel Sidh Vedantha",
  },
  {
    title: "Business Event",
    description:
      "Polished venues for meetings, launches, and corporate gatherings with seamless guest care.",
    image: "/images/event.png",
    imageAlt: "Business event venue at Hotel Sidh Vedantha",
  },
];

export function CelebrateEveryOccasion() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const active = occasions[activeIndex];

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActiveIndex(Math.min(Math.max(index, 0), occasions.length - 1));
  };

  return (
    <section
      className="relative overflow-hidden bg-background section-y"
      aria-labelledby="celebrate-heading"
    >
      <div className="mx-auto w-full max-w-[var(--container-hero)] px-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <div className="relative">
            <div
              aria-label="Occasion gallery"
              className="occasion-track luxury-focus"
              onScroll={handleScroll}
              ref={trackRef}
              role="region"
              tabIndex={0}
            >
              {occasions.map((occasion, index) => (
                <div className="occasion-slide" key={occasion.title}>
                  <Image
                    alt={occasion.imageAlt}
                    className="size-full object-cover"
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    src={occasion.image}
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-5 right-5 z-[var(--z-raised)] flex items-center gap-3 md:bottom-7 md:right-7">
              <button
                aria-label="Previous occasion"
                className="occasion-nav-button luxury-focus"
                disabled={activeIndex === 0}
                onClick={() => scrollToIndex(activeIndex - 1)}
                type="button"
              >
                <ArrowLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                aria-label="Next occasion"
                className="occasion-nav-button occasion-nav-button--solid luxury-focus"
                disabled={activeIndex === occasions.length - 1}
                onClick={() => scrollToIndex(activeIndex + 1)}
                type="button"
              >
                <ArrowRight aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <div>
            <p
              className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]"
              id="celebrate-heading"
            >
              Celebrate Every Occasion
            </p>

            <div aria-live="polite">
              <div className="reveal-on-load" key={active.title}>
                <h2 className="occasion-headline mt-6 text-heading-lg uppercase text-text-primary md:text-heading-xl">
                  {active.title}
                </h2>
                <p className="mt-6 max-w-[34rem] text-body-lg text-text-secondary">
                  {active.description}
                </p>
              </div>
            </div>

            <Link
              className="luxury-focus btn btn-primary mt-9"
              href="/contact-us"
            >
              Contact Us
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>

            <div className="mt-10 grid grid-cols-4 gap-3">
              {occasions.map((occasion, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    aria-label={`Show ${occasion.title}`}
                    aria-pressed={isActive}
                    className={`luxury-focus group text-left transition-opacity duration-base ${
                      isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                    }`}
                    key={occasion.title}
                    onClick={() => scrollToIndex(index)}
                    type="button"
                  >
                    <span
                      className={`relative block aspect-[4/3] overflow-hidden rounded-md border-2 ${
                        isActive ? "border-accent-hover" : "border-transparent"
                      }`}
                    >
                      <Image
                        alt=""
                        className="object-cover transition-transform duration-slow group-hover:scale-105"
                        fill
                        sizes="8rem"
                        src={occasion.image}
                      />
                    </span>
                    <span className="mt-2 block text-caption text-text-secondary">
                      {occasion.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
