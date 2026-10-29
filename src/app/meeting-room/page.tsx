import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CircleHelp,
  Coffee,
  LayoutPanelTop,
  Monitor,
  Presentation,
  Ruler,
  Users,
} from "lucide-react";

import { BanquetEnquiryForm } from "@/components/events/BanquetEnquiryForm";
import { MeetingRoomGallery } from "@/components/events/MeetingRoomGallery";

export const metadata: Metadata = {
  title: "Meeting Room in Patna | Hotel Sidh Vedantha",
  description:
    "Explore the Meeting Room at Hotel Sidh Vedantha in Patna. Enquire about your meeting date, attendee count, layouts, and available arrangements.",
};

const meetingTypes = [
  {
    title: "Business Meetings",
    description: "A hotel meeting-room option for focused business conversations. Share your attendee count and agenda so the team can advise on suitability.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Team Discussions",
    description: "A dedicated setting to bring colleagues together for discussion. Ask which available layout best fits your group.",
    icon: Users,
  },
  {
    title: "Client Meetings",
    description: "Meet with clients in a professional hotel setting. Confirm the date and arrangements with the team in advance.",
    icon: Users,
  },
  {
    title: "Presentations",
    description: "Projection is mentioned in the hotel's meeting information. Confirm the equipment and setup available for your date.",
    icon: Presentation,
  },
  {
    title: "Training Sessions",
    description: "The listed classroom format may suit training discussions. Share your expected attendance and session plan for confirmation.",
    icon: LayoutPanelTop,
  },
  {
    title: "Small Corporate Gatherings",
    description: "Consider the meeting room for a smaller corporate gathering and ask the hotel team to confirm the space and options.",
    icon: CalendarDays,
  },
];

const venueDetails = [
  { title: "Meeting room", detail: "The hotel identifies a dedicated Meeting Room." },
  { title: "Area", detail: "The Oasis is a 500 sq ft board room." },
  { title: "Layouts", detail: "Boardroom and classroom formats are listed. Confirm which configuration is available for your date." },
  { title: "Presentation", detail: "Projection is listed as meeting support. Please confirm the exact equipment and connection options." },
  { title: "Refreshments", detail: "Tea and lunch are mentioned in the hotel's meeting information. Confirm current menu and service arrangements." },
  { title: "Dimensions, Wi-Fi, parking & access", detail: "Specific dimensions, meeting-room Wi-Fi, parking, and accessibility details are not listed. Ask the team to confirm these." },
];

const faqs = [
  { question: "How do I check meeting room availability?", answer: "Submit your preferred meeting date and expected attendees in the enquiry form. The hotel team will confirm availability directly." },
  { question: "What arrangements are available?", answer: "Contact the team to discuss board-room arrangements and available facilities for your meeting." },
  { question: "What equipment is available?", answer: "Projection is mentioned in the hotel's meeting information. Please ask which equipment and presentation connections are available for your booking." },
  { question: "Are catering and refreshments available?", answer: "Tea and lunch are mentioned as meeting support. Share your requirements so the hotel team can confirm current options." },
  { question: "How can I get pricing and confirm a booking?", answer: "Pricing and booking terms are not listed here. Send an enquiry with your date and meeting details to discuss current options with the hotel." },
];

export default function MeetingRoomPage() {
  return (
    <main className="bg-background text-text-primary">
      <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-primary md:min-h-[88svh]">
        <Image
          alt="Meeting table and chairs arranged in the hotel's meeting room"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/images/event.png"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1d1310]/85 via-[#1d1310]/48 to-[#1d1310]/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-background/70 to-transparent" />
        <div className="page-shell w-full pb-16 pt-36 text-primary-foreground md:pb-24 md:pt-44">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Meetings at Hotel Sidh Vedantha · Patna</p>
          <h1 className="mt-5 max-w-5xl font-heading text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl">
            A Professional Space for Meaningful Meetings
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-primary-foreground/85 md:mt-8 md:text-xl">
            Bring your team, clients, or collaborators together in the hotel&apos;s dedicated Meeting Room. Share your agenda and attendee count, and the team can help confirm an appropriate setup.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 md:mt-11">
            <Link className="luxury-focus btn btn-primary" href="#meeting-enquiry">
              Enquire About the Meeting Room <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link className="luxury-focus inline-flex items-center gap-2 rounded-full border border-primary-foreground/45 px-5 py-3 text-body-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-20 md:py-28" aria-labelledby="meeting-overview-heading">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Meeting Room Overview</p>
            <h2 className="mt-5 max-w-xl font-heading text-4xl font-light leading-tight sm:text-5xl md:text-6xl" id="meeting-overview-heading">
              A considered setting for work in Patna.
            </h2>
            <p className="mt-6 max-w-xl text-body-lg leading-relaxed text-text-secondary">
              The Oasis is a 500 sq ft board room for focused business gatherings. Contact the hotel team to discuss availability, equipment, refreshments, and arrangements for your chosen date.
            </p>
            <Link className="luxury-focus mt-8 inline-flex items-center gap-2 text-button text-text-primary transition-colors hover:text-accent-hover" href="#meeting-enquiry">
              Discuss Your Requirements <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
            <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {venueDetails.map((detail, index) => {
                const Icon = [Users, LayoutPanelTop, Presentation, Monitor, Coffee, Ruler][index];
                return (
                  <article className={`p-5 md:p-6 ${index > 1 ? "sm:border-t sm:border-border" : ""} ${index % 2 === 1 ? "sm:border-l" : ""}`} key={detail.title}>
                    <Icon aria-hidden="true" className="size-5 text-accent-hover" />
                    <h3 className="mt-4 text-body-md font-medium text-text-primary">{detail.title}</h3>
                    <p className="mt-2 text-body-sm leading-relaxed text-text-secondary">{detail.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28" aria-labelledby="meeting-types-heading">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Ways to gather</p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl md:text-6xl" id="meeting-types-heading">A practical place to bring people together.</h2>
            <p className="mt-5 max-w-2xl text-body-md leading-relaxed text-text-secondary">The space may suit a range of business conversations. Share the purpose and expected group size so the hotel can advise on fit and availability.</p>
          </div>
          <div className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {meetingTypes.map(({ title, description, icon: Icon }, index) => (
              <article className="border-t border-border py-6 md:py-8" key={title}>
                <div className="flex items-center justify-between">
                  <span className="text-caption tracking-wide text-accent-hover">0{index + 1}</span>
                  <Icon aria-hidden="true" className="size-5 text-accent-hover" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-normal text-text-primary">{title}</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-text-secondary">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-20 md:py-28" aria-labelledby="meeting-gallery-heading">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">The space</p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl" id="meeting-gallery-heading">A look at the meeting room.</h2>
            <p className="mt-5 text-body-md leading-relaxed text-text-secondary">This is the meeting-room photograph currently available in the project gallery. Ask the team whether the pictured arrangement is available for your date.</p>
          </div>
          <MeetingRoomGallery />
        </div>
      </section>

      <section className="bg-background py-20 md:py-28" aria-labelledby="meeting-faq-heading">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="brand-gradient-text flex items-center gap-2 text-caption tracking-[var(--tracking-eyebrow)]"><CircleHelp aria-hidden="true" className="size-4" /> Meeting room FAQs</p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl" id="meeting-faq-heading">Before you book.</h2>
            <p className="mt-5 text-body-md leading-relaxed text-text-secondary">Have a question that is not covered here? Send it to the team with your enquiry.</p>
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

      <section className="luxury-dark-section py-20 md:py-28" id="meeting-enquiry">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div className="text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Plan your meeting</p>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl md:text-6xl">Tell us what your meeting needs.</h2>
            <p className="mt-6 max-w-lg text-body-lg leading-relaxed text-primary-foreground/75">Share the date, attendee count, meeting type, and any equipment or refreshment questions. The hotel team can confirm availability and current arrangements.</p>
            <Link className="luxury-focus mt-7 inline-flex items-center gap-2 text-button text-primary-foreground transition-colors hover:text-accent-hover" href="/contact-us">Contact Us <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <BanquetEnquiryForm mode="meeting" />
        </div>
      </section>
    </main>
  );
}
