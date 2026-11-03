"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const photos = [
  { folder: "banquet", file: "WhatsApp Image 2024-01-30 at 3.47.36 PM (1).jpeg", shape: "portrait", alt: "Banquet celebration and event setup" },
  { folder: "banquet", file: "WhatsApp Image 2024-01-30 at 3.47.36 PM.jpeg", shape: "portrait", alt: "Banquet celebration and event setup" },
  { folder: "banquet", file: "WhatsApp Image 2024-01-30 at 3.47.37 PM.jpeg", shape: "portrait", alt: "Banquet celebration and event setup" },
  { folder: "banquet", file: "WhatsApp Image 2024-01-30 at 3.47.52 PM.jpeg", shape: "portrait", alt: "Banquet celebration and event setup" },
  { folder: "banquet", file: "WhatsApp Image 2024-01-30 at 3.47.54 PM.jpeg", shape: "wide", alt: "Banquet celebration and event setup" },
  { folder: "banquet", file: "WhatsApp Image 2024-01-30 at 3.47.55 PM.jpeg", shape: "portrait", alt: "Banquet celebration and event setup" },
  { folder: "banquet", file: "WhatsApp Image 2024-01-30 at 3.47.56 PM.jpeg", shape: "wide", alt: "Banquet celebration and event setup" },
  { folder: "banquet", file: "WhatsApp Image 2024-01-30 at 3.48.09 PM.jpeg", shape: "wide", alt: "Banquet celebration and event setup" },
  { folder: "banquet", file: "WhatsApp Image 2024-01-30 at 3.48.10 PM.jpeg", shape: "wide", alt: "Banquet celebration and event setup" },
  { folder: "banquet", file: "WhatsApp Image 2024-01-30 at 3.48.13 PM.jpeg", shape: "wide", alt: "Banquet celebration and event setup" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.37 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.38 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.39 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.40 PM (1).jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.40 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.41 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.42 PM (1).jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.42 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.43 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.44 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.45 PM (1).jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.45 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.46 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.47 PM (1).jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.47 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.48 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.49 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.50 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.51 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.52 PM (1).jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.52 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.53 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.54 PM (1).jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.54 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.55 PM (1).jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.55 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.56 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.57 PM (2).jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
  { folder: "banq-2", file: "WhatsApp Image 2022-07-27 at 1.36.57 PM.jpeg", shape: "wide", alt: "Banquet meeting or dining arrangement" },
].map((photo) => ({ ...photo, src: `/images/${photo.folder}/${encodeURIComponent(photo.file)}` }));

export function BanquetPhotoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function goTo(index: number) {
    const carousel = carouselRef.current;
    const slide = carousel?.children[index] as HTMLElement | undefined;
    if (!carousel || !slide) return;
    const left = slide.getBoundingClientRect().left - carousel.getBoundingClientRect().left + carousel.scrollLeft;
    carousel.scrollTo({ left, behavior: "smooth" });
    setActiveIndex(index);
  }

  function updateActiveSlide() {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const left = carousel.getBoundingClientRect().left;
    const slides = Array.from(carousel.children) as HTMLElement[];
    setActiveIndex(slides.reduce((best, slide, index) =>
      Math.abs(slide.getBoundingClientRect().left - left) < Math.abs(slides[best].getBoundingClientRect().left - left) ? index : best, 0));
  }

  return (
    <section className="luxury-ivory-section section-y" aria-labelledby="banquet-gallery-heading">
      <div className="mx-auto w-full px-shell">
        <div className="mx-auto max-w-[var(--container-readable)] text-center">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Explore the spaces</p>
          <h2 className="mt-5 text-heading-xl text-text-primary sm:text-display-lg" id="banquet-gallery-heading">Picture your occasion here</h2>
          <p className="mt-6 text-body-lg text-text-secondary">Browse celebration settings, meeting layouts, and dining arrangements.</p>
        </div>
        <div className="mt-10 flex items-center justify-between gap-5">
          <p className="text-body-sm text-text-muted" aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</p>
          <div className="flex gap-3">
            <button aria-label="Previous photo" className="luxury-focus inline-flex size-11 items-center justify-center rounded-full border border-border text-text-primary hover:border-accent-hover hover:text-accent-hover" onClick={() => goTo((activeIndex - 1 + photos.length) % photos.length)} type="button"><ArrowLeft className="size-5" aria-hidden="true" /></button>
            <button aria-label="Next photo" className="luxury-focus inline-flex size-11 items-center justify-center rounded-full border border-border text-text-primary hover:border-accent-hover hover:text-accent-hover" onClick={() => goTo((activeIndex + 1) % photos.length)} type="button"><ArrowRight className="size-5" aria-hidden="true" /></button>
          </div>
        </div>
        <div aria-label="Banquet and event photos" aria-roledescription="carousel" className="-mx-shell mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-shell pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" onScroll={updateActiveSlide} ref={carouselRef} role="region">
          {photos.map((photo, index) => (
            <figure aria-label={`Photo ${index + 1} of ${photos.length}`} aria-roledescription="slide" className={`group relative h-[19rem] shrink-0 snap-start overflow-hidden rounded-lg bg-primary/30 sm:h-[25rem] ${photo.shape === "portrait" ? "w-[min(68vw,280px)]" : "w-[min(88vw,480px)]"}`} key={photo.src} role="group">
              <Image alt={photo.alt} className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" fill loading="lazy" sizes={photo.shape === "portrait" ? "280px" : "480px"} src={photo.src} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

