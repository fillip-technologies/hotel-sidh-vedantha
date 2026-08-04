import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/ui/FadeIn";

const galleryImages = [
  { title: "Celebration Hall", image: "/images/wedding.png", className: "md:col-span-2 md:row-span-2" },
  { title: "Ring Ceremony", image: "/images/ring-ceremony.png", className: "" },
  { title: "Dining Setup", image: "/images/cooking.png", className: "" },
  { title: "Birthday Decor", image: "/images/birthday-celebration.png", className: "" },
  { title: "Business Event", image: "/images/event.png", className: "" },
];

export function GallerySection() {
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
          {galleryImages.map((item) => (
            <figure
              className={`group relative overflow-hidden rounded-xl shadow-md ${item.className}`}
              key={item.title}
            >
              <Image
                alt={`${item.title} at Hotel Sidh Vedantha`}
                className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.05]"
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                src={item.image}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-80 transition-opacity duration-slow group-hover:opacity-95" />
            </figure>
          ))}
        </FadeIn>

        <div className="mt-8 text-center">
          <Link
            className="luxury-focus brand-gradient-bg group inline-flex items-center gap-2 rounded-full px-5 py-3 text-button"
            href="/gallery"
          >
            View Full Gallery
            <ArrowRight className="size-4 transition-transform duration-slow group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
