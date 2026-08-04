import {
  Car,
  Coffee,
  Dumbbell,
  Headphones,
  ShieldCheck,
  Utensils,
  Wifi,
  Wind,
} from "lucide-react";

import { FadeIn } from "@/components/ui/FadeIn";

const amenities = [
  { label: "High-Speed Wi-Fi", icon: Wifi },
  { label: "Restaurant Dining", icon: Utensils },
  { label: "Breakfast Service", icon: Coffee },
  { label: "Parking Assistance", icon: Car },
  { label: "Air Conditioned Rooms", icon: Wind },
  { label: "Guest Support", icon: Headphones },
  { label: "Safety & Security", icon: ShieldCheck },
  { label: "Wellness Access", icon: Dumbbell },
];

export function AmenitiesSection() {
  return (
    <section className="luxury-glass-section py-16 md:py-24 lg:py-32" aria-labelledby="amenities-heading">
      <div className="mx-auto w-full px-shell">
        <FadeIn className="mx-auto max-w-[var(--container-readable)] text-center">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Amenities
          </p>
          <h2
            className="mt-5 text-heading-xl text-text-primary sm:text-display-lg"
            id="amenities-heading"
          >
            <span className="block">Everything You Need,</span>
            <span className="block text-brand-pink">Within Easy Reach</span>
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary">
            Essential comforts and thoughtful services come together to make
            business trips, celebrations, and family stays feel seamless.
          </p>
        </FadeIn>

        <FadeIn className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" delay={0.12}>
          {amenities.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <article
                className="group rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-slow hover:-translate-y-1 hover:shadow-md"
                key={amenity.label}
              >
                <span className="brand-gradient-border inline-flex size-12 items-center justify-center rounded-full">
                  <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-heading-sm text-text-primary">
                  {amenity.label}
                </h3>
              </article>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
