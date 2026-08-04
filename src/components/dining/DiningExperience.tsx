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
import { motion } from "framer-motion";
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
    image: "/images/cooking.png",
    icon: Coffee,
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Balanced afternoon plates with authentic flavours and international favourites.",
    image: "/images/2.png",
    icon: Soup,
  },
  {
    id: "dinner",
    title: "Dinner",
    description: "Elegant evening dining shaped around rich aromas and graceful hospitality.",
    image: "/images/cooking.png",
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

  return (
    <section
      aria-labelledby="dining-experience-heading"
      className="luxury-dark-section relative isolate overflow-hidden py-0"
    >
      <div className="mx-auto w-full">
        <h2 className="sr-only" id="dining-experience-heading">
          Dining Experience
        </h2>
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
            <div className="relative z-[var(--z-raised)] flex h-full">
              {diningItems.map((item) => (
                <DiningColumn
                  hasActiveItem={hasActiveItem}
                  isActive={activeItem === item.id}
                  item={item}
                  key={item.id}
                  onActivate={() => setActiveItem(item.id)}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 px-shell sm:grid-cols-2 lg:hidden">
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
    <motion.article
      animate={{ flex: isActive ? 3.8 : 1 }}
      aria-label={item.title}
      className={`group relative min-w-0 overflow-hidden border-r border-primary-foreground/20 outline-none last:border-r-0 ${
        hasActiveItem && !isActive ? "bg-surface/95" : "bg-transparent"
      }`}
      onFocus={onActivate}
      onMouseEnter={onActivate}
      tabIndex={0}
      transition={{ duration: 0.65, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 p-5">
        <motion.div
          animate={{ opacity: isActive ? 1 : 0 }}
          className="relative h-full overflow-hidden rounded-xl"
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Image
            alt={`${item.title} dining at Hotel Sidh Vedantha`}
            className={`size-full object-cover transition-transform duration-[700ms] ease-in-out ${
              isActive ? "scale-[1.06]" : "scale-100"
            }`}
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            src={item.image}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
        </motion.div>
      </div>

      <div className="relative z-[var(--z-raised)] flex h-full flex-col p-6">
        <motion.div
          animate={{ y: isActive ? -12 : 0 }}
          className="mt-auto"
          transition={{ duration: 0.65, ease: "easeInOut" }}
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
        </motion.div>

        <motion.div
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
          className="mt-4 overflow-hidden"
          initial={false}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="max-w-[20rem] text-body-sm text-primary-foreground/85">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.article>
  );
}

function DiningMobileCard({ item }: { item: DiningItem }) {
  const Icon = item.icon;

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-background shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          alt={`${item.title} dining at Hotel Sidh Vedantha`}
          className="size-full object-cover"
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          src={item.image}
        />
      </div>
      <div className="p-5">
        <span className="brand-gradient-border inline-flex size-10 items-center justify-center rounded-full">
          <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-heading-sm text-text-primary">{item.title}</h3>
        <p className="mt-3 text-body-sm text-text-secondary">{item.description}</p>
      </div>
    </article>
  );
}
