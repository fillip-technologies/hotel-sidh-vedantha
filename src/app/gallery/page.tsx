import type { Metadata } from "next";
import Image from "next/image";

import { GallerySection } from "@/components/gallery";

export const metadata: Metadata = {
  title: "Gallery | Hotel Sidh Vedantha Patna",
  description:
    "Explore the gallery of Hotel Sidh Vedantha including rooms, dining, events, and celebrations in Patna.",
};

export default function GalleryPage() {
  return (
    <main className="bg-background text-text-primary">
      <section className="relative isolate min-h-[60svh] overflow-hidden md:min-h-[86svh]">
        <Image
          alt="Hotel Sidh Vedantha gallery"
          className="absolute inset-0 -z-10 size-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/hotel.png"
        />
        <span className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/88 via-primary/48 to-primary/24" />
        <span className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />
        <div className="page-shell flex min-h-[60svh] items-end pb-10 pt-28 md:min-h-[86svh] md:pb-24 md:pt-32">
          <div className="max-w-[58rem] text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Gallery
            </p>
            <h1 className="mt-5 text-heading-xl sm:text-display-lg">
              A visual tour of Hotel Sidh Vedantha.
            </h1>
            <p className="mt-6 max-w-[44rem] text-body-lg text-primary-foreground/82">
              Browse rooms, dining spaces, celebrations, and event settings
              that capture the comfort and detail of every stay.
            </p>
          </div>
        </div>
      </section>

      <GallerySection variant="page" />
    </main>
  );
}
