import Image from "next/image";
import { MapPin } from "lucide-react";

import { FadeIn } from "@/components/ui/FadeIn";

const biharPlaces = [
  { name: "Golghar", distance: "Approx. 5 km", image: "/images/Explore-Bihar/golghar.png" },
  { name: "Bihar Museum", distance: "Approx. 6 km", image: "/images/Explore-Bihar/museum.png" },
  { name: "Patna Sahib", distance: "Approx. 14 km", image: "/images/Explore-Bihar/patna-sahib.png" },
  { name: "Buddha Smriti Park", distance: "Approx. 4 km", image: "/images/Explore-Bihar/budha-smriti.png" },
  { name: "Eco Park", distance: "Approx. 7 km", image: "/images/Explore-Bihar/eco-park.png" },
  { name: "Patna Zoo", distance: "Approx. 8 km", image: "/images/Explore-Bihar/patna-zoo.png" },
  { name: "Ganga Ghat", distance: "Approx. 6 km", image: "/images/Explore-Bihar/ganga-ghat.png" },
  { name: "ISKCON Patna", distance: "Approx. 5 km", image: "/images/Explore-Bihar/isckon.png" },
];

export function BiharPlacesCarousel() {
  return (
    <section className="bihar-places-bg py-16 md:py-24 lg:py-32" aria-labelledby="bihar-places-heading">
      <div className="mx-auto w-full">
        <FadeIn className="mx-auto max-w-[var(--container-readable)] px-shell text-center">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Explore Bihar
          </p>
          <h2
            className="mt-5 text-heading-xl text-text-primary sm:text-display-lg"
            id="bihar-places-heading"
          >
            <span className="block">Places Worth </span>
            <span className="block text-brand-pink">Discovering Nearby</span>
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary">
            Discover Patna&apos;s landmarks, riverfront views, cultural stops, and a
            few heritage escapes nearby. Distances are approximate from Hotel
            Sidh Vedantha, Patna.
          </p>
        </FadeIn>

        <FadeIn className="mt-14" delay={0.12}>
          <div className="bihar-places-carousel flex snap-x gap-10 overflow-x-auto px-shell pb-8">
            {biharPlaces.map((place) => (
              <article
                className="bihar-place-card group relative shrink-0 snap-center overflow-hidden shadow-lg"
                key={place.name}
                tabIndex={0}
              >
                <Image
                  alt={`${place.name} near Hotel Sidh Vedantha Patna`}
                  className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.08]"
                  fill
                  sizes="(min-width: 1024px) 22rem, 82vw"
                  src={place.image}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-primary/86 via-primary/28 to-transparent transition-opacity duration-slow group-hover:opacity-95 group-focus-visible:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 z-[var(--z-raised)] p-6 text-center text-primary-foreground">
                  <span className="mx-auto inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/35 bg-primary-foreground/12 backdrop-blur-md">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-heading-sm">{place.name}</h3>
                  <p className="mt-2 translate-y-2 text-caption text-primary-foreground/78 opacity-0 transition-all duration-base group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {place.distance} from hotel
                  </p>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
