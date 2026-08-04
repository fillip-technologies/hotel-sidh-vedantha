import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  CalendarCheck,
  CheckCircle2,
  Coffee,
  Dumbbell,
  Maximize2,
  Monitor,
  Phone,
  Soup,
  Users,
  Wifi,
} from "lucide-react";

type Room = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  size: string;
  occupancy: string;
  bed: string;
  image: string;
  gallery: string[];
  highlights: string[];
  idealFor: string[];
  inclusions: string[];
  policies: string[];
  roomSpecificAmenities: string[];
  popularAmenities: string[];
};

type RoomDetailPageProps = {
  room: Room;
  otherRooms: Room[];
};

const popularAmenityIcons = [
  Soup,
  Dumbbell,
  Phone,
  Coffee,
  Coffee,
  Wifi,
  Monitor,
  Soup,
  BedDouble,
];

export function RoomDetailPage({ room, otherRooms }: RoomDetailPageProps) {
  return (
    <main className="bg-background text-text-primary">
      <section className="relative isolate min-h-[82svh] overflow-hidden">
        <Image
          alt={`${room.title} at Hotel Sidh Vedantha`}
          className="size-full object-cover"
          fill
          priority
          sizes="100vw"
          src={room.image}
        />
        <span className="absolute inset-0 bg-gradient-to-t from-primary/72 via-primary/28 to-primary/30" />
        <div className="page-shell relative z-[var(--z-raised)] flex min-h-[82svh] items-end pb-16 pt-32 md:pb-24">
          <div className="max-w-[48rem] text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Rooms & Suites
            </p>
            <h1 className="mt-5 text-heading-xl sm:text-display-lg">{room.title}</h1>
            <p className="mt-6 max-w-[42rem] text-body-lg text-primary-foreground/82">
              {room.longDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                className="luxury-focus brand-gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-3 text-button"
                href="/contact"
              >
                Book This Room
                <CalendarCheck className="size-4" aria-hidden="true" />
              </Link>
              <Link
                className="luxury-focus inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-button text-primary-foreground hover:bg-primary-foreground/10"
                href="tel:+919876543210"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-16 md:py-24">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="grid gap-4 self-start rounded-xl border border-border bg-card p-6 shadow-md sm:grid-cols-3 lg:sticky lg:top-32 lg:grid-cols-1">
            <RoomFact icon={Maximize2} label="Room Size" value={room.size} />
            <RoomFact icon={Users} label="Occupancy" value={room.occupancy} />
            <RoomFact icon={BedDouble} label="Bed Type" value={room.bed} />
          </aside>

          <div className="grid gap-8">
            <div className="rounded-xl border border-border bg-card p-6 shadow-md md:p-8">
              <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
                Room Overview
              </p>
              <h2 className="mt-4 text-heading-lg text-text-primary">
                Comfort, privacy, and thoughtful details.
              </h2>
              <p className="mt-5 max-w-[48rem] text-body-lg text-text-secondary">
                {room.longDescription}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {room.highlights.map((highlight) => (
                  <div
                    className="rounded-lg border border-border bg-surface-hover p-5"
                    key={highlight}
                  >
                    <CheckCircle2 className="size-5 text-success" aria-hidden="true" />
                    <p className="mt-4 text-body-md text-text-primary">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid auto-rows-[15rem] gap-4 md:grid-cols-3">
              {room.gallery.map((image, index) => (
                <div
                  className={`relative overflow-hidden rounded-xl shadow-md ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  key={image}
                >
                  <Image
                    alt={`${room.title} gallery ${index + 1}`}
                    className="size-full object-cover"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={image}
                  />
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-md md:p-8">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="text-heading-md text-text-primary">
                    Room-Specific Amenities
                  </h2>
                  <ul className="mt-6 grid gap-4">
                    {room.roomSpecificAmenities.map((amenity) => (
                      <li
                        className="flex items-start gap-3 text-body-md text-text-secondary"
                        key={amenity}
                      >
                        <CheckCircle2
                          className="mt-1 size-5 shrink-0 text-success"
                          aria-hidden="true"
                        />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-heading-md text-text-primary">Popular Amenities</h2>
                  <ul className="mt-6 grid gap-4">
                    {room.popularAmenities.map((amenity, index) => {
                      const Icon = popularAmenityIcons[index] ?? CheckCircle2;

                      return (
                        <li
                          className="flex items-start gap-3 text-body-md text-text-secondary"
                          key={amenity}
                        >
                          <Icon
                            className="mt-1 size-5 shrink-0 text-success"
                            aria-hidden="true"
                          />
                          {amenity}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <DetailList title="Ideal For" items={room.idealFor} />
              <DetailList title="Stay Includes" items={room.inclusions} />
              <DetailList title="Good To Know" items={room.policies} />
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-dark-section py-16 md:py-24">
        <div className="page-shell grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-[42rem]">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Reservations
            </p>
            <h2 className="mt-4 text-heading-lg text-primary-foreground">
              Ready to stay in {room.title}?
            </h2>
            <p className="mt-4 text-body-lg text-primary-foreground/72">
              Share your dates with our team and we will help confirm room
              availability, preferences, and the best stay arrangement.
            </p>
          </div>
          <Link
            className="luxury-focus brand-gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-button"
            href="/contact"
          >
            Quick Book
            <CalendarCheck className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="page-shell">
          <h2 className="text-heading-lg text-text-primary">Explore More Rooms</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {otherRooms.map((item) => (
              <Link
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition-transform duration-slow hover:-translate-y-1 hover:shadow-lg"
                href={`/rooms/${item.slug}`}
                key={item.slug}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    alt={`${item.title} at Hotel Sidh Vedantha`}
                    className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.04]"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={item.image}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-heading-sm text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-body-sm text-text-secondary">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-md">
      <h3 className="text-heading-sm text-text-primary">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="flex items-start gap-3 text-body-sm text-text-secondary" key={item}>
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoomFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Maximize2;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-surface-hover p-4">
      <span className="brand-gradient-border inline-flex size-11 shrink-0 items-center justify-center rounded-full">
        <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-caption text-text-muted">{label}</p>
        <p className="mt-1 text-body-sm text-text-primary">{value}</p>
      </div>
    </div>
  );
}
