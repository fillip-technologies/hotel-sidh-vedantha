import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  BedDouble,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ChefHat,
  ChevronDown,
  Clock,
  ConciergeBell,
  Gem,
  HeartHandshake,
  Mail,
  MapPin,
  PartyPopper,
  Phone,
  Soup,
  Sparkles,
  UsersRound,
  Utensils,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import { MasterLeadForm } from "@/components/landing/MasterLeadForm";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import {
  getLandingPageHref,
  getRelatedLandingPages,
  type LandingPageData,
  type LandingPageKind,
} from "@/data/landingPages";
import rooms from "@/data/rooms.json";
import { siteContact } from "@/data/siteContact";

const BEST_RATE = "Contact for Best Rate";

const highlightIcons: Record<LandingPageKind, LucideIcon[]> = {
  stay: [BedDouble, Utensils, PartyPopper, Wifi, MapPin, ConciergeBell],
  room: [BedDouble, Gem, Sparkles, Wifi, BriefcaseBusiness, ConciergeBell],
  event: [Gem, Sparkles, ChefHat, UsersRound, CalendarCheck, HeartHandshake],
  dining: [Soup, Utensils, ChefHat, UsersRound, PartyPopper, ConciergeBell],
};

const whyChoose = [
  "Four room categories, from Executive Rooms to the Vedantha Suite",
  "Norton Classic Restaurant for breakfast, lunch, and dinner",
  "Banquet spaces for engagements, weddings, and corporate events",
  "New Bypass location with easy access to Patna Airport",
  "Proudly affiliated with Bihar Tourism",
  "Personal service from the first call to check-out",
];

const eventSteps = [
  { title: "Share your plans", body: "Tell us the date, guest count, and style of your event." },
  { title: "Visit the venue", body: "Walk through the space with our events team." },
  { title: "Customise every detail", body: "Finalise layout, menu, decor, and guest rooms." },
  { title: "Celebrate", body: "We manage the day so you can enjoy every moment." },
];

const occasions = [
  "Engagement",
  "Ring Ceremony",
  "Wedding Reception",
  "Sangeet & Mehendi",
  "Birthday Party",
  "Anniversary",
  "Corporate Meeting",
  "Conference",
  "Family Get-together",
];

const meals = [
  { title: "Breakfast", image: "/images/brekfast.jpg", items: ["Aloo paratha with curd", "Poha", "Masala omelette", "Fresh fruit platter"] },
  { title: "Lunch", image: "/images/lunch.jpg", items: ["Paneer butter masala", "Dal tadka", "Jeera rice", "Seasonal veg thali"] },
  { title: "Dinner", image: "/images/dinner.jpg", items: ["Chicken curry", "Veg biryani", "Tandoori roti", "Chef's dessert"] },
];

export function LandingPage({ page }: Readonly<{ page: LandingPageData }>) {
  const related = getRelatedLandingPages(page);
  const pageHref = getLandingPageHref(page);
  const ctaLabel = page.ctaLabel ?? (page.kind === "event" ? "Plan My Event" : "Check Availability");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteContact.siteUrl },
      { "@type": "ListItem", position: 2, name: page.title, item: `${siteContact.siteUrl}${pageHref}` },
    ],
  };

  return (
    <main className="bg-background text-text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Hero ctaLabel={ctaLabel} page={page} />
      <QuickFacts page={page} />
      <Intro page={page} />
      <Highlights page={page} />
      <FeatureSections page={page} />

      {page.kind === "stay" || page.kind === "room" ? <RoomsBlock /> : null}
      {page.kind === "event" ? <EventBlock /> : null}
      {page.kind === "dining" ? <DiningBlock /> : null}

      <Gallery page={page} />
      <WhyChoose />
      <Faqs page={page} />
      <Enquiry ctaLabel={ctaLabel} page={page} />
      <Related pages={related} />
    </main>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">{children}</p>
  );
}

function Hero({ ctaLabel, page }: { ctaLabel: string; page: LandingPageData }) {
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden">
      <Image
        alt={`${page.title} - Hotel Sidh Vedantha`}
        className="absolute inset-0 -z-10 size-full object-cover"
        fill
        priority
        sizes="100vw"
        src={page.image}
      />
      <span className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/92 via-primary/62 to-primary/30" />
      <span className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />

      <div className="page-shell flex min-h-[88svh] items-end pb-24 pt-32 md:pb-32">
        <div className="max-w-[56rem] text-primary-foreground">
          <nav aria-label="Breadcrumb" className="text-body-sm text-primary-foreground/70">
            <Link className="luxury-focus rounded-sm hover:text-primary-foreground" href="/">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">{page.title}</span>
          </nav>
          <p className="brand-gradient-text mt-6 text-caption tracking-[var(--tracking-eyebrow)]">
            {page.eyebrow}
          </p>
          <h1 className="mt-5 text-heading-xl sm:text-display-lg">{page.title}</h1>
          <p className="mt-6 max-w-[44rem] text-body-lg text-primary-foreground/82">{page.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="luxury-focus btn btn-primary" href="#enquiry">
              {ctaLabel}
              <CalendarCheck className="size-4" aria-hidden="true" />
            </Link>
            <Link
              className="luxury-focus inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary/20 px-6 py-3 text-button text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/10"
              href={siteContact.phoneHref}
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {siteContact.phoneDisplay}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickFacts({ page }: { page: LandingPageData }) {
  const facts: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: BadgeIndianRupee, label: "Best Rate", value: BEST_RATE },
    { icon: MapPin, label: "Location", value: "New Bypass, Patna" },
    { icon: UsersRound, label: "Ideal For", value: page.audience },
    page.kind === "event"
      ? { icon: PartyPopper, label: "Venue", value: "Custom layouts, decor & catering" }
      : page.kind === "dining"
        ? { icon: Utensils, label: "Serving", value: "Breakfast, lunch & dinner" }
        : { icon: Clock, label: "Check-in / Check-out", value: "12:00 PM / 11:00 AM" },
  ];

  return (
    <section className="relative z-[var(--z-raised)] -mt-16 md:-mt-20">
      <div className="page-shell">
        <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border shadow-glass sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(({ icon: Icon, label, value }) => (
            <div className="flex min-w-0 items-start gap-4 bg-card p-5 md:p-6" key={label}>
              <span className="brand-gradient-border inline-flex size-11 shrink-0 items-center justify-center rounded-full">
                <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <dt className="text-caption text-text-muted">{label}</dt>
                <dd className="mt-1 break-words text-body-md text-text-primary">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Intro({ page }: { page: LandingPageData }) {
  const [first, second] = page.gallery.filter((image) => image !== page.image);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="page-shell grid min-w-0 items-center gap-12 lg:grid-cols-[0.5fr_0.5fr]">
        <div className="min-w-0">
          <Eyebrow>Hotel Sidh Vedantha</Eyebrow>
          <h2 className="mt-5 text-heading-lg text-text-primary sm:text-heading-xl">{page.intro.title}</h2>
          {page.intro.paragraphs.map((paragraph) => (
            <p className="mt-6 text-body-lg text-text-secondary" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-3 text-body-sm text-text-primary">
            <BadgeIndianRupee className="size-4 text-accent-hover" aria-hidden="true" />
            {BEST_RATE}: call {siteContact.phoneDisplay}
          </div>
        </div>

        <div className="relative grid min-h-[28rem] grid-cols-[0.6fr_0.4fr] gap-4 sm:min-h-[34rem]">
          <div className="relative overflow-hidden rounded-[var(--radius-footer)] shadow-lg">
            <Image
              alt={`${page.title} at Hotel Sidh Vedantha`}
              className="size-full object-cover"
              fill
              sizes="(min-width: 1024px) 30vw, 60vw"
              src={first ?? page.image}
            />
          </div>
          <div className="relative mt-12 overflow-hidden rounded-[var(--radius-footer)] shadow-lg">
            <Image
              alt={`${page.eyebrow} at Hotel Sidh Vedantha, Patna`}
              className="size-full object-cover"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              src={second ?? page.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights({ page }: { page: LandingPageData }) {
  const icons = highlightIcons[page.kind];

  return (
    <section className="luxury-ivory-section py-20 md:py-28">
      <div className="page-shell min-w-0">
        <div className="max-w-[48rem]">
          <Eyebrow>Highlights</Eyebrow>
          <h2 className="mt-4 text-heading-md text-text-primary sm:text-heading-lg">
            What you can expect at Hotel Sidh Vedantha
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.highlights.map((highlight, index) => {
            const Icon = icons[index % icons.length] ?? Sparkles;

            return (
              <article
                className="min-w-0 rounded-xl border border-border bg-card p-6 shadow-sm transition-transform duration-slow hover:-translate-y-1 hover:shadow-md"
                key={highlight.title}
              >
                <span className="brand-gradient-border inline-flex size-12 items-center justify-center rounded-full">
                  <Icon className="brand-gradient-icon size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 break-words text-heading-sm text-text-primary">{highlight.title}</h3>
                <p className="mt-3 text-body-sm text-text-secondary">{highlight.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureSections({ page }: { page: LandingPageData }) {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="page-shell grid min-w-0 gap-20 md:gap-28">
        {page.sections.map((section, index) => (
          <div
            className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            key={section.title}
          >
            <div
              className={`relative min-h-[22rem] overflow-hidden rounded-[var(--radius-footer)] shadow-lg sm:min-h-[30rem] ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                alt={section.title}
                className="size-full object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={section.image}
              />
            </div>
            <div className="min-w-0">
              <p className="text-caption tracking-[var(--tracking-eyebrow)] text-text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-heading-lg text-text-primary">{section.title}</h2>
              <p className="mt-5 text-body-lg text-text-secondary">{section.body}</p>
              <ul className="mt-8 grid gap-4">
                {section.points.map((point) => (
                  <li className="flex items-start gap-3 text-body-md text-text-secondary" key={point}>
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-success" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RoomsBlock() {
  return (
    <section className="luxury-glass-section py-20 md:py-28">
      <div className="page-shell min-w-0">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[44rem]">
            <Eyebrow>Rooms & Suites</Eyebrow>
            <h2 className="mt-4 text-heading-md text-text-primary sm:text-heading-lg">
              Choose the room that fits your stay
            </h2>
          </div>
          <Link className="luxury-focus btn btn-secondary" href="#enquiry">
            {BEST_RATE}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room) => (
            <Link
              className="group min-w-0 overflow-hidden rounded-xl border border-border bg-card shadow-md transition-transform duration-slow hover:-translate-y-1 hover:shadow-lg"
              href={`/rooms/${room.slug}`}
              key={room.slug}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  alt={`${room.title} at Hotel Sidh Vedantha, Patna`}
                  className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.05]"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  src={room.image}
                />
              </div>
              <div className="p-5">
                <p className="text-caption text-text-muted">
                  {room.size} · {room.occupancy}
                </p>
                <h3 className="mt-2 text-heading-sm text-text-primary">{room.title}</h3>
                <p className="mt-2 text-body-sm text-text-secondary">{room.bed}</p>
                <p className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4 text-body-sm text-accent-hover">
                  {BEST_RATE}
                  <ArrowRight className="size-4 transition-transform duration-base group-hover:translate-x-1" aria-hidden="true" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventBlock() {
  return (
    <section className="luxury-glass-section py-20 md:py-28">
      <div className="page-shell grid min-w-0 gap-12 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="min-w-0">
          <Eyebrow>Occasions We Host</Eyebrow>
          <h2 className="mt-4 text-heading-md text-text-primary sm:text-heading-lg">
            One venue for every celebration
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {occasions.map((occasion) => (
              <li
                className="rounded-full border border-border bg-card px-4 py-2 text-body-sm text-text-secondary"
                key={occasion}
              >
                {occasion}
              </li>
            ))}
          </ul>
        </div>
        <ol className="grid gap-5 sm:grid-cols-2">
          {eventSteps.map((step, index) => (
            <li className="rounded-xl border border-border bg-card p-6 shadow-sm" key={step.title}>
              <span className="brand-gradient-text text-heading-lg">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-heading-sm text-text-primary">{step.title}</h3>
              <p className="mt-2 text-body-sm text-text-secondary">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DiningBlock() {
  return (
    <section className="luxury-glass-section py-20 md:py-28">
      <div className="page-shell min-w-0">
        <Eyebrow>Sample Menu</Eyebrow>
        <h2 className="mt-4 text-heading-md text-text-primary sm:text-heading-lg">From morning chai to evening dinner</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {meals.map((meal) => (
            <article className="overflow-hidden rounded-xl border border-border bg-card shadow-md" key={meal.title}>
              <div className="relative aspect-[4/3]">
                <Image alt={`${meal.title} at Norton Classic Restaurant`} className="size-full object-cover" fill sizes="(min-width: 768px) 33vw, 100vw" src={meal.image} />
              </div>
              <div className="p-6">
                <h3 className="text-heading-sm text-text-primary">{meal.title}</h3>
                <ul className="mt-4 grid gap-2">
                  {meal.items.map((item) => (
                    <li className="flex items-center gap-3 text-body-sm text-text-secondary" key={item}>
                      <Sparkles className="size-4 shrink-0 text-accent-hover" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ page }: { page: LandingPageData }) {
  const images = page.gallery.slice(0, 5);

  return (
    <section className="luxury-ivory-section py-20 md:py-28">
      <div className="page-shell min-w-0">
        <Eyebrow>Gallery</Eyebrow>
        <h2 className="mt-4 text-heading-md text-text-primary sm:text-heading-lg">{page.title}: a look inside Hotel Sidh Vedantha</h2>
        <div className="mt-10 grid auto-rows-[12rem] gap-4 sm:auto-rows-[14rem] md:grid-cols-4">
          {images.map((image, index) => (
            <div
              className={`relative overflow-hidden rounded-xl shadow-md ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              key={image}
            >
              <Image
                alt={`${page.title} - Hotel Sidh Vedantha photo ${index + 1}`}
                className="size-full object-cover transition-transform duration-slow hover:scale-[1.05]"
                fill
                sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="luxury-dark-section py-20 md:py-28">
      <div className="page-shell grid min-w-0 gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
        <div className="min-w-0 text-primary-foreground">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="mt-4 text-heading-md sm:text-heading-lg">
            Why guests choose Hotel Sidh Vedantha
          </h2>
          <p className="mt-5 text-body-lg text-primary-foreground/72">
            Rooms, dining, and celebrations under one roof, with a team that
            looks after every detail of your visit to Patna.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {whyChoose.map((reason) => (
            <li
              className="flex items-start gap-3 rounded-xl border border-primary-foreground/12 bg-primary-foreground/10 p-5 text-body-md text-primary-foreground backdrop-blur-md"
              key={reason}
            >
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent-hover" aria-hidden="true" />
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faqs({ page }: { page: LandingPageData }) {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="page-shell grid min-w-0 gap-10 lg:grid-cols-[0.38fr_0.62fr]">
        <div className="min-w-0">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-heading-md text-text-primary sm:text-heading-lg">
            {page.title}: FAQs
          </h2>
          <p className="mt-5 text-body-lg text-text-secondary">
            Still unsure? Call {siteContact.phoneDisplay} and our team will help.
          </p>
        </div>
        <div className="grid gap-3">
          {page.faqs.map((faq) => (
            <details className="group rounded-lg border border-border bg-surface p-5" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-heading-sm text-text-primary">
                {faq.question}
                <ChevronDown className="size-5 shrink-0 transition-transform duration-base group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-body-md text-text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Enquiry({ ctaLabel, page }: { ctaLabel: string; page: LandingPageData }) {
  return (
    <section className="luxury-glass-section scroll-mt-24 py-20 md:py-28" id="enquiry">
      <div className="page-shell grid min-w-0 gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
        <div className="min-w-0">
          <Eyebrow>{BEST_RATE}</Eyebrow>
          <h2 className="mt-4 text-heading-lg text-text-primary sm:text-heading-xl">
            Get the best rate for your dates
          </h2>
          <p className="mt-5 text-body-lg text-text-secondary">
            Rates change with dates, room category, and guest count. Share your
            plans and our reservations team will send the best available rate.
          </p>
          <ul className="mt-8 grid gap-4">
            <ContactRow href={siteContact.phoneHref} icon={Phone} label={siteContact.phoneDisplay} />
            <ContactRow copyEmail href={siteContact.emailHref} icon={Mail} label={siteContact.email} />
            <ContactRow href={siteContact.mapsHref} icon={MapPin} label={siteContact.address} />
          </ul>
        </div>
        <MasterLeadForm context={page.title} ctaLabel={ctaLabel} />
      </div>
    </section>
  );
}

function ContactRow({
  copyEmail = false,
  href,
  icon: Icon,
  label,
}: {
  copyEmail?: boolean;
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <li className="flex items-stretch gap-2">
      <Link
        className="luxury-focus flex min-w-0 flex-1 items-start gap-4 rounded-xl border border-border bg-card p-4 text-body-md text-text-primary shadow-sm hover:border-accent-hover"
        href={href}
      >
        <Icon className="mt-0.5 size-5 shrink-0 text-accent-hover" aria-hidden="true" />
        <span className="min-w-0 break-words">{label}</span>
      </Link>
      {copyEmail && (
        <CopyEmailButton className="luxury-focus inline-flex shrink-0 items-center justify-center rounded-xl border border-border bg-card px-4 text-accent-hover shadow-sm hover:border-accent-hover" />
      )}
    </li>
  );
}

function Related({ pages }: { pages: LandingPageData[] }) {
  return (
    <section className="luxury-ivory-section py-20 md:py-28">
      <div className="page-shell min-w-0">
        <Eyebrow>Explore More</Eyebrow>
        <h2 className="mt-4 text-heading-md text-text-primary sm:text-heading-lg">More from Hotel Sidh Vedantha</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pages.map((item) => (
            <Link
              className="group min-w-0 overflow-hidden rounded-xl border border-border bg-card shadow-md transition-transform duration-slow hover:-translate-y-1 hover:shadow-lg"
              href={getLandingPageHref(item)}
              key={item.slug}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  alt={`${item.title} - Hotel Sidh Vedantha`}
                  className="size-full object-cover transition-transform duration-slow group-hover:scale-[1.05]"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={item.image}
                />
              </div>
              <div className="p-5">
                <p className="text-caption text-text-muted">{item.eyebrow}</p>
                <h3 className="mt-2 text-heading-sm text-text-primary">{item.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-button text-accent-hover">
                  Explore
                  <ArrowRight className="size-4 transition-transform duration-base group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
