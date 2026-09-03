import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Maximize2, Users } from "lucide-react";

import { showcaseImages } from "@/data/homepageImages";
import rooms from "@/data/rooms.json";

type Room = (typeof rooms)[number];

const featuredSlugs = ["vedantha-suite", "premium-rooms", "executive-rooms"];


const featured = featuredSlugs
  .map((slug) => rooms.find((room) => room.slug === slug))
  .filter((room): room is Room => Boolean(room));

const [feature, ...secondary] = featured;

type RoomTileProps = {
  room: Room;
  className?: string;
  large?: boolean;
  priority?: boolean;
  sizes: string;
};

function RoomTile({
  room,
  className = "",
  large = false,
  priority = false,
  sizes,
}: Readonly<RoomTileProps>) {
  return (
    <Link className={`room-tile luxury-focus ${className}`} href={`/rooms/${room.slug}`}>
      <Image
        alt={`${room.title} at Hotel Sidh Vedantha`}
        className="room-tile-image"
        fill
        priority={priority}
        sizes={sizes}
        src={showcaseImages[room.slug] ?? room.image}
      />
      <span aria-hidden="true" className="room-tile-scrim" />

      <span className="room-tile-body">
        <span
          className={
            large
              ? "text-heading-md text-primary-foreground"
              : "text-heading-sm text-primary-foreground"
          }
        >
          {room.title}
        </span>
        <span className="room-tile-meta">
          <span className="room-tile-meta-item">
            <Maximize2 aria-hidden="true" className="size-4 text-accent" />
            {room.size}
          </span>
          <span className="room-tile-meta-item">
            <Users aria-hidden="true" className="size-4 text-accent" />
            {room.occupancy}
          </span>
        </span>
      </span>

      <span aria-hidden="true" className="room-tile-arrow">
        <ArrowUpRight className="size-4" />
      </span>
    </Link>
  );
}

export function RoomsShowcase() {
  return (
    <section className="luxury-ivory-section" aria-labelledby="rooms-showcase-heading">
      <div className="rooms-showcase-panel">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Rooms &amp; Suites
            </p>
            <h2
              className="mt-4 text-balance text-heading-lg text-text-primary md:text-heading-xl"
              id="rooms-showcase-heading"
            >
              Our most Comfortable Rooms
            </h2>
          </div>

          <Link className="rooms-showcase-cta luxury-focus" href="/rooms">
            Explore Now
            <span aria-hidden="true" className="rooms-showcase-cta-badge">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
          <RoomTile
            className="room-tile--feature md:row-span-2"
            large
            priority
            room={feature}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          {secondary.map((room) => (
            <RoomTile
              className="room-tile--compact"
              key={room.slug}
              room={room}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
