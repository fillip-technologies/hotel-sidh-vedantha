import Image from "next/image";

export function Hero() {
  return (
    <section
      className="luxury-dark-section relative min-h-[var(--hero-min-height)] overflow-hidden"
      id="top"
    >
      <div className="hero-image-layer">
        <Image
          alt="Candlelit courtyard and reflecting pool at Hotel Sidh Vedantha at dusk"
          className="hero-image-motion size-full object-auto"
          fill
          priority
          sizes="100vw"
          src="/images/nn.png"
        />
      </div>
      <div className="hero-readability-overlay" />
      <span className="absolute inset-x-0 bottom-0 z-[var(--z-raised)] h-44 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-[var(--z-raised)] mx-auto flex min-h-[var(--hero-min-height)] w-full max-w-[var(--container-hero)] flex-col justify-end px-shell pb-40 pt-36 md:pb-44 lg:pb-48 lg:pt-40">
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
              className="luxury-focus brand-gradient-bg px-9 py-4 text-caption tracking-[var(--tracking-cta)]"
              href="#booking"
            >
              Book Now
            </a>
            <a
              className="luxury-focus brand-gradient-link border border-primary-foreground/40 px-9 py-4 text-caption tracking-[var(--tracking-cta)] text-primary-foreground hover:border-accent-hover hover:text-accent-hover"
              href="#rooms"
            >
              Explore Rooms
            </a>
          </div>
        </div>

        {/* <div className="mt-10 lg:mt-12">
          <BookingForm />
        </div> */}
      </div>

      <svg
        aria-hidden="true"
        className="hero-organic-wave"
        preserveAspectRatio="none"
        viewBox="0 0 1440 220"
      >
        <path
          d="M0 132C136 92 270 72 424 114C578 158 704 176 862 130C1016 86 1152 70 1306 106C1368 120 1412 132 1440 126V220H0V132Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
