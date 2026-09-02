"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CalendarCheck, ImageIcon, Maximize2, Users, X } from "lucide-react";

import rooms from "@/data/rooms.json";

export function Rooms() {
  const [activeRoom, setActiveRoom] = useState<(typeof rooms)[number] | null>(
    null,
  );

  return (
    <section className="luxury-ivory-section section-y" aria-labelledby="rooms-heading">
      <div className="mx-auto w-full px-shell">
        <div className="mx-auto mb-12 max-w-[var(--container-readable)] text-center md:mb-16">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Rooms
          </p>
          <h2
            className="mt-4 text-heading-xl text-text-primary md:text-display-lg"
            id="rooms-heading"
          >
            <span>Comfort for </span>
            <span className="text-brand-pink">Every Stay</span>
          </h2>
          <p className="mt-5 text-body-lg text-text-secondary">
            Choose from refined rooms and spacious suites designed for restful
            nights, easy privacy, and warm Sidh Vedantha hospitality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {rooms.map((room) => (
            <article
              className="group overflow-hidden rounded-lg border border-border/60 bg-surface transition-shadow duration-slow hover:shadow-md"
              key={room.title}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  alt={`${room.title} at Hotel Sidh Vedantha`}
                  className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.04]"
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  src={room.image}
                />
                <button
                  aria-label={`View ${room.title} images`}
                  className="luxury-focus brand-gradient-bg absolute bottom-5 left-5 inline-flex size-12 items-center justify-center rounded-full text-primary-foreground shadow-brand transition-transform duration-normal hover:scale-105"
                  onClick={() => setActiveRoom(room)}
                  type="button"
                >
                  <ImageIcon className="size-5" aria-hidden="true" />
                </button>
              </div>

              <div className="flex min-h-[22rem] flex-col p-6">
                <h3 className="text-heading-md text-text-primary">{room.title}</h3>
                <p className="mt-4 text-body-sm text-text-secondary">
                  {room.description}
                </p>

                <div className="mt-6 grid gap-3 text-body-sm text-text-muted">
                  <span className="inline-flex items-center gap-2 text-text-secondary">
                    <Maximize2 className="size-4" aria-hidden="true" />
                    {room.size}
                  </span>
                  <span className="inline-flex items-center gap-2 text-text-secondary">
                    <Users className="size-4" aria-hidden="true" />
                    {room.occupancy}
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3">
                  <Link
                    className="luxury-focus btn btn-primary btn-sm transition-transform duration-normal hover:translate-x-1"
                    href="/contact"
                  >
                    Quick Book
                    <CalendarCheck className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    className="luxury-focus inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-button text-text-primary hover:border-accent-hover hover:text-accent-hover"
                    href={`/rooms/${room.slug}`}
                  >
                    View Room
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeRoom ? (
        <div
          aria-labelledby="room-modal-title"
          aria-modal="true"
          className="fixed inset-0 z-[var(--z-modal)] grid place-items-center bg-overlay px-shell py-section"
          role="dialog"
        >
          <div className="relative w-full max-w-[var(--container-readable)] overflow-hidden rounded-footer bg-card shadow-lg">
            <button
              aria-label="Close room preview"
              className="luxury-focus absolute right-5 top-5 z-[var(--z-modal)] inline-flex size-11 items-center justify-center rounded-full bg-surface text-text-primary shadow-soft transition-transform duration-normal hover:scale-105"
              onClick={() => setActiveRoom(null)}
              type="button"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <div className="relative aspect-[16/10]">
              <Image
                alt={`${activeRoom.title} preview at Hotel Sidh Vedantha`}
                className="size-full object-cover"
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                src={activeRoom.image}
              />
            </div>

            <div className="p-6 md:p-8">
              <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
                Room Preview
              </p>
              <h3
                className="mt-3 text-heading-md text-text-primary"
                id="room-modal-title"
              >
                {activeRoom.title}
              </h3>
              <p className="mt-4 text-body-sm text-text-secondary">
                {activeRoom.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-body-sm text-text-secondary">
                <span className="inline-flex items-center gap-2">
                  <Maximize2 className="size-4" aria-hidden="true" />
                  {activeRoom.size}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="size-4" aria-hidden="true" />
                  {activeRoom.occupancy}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
