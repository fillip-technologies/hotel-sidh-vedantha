"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bath,
  BedDouble,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ConciergeBell,
  Eye,
  Monitor,
  Phone,
  Play,
  Soup,
  Sparkles,
  UserRound,
  Wifi,
  X,
} from "lucide-react";

import { siteContact } from "@/data/siteContact";

type RoomReview = {
  title: string;
  quote: string;
  context: string;
};

type Room = {
  slug: string;
  title: string;
  shortTitle?: string;
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
  startingPrice?: string;
  bookingBenefits?: string[];
  view?: string;
  tourVideo?: string;
  reviews?: RoomReview[];
};

type RoomDetailPageProps = {
  room: Room;
  otherRooms: Room[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const houseRules = [
  { title: "Check-in", detail: "Check-in begins from 12:00 PM with valid government ID." },
  { title: "Check-out", detail: "Check-out is by 11:00 AM. Late check-out is subject to availability." },
  { title: "Cancellation", detail: "Flexible cancellation support is available through the reservations team." },
  { title: "Children", detail: "Children are welcome. Please mention child occupancy while booking." },
  { title: "Extra Bed", detail: "Extra bed requests are subject to room category and availability." },
  { title: "Smoking", detail: "Smoking preferences are handled according to hotel policy and availability." },
  { title: "Pets", detail: "Please contact the hotel before arrival for current pet policy details." },
];

const fallbackReviews: RoomReview[] = [
  {
    title: "Stayed for Business",
    context: "Business Traveller",
    quote:
      "Comfortable beds, excellent WiFi, and a peaceful room that made the work trip feel easy.",
  },
  {
    title: "Weekend Stay",
    context: "Couple Stay",
    quote:
      "Elegant interiors, warm service, and a quiet atmosphere made the stay feel personal.",
  },
];

export function RoomDetailPage({ room, otherRooms }: RoomDetailPageProps) {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 90]);
  const heroScale = useTransform(scrollY, [0, 700], [1.08, 1.16]);
  const galleryImages = [room.image, ...room.gallery.filter((image) => image !== room.image)];
  const bookingBenefits = room.bookingBenefits ?? ["Breakfast Included", "Free Cancellation"];
  const price = room.startingPrice ?? "Contact for Best Rate";
  const roomView = room.view ?? "City View";
  const storyBadges = [room.size, room.bed, room.occupancy, roomView, ...bookingBenefits].slice(0, 5);
  const highlights = unique([
    "Luxury Bedding",
    "Workspace",
    "High-Speed WiFi",
    "Smart TV",
    "Mini Bar",
    "Room Service",
    ...room.highlights,
  ]);
  const reviews = room.reviews?.length ? room.reviews : fallbackReviews;
  const storyImage = galleryImages[1] ?? room.image;
  const experienceImage = galleryImages[2] ?? storyImage;
  const relatedRooms = otherRooms.slice(0, 3);
  const [featuredRelated, ...supportingRelated] = relatedRooms;

  return (
    <main className="bg-background pb-24 text-text-primary md:pb-0">
      <section className="relative isolate min-h-[88svh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale, y: heroY }}>
          <Image
            alt={`${room.title} at Hotel Sidh Vedantha`}
            className="size-full object-cover"
            fill
            priority
            sizes="100vw"
            src={room.image}
          />
        </motion.div>
        <span className="absolute inset-0 bg-gradient-to-t from-primary/82 via-primary/38 to-primary/24" />
        <span className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />

        <div className="page-shell relative z-[var(--z-raised)] flex min-h-[88svh] items-end pb-20 pt-32 md:pb-24">
          <motion.div
            animate="show"
            className="max-w-[54rem] text-primary-foreground"
            initial="hidden"
            transition={{ duration: 0.7, ease: "easeOut" }}
            variants={fadeUp}
          >
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Rooms & Suites
            </p>
            <h1 className="mt-5 text-heading-xl sm:text-display-lg">{room.title}</h1>
            <p className="mt-6 max-w-[44rem] text-body-lg text-primary-foreground/82">
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
                className="luxury-focus inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary/20 px-6 py-3 text-button text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/10"
                href={siteContact.phoneHref}
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Us : {siteContact.phoneDisplay}
              </Link>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-6 right-shell hidden gap-3 lg:grid lg:w-[24rem] lg:grid-cols-2"
            initial={{ opacity: 0, y: 22 }}
            transition={{ delay: 0.25, duration: 0.65, ease: "easeOut" }}
          >
            {[room.size, room.occupancy, room.bed, ...bookingBenefits].slice(0, 5).map((badge) => (
              <span
                className="rounded-full border border-primary-foreground/18 bg-primary/28 px-4 py-3 text-body-sm text-primary-foreground shadow-sm backdrop-blur-md"
                key={badge}
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <BookingWidget price={price} benefits={bookingBenefits} roomTitle={room.title} />

      <RoomStory image={storyImage} room={room} badges={storyBadges} />

      <ImmersiveGallery images={galleryImages} onOpen={setActivePhoto} roomTitle={room.title} />

      <RoomHighlights highlights={highlights} />

      <AmenitiesFeatures room={room} />

      <RoomExperience
        image={experienceImage}
        highlights={unique([...room.idealFor, ...room.highlights, ...room.inclusions]).slice(0, 6)}
        room={room}
      />

      <AvailabilityPricing benefits={bookingBenefits} price={price} roomTitle={room.title} />

      <GuestReviews reviews={reviews} />

      <PoliciesFaq />

      <SimilarRooms featuredRelated={featuredRelated} supportingRelated={supportingRelated} />

      <FinalRoomCta roomTitle={room.title} />

      <MobileBookingBar price={price} roomTitle={room.title} />
      {activePhoto ? (
        <Lightbox image={activePhoto} onClose={() => setActivePhoto(null)} roomTitle={room.title} />
      ) : null}
    </main>
  );
}

function BookingWidget({
  benefits,
  price,
  roomTitle,
}: {
  benefits: string[];
  price: string;
  roomTitle: string;
}) {
  return (
    <section className="luxury-ivory-section py-10 md:py-14">
      <div className="page-shell min-w-0">
        <motion.aside
          className="rounded-xl border border-border bg-glass p-5 shadow-glass backdrop-blur-md lg:sticky lg:top-24"
          initial="hidden"
          transition={{ duration: 0.55, ease: "easeOut" }}
          variants={fadeUp}
          viewport={{ once: true, amount: 0.25 }}
          whileInView="show"
        >
          <div className="grid min-w-0 gap-5 lg:grid-cols-[0.8fr_1fr_auto] lg:items-end">
            <div className="min-w-0">
              <p className="text-caption text-text-muted">Starting Price</p>
              <p className="mt-2 text-heading-md text-text-primary">{price}</p>
              <p className="mt-2 text-body-sm text-text-secondary">{roomTitle}</p>
            </div>
            <div className="grid min-w-0 gap-4 sm:grid-cols-3">
              <BookingField label="Check In" type="date" />
              <BookingField label="Check Out" type="date" />
              <BookingField label="Guests" type="number" />
            </div>
            <Link
              className="luxury-focus brand-gradient-bg inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-4 text-center text-button"
              href="/contact"
            >
              Reserve Now
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {benefits.map((benefit) => (
              <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-body-sm text-text-secondary" key={benefit}>
                <CheckCircle2 className="size-4 text-success" aria-hidden="true" />
                {benefit}
              </span>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function RoomStory({ badges, image, room }: { badges: string[]; image: string; room: Room }) {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="page-shell grid min-w-0 items-center gap-12 lg:grid-cols-[0.46fr_0.54fr]">
        <motion.div
          initial="hidden"
          transition={{ duration: 0.55, ease: "easeOut" }}
          variants={fadeUp}
          viewport={{ once: true, amount: 0.25 }}
          whileInView="show"
        >
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Room Story
          </p>
          <h2 className="mt-5 max-w-full text-heading-lg text-text-primary sm:text-heading-xl">
            A Room Designed
            <span className="block text-brand-pink">For Comfort.</span>
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary">
            {room.title} is shaped around calm arrivals, restful nights, and
            composed mornings. It brings together refined bedding, warm service,
            and practical details for {room.idealFor.join(", ").toLowerCase()}.
          </p>
        </motion.div>

        <motion.div
          className="relative min-h-[24rem] overflow-hidden rounded-[var(--radius-footer)] shadow-lg sm:min-h-[34rem]"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Image
            alt={`${room.title} lifestyle`}
            className="size-full object-cover"
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            src={image}
          />
          <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span className="rounded-full border border-primary-foreground/18 bg-primary/32 px-4 py-3 text-body-sm text-primary-foreground backdrop-blur-md" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ImmersiveGallery({
  images,
  onOpen,
  roomTitle,
}: {
  images: string[];
  onOpen: (image: string) => void;
  roomTitle: string;
}) {
  return (
    <section className="luxury-ivory-section py-20 md:py-28">
      <div className="page-shell min-w-0">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Immersive Gallery
            </p>
            <h2 className="mt-4 text-heading-lg text-text-primary">See the room before you arrive.</h2>
          </div>
          <button
            className="luxury-focus brand-gradient-link inline-flex items-center gap-2 rounded-sm text-button text-text-primary hover:text-accent-hover"
            onClick={() => onOpen(images[0])}
            type="button"
          >
            View All Photos
            <Eye className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 grid min-w-0 gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <GalleryButton image={images[0]} index={0} onOpen={onOpen} roomTitle={roomTitle} tall />
          <div className="grid gap-4 sm:grid-cols-2">
            {images.slice(1, 5).map((image, index) => (
              <GalleryButton
                image={image}
                index={index + 1}
                key={`${image}-${index}`}
                onOpen={onOpen}
                roomTitle={roomTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryButton({
  image,
  index,
  onOpen,
  roomTitle,
  tall = false,
}: {
  image: string;
  index: number;
  onOpen: (image: string) => void;
  roomTitle: string;
  tall?: boolean;
}) {
  return (
    <button
      className={`group relative min-h-[14rem] overflow-hidden rounded-xl shadow-md sm:min-h-[17rem] ${tall ? "lg:min-h-[38rem]" : ""}`}
      onClick={() => onOpen(image)}
      type="button"
    >
      <Image
        alt={`${roomTitle} photo ${index + 1}`}
        className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.06]"
        fill
        sizes={tall ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 22vw, 50vw"}
        src={image}
      />
      <span className="absolute bottom-4 right-4 rounded-full bg-glass px-3 py-2 text-caption text-text-primary backdrop-blur-md">
        {String(index + 1).padStart(2, "0")}
      </span>
    </button>
  );
}

function RoomHighlights({ highlights }: { highlights: string[] }) {
  const icons = [BedDouble, BriefcaseBusiness, Wifi, Monitor, Soup, ConciergeBell, Sparkles];

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="page-shell min-w-0">
        <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
          Room Highlights
        </p>
        <h2 className="mt-4 max-w-[48rem] text-heading-md text-text-primary sm:text-heading-lg">
          Refined comforts, arranged with purpose.
        </h2>
        <div className="mt-10 grid gap-5 md:auto-rows-min md:grid-cols-4">
          {highlights.slice(0, 7).map((highlight, index) => {
            const Icon = icons[index] ?? Sparkles;
            const isLarge = index === 0 || index === 3;

            return (
              <motion.article
                className={`min-w-0 rounded-xl border border-border bg-card p-5 shadow-sm transition-transform duration-slow hover:-translate-y-1 hover:shadow-md sm:p-6 ${
                  isLarge ? "md:col-span-2 md:row-span-2" : ""
                }`}
                initial="hidden"
                key={highlight}
                transition={{ duration: 0.5, ease: "easeOut" }}
                variants={fadeUp}
                viewport={{ once: true, amount: 0.25 }}
                whileInView="show"
              >
                <span className="brand-gradient-border inline-flex size-12 items-center justify-center rounded-full">
                  <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
                </span>
                <h3 className={isLarge ? "mt-8 break-words text-heading-sm text-text-primary sm:text-heading-md" : "mt-5 break-words text-heading-sm text-text-primary"}>
                  {highlight}
                </h3>
                <p className="mt-3 text-body-sm text-text-secondary">
                  Thoughtfully included to make the stay feel effortless, calm,
                  and beautifully prepared.
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AmenitiesFeatures({ room }: { room: Room }) {
  const amenities = unique([...room.roomSpecificAmenities, ...room.popularAmenities]).slice(0, 8);
  const icons = [BedDouble, Bath, Soup, Wifi, Monitor, ConciergeBell, BriefcaseBusiness, Sparkles];

  return (
    <section className="luxury-dark-section py-20 md:py-28">
      <div className="page-shell min-w-0">
        <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
          Amenities & Features
        </p>
        <h2 className="mt-4 max-w-[46rem] text-heading-md text-primary-foreground sm:text-heading-lg">
          Details that quietly elevate every hour of your stay.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity, index) => {
            const Icon = icons[index] ?? Sparkles;

            return (
              <motion.article
                className="min-w-0 rounded-xl border border-primary-foreground/12 bg-primary-foreground/10 p-5 text-primary-foreground shadow-sm backdrop-blur-md transition-transform duration-slow hover:-translate-y-1"
                initial="hidden"
                key={amenity}
                transition={{ duration: 0.5, ease: "easeOut" }}
                variants={fadeUp}
                viewport={{ once: true, amount: 0.25 }}
                whileInView="show"
              >
                <Icon className="size-5 text-accent-hover" aria-hidden="true" />
                <h3 className="mt-5 break-words text-heading-sm">{amenity}</h3>
                <p className="mt-3 text-body-sm text-primary-foreground/72">
                  Prepared with attentive service and a refined sense of ease.
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RoomExperience({
  highlights,
  image,
  room,
}: {
  highlights: string[];
  image: string;
  room: Room;
}) {
  return (
    <section className="luxury-glass-section py-20 md:py-28">
      <div className="page-shell grid min-w-0 gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-stretch">
        <div className="relative min-h-[24rem] overflow-hidden rounded-[var(--radius-footer)] shadow-lg sm:min-h-[36rem]">
          <Image
            alt={`${room.title} room experience`}
            className="size-full object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={image}
          />
        </div>
        <div className="flex min-w-0 flex-col justify-center">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Room Experience
          </p>
          <h2 className="mt-5 max-w-full text-heading-lg text-text-primary sm:text-heading-xl">
            Wake up to peaceful mornings.
            <span className="block text-brand-pink">Stay surrounded by comfort.</span>
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary">
            From handcrafted comfort to thoughtfully designed interiors,
            {room.title} helps every stay feel composed, private, and warmly hosted.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li className="flex items-start gap-3 text-body-md text-text-secondary" key={item}>
                <Sparkles className="mt-1 size-4 shrink-0 text-accent-hover" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            {room.tourVideo ? (
              <Link
                className="luxury-focus brand-gradient-bg inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-center text-button"
                href={room.tourVideo}
              >
                <Play className="size-4" aria-hidden="true" />
                Watch Room Video
              </Link>
            ) : (
              <Link
                className="luxury-focus brand-gradient-bg inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-center text-button"
                href="/contact"
              >
                <Play className="size-4" aria-hidden="true" />
                360 Room Tour
              </Link>
            )}
            <Link
              className="luxury-focus brand-gradient-link inline-flex items-center gap-2 rounded-sm text-button text-text-primary hover:text-accent-hover"
              href="/contact"
            >
              Ask Concierge
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AvailabilityPricing({
  benefits,
  price,
  roomTitle,
}: {
  benefits: string[];
  price: string;
  roomTitle: string;
}) {
  return (
    <section className="luxury-ivory-section py-20 md:py-28">
      <div className="page-shell grid min-w-0 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="min-w-0">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Availability & Pricing
          </p>
          <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">Plan your stay with confidence.</h2>
          <p className="mt-6 text-body-lg text-text-secondary">
            Share your preferred dates and our team will confirm availability,
            room preferences, and the best arrangement for {roomTitle}.
          </p>
        </div>
        <div className="min-w-0 rounded-xl border border-border bg-glass p-6 shadow-glass backdrop-blur-md md:p-8">
          <p className="text-caption text-text-muted">From</p>
          <p className="mt-2 text-heading-lg text-text-primary">{price}</p>
          <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-3">
            <BookingField label="Check In" type="date" />
            <BookingField label="Check Out" type="date" />
            <BookingField label="Guests" type="number" />
          </div>
          <div className="mt-6 grid gap-3">
            {benefits.map((benefit) => (
              <p className="flex items-center gap-3 text-body-sm text-text-secondary" key={benefit}>
                <CheckCircle2 className="size-4 shrink-0 text-success" aria-hidden="true" />
                {benefit}
              </p>
            ))}
          </div>
          <Link
            className="luxury-focus brand-gradient-bg mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-button"
            href="/contact"
          >
            Reserve Now
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GuestReviews({ reviews }: { reviews: RoomReview[] }) {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="page-shell">
        <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
          Guest Reviews
        </p>
        <h2 className="mt-4 max-w-[44rem] text-heading-lg text-text-primary">
          Stays remembered for comfort and calm.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <article className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8" key={review.title}>
              <div className="flex items-center gap-4">
                <span className="brand-gradient-border inline-flex size-12 items-center justify-center rounded-full">
                  <UserRound className="brand-gradient-icon size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-body-md text-accent-hover">★★★★★</p>
                  <h3 className="text-heading-sm text-text-primary">{review.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-caption text-text-muted">{review.context}</p>
              <p className="mt-4 text-body-lg text-text-secondary">{review.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PoliciesFaq() {
  return (
    <section className="luxury-glass-section py-20 md:py-28">
      <div className="page-shell grid min-w-0 gap-10 lg:grid-cols-[0.38fr_0.62fr]">
        <div className="min-w-0">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Policies & FAQ
          </p>
          <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">Helpful details before you arrive.</h2>
          <p className="mt-6 text-body-lg text-text-secondary">
            Clear policies, thoughtful support, and simple answers for a smoother
            arrival experience.
          </p>
        </div>
        <div className="min-w-0 rounded-xl border border-border bg-card p-5 shadow-md md:p-6">
          <div className="grid gap-3">
            {houseRules.map((rule) => (
              <details className="group rounded-lg border border-border bg-surface p-5" key={rule.title}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-heading-sm text-text-primary">
                  {rule.title}
                  <ChevronDown className="size-5 transition-transform duration-base group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 text-body-sm text-text-secondary">{rule.detail}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SimilarRooms({
  featuredRelated,
  supportingRelated,
}: {
  featuredRelated?: Room;
  supportingRelated: Room[];
}) {
  return (
    <section className="luxury-ivory-section py-20 md:py-28">
      <div className="page-shell min-w-0">
        <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
          Similar Rooms
        </p>
        <h2 className="mt-4 text-heading-lg text-text-primary">Explore more ways to stay.</h2>
        <div className="mt-10 grid min-w-0 gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          {featuredRelated ? <RelatedRoomCard featured room={featuredRelated} /> : null}
          <div className="grid gap-5">
            {supportingRelated.map((item) => (
              <RelatedRoomCard key={item.slug} room={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalRoomCta({ roomTitle }: { roomTitle: string }) {
  return (
    <section className="luxury-dark-section py-20 md:py-28">
      <div className="page-shell grid min-w-0 items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div className="min-w-0 max-w-[46rem]">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            Reservations
          </p>
          <h2 className="mt-4 text-heading-md text-primary-foreground sm:text-heading-lg">
            Ready to Experience
            <span className="block">{roomTitle}?</span>
          </h2>
          <p className="mt-4 text-body-lg text-primary-foreground/72">
            Book today and enjoy elegant comfort, warm hospitality, and a
            memorable stay planned around your preferences.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            className="luxury-focus brand-gradient-bg inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-4 text-center text-button"
            href="/contact"
          >
            Book This Room
            <CalendarCheck className="size-4" aria-hidden="true" />
          </Link>
            <Link
              className="luxury-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/24 px-6 py-4 text-center text-button text-primary-foreground hover:bg-primary-foreground/10"
              href={siteContact.phoneHref}
            >
              Contact Concierge
              <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function RelatedRoomCard({ featured = false, room }: { featured?: boolean; room: Room }) {
  return (
    <Link
      className={`group min-w-0 overflow-hidden rounded-xl border border-border bg-card shadow-md transition-transform duration-slow hover:-translate-y-1 hover:shadow-lg ${
        featured ? "lg:min-h-full" : ""
      }`}
      href={`/rooms/${room.slug}`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/10] lg:aspect-[16/11]" : "aspect-[16/9]"}`}>
        <Image
          alt={`${room.title} at Hotel Sidh Vedantha`}
          className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.05]"
          fill
          sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 34vw, 100vw"}
          src={room.image}
        />
      </div>
      <div className={featured ? "min-w-0 p-6 md:p-8" : "min-w-0 p-5"}>
        <p className="text-caption text-text-muted">
          {room.size} · {room.occupancy}
        </p>
        <h3 className="mt-3 break-words text-heading-sm text-text-primary">{room.title}</h3>
        <p className="mt-3 text-body-sm text-text-secondary">{room.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-button text-accent-hover">
          Explore Room
          <ArrowRight className="size-4 transition-transform duration-base group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

function BookingField({ label, type }: { label: string; type: "date" | "number" }) {
  return (
    <label className="grid min-w-0 gap-2 text-body-sm text-text-secondary">
      {label}
      <input
        className="luxury-focus block h-14 w-full min-w-0 rounded-full border border-border bg-surface px-4 py-3 text-text-primary"
        min={type === "number" ? 1 : undefined}
        placeholder={type === "number" ? "2" : undefined}
        type={type}
      />
    </label>
  );
}

function MobileBookingBar({ price, roomTitle }: { price: string; roomTitle: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[var(--z-sticky)] border-t border-border bg-glass px-shell py-3 shadow-lg backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-caption text-text-muted">From</p>
          <p className="text-body-sm text-text-primary">{price}</p>
        </div>
        <Link
          className="luxury-focus brand-gradient-bg inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-button"
          href="/contact"
        >
          Book
          <CalendarCheck className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <p className="sr-only">Book {roomTitle}</p>
    </div>
  );
}

function Lightbox({
  image,
  onClose,
  roomTitle,
}: {
  image: string;
  onClose: () => void;
  roomTitle: string;
}) {
  return (
    <div className="fixed inset-0 z-[var(--z-modal)] grid place-items-center bg-overlay p-shell">
      <button
        className="luxury-focus absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full bg-surface text-text-primary shadow-md"
        onClick={onClose}
        type="button"
      >
        <X className="size-5" aria-hidden="true" />
        <span className="sr-only">Close gallery</span>
      </button>
      <div className="relative h-[80svh] w-full max-w-[var(--container-hero)] overflow-hidden rounded-xl shadow-lg">
        <Image alt={`${roomTitle} enlarged gallery`} className="object-contain" fill src={image} />
      </div>
    </div>
  );
}

function unique(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}
