import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  BriefcaseBusiness,
  CarFront,
  Dumbbell,
  Sparkles,
  Utensils,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import { MasterLeadForm } from "@/components/landing/MasterLeadForm";
import { TestimonialCarousel } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Facilities & Amenities | Hotel Sidh Vedantha, Patna",
  description:
    "Explore the rooms, dining, event spaces, meeting room, and guest facilities listed by Hotel Sidh Vedantha in Patna.",
  keywords: ["Hotel Facilities in Patna", "Hotel Amenities", "Hotel Sidh Vedantha"],
};

type FacilityCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
  link?: { label: string; href: string };
  detail?: string;
};

const facilities: FacilityCard[] = [
  {
    title: "Gym & Fitness",
    description:
      "A 24-hour gym is listed among the hotel's room amenities. Contact the hotel to confirm guest access and current facility details.",
    icon: Dumbbell,
    detail: "Listed as a 24-hour facility",
    link: { label: "Ask the Hotel", href: "/contact-us" },
  },
  {
    title: "Parking",
    description:
      "Parking assistance is mentioned for hotel guests and event visitors. Availability is subject to event size and current arrangements.",
    icon: CarFront,
    detail: "Subject to size and availability",
    link: { label: "Confirm Parking", href: "/contact-us" },
  },
  {
    title: "Wi-Fi",
    description:
      "High-speed Wi-Fi is listed in the room information. Coverage and access details for your stay can be confirmed with the hotel.",
    icon: Wifi,
    detail: "High-speed Wi-Fi listed with room amenities",
    link: { label: "Explore Rooms", href: "/rooms" },
  },
  {
    title: "Transportation",
    description:
      "Taxi service is listed in the hotel's room information. Contact the team to confirm current availability, booking arrangements, and any charges.",
    icon: CarFront,
    detail: "Taxi service listed; arrangements need confirmation",
    link: { label: "Discuss Transport", href: "/contact-us" },
  },
  {
    title: "Dining & Restaurant",
    description:
      "Norton Classic Restaurant serves breakfast, lunch, and dinner. Explore the existing Dining page for restaurant information.",
    image: "/images/cooking.png",
    imageAlt: "Dining at Norton Classic Restaurant",
    icon: Utensils,
    detail: "Norton Classic Restaurant",
    link: { label: "Discover Dining", href: "/dining" },
  },
  {
    title: "Banquets & Events",
    description:
      "The hotel lists banquet spaces for celebrations and social occasions. Ask the events team about availability and suitable arrangements.",
    image: "/images/wedding.png",
    imageAlt: "Celebration setting at Hotel Sidh Vedantha",
    icon: Sparkles,
    detail: "Event details are confirmed with the hotel team",
    link: { label: "Explore Banquets", href: "/banquets-events" },
  },
  {
    title: "Meeting Room",
    description:
      "The Oasis is a 500 sq ft board room for business gatherings. Contact the team about availability, layouts, and equipment.",
    image: "/images/event.png",
    imageAlt: "Meeting room arranged for a business gathering",
    icon: BriefcaseBusiness,
    detail: "Equipment and arrangements require confirmation",
    link: { label: "View Meeting Room", href: "/meeting-room" },
  },
  {
    title: "Other Hotel Amenities",
    description:
      "Room information also lists daily housekeeping, in-room tea and coffee, bottled water, and work desks. Inclusions can vary by room category.",
    image: "/images/Rooms/room 4-Premium/0Z8A8929.JPG",
    imageAlt: "A guest room at Hotel Sidh Vedantha",
    icon: BedDouble,
    detail: "Check inclusions for your chosen room",
    link: { label: "Compare Rooms", href: "/rooms" },
  },
];

export default function ExperiencesPage() {
  return (
    <main className="bg-background text-text-primary">
      <section className="relative isolate min-h-[60svh] overflow-hidden md:min-h-[78svh]">
        <Image
          alt="Hotel Sidh Vedantha in Patna"
          className="absolute inset-0 -z-10 size-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/hotel.png"
        />
        <span className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/90 via-primary/54 to-primary/28" />
        <span className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />
        <div className="page-shell flex min-h-[60svh] items-end pb-12 pt-28 md:min-h-[78svh] md:pb-24 md:pt-32">
          <div className="max-w-[58rem] text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              The Hotel, Thoughtfully Considered
            </p>
            <h1 className="mt-5 text-heading-xl sm:text-display-lg">
              Facilities &amp; Amenities
            </h1>
            <p className="mt-6 max-w-[46rem] text-body-lg text-primary-foreground/85">
              Discover the comforts, dining, event spaces, and guest support
              available at Hotel Sidh Vedantha. Explore each area and contact
              the team to confirm details for your visit.
            </p>
            <Link
              className="luxury-focus btn btn-primary mt-8 inline-flex"
              href="#facilities"
            >
              Explore Facilities
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-16 md:py-24" id="facilities">
        <div className="page-shell">
          <div className="mx-auto max-w-[48rem] text-center">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              One Address, Many Essentials
            </p>
            <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">
              The details that make a stay feel complete.
            </h2>
            <p className="mt-5 text-body-lg text-text-secondary">
              From gym access and connectivity to dining and gathering spaces,
              explore the facilities noted in the hotel&apos;s existing
              information. Confirm availability and specific arrangements
              directly with the hotel.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 md:mt-16">
            {facilities.map((facility) => {
              const FacilityIcon = facility.icon;
              return (
                <article
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-slow hover:-translate-y-1 hover:shadow-lg"
                  key={facility.title}
                >
                  {facility.image ? (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        alt={facility.imageAlt ?? "Hotel Sidh Vedantha facility"}
                        className="object-cover transition-transform duration-slow group-hover:scale-[1.04]"
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                        src={facility.image}
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-surface">
                      <span className="brand-gradient-border inline-flex size-16 items-center justify-center rounded-full bg-card shadow-sm">
                        <FacilityIcon className="brand-gradient-icon size-7" aria-hidden="true" />
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center gap-3">
                      <FacilityIcon className="size-5 shrink-0 text-accent-hover" aria-hidden="true" />
                      <h2 className="text-heading-sm text-text-primary">{facility.title}</h2>
                    </div>
                    <p className="mt-4 flex-1 text-body-sm leading-relaxed text-text-secondary">
                      {facility.description}
                    </p>
                    {facility.detail ? (
                      <p className="mt-4 border-l-2 border-accent/60 pl-3 text-caption text-text-muted">
                        {facility.detail}
                      </p>
                    ) : null}
                    {facility.link ? (
                      <Link
                        className="luxury-focus brand-gradient-link mt-6 inline-flex w-fit items-center gap-2 text-button text-text-primary hover:text-accent-hover"
                        href={facility.link.href}
                      >
                        {facility.link.label}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="luxury-dark-section py-16 md:py-24" id="enquiry">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_25rem] lg:items-center">
          <div className="text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Plan Your Visit
            </p>
            <h2 className="mt-5 text-heading-lg sm:text-heading-xl">
              Need a detail confirmed?
            </h2>
            <p className="mt-5 max-w-[42rem] text-body-lg text-primary-foreground/75">
              Send your question to the hotel team. They can help with room,
              dining, event, and service enquiries, including current
              availability and arrangements.
            </p>
            <Link
              className="luxury-focus brand-gradient-link mt-7 inline-flex items-center gap-2 text-button text-primary-foreground hover:text-accent-hover"
              href="/contact-us"
            >
              Contact the Hotel
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <MasterLeadForm context="Facilities enquiry" ctaLabel="Send Enquiry" tone="light" />
        </div>
      </section>

      <TestimonialCarousel
        eyebrow="Guest Reviews"
        title="Stories from stays, dining, and celebrations."
      />
    </main>
  );
}
