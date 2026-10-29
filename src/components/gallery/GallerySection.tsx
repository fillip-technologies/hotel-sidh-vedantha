"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import { FadeIn } from "@/components/ui/FadeIn";

type GalleryCategory = "Rooms" | "Dining" | "Banquets" | "Events";
type GalleryImage = {
  title: string;
  image: string;
  alt: string;
  category: GalleryCategory;
  className: string;
};

const categories = ["All Photos", "Rooms", "Dining", "Banquets", "Events"] as const;
type GalleryFilter = (typeof categories)[number];
const subscribeToNothing = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const galleryImages: GalleryImage[] = [
  { title: "Celebration Hall", alt: "Banquet hall arranged for a celebration", category: "Banquets", image: "/images/wedding.png", className: "md:col-span-2 md:row-span-2" },
  { title: "Ring Ceremony", alt: "Decorated setting for a ring ceremony", category: "Banquets", image: "/images/ring-ceremony.png", className: "" },
  { title: "Chef at Work", alt: "Hotel chef preparing food at the stove", category: "Dining", image: "/images/chef/User%20attachment.jpg", className: "" },
  { title: "Kitchen Team", alt: "Hotel kitchen team preparing dishes", category: "Dining", image: "/images/chef/User%20attachment4.jpg", className: "md:col-span-2" },
  { title: "Birthday Celebration", alt: "Birthday celebration decor", category: "Events", image: "/images/birthday-celebration.png", className: "" },
  { title: "Business Event", alt: "Meeting table prepared for a business event", category: "Events", image: "/images/event.png", className: "" },
  { title: "Premium Room", alt: "Premium room at Hotel Sidh Vedantha", category: "Rooms", image: "/images/Rooms/room 4-Premium/0Z8A8929.JPG", className: "" },
  { title: "Club Room", alt: "Club room at Hotel Sidh Vedantha", category: "Rooms", image: "/images/Rooms/room 2-Club/0Z8A8891.JPG", className: "" },
  { title: "Executive Room", alt: "Executive room at Hotel Sidh Vedantha", category: "Rooms", image: "/images/Rooms/room 3-EXecutive/0Z8A9084.JPG", className: "" },
  { title: "Sidh Vedantha Suite", alt: "Sidh Vedantha Suite at Hotel Sidh Vedantha", category: "Rooms", image: "/images/Rooms/room 1-Suite/0Z8A8778.JPG", className: "md:col-span-2" },
  { title: "In-room Refreshments", alt: "Tea, water, and refreshments arranged in a guest room", category: "Rooms", image: "/images/Rooms/room 5-extra/0Z8A9003.JPG", className: "" },
  { title: "Breakfast", alt: "Breakfast dishes", category: "Dining", image: "/images/brekfast.jpg", className: "" },
  { title: "Dinner", alt: "Dinner dishes served at a table", category: "Dining", image: "/images/dinner.jpg", className: "" },
  { title: "Lunch", alt: "Lunch dishes", category: "Dining", image: "/images/lunch.jpg", className: "" },
];

type GallerySectionProps = {
  variant?: "home" | "page";
};

export function GallerySection({ variant = "home" }: Readonly<GallerySectionProps>) {
  const isPage = variant === "page";
  const [activeCategory, setActiveCategory] = useState<GalleryFilter>("All Photos");
  const filteredImages = activeCategory === "All Photos"
    ? galleryImages
    : galleryImages.filter((item) => item.category === activeCategory);
  const visibleImages = isPage ? filteredImages : galleryImages.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);
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
    <section className="luxury-dark-section section-y" aria-labelledby="gallery-heading">
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

        {isPage ? (
          <FadeIn className="mt-10 flex justify-center" delay={0.08}>
            <div className="-mx-1 flex max-w-full gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:justify-center" role="group" aria-label="Filter gallery photos by category">
              {categories.map((category) => {
                const count = category === "All Photos"
                  ? galleryImages.length
                  : galleryImages.filter((item) => item.category === category).length;
                const isSelected = activeCategory === category;

                return (
                  <button
                    aria-pressed={isSelected}
                    className={`luxury-focus inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-body-sm transition-colors ${
                      isSelected
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:border-accent/70 hover:bg-primary-foreground/10"
                    }`}
                    key={category}
                    onClick={() => {
                      setActiveIndex(null);
                      setActiveCategory(category);
                    }}
                    type="button"
                  >
                    {category}<span className="text-caption opacity-75">{count}</span>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        ) : null}

        <FadeIn className={`${isPage ? "mt-8" : "mt-10"} grid auto-rows-[18rem] gap-5 md:grid-cols-4 md:auto-rows-[15rem]`} delay={0.12}>
          {visibleImages.map((item, index) => (
            <figure
              className={`group relative overflow-hidden rounded-lg bg-primary/30 ${item.className}`}
              key={item.image}
            >
              <button
                className="luxury-focus block size-full cursor-zoom-in"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActiveIndex(index);
                }}
                type="button"
                aria-label={`Open ${item.title} image`}
              >
                <Image
                  alt={item.alt}
                  className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.05]"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  loading="lazy"
                  src={item.image}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-80 transition-opacity duration-slow group-hover:opacity-95" />
                <span className={`absolute inset-x-0 bottom-0 p-4 text-left text-body-sm text-primary-foreground transition-opacity duration-slow ${isPage ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {item.title}
                </span>
              </button>
            </figure>
          ))}
        </FadeIn>

        {!isPage ? (
        <div className="mt-8 text-center">
          <Link
            className="luxury-focus btn btn-primary group"
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
  image: GalleryImage;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const mounted = useSyncExternalStore(subscribeToNothing, getClientSnapshot, getServerSnapshot);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (mounted) closeButtonRef.current?.focus();
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-lightbox-caption"
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("button:not([disabled])"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
    >
      <button
        ref={closeButtonRef}
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
        <div className="relative aspect-[4/5] max-h-[76svh] w-full overflow-hidden rounded-lg sm:aspect-[3/2]">
          <Image
            alt={image.alt}
            className="object-contain"
            fill
            sizes="90vw"
            loading="eager"
            src={image.image}
          />
        </div>
        <figcaption className="mt-4 text-body-md text-primary-foreground" id="gallery-lightbox-caption">{image.title}</figcaption>
      </figure>
    </div>,
    document.body,
  );
}
