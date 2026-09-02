import { CalendarCheck, HelpCircle, Phone } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "Where is Hotel Sidh Vedantha located?",
    answer:
      "Hotel Sidh Vedantha is located in Bihar with easy access for leisure stays, family visits, dining, and events.",
  },
  {
    question: "How can I book a room?",
    answer:
      "You can book through the website contact page or call the hotel team directly for availability and assistance.",
  },
  {
    question: "What types of rooms are available?",
    answer:
      "The hotel offers comfortable room categories suited for business guests, families, couples, and group stays.",
  },
  {
    question: "Is early check-in available?",
    answer:
      "Early check-in may be arranged based on room availability. Please contact the team before arrival.",
  },
  {
    question: "Can I request late check-out?",
    answer:
      "Late check-out is subject to availability and may be confirmed by the front desk during your stay.",
  },
  {
    question: "Is dining available for outside guests?",
    answer:
      "Yes, outside guests can enjoy the dining experience and reserve tables based on availability.",
  },
  {
    question: "Do you host weddings and ring ceremonies?",
    answer:
      "Yes, the event spaces can be arranged for weddings, ring ceremonies, birthdays, and family celebrations.",
  },
  {
    question: "Can business meetings be arranged at the hotel?",
    answer:
      "Yes, the team supports meetings, training sessions, corporate lunches, and formal gatherings with flexible setups.",
  },
  {
    question: "Is parking available?",
    answer:
      "Parking assistance is available for hotel guests and event visitors, subject to event size and availability.",
  },
  {
    question: "Can rooms be booked for wedding guests?",
    answer:
      "Yes, room coordination can be planned for families, wedding groups, and corporate guests.",
  },
  {
    question: "Do you help with event decoration?",
    answer:
      "Decoration and event styling support can be coordinated according to the occasion, guest count, and venue setup.",
  },
  {
    question: "Can I organize a birthday party?",
    answer:
      "Yes, birthday parties and private celebrations can be planned with dining, seating, and basic event arrangements.",
  },
  {
    question: "Are nearby attractions easy to visit?",
    answer:
      "Yes, the hotel team can guide guests toward nearby attractions and local travel options around the area.",
  },
  {
    question: "Can group dining be arranged?",
    answer:
      "Yes, group dining can be arranged for families, corporate teams, and event guests with advance coordination.",
  },
  {
    question: "Who should I contact for custom requirements?",
    answer:
      "Please call or send an enquiry through the contact page, and the team will help plan the right arrangement.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-background section-y" aria-labelledby="faq-heading">
      <div className="mx-auto w-full px-shell">
        <FadeIn className="mx-auto max-w-[var(--container-readable)] text-center">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            FAQ
          </p>
          <h2
            className="mt-5 text-heading-xl text-text-primary sm:text-display-lg"
            id="faq-heading"
          >
            <span className="block">Before You </span>
            <span className="block text-brand-pink">Plan Your Visit</span>
          </h2>
          <p className="mt-6 text-body-lg text-text-secondary">
            Quick answers for stays, dining, events, meetings, and guest
            arrangements at Hotel Sidh Vedantha.
          </p>
        </FadeIn>

        <FadeIn className="mx-auto mt-12 grid max-w-[var(--container-hero)] gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-start" delay={0.12}>
          <div className="grid gap-5">
            {faqs.map((faq) => (
              <details
                className="group rounded-lg border border-border/70 bg-surface p-6"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-heading-sm text-text-primary">
                  <span className="inline-flex items-center gap-3">
                    <HelpCircle className="size-5 shrink-0 text-accent-hover" aria-hidden="true" />
                    {faq.question}
                  </span>
                  <span className="text-brand-pink transition-transform duration-base group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-body-sm text-text-secondary">{faq.answer}</p>
              </details>
            ))}
          </div>

          <aside className="luxury-dark-section rounded-lg px-7 py-10 text-primary-foreground lg:sticky lg:top-32">
            <p className="text-caption tracking-[var(--tracking-eyebrow)] text-primary-foreground/68">
              Hotel Sidh Vedantha
            </p>
            <h3 className="mt-5 text-heading-xl">
              Ready to plan your stay, meal, or celebration?
            </h3>
            <p className="mt-5 text-body-md text-primary-foreground/75">
              Tell us what you are planning and our team will help with rooms,
              dining, meetings, and event arrangements.
            </p>
            <div className="mt-8 grid gap-4 sm:flex lg:grid">
              <Link
                className="luxury-focus btn btn-primary"
                href="/contact"
              >
                <CalendarCheck className="size-4" aria-hidden="true" />
                Start Planning
              </Link>
              <Link
                className="luxury-focus btn btn-secondary btn-secondary--invert"
                href="tel:+919876543210"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </Link>
            </div>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}
