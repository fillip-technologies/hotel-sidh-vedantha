import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Building2, CalendarDays, CircleHelp, Mail, MessageCircle, UtensilsCrossed } from "lucide-react";

import { BanquetEnquiryForm } from "@/components/events/BanquetEnquiryForm";
import { BanquetPhotoCarousel } from "@/components/events/BanquetPhotoCarousel";

export const metadata: Metadata = {
  title: "Banquets & Events in Patna | Hotel Sidh Vedantha",
  description:
    "Celebrate weddings, family occasions, meetings, and corporate events at Hotel Sidh Vedantha in Patna. Share your event plans with our team.",
};

const moments = [
  {
    number: "01",
    title: "Weddings & Receptions",
    description: "A memorable setting for the moments that bring everyone together.",
    image: "/images/banquet/WhatsApp%20Image%202024-01-30%20at%203.47.42%20PM.jpeg",
    alt: "Wedding reception set up in the banquet hall",
    className: "md:col-span-7",
  },
  {
    number: "02",
    title: "Birthday Parties & Anniversaries",
    description: "Bring family and friends together to mark a milestone or simply enjoy time together.",
    image: "/images/banquet/WhatsApp%20Image%202024-01-30%20at%203.47.41%20PM.jpeg",
    alt: "Colorful celebration backdrop and stage decor",
    className: "md:col-span-5 md:mt-24",
  },
  {
    number: "03",
    title: "Meetings & Conferences",
    description: "Hotel event spaces are referenced for business meetings and conferences; ask us about the right fit for your group.",
    image: "/images/banq-2/WhatsApp%20Image%202022-07-27%20at%201.36.38%20PM%20(1).jpeg",
    alt: "Meeting room prepared with a presentation screen",
    className: "md:col-span-5",
  },
  {
    number: "04",
    title: "Engagement Ceremonies",
    description: "Explore the hotel's event spaces for a ring ceremony or another meaningful celebration.",
    image: "/images/banquet/WhatsApp%20Image%202024-01-30%20at%203.47.51%20PM.jpeg",
    alt: "Decorated stage for an engagement celebration",
    className: "md:col-span-7 md:mt-24",
  },
  {
    number: "05",
    title: "Family Functions & Social Gatherings",
    description: "A hotel setting to bring your wider circle together for a shared occasion.",
    image: "/images/banquet/WhatsApp%20Image%202024-01-30%20at%203.48.07%20PM.jpeg",
    alt: "Banquet hall arranged for a family gathering",
    className: "md:col-span-7",
  },
];

const venueDetails = [
  { label: "Lus Crown", detail: "5,000 sq ft banquet hall." },
  { label: "La Imperial", detail: "4,500 sq ft banquet hall." },
  { label: "Crystal Elite", detail: "2,000 sq ft banquet hall." },
  { label: "The Oasis (Board Room)", detail: "500 sq ft board room." },
  { label: "Seating & layouts", detail: "Custom layouts are mentioned in the hotel's event information. Confirm the available setup for your date and guest count." },
  { label: "Food & dining", detail: "The hotel has the Norton Classic Restaurant. Ask the team which dining or menu options are available for your event." },
  { label: "Audio-visual, parking & access", detail: "Availability and arrangements are not specified here. The team can confirm these for your event." },
  { label: "Decoration", detail: "Decoration options depend on the occasion and date. Share your ideas in the enquiry form to discuss them." },
];

const planningSteps = [
  { number: "01", title: "Share your requirements", detail: "Tell us the occasion, date, guest count, and anything you already have in mind." },
  { number: "02", title: "Discuss the details", detail: "The hotel team can talk through your preferred date and expected attendance." },
  { number: "03", title: "Review availability & arrangements", detail: "Confirm the suitable space, available arrangements, and pricing directly with the hotel." },
  { number: "04", title: "Finalize with the team", detail: "Once the details work for you, coordinate the booking confirmation with the hotel." },
];

const faqs = [
  { question: "What types of events can be hosted?", answer: "The hotel presents its event spaces for weddings, engagements, birthdays, family occasions, meetings, and corporate events. Share your event type and requirements so the team can advise on suitability." },
  { question: "How can I enquire about a banquet booking?", answer: "Use the event enquiry form on this page. Include your phone number, event date, guest count, and any requirements you would like to discuss." },
  { question: "How do I check availability for my event date?", answer: "Submit your preferred date through the form. The hotel team will need to confirm availability directly." },
  { question: "How can I get pricing and package details?", answer: "Pricing depends on the event requirements and is not listed here. Enquire with your date and guest count to request current pricing and package details." },
  { question: "Can I discuss specific event requirements?", answer: "Yes. Add your requirements in the form and the team can discuss what may be arranged for your occasion." },
  { question: "Which halls are available?", answer: "The hotel has Lus Crown, La Imperial, Crystal Elite, and The Oasis (Board Room). Contact the team to discuss availability and event arrangements." },
];

export default function BanquetsEventsPage() {
  return (
    <main className="bg-background text-text-primary">
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-primary md:min-h-[92svh]">
        <Image
          alt="An elegant wedding reception setup at Hotel Sidh Vedantha"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/images/banquet/WhatsApp%20Image%202024-01-30%20at%203.47.35%20PM.jpeg"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1d1310]/85 via-[#1d1310]/45 to-[#1d1310]/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-background/70 to-transparent" />
        <div className="page-shell w-full pb-16 pt-36 text-primary-foreground md:pb-28 md:pt-44">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Banquets & Events · Patna</p>
          <h1 className="mt-5 max-w-4xl font-heading text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl">
            Celebrate Your Moments in Style
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-primary-foreground/85 md:mt-8 md:text-xl">
            From once-in-a-lifetime celebrations to meaningful business gatherings, let our team help bring your occasion together.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5 md:mt-11">
            <Link className="luxury-focus btn btn-primary" href="#event-enquiry">
              Enquire About Your Event <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <a className="luxury-focus inline-flex items-center gap-2 text-body-sm text-primary-foreground/90 transition-colors hover:text-white" href="https://wa.me/918092877877" rel="noreferrer" target="_blank">
              <MessageCircle aria-hidden="true" className="size-4" /> Chat on WhatsApp
            </a>
            <a className="luxury-focus inline-flex items-center gap-2 text-body-sm text-primary-foreground/90 transition-colors hover:text-white" href="#celebrations">
              Explore celebrations <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="mt-14 flex items-center gap-3 text-caption text-primary-foreground/75 md:mt-20">
            <span className="h-px w-10 bg-accent-hover" /> New Bypass, Patna
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-20 md:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Gather beautifully</p>
            <h2 className="mt-5 max-w-xl font-heading text-4xl font-light leading-tight text-text-primary sm:text-5xl md:text-6xl">
              Every occasion deserves its own kind of welcome.
            </h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-body-lg leading-relaxed text-text-secondary">
              Hotel Sidh Vedantha welcomes guests planning weddings, engagements, birthdays, family gatherings, and business events. The hotel lists banquet and meeting spaces alongside its in-house Norton Classic Restaurant. Share the occasion, date, and expected guest count, and the team can discuss which space and arrangements may suit your plans. Availability, layouts, dining options, and pricing are confirmed directly with the hotel for each enquiry.
            </p>
            <div className="mt-8 grid gap-5 border-t border-border pt-6 sm:grid-cols-3">
              <div className="flex items-start gap-3"><Building2 className="mt-1 size-5 shrink-0 text-accent-hover" aria-hidden="true" /><span className="text-body-sm text-text-secondary">Spaces for occasions and meetings</span></div>
              <div className="flex items-start gap-3"><UtensilsCrossed className="mt-1 size-5 shrink-0 text-accent-hover" aria-hidden="true" /><span className="text-body-sm text-text-secondary">Norton Classic Restaurant on site</span></div>
              <div className="flex items-start gap-3"><CalendarDays className="mt-1 size-5 shrink-0 text-accent-hover" aria-hidden="true" /><span className="text-body-sm text-text-secondary">Event details confirmed with the team</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28" aria-labelledby="venue-details-heading">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Plan with clarity</p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl" id="venue-details-heading">Venue details to discuss with us.</h2>
            <p className="mt-6 max-w-md text-body-md leading-relaxed text-text-secondary">Some event information depends on the space and date. Our team can confirm the details before you decide.</p>
            <Link className="luxury-focus mt-7 inline-flex items-center gap-2 text-button text-text-primary transition-colors hover:text-accent-hover" href="#event-enquiry">Discuss Your Requirements <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {venueDetails.map((item, index) => (
              <div className="grid gap-2 py-5 sm:grid-cols-[minmax(10rem,0.7fr)_1.3fr] sm:gap-8" key={item.label}>
                <h3 className="flex items-start gap-3 text-body-md font-medium text-text-primary"><span className="mt-0.5 text-caption text-accent-hover">0{index + 1}</span>{item.label}</h3>
                <p className="max-w-xl text-body-sm leading-relaxed text-text-secondary">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28" id="celebrations">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Made for the moments</p>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl font-light leading-tight sm:text-5xl md:text-6xl">A setting for the stories you will tell.</h2>
            </div>
            <p className="max-w-sm text-body-md leading-relaxed text-text-secondary">Tell us what you are planning and we will help you explore the right arrangement for your gathering.</p>
          </div>
          <div className="mt-12 grid gap-x-7 gap-y-12 md:grid-cols-12 md:gap-y-4 lg:mt-16">
            {moments.map((moment) => (
              <article className={`group ${moment.className}`} key={moment.number}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface md:aspect-[1.32/1]">
                  <Image alt={moment.alt} className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" fill sizes="(min-width: 768px) 55vw, 100vw" src={moment.image} />
                  <span className="absolute left-4 top-4 rounded-full bg-black/35 px-3 py-1.5 text-caption tracking-wide text-white backdrop-blur-sm">{moment.number}</span>
                </div>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-heading text-2xl font-normal text-text-primary sm:text-3xl">{moment.title}</h3>
                  <p className="max-w-sm text-body-sm leading-relaxed text-text-secondary sm:text-right">{moment.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BanquetPhotoCarousel />

      <section className="luxury-ivory-section py-20 md:py-28" aria-labelledby="planning-heading">
        <div className="page-shell">
          <div className="max-w-2xl">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">From first note to booking</p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl md:text-6xl" id="planning-heading">A clear way to start planning.</h2>
          </div>
          <ol className="mt-12 grid gap-0 border-y border-border sm:grid-cols-2 lg:grid-cols-4">
            {planningSteps.map((step, index) => (
              <li className={`relative py-7 sm:px-6 lg:py-9 ${index > 0 ? "border-t border-border sm:border-t-0 lg:border-l" : ""} ${index === 2 ? "sm:border-l" : ""}`} key={step.number}>
                <span className="flex size-10 items-center justify-center rounded-full border border-accent-hover/40 text-caption text-accent-hover">{step.number}</span>
                <h3 className="mt-5 font-heading text-2xl font-normal text-text-primary">{step.title}</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-text-secondary">{step.detail}</p>
              </li>
            ))}
          </ol>
          <Link className="luxury-focus btn btn-primary mt-8" href="#event-enquiry">Check Event Availability <ArrowRight aria-hidden="true" className="size-4" /></Link>
          <div className="mt-10 grid gap-5 rounded-xl border border-border bg-card p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <h3 className="text-heading-sm text-text-primary">Booking confirmation</h3>
              <p className="mt-2 text-body-sm leading-relaxed text-text-secondary">A 50% advance payment is required to confirm a booking. All major credit cards are accepted.</p>
            </div>
            <div>
              <h3 className="text-heading-sm text-text-primary">What to include in your enquiry</h3>
              <p className="mt-2 text-body-sm leading-relaxed text-text-secondary">Share your event date, occasion, approximate guest count, preferred hall, and any seating, dining, or decoration requests. The team can confirm availability and arrangements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28" aria-labelledby="faq-heading">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="brand-gradient-text flex items-center gap-2 text-caption tracking-[var(--tracking-eyebrow)]"><CircleHelp aria-hidden="true" className="size-4" /> Helpful details</p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl" id="faq-heading">Questions before you plan?</h2>
            <p className="mt-5 text-body-md leading-relaxed text-text-secondary">If you need details that are not listed, send us a note and the team can help confirm them.</p>
            <Link className="luxury-focus mt-7 inline-flex items-center gap-2 text-button text-text-primary transition-colors hover:text-accent-hover" href="/contact-us">Contact Us <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details className="group py-5" key={faq.question}>
                <summary className="luxury-focus flex cursor-pointer list-none items-center justify-between gap-5 text-body-md font-medium text-text-primary marker:hidden">{faq.question}<span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border transition-transform group-open:rotate-45"><span aria-hidden="true">+</span></span></summary>
                <p className="max-w-2xl pb-1 pt-4 text-body-sm leading-relaxed text-text-secondary">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-dark-section py-20 md:py-28" id="event-enquiry">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div className="text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">A thoughtful beginning</p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl md:text-6xl">Let us help plan the gathering.</h2>
            <p className="mt-6 max-w-lg text-body-lg leading-relaxed text-primary-foreground/75">Share your preferred date, guest count, and any specific requirements. The hotel team can discuss availability, suitable arrangements, and pricing with you.</p>
            <Link className="luxury-focus mt-7 inline-flex items-center gap-2 text-button text-primary-foreground transition-colors hover:text-accent-hover" href="/contact-us"><Mail aria-hidden="true" className="size-4" /> Contact Us <ArrowRight aria-hidden="true" className="size-4" /></Link>
            <div className="mt-9 hidden overflow-hidden rounded-sm lg:block">
              <div className="relative aspect-[1.45/1]">
                <Image alt="A meeting table arranged for a hotel event" className="size-full object-cover" fill sizes="40vw" src="/images/event.png" />
              </div>
            </div>
          </div>
          <BanquetEnquiryForm />
        </div>
      </section>
    </main>
  );
}
