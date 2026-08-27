"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import { FadeIn } from "@/components/ui/FadeIn";

const galleryImages = [
  { title: "Celebration Hall", image: "/images/wedding.png", className: "md:col-span-2 md:row-span-2" },
  { title: "Ring Ceremony", image: "/images/ring-ceremony.png", className: "" },
  { title: "Dining Setup", image: "/images/cooking.png", className: "" },
  { title: "Birthday Decor", image: "/images/birthday-celebration.png", className: "" },
  { title: "Business Event", image: "/images/event.png", className: "" },
  { title: "Premium Room", image: "/images/Rooms/room 4-Premium/0Z8A8929.JPG", className: "" },
  { title: "Club Room", image: "/images/Rooms/room 2-Club/0Z8A8891.JPG", className: "" },
  { title: "Executive Room", image: "/images/Rooms/room 3-EXecutive/0Z8A9084.JPG", className: "" },
  { title: "Vedantha Suite", image: "/images/Rooms/room 1-Suite/0Z8A8778.JPG", className: "md:col-span-2" },
  { title: "Hotel Detail", image: "/images/Rooms/room 5-extra/0Z8A9003.JPG", className: "" },
  { title: "Dining Moment", image: "/images/Rooms/room 5-extra/0Z8A8980.JPG", className: "" },
];

type GallerySectionProps = {
  variant?: "home" | "page";
};

export function GallerySection({ variant = "home" }: Readonly<GallerySectionProps>) {
  const isPage = variant === "page";
  const visibleImages = isPage ? galleryImages : galleryImages.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((current) => (current === null ? null : (current - 1 + visibleImages.length) % visibleImages.length)),
    [visibleImages.length],
  );
  const showNext = useCallback(
    () => setActiveIndex((current) => (current === null ? null : (current + 1) % visibleImages.length)),
    [visibleImages.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  const activeImage = activeIndex === null ? null : visibleImages[activeIndex];

  return (
    <section className="luxury-dark-section py-12 md:py-16 lg:py-20" aria-labelledby="gallery-heading">
      <div className="mx-auto w-full px-shell">
        <FadeIn className="mx-auto max-w-[var(--container-readable)] text-center">
          <h2
            className="text-heading-xl text-primary-foreground sm:text-display-lg"
            id="gallery-heading"
          >
            <span className="block">A Glimpse of </span>
            <span className="block text-brand-pink">Sidh Vedantha</span>
          </h2>
          <p className="mt-6 text-body-lg text-primary-foreground/72">
            Explore rooms, dining spaces, celebrations, and event settings
            designed with comfort, warmth, and refined detail.
          </p>
        </FadeIn>

        <FadeIn className="mt-10 grid auto-rows-[18rem] gap-5 md:grid-cols-4 md:auto-rows-[15rem]" delay={0.12}>
          {visibleImages.map((item, index) => (
            <figure
              className={`group relative overflow-hidden rounded-xl shadow-md ${item.className}`}
              key={item.title}
            >
              <button
                className="luxury-focus block size-full cursor-zoom-in"
                onClick={() => setActiveIndex(index)}
                type="button"
                aria-label={`Open ${item.title} image`}
              >
                <Image
                  alt={`${item.title} at Hotel Sidh Vedantha`}
                  className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.05]"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  src={item.image}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-80 transition-opacity duration-slow group-hover:opacity-95" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-left text-body-sm text-primary-foreground opacity-0 transition-opacity duration-slow group-hover:opacity-100">
                  {item.title}
                </span>
              </button>
            </figure>
          ))}
        </FadeIn>

        {!isPage ? (
        <div className="mt-8 text-center">
          <Link
            className="luxury-focus brand-gradient-bg group inline-flex items-center gap-2 rounded-full px-5 py-3 text-button"
            href="/gallery"
          >
            View Full Gallery
            <ArrowRight className="size-4 transition-transform duration-slow group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
        ) : null}
      </div>

      {activeImage ? <GalleryLightbox image={activeImage} onClose={closeLightbox} onNext={showNext} onPrev={showPrev} /> : null}
    </section>
  );
}

function GalleryLightbox({
  image,
  onClose,
  onNext,
  onPrev,
}: {
  image: { title: string; image: string };
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
    >
      <button
        aria-label="Close image"
        className="luxury-focus absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 md:right-8 md:top-8"
        onClick={onClose}
        type="button"
      >
        <X className="size-5" aria-hidden="true" />
      </button>

      <button
        aria-label="Previous image"
        className="luxury-focus absolute left-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 md:left-6"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        type="button"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>

      <button
        aria-label="Next image"
        className="luxury-focus absolute right-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 md:right-6"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        type="button"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      <figure
        className="relative flex max-h-[86svh] w-full max-w-4xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[4/5] max-h-[76svh] w-full overflow-hidden rounded-xl shadow-glass sm:aspect-[3/2]">
          <Image
            alt={`${image.title} at Hotel Sidh Vedantha`}
            className="object-contain"
            fill
            sizes="90vw"
            src={image.image}
          />
        </div>
        <figcaption className="mt-4 text-body-md text-primary-foreground">{image.title}</figcaption>
      </figure>
    </div>,
    document.body,
  );
}
