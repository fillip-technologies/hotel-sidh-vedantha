import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

import { BanquetEnquiryForm } from "@/components/events/BanquetEnquiryForm";
import { BanquetPhotoCarousel } from "@/components/events/BanquetPhotoCarousel";
import { SelectHallLink } from "@/components/events/SelectHallLink";
import { siteContact } from "@/data/siteContact";

export const metadata: Metadata = {
  title: "Banquets & Events in Patna | Hotel Sidh Vedantha",
  description:
    "Celebrate weddings, family occasions, meetings, and corporate events at Hotel Sidh Vedantha in Patna. Share your event plans with our team.",
};

const banquetImg = (file: string) => `/images/banquet/${encodeURIComponent(`WhatsApp Image 2024-01-30 at ${file}.jpeg`)}`;
const hallImg = (file: string) => `/images/banq-2/${encodeURIComponent(`WhatsApp Image 2022-07-27 at ${file}.jpeg`)}`;

const heroImage = banquetImg("3.48.07 PM");

const venues = [
  {
    name: "Lus Crown",
    formHall: "Lus Crown",
    type: "Banquet Hall",
    area: "5,000",
    tagline: "Our grandest hall, made for big celebrations.",
    bestFor: ["Weddings", "Receptions"],
    image: banquetImg("3.48.13 PM"),
    image2: banquetImg("3.48.10 PM"),
    alt: "Lus Crown banquet hall with banquet seating and decorated stage",
  },
  {
    name: "La Imperial",
    formHall: "La Imperial",
    type: "Banquet Hall",
    area: "4,500",
    tagline: "Warm wood, soft lounges, a stage for the spotlight.",
    bestFor: ["Engagements", "Birthdays"],
    image: banquetImg("3.47.42 PM"),
    image2: banquetImg("3.47.54 PM"),
    alt: "La Imperial banquet hall with decorated stage and lounge seating",
  },
  {
    name: "Crystal Elite",
    formHall: "Crystal Elite",
    type: "Banquet Hall",
    area: "2,000",
    tagline: "Conferences, dinners and family functions.",
    bestFor: ["Conferences", "Family functions"],
    image: hallImg("1.36.37 PM"),
    image2: hallImg("1.36.39 PM"),
    alt: "Crystal Elite hall arranged with conference-style tables",
  },
  {
    name: "The Oasis",
    formHall: "The Oasis (Board Room)",
    type: "Board Room",
    area: "500",
    tagline: "A focused room for important conversations.",
    bestFor: ["Board meetings", "Presentations"],
    image: "/images/event.png",
    alt: "The Oasis board room arranged for a meeting",
  },
  {
    name: "Rooftop Terrace",
    formHall: "Rooftop Terrace",
    type: "Open-air Setup",
    area: "Open air",
    tagline: "Fairy lights, chandeliers and the open sky.",
    bestFor: ["Evening receptions", "Sangeet"],
    image: banquetImg("3.47.35 PM"),
    image2: banquetImg("3.47.36 PM (1)"),
    alt: "Rooftop terrace with chandeliers and fairy lights at night",
  },
];

const occasions = [
  { title: "Weddings & Receptions", image: banquetImg("3.47.42 PM"), alt: "Wedding reception stage in the banquet hall" },
  { title: "Engagements & Ring Ceremonies", image: banquetImg("3.47.51 PM"), alt: "Decorated stage for an engagement celebration" },
  { title: "Birthdays & Anniversaries", image: banquetImg("3.47.41 PM"), alt: "Colorful celebration backdrop and stage decor" },
  { title: "Meetings & Conferences", image: hallImg("1.36.38 PM (1)"), alt: "Meeting room prepared with a presentation screen" },
  { title: "Family Functions", image: banquetImg("3.47.54 PM"), alt: "Banquet hall arranged for a family gathering" },
];

const venueDetails = [
  { label: "Seating & layouts", detail: "Custom layouts are mentioned in the hotel's event information. Confirm the available setup for your date and guest count." },
  { label: "Food & dining", detail: "The hotel has the Norton Classic Restaurant. Ask the team which dining or menu options are available for your event." },
  { label: "Audio-visual, parking & access", detail: "Availability and arrangements are not specified here. The team can confirm these for your event." },
  { label: "Decoration", detail: "Decoration options depend on the occasion and date. Share your ideas in the enquiry form to discuss them." },
];

const faqs = [
  { question: "What types of events can be hosted?", answer: "The hotel presents its event spaces for weddings, engagements, birthdays, family occasions, meetings, and corporate events. Share your event type and requirements so the team can advise on suitability." },
  { question: "How can I enquire about a banquet booking?", answer: "Use the event enquiry form on this page. Include your phone number, event date, guest count, and any requirements you would like to discuss." },
  { question: "How do I check availability for my event date?", answer: "Submit your preferred date through the form. The hotel team will need to confirm availability directly." },
  { question: "How can I get pricing and package details?", answer: "Pricing depends on the event requirements and is not listed here. Enquire with your date and guest count to request current pricing and package details." },
  { question: "Can I discuss specific event requirements?", answer: "Yes. Add your requirements in the form and the team can discuss what may be arranged for your occasion." },
  { question: "Which halls are available?", answer: "The hotel has Lus Crown, La Imperial, Crystal Elite, and The Oasis (Board Room). Contact the team to discuss availability and event arrangements." },
];

const eyebrow = "text-caption uppercase tracking-[var(--tracking-eyebrow)] text-accent-hover";
const accent = "brand-gradient-text font-heading italic font-normal";

function Ornament({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex items-center justify-center gap-3 text-accent-hover ${className}`}>
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-accent-hover/70" />
      <span className="size-1.5 rotate-45 border border-accent-hover" />
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-accent-hover/70" />
    </span>
  );
}

const areaLabel = (area: string) => (area === "Open air" ? area : `${area} sq ft`);

export default function BanquetsEventsPage() {
  return (
    <main className="bg-background text-text-primary">
      {/* Hero: photo, then a calm intro on white */}
      <section>
        <div className="relative h-[48svh] min-h-[22rem] w-full md:h-[62svh]">
          <video
            aria-label="Banquet halls and celebration setups at Hotel Sidh Vedantha"
            autoPlay
            className="size-full object-cover object-center"
            loop
            muted
            playsInline
            poster={heroImage}
            preload="metadata"
          >
            <source src="/videos/banquet-hotel.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" />
        </div>
        <div className="page-shell relative -mt-20 pb-16 md:-mt-28 md:pb-24">
          <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-background px-4 py-10 text-center shadow-xl md:px-8 md:py-14">
            <p className={eyebrow}>Banquets & Events · Patna</p>
            <h1 className="mt-5 whitespace-nowrap font-heading text-[clamp(1.35rem,5.4vw,4rem)] font-light leading-tight">
              Celebrate your moments <span className={accent}>in style</span>
            </h1>
            <Ornament className="mt-6" />
            <p className="mx-auto mt-6 max-w-2xl text-body-lg leading-relaxed text-text-secondary">
              Four elegant halls and an open-air rooftop for weddings, ring ceremonies, birthdays and business events, on New Bypass, Patna.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link className="luxury-focus btn btn-primary" href="#event-enquiry">
                Enquire About Your Event <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <a className="luxury-focus btn btn-secondary" href={siteContact.phoneHref}>
                <Phone aria-hidden="true" className="size-4" /> {siteContact.phoneDisplay}
              </a>
              <a className="luxury-focus btn btn-secondary" href={siteContact.whatsappHref} rel="noreferrer" target="_blank">
                <MessageCircle aria-hidden="true" className="size-4" /> WhatsApp
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 divide-x divide-border border-t border-border pt-8">
              {[
                ["5", "Event spaces"],
                ["5,000 sq ft", "Largest hall"],
                ["50%", "Advance to confirm"],
              ].map(([value, label]) => (
                <div className="flex flex-col px-2" key={label}>
                  <dd className="order-1 font-heading text-xl sm:text-3xl">{value}</dd>
                  <dt className="order-2 mt-1 text-caption text-text-muted">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Occasions strip */}
      <div aria-hidden="true" className="border-y border-border bg-surface/50 py-5">
        <div className="page-shell flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-heading text-lg italic text-text-secondary md:text-2xl">
          {["Weddings", "Receptions", "Ring Ceremonies", "Birthdays", "Conferences", "Family Functions"].map((item, index) => (
            <span className="flex items-center gap-6" key={item}>
              {index > 0 && <span className="size-1.5 rotate-45 bg-accent-hover/70" />}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Venues at a glance */}
      <section className="border-y border-border bg-surface/60" aria-labelledby="glance-heading">
        <div className="page-shell py-12 md:py-16">
          <h2 className="sr-only" id="glance-heading">Venues at a glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] text-left">
              <thead>
                <tr className="border-b border-border text-caption uppercase tracking-[var(--tracking-eyebrow)] text-text-muted">
                  <th className="py-3 pr-4 font-medium">Venue</th>
                  <th className="py-3 pr-4 font-medium">Type</th>
                  <th className="py-3 pr-4 font-medium">Area</th>
                  <th className="py-3 text-right font-medium"><span className="sr-only">Action</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {venues.map((venue) => (
                  <tr key={venue.name}>
                    <td className="py-4 pr-4 font-heading text-xl">{venue.name}</td>
                    <td className="py-4 pr-4 text-body-sm text-text-secondary">{venue.type}</td>
                    <td className="py-4 pr-4 text-body-sm text-text-secondary">{areaLabel(venue.area)}</td>
                    <td className="py-4 text-right">
                      <SelectHallLink className="luxury-focus inline-flex items-center gap-1.5 text-body-sm font-medium text-accent-hover hover:underline" hall={venue.formHall}>
                        Enquire <ArrowRight aria-hidden="true" className="size-3.5" />
                      </SelectHallLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-16 md:py-24" aria-labelledby="venues-heading" id="venues">
        <div className="page-shell">
          <div className="max-w-2xl">
            <p className={eyebrow}>Our venues</p>
            <h2 className="mt-4 font-heading text-4xl font-light leading-tight sm:text-5xl" id="venues-heading">Find the space that fits <span className={accent}>your occasion</span></h2>
          </div>
          <div className="mt-12 divide-y divide-border border-t border-border">
            {venues.map((venue, index) => (
              <article className="grid gap-8 py-12 md:grid-cols-12 md:items-center md:gap-12 md:py-16" key={venue.name}>
                <div className={`relative pb-3 md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div aria-hidden="true" className={`absolute inset-0 rounded-md border border-accent-hover/50 ${index % 2 === 1 ? "-translate-x-3" : "translate-x-3"} translate-y-3`} />
                  <div className="relative aspect-[3/2] overflow-hidden rounded-md bg-surface">
                    <Image alt={venue.alt} className="size-full object-cover transition-transform duration-700 hover:scale-[1.03]" fill sizes="(min-width: 768px) 58vw, 100vw" src={venue.image} />
                  </div>
                  {venue.image2 && (
                    <div className={`absolute -bottom-6 hidden aspect-[4/3] w-1/3 overflow-hidden rounded-md border-4 border-background bg-surface shadow-lg md:block ${index % 2 === 1 ? "-left-6" : "-right-6"}`}>
                      <Image alt={`${venue.name} setup`} className="size-full object-cover" fill sizes="20vw" src={venue.image2} />
                    </div>
                  )}
                </div>
                <div className="md:col-span-5">
                  <span aria-hidden="true" className="font-heading text-6xl font-light text-accent-hover/30">{String(index + 1).padStart(2, "0")}</span>
                  <p className={`${eyebrow} mt-2`}>{venue.type}</p>
                  <h3 className="mt-3 font-heading text-3xl font-normal sm:text-4xl">{venue.name}</h3>
                  <p className="mt-3 text-body-md leading-relaxed text-text-secondary">{venue.tagline}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5">
                    <div>
                      <dt className="text-caption text-text-muted">Area</dt>
                      <dd className="mt-1 text-body-md font-medium">{areaLabel(venue.area)}</dd>
                    </div>
                    <div>
                      <dt className="text-caption text-text-muted">Ideal for</dt>
                      <dd className="mt-1 text-body-md font-medium">{venue.bestFor.join(", ")}</dd>
                    </div>
                  </dl>
                  <SelectHallLink className="luxury-focus btn btn-primary mt-6" hall={venue.formHall}>
                    Enquire about {venue.name} <ArrowRight aria-hidden="true" className="size-4" />
                  </SelectHallLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="luxury-ivory-section py-16 md:py-24" id="event-enquiry">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className={eyebrow}>Plan your event</p>
            <h2 className="mt-4 font-heading text-4xl font-light leading-tight sm:text-5xl">Tell us your date. <span className={accent}>We will take it from here.</span></h2>
            <ol className="mt-8 space-y-4 text-body-md text-text-secondary">
              {["Fill the short form: it takes about a minute.", "Our events team contacts you to confirm availability and pricing.", "Confirm your booking with a 50% advance. All major credit cards are accepted."].map((step, index) => (
                <li className="flex items-start gap-4" key={step}>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent-hover/50 text-caption text-accent-hover">{index + 1}</span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-9 border-t border-border pt-7">
              <p className="text-body-sm text-text-muted">Prefer to talk? Reach us directly.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="luxury-focus btn btn-secondary" href={siteContact.phoneHref}><Phone aria-hidden="true" className="size-4" /> {siteContact.phoneDisplay}</a>
                <a className="luxury-focus btn btn-secondary" href={siteContact.whatsappHref} rel="noreferrer" target="_blank"><MessageCircle aria-hidden="true" className="size-4" /> WhatsApp</a>
                <a className="luxury-focus btn btn-secondary" href={siteContact.emailHref}><Mail aria-hidden="true" className="size-4" /> Email</a>
              </div>
            </div>
          </div>
          <BanquetEnquiryForm />
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 md:py-24" id="celebrations" aria-labelledby="occasions-heading">
        <div className="page-shell">
          <div className="max-w-2xl">
            <p className={eyebrow}>Made for the moments</p>
            <h2 className="mt-4 font-heading text-4xl font-light leading-tight sm:text-5xl" id="occasions-heading">Occasions <span className={accent}>we host</span></h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-5">
            {occasions.map((occasion) => (
              <article key={occasion.title}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full border border-accent-hover/40 bg-surface p-1.5">
                  <div className="relative size-full overflow-hidden rounded-t-full">
                  <Image alt={occasion.alt} className="size-full object-cover" fill sizes="(min-width: 768px) 20vw, 50vw" src={occasion.image} />
                  </div>
                </div>
                <h3 className="mt-4 text-center font-heading text-lg italic leading-snug sm:text-xl">{occasion.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BanquetPhotoCarousel />

      {/* Good to know */}
      <section className="py-16 md:py-24" aria-labelledby="know-heading">
        <div className="page-shell">
          <div className="max-w-2xl">
            <p className={eyebrow}>Good to know</p>
            <h2 className="mt-4 font-heading text-4xl font-light leading-tight sm:text-5xl" id="know-heading">Details <span className={accent}>we confirm for you</span></h2>
          </div>
          <div className="mt-10 grid gap-x-12 border-t border-border md:grid-cols-2">
            {venueDetails.map((item) => (
              <div className="border-b border-border py-6" key={item.label}>
                <h3 className="text-heading-sm">{item.label}</h3>
                <p className="mt-2 text-body-sm leading-relaxed text-text-secondary">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="luxury-ivory-section py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className={eyebrow}>Helpful details</p>
            <h2 className="mt-4 font-heading text-4xl font-light leading-tight sm:text-5xl" id="faq-heading">Questions <span className={accent}>before you plan?</span></h2>
            <Link className="luxury-focus mt-6 inline-flex items-center gap-2 text-button hover:text-accent-hover" href="/contact-us">Contact Us <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details className="group py-5" key={faq.question}>
                <summary className="luxury-focus flex cursor-pointer list-none items-center justify-between gap-5 text-body-md font-medium marker:hidden">{faq.question}<span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border transition-transform group-open:rotate-45"><span aria-hidden="true">+</span></span></summary>
                <p className="max-w-2xl pb-1 pt-4 text-body-sm leading-relaxed text-text-secondary">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 text-center md:py-20">
        <div className="page-shell">
          <Ornament className="mb-6" />
          <h2 className="font-heading text-3xl font-light sm:text-4xl">Ready to plan your <span className={accent}>celebration?</span></h2>
          <Link className="luxury-focus btn btn-primary mt-7" href="#event-enquiry">Send an enquiry <ArrowRight aria-hidden="true" className="size-4" /></Link>
        </div>
      </section>
    </main>
  );
}
