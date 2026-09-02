"use client";

import Image from "next/image";
import {
  Coffee,
  Flame,
  MoonStar,
  Soup,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";

import { FadeIn } from "@/components/ui/FadeIn";

type DiningItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

const diningItems: DiningItem[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    description: "Fresh mornings with comforting classics, regional touches, and warm service.",
    image: "/images/brekfast.jpg",
    icon: Coffee,
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Balanced afternoon plates with authentic flavours and international favourites.",
    image: "/images/lunch.jpg",
    icon: Soup,
  },
  {
    id: "dinner",
    title: "Dinner",
    description: "Elegant evening dining shaped around rich aromas and graceful hospitality.",
    image: "/images/dinner.jpg",
    icon: MoonStar,
  },
  {
    id: "live-kitchen",
    title: "Live Kitchen",
    description: "Chef-led theatre where fresh ingredients come alive with craft and precision.",
    image: "/images/cooking.png",
    icon: Flame,
  },
  {
    id: "signature-specials",
    title: "Signature Specials",
    description: "House favourites and memorable plates prepared with a distinct Sidh Vedantha touch.",
    image: "/images/2.png",
    icon: Sparkles,
  },
  {
    id: "private-dining",
    title: "Private Dining",
    description: "Intimate meals and personal celebrations hosted with privacy, polish, and care.",
    image: "/images/nn.png",
    icon: UsersRound,
  },
];

export function DiningExperience() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const hasActiveItem = activeItem !== null;
  const panelColumns = activeItem
    ? diningItems.map((item) => (item.id === activeItem ? "3.6fr" : "1fr")).join(" ")
    : `repeat(${diningItems.length}, minmax(0, 1fr))`;

  const activateItem = (itemId: string) => {
    setActiveItem((currentItem) => (currentItem === itemId ? currentItem : itemId));
  };

  return (
    <section
      aria-labelledby="dining-experience-heading"
      className="luxury-dark-section relative isolate overflow-hidden section-y"
    >
      <div className="mx-auto w-full">
        <div className="px-shell text-center lg:sr-only">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Dining Experience
          </p>
          <h2
            className="mt-4 text-heading-lg text-primary-foreground"
            id="dining-experience-heading"
          >
            Breakfast, Lunch, Dinner and More
          </h2>
          <p className="mx-auto mt-4 max-w-[var(--container-readable)] text-body-md text-primary-foreground/72">
            Explore comforting meals, restaurant dining, and hosted meal
            experiences at Hotel Sidh Vedantha.
          </p>
        </div>
        <FadeIn className="min-w-0" delay={0.12}>
          <div
            className="relative hidden h-[42rem] overflow-hidden border-y border-border lg:block"
            onMouseLeave={() => setActiveItem(null)}
          >
            <Image
              alt="Signature dining at Hotel Sidh Vedantha"
              className={`size-full object-cover transition-transform duration-[900ms] ease-in-out ${
                hasActiveItem ? "scale-100" : "scale-[1.04]"
              }`}
              fill
              sizes="100vw"
              src="/images/cooking.png"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-primary/10" />
            <div
              className="relative z-[var(--z-raised)] grid h-full transition-[grid-template-columns] duration-[720ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateColumns: panelColumns } as CSSProperties}
            >
              {diningItems.map((item) => (
                <DiningColumn
                  hasActiveItem={hasActiveItem}
                  isActive={activeItem === item.id}
                  item={item}
                  key={item.id}
                  onActivate={() => activateItem(item.id)}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 px-shell sm:grid-cols-2 lg:hidden">
            {diningItems.map((item) => (
              <DiningMobileCard item={item} key={item.id} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function DiningColumn({
  item,
  isActive,
  hasActiveItem,
  onActivate,
}: {
  item: DiningItem;
  isActive: boolean;
  hasActiveItem: boolean;
  onActivate: () => void;
}) {
  const Icon = item.icon;
  const isLightText = isActive || !hasActiveItem;

  return (
    <article
      aria-label={item.title}
      className={`group relative min-w-0 overflow-hidden border-r border-primary-foreground/20 outline-none transition-colors duration-[520ms] ease-out last:border-r-0 ${
        hasActiveItem && !isActive ? "bg-surface/95" : "bg-transparent"
      }`}
      onFocus={onActivate}
      onPointerEnter={onActivate}
      tabIndex={0}
    >
      <div className="absolute inset-0 p-5">
        <div
          className={`relative h-full overflow-hidden rounded-xl transition-opacity duration-[520ms] ease-out ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <DiningMedia
            alt={`${item.title} dining at Hotel Sidh Vedantha`}
            className={`transition-transform duration-[700ms] ease-in-out ${
              isActive ? "scale-[1.06]" : "scale-100"
            }`}
            image={item.image}
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
        </div>
      </div>

      <div className="relative z-[var(--z-raised)] flex h-full flex-col p-6">
        <div
          className={`mt-auto transition-transform duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isActive ? "-translate-y-3" : "translate-y-0"
          }`}
        >
          <span
            className={`inline-flex size-12 items-center justify-center rounded-full transition-colors duration-slow ${
              isActive
                ? "bg-background text-accent-hover"
                : isLightText
                  ? "border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur-md"
                  : "brand-gradient-border text-accent-hover"
            }`}
          >
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <h3
            className={`mt-4 text-heading-md transition-colors duration-slow ${
              isLightText ? "text-primary-foreground" : "text-text-primary"
            }`}
          >
            {item.title}
          </h3>
        </div>

        <div
          className={`mt-4 overflow-hidden transition-[opacity,transform] duration-[420ms] ease-out ${
            isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="max-w-[20rem] text-body-sm text-primary-foreground/85">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function DiningMobileCard({ item }: { item: DiningItem }) {
  const Icon = item.icon;

  return (
    <article className="overflow-hidden rounded-xl border border-primary-foreground/12 bg-primary-foreground/10 text-primary-foreground shadow-md backdrop-blur-md">
      <div className="relative aspect-[16/11] overflow-hidden">
        <DiningMedia
          alt={`${item.title} dining at Hotel Sidh Vedantha`}
          image={item.image}
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <span className="brand-gradient-border inline-flex size-10 items-center justify-center rounded-full">
          <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-heading-sm text-primary-foreground">{item.title}</h3>
        <p className="mt-3 text-body-sm text-primary-foreground/72">{item.description}</p>
      </div>
    </article>
  );
}

function DiningMedia({
  alt,
  className = "",
  image,
  sizes,
}: {
  alt: string;
  className?: string;
  image: string;
  sizes: string;
}) {
  return (
    <Image
      alt={alt}
      className={`size-full object-cover ${className}`}
      fill
      sizes={sizes}
      src={image}
    />
  );
}
