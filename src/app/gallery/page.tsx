import type { Metadata } from "next";

import { GallerySection } from "@/components/gallery";

export const metadata: Metadata = {
  title: "Gallery | Hotel Sidh Vedantha Patna",
  description:
    "Explore the gallery of Hotel Sidh Vedantha including rooms, dining, events, and celebrations in Patna.",
};

export default function GalleryPage() {
  return (
    <main className="bg-background pt-24 text-text-primary">
      <GallerySection variant="page" />
    </main>
  );
}
