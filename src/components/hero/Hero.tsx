export function Hero() {
  return (
    <section
      className="luxury-dark-section relative min-h-[var(--hero-min-height)] overflow-hidden"
      id="top"
    >
      <div className="hero-image-layer">
        <video
          aria-label="Elegantly decorated banquet hall at Hotel Sidh Vedantha, lit for an evening celebration"
          autoPlay
          className="hero-image-motion size-full object-cover"
          loop
          muted
          playsInline
          poster="/images/new-hero.png"
          preload="metadata"
        >
          <source src="/videos/hotel-side-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-readability-overlay" />
      <span className="absolute inset-x-0 bottom-0 z-[var(--z-raised)] h-44 bg-gradient-to-t from-background to-transparent" />

      <h1 className="sr-only">
        Hotel Sidh Vedantha, Patna — Luxury Stays, Timeless Hospitality
      </h1>
    </section>
  );
}
