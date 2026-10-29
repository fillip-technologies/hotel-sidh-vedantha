"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Coffee,
  Dumbbell,
  Utensils,
  Wifi,
  Wind,
  type LucideIcon,
} from "lucide-react";

import { FadeIn } from "@/components/ui/FadeIn";

const amenities: { label: string; detail: string; icon: LucideIcon; image: string; imageAlt: string }[] = [
  {
    label: "Fitness Centre",
    detail: "Keep up your routine in the hotel's gym.",
    icon: Dumbbell,
    image: "/images/hotel-gym.png",
    imageAlt: "Fitness equipment in the Hotel Sidh Vedantha gym",
  },
  {
    label: "Restaurant Dining",
    detail: "Enjoy dining at Norton Classic Restaurant.",
    icon: Utensils,
    image: "/images/chef/User%20attachment3.jpg",
    imageAlt: "Hotel chef preparing food in the kitchen",
  },
  {
    label: "Comfortable Rooms",
    detail: "Choose from Executive, Premium, Club, and Sidh Vedantha Suite rooms.",
    icon: Wind,
    image: "/images/Rooms/room 4-Premium/0Z8A8929.JPG",
    imageAlt: "Premium room at Hotel Sidh Vedantha",
  },
  {
    label: "Banquets & Events",
    detail: "Spaces for celebrations, meetings, and special occasions.",
    icon: Coffee,
    image: "/images/wedding.png",
    imageAlt: "Event space prepared for a celebration",
  },
  {
    label: "Breakfast Service",
    detail: "Start the day with breakfast at the hotel.",
    icon: Coffee,
    image: "/images/brekfast.jpg",
    imageAlt: "Breakfast served at Hotel Sidh Vedantha",
  },
  {
    label: "Work-Friendly Stay",
    detail: "Stay connected with Wi-Fi and a comfortable room workspace.",
    icon: Wifi,
    image: "/images/Rooms/room 3-EXecutive/0Z8A9101.JPG",
    imageAlt: "Work desk in an Executive Room",
  },
];

export function AmenitiesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function goToSlide(index: number) {
    const carousel = carouselRef.current;
    const slide = carousel?.children[index] as HTMLElement | undefined;
    if (carousel && slide) {
      const left = slide.getBoundingClientRect().left - carousel.getBoundingClientRect().left + carousel.scrollLeft;
      carousel.scrollTo({ left, behavior: "smooth" });
    }
  }

  function updateActiveSlide() {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const carouselLeft = carousel.getBoundingClientRect().left;
    const slides = Array.from(carousel.children) as HTMLElement[];
    const nextIndex = slides.reduce((closestIndex, slide, index) => {
      const closestSlide = slides[closestIndex];
      return Math.abs(slide.getBoundingClientRect().left - carouselLeft) <
        Math.abs(closestSlide.getBoundingClientRect().left - carouselLeft)
        ? index
        : closestIndex;
    }, 0);
    setActiveIndex(nextIndex);
  }

  function moveCarousel(direction: number) {
    goToSlide((activeIndex + direction + amenities.length) % amenities.length);
  }

  return (
    <section className="luxury-ivory-section section-y" aria-labelledby="amenities-heading">
      <div className="mx-auto w-full px-shell">
        <FadeIn className="mx-auto max-w-[var(--container-readable)] text-center">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Amenities
          </p>
          <h2
            className="mt-5 text-heading-xl text-text-primary sm:text-display-lg"
            id="amenities-heading"
          >
            <span className="block">Everything You Need,</span>
            <span className="block text-brand-pink">Within Easy Reach</span>
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary">
            Explore the comforts and facilities available at Hotel Sidh Vedantha.
          </p>
        </FadeIn>

        <FadeIn className="mt-12" delay={0.12}>
          <div className="flex items-end justify-between gap-5">
            <p className="text-body-sm text-text-muted" aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} / {String(amenities.length).padStart(2, "0")}
            </p>
            <div className="flex gap-3">
              <button
                aria-label="Previous amenity"
                className="luxury-focus inline-flex size-11 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:border-accent-hover hover:text-accent-hover"
                onClick={() => moveCarousel(-1)}
                type="button"
              >
                <ArrowLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                aria-label="Next amenity"
                className="luxury-focus inline-flex size-11 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:border-accent-hover hover:text-accent-hover"
                onClick={() => moveCarousel(1)}
                type="button"
              >
                <ArrowRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            aria-label="Hotel amenities"
            aria-roledescription="carousel"
            className="-mx-shell mt-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-shell pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={updateActiveSlide}
            ref={carouselRef}
            role="region"
          >
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;

              return (
                <article
                  aria-label={`${index + 1} of ${amenities.length}: ${amenity.label}`}
                  aria-roledescription="slide"
                  className="group w-[min(82vw,360px)] shrink-0 snap-start overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm transition-shadow hover:shadow-lg"
                  key={amenity.label}
                  role="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <Image
                      alt={amenity.imageAlt}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1280px) 360px, (min-width: 640px) 45vw, 82vw"
                      src={amenity.image}
                    />
                    <span className="absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-background/90 text-accent-hover shadow-sm">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-heading-sm text-text-primary">{amenity.label}</h3>
                    <p className="mt-2 text-body-sm leading-relaxed text-text-secondary">{amenity.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-2 flex justify-center gap-2" aria-label="Choose an amenity slide">
            {amenities.map((amenity, index) => (
              <button
                aria-current={index === activeIndex ? "true" : undefined}
                aria-label={`Go to ${amenity.label}`}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-accent-hover" : "w-2.5 bg-border hover:bg-text-muted"}`}
                key={amenity.label}
                onClick={() => goToSlide(index)}
                type="button"
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
