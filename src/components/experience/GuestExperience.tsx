import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarHeart,
  ConciergeBell,
  MapPin,
  Sparkles,
  Utensils,
} from "lucide-react";

import { FadeIn } from "@/components/ui/FadeIn";

const experienceStories = [
  {
    title: "Stay",
    subtitle: "Restful rooms and attentive guest care.",
    image: "/images/2.png",
    icon: ConciergeBell,
  },
  {
    title: "Dine",
    subtitle: "Fresh flavours served with warmth.",
    image: "/images/cooking.png",
    icon: Utensils,
  },
  {
    title: "Celebrate",
    subtitle: "Events shaped with detail and ease.",
    image: "/images/wedding.png",
    icon: CalendarHeart,
  },
];

const serviceNotes = [
  { label: "Personal Assistance", icon: Sparkles },
  { label: "Dining Support", icon: Utensils },
  { label: "Patna Location", icon: MapPin },
];

export function GuestExperience() {
  return (
    <section className="luxury-charcoal-section py-16 md:py-24 lg:py-32" aria-labelledby="guest-experience-heading">
      <div className="mx-auto w-full px-shell">
        <FadeIn className="mx-auto max-w-[var(--container-readable)] text-center">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Experience
          </p>
          <h2
            className="mt-5 text-heading-xl text-primary-foreground sm:text-display-lg"
            id="guest-experience-heading"
          >
            <span className="block">One Hotel,</span>
            <span className="block text-brand-pink">Many Memorable Moments</span>
          </h2>
          <p className="mt-6 text-body-lg text-primary-foreground/72">
            Move easily from a comfortable room to a warm meal, a family
            celebration, or a productive meeting, all supported by thoughtful
            hospitality.
          </p>
        </FadeIn>

        <FadeIn className="mt-14 grid gap-6 lg:grid-cols-3" delay={0.12}>
          {experienceStories.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="group relative min-h-[26rem] overflow-hidden rounded-xl shadow-lg md:min-h-[30rem]"
                key={item.title}
              >
                <Image
                  alt={`${item.title} experience at Hotel Sidh Vedantha`}
                  className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.04]"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  src={item.image}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-primary/82 via-primary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <span className="inline-flex size-11 items-center justify-center rounded-full border border-primary-foreground/35 bg-primary-foreground/12 backdrop-blur-md">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-heading-md">{item.title}</h3>
                  <p className="mt-3 text-body-sm text-primary-foreground/82">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            );
          })}
        </FadeIn>

        <FadeIn
          className="mt-8 grid overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary/55 shadow-glass backdrop-blur-md md:grid-cols-[1fr_auto] md:items-center"
          delay={0.18}
        >
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {serviceNotes.map((item) => {
              const Icon = item.icon;

              return (
                <div className="flex items-center gap-3 bg-primary/35 p-5" key={item.label}>
                  <span className="brand-gradient-border inline-flex size-10 shrink-0 items-center justify-center rounded-full">
                    <Icon className="brand-gradient-icon size-4" aria-hidden="true" />
                  </span>
                  <span className="text-body-sm text-primary-foreground/86">{item.label}</span>
                </div>
              );
            })}
          </div>

          <Link
            className="luxury-focus brand-gradient-bg group m-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-button"
            href="/experiences"
          >
            Explore More
            <ArrowRight className="size-4 transition-transform duration-slow group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
