import Image from "next/image";

import { BookingForm } from "./BookingForm";

export function Hero() {
  return (
    <section className="relative min-h-[var(--hero-min-height)] overflow-hidden bg-primary" id="top">
      <Image
        alt="Candlelit courtyard and reflecting pool at Hotel Sidh Vedantha at dusk"
        className="absolute inset-0 size-full object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/2.png"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-overlay via-primary/25 to-primary/85" />

      <div className="relative mx-auto flex min-h-[var(--hero-min-height)] w-full max-w-[var(--container-hero)] flex-col justify-end px-shell pb-14 pt-40 lg:pb-20">
        <div className="max-w-[var(--container-hero-title)]">
          <p className="text-caption tracking-[var(--tracking-eyebrow)] text-primary-foreground/70">
            Hotel Sidh Vedantha | Patna
          </p>
          <h1 className="mt-7 text-heading-xl text-primary-foreground md:text-display-lg xl:text-display-xl">
            <span className="block whitespace-nowrap">Luxury Stays,</span>
            <span className="block whitespace-nowrap italic text-primary-foreground/90">
              Timeless Hospitality
            </span>
          </h1>
          <p className="mt-8 max-w-[var(--container-readable)] text-[var(--text-hero-copy)] leading-[var(--text-hero-copy-line-height)] text-primary-foreground/75">
            Discover luxury accommodation in Patna with elegant rooms, premium
            hospitality, fine dining, and memorable experiences crafted for every
            stay.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              className="luxury-focus bg-primary-foreground px-9 py-4 text-caption tracking-[var(--tracking-cta)] text-primary hover:bg-gold"
              href="#booking"
            >
              Book Now
            </a>
            <a
              className="luxury-focus border border-primary-foreground/40 px-9 py-4 text-caption tracking-[var(--tracking-cta)] text-primary-foreground hover:border-gold hover:text-gold"
              href="#rooms"
            >
              Explore Rooms
            </a>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
