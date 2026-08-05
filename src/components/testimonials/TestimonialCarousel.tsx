"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, UserRound } from "lucide-react";

type Testimonial = {
  name: string;
  stayType: string;
  quote: string;
};

type TestimonialCarouselProps = {
  eyebrow?: string;
  title?: string;
  testimonials?: Testimonial[];
};

const defaultTestimonials: Testimonial[] = [
  {
    name: "Amit Kumar",
    stayType: "Business Stay",
    quote:
      "The room was peaceful, the service was quick, and the hotel team made my work trip feel smooth.",
  },
  {
    name: "Priya Sinha",
    stayType: "Family Celebration",
    quote:
      "Our celebration was handled beautifully. The venue, food, and hospitality felt warm and well planned.",
  },
  {
    name: "Rohit Verma",
    stayType: "Weekend Dining",
    quote:
      "The dining experience was relaxed and flavourful, with a team that paid attention to every small request.",
  },
  {
    name: "Neha Singh",
    stayType: "Wedding Guest",
    quote:
      "The banquet setup felt elegant, and the staff made the celebration comfortable for the whole family.",
  },
  {
    name: "Saurabh Jha",
    stayType: "Corporate Event",
    quote:
      "Our meeting was managed neatly with timely service, good food, and a professional environment.",
  },
  {
    name: "Anjali Sharma",
    stayType: "Family Stay",
    quote:
      "Rooms were clean, the food was comforting, and the team responded quickly whenever we needed help.",
  },
];

export function TestimonialCarousel({
  eyebrow = "Testimonials",
  testimonials = defaultTestimonials,
  title = "Guest stories that stay with us.",
}: Readonly<TestimonialCarouselProps>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = getVisibleTestimonials(testimonials, activeIndex, 4);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="page-shell text-center">
        <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
          {eyebrow}
        </p>
        <h2 className="mx-auto mt-5 max-w-[var(--container-readable)] text-heading-lg text-text-primary sm:text-heading-xl">
          {title}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleTestimonials.map((testimonial, index) => (
            <article
              className="rounded-xl border border-border bg-card p-6 text-left shadow-md"
              key={`${testimonial.name}-${activeIndex}-${index}`}
            >
              <div className="flex items-center gap-4">
                <span className="brand-gradient-border inline-flex size-12 shrink-0 items-center justify-center rounded-full">
                  <UserRound className="brand-gradient-icon size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-body-sm text-accent-hover">★★★★★</p>
                  <h3 className="text-heading-sm text-text-primary">{testimonial.name}</h3>
                  <p className="text-caption text-text-muted">{testimonial.stayType}</p>
                </div>
              </div>
              <p className="mt-6 text-body-md text-text-secondary">{testimonial.quote}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            className="luxury-focus inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-text-primary shadow-xs hover:text-accent-hover"
            onClick={goToPrevious}
            type="button"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>
          <p className="text-caption text-text-muted">
            {activeIndex + 1} / {testimonials.length}
          </p>
          <button
            aria-label="Next testimonial"
            className="luxury-focus inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-text-primary shadow-xs hover:text-accent-hover"
            onClick={goToNext}
            type="button"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function getVisibleTestimonials(
  testimonials: Testimonial[],
  startIndex: number,
  count: number,
) {
  return Array.from({ length: Math.min(count, testimonials.length) }, (_, offset) => {
    return testimonials[(startIndex + offset) % testimonials.length];
  });
}
