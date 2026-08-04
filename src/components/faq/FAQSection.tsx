import { HelpCircle } from "lucide-react";

import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "Do you host weddings and ring ceremonies?",
    answer:
      "Yes, our event spaces can be arranged for weddings, ring ceremonies, birthdays, and private celebrations.",
  },
  {
    question: "Is dining available for outside guests?",
    answer:
      "Yes, guests can enjoy dining experiences and reserve tables based on availability.",
  },
  {
    question: "Can business meetings be arranged at the hotel?",
    answer:
      "Yes, we support meetings, training sessions, corporate lunches, and formal gatherings with flexible setups.",
  },
  {
    question: "Do you provide parking assistance?",
    answer:
      "Parking assistance is available for hotel guests and event visitors, subject to event size and availability.",
  },
  {
    question: "Can rooms be booked for wedding guests?",
    answer:
      "Yes, room coordination can be planned for families, wedding groups, and corporate guests.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto grid w-full gap-12 px-shell lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
        <FadeIn>
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

        <FadeIn className="grid gap-5" delay={0.12}>
          {faqs.map((faq) => (
            <details
              className="group rounded-xl border border-border bg-card p-6 shadow-sm"
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
        </FadeIn>
      </div>
    </section>
  );
}
