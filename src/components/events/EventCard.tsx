import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type EventItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  amenities: string[];
};

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: Readonly<EventCardProps>) {
  const Icon = event.icon;

  return (
    <article className="event-card flex h-[29rem] w-[min(82vw,20rem)] shrink-0 flex-col transition-transform duration-slow hover:-translate-y-1 sm:h-[30rem] md:h-[31rem] md:w-[22rem]">
      <div className="relative h-[13rem] shrink-0 overflow-hidden sm:h-[14rem] md:h-[15rem]">
        <Image
          alt={event.imageAlt}
          className="size-full object-cover"
          fill
          sizes="22rem"
          src={event.image}
        />
        <div className="absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-glass text-primary-foreground shadow-glass backdrop-blur-md sm:left-5 sm:top-5 sm:size-12">
          <Icon className="size-5" aria-hidden="true" />
        </div>
      </div>

      <div className="relative z-[var(--z-raised)] flex flex-1 flex-col p-5">
        <h3 className="text-heading-sm text-text-primary">
          {event.title}
        </h3>
        <p className="mt-3 text-body-sm text-text-secondary">
          {event.description}
        </p>
        <Link
          className="luxury-focus brand-gradient-bg mt-6 inline-flex h-11 items-center gap-2 self-start rounded-full px-5 text-button"
          href="/contact-us"
        >
          Contact Us
          <ArrowRight
            className="size-4"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
