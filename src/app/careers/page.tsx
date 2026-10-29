import type { Metadata } from "next";
import Image from "next/image";

import { CareerApplicationForm } from "@/components/careers/CareerApplicationForm";
import { careerPositions } from "@/data/careerPositions";
import { siteContact } from "@/data/siteContact";

export const metadata: Metadata = {
  title: "Careers | Hotel Sidh Vedantha",
  description:
    "Explore career opportunities at Hotel Sidh Vedantha in Patna. Share your experience and apply for future opportunities with our hospitality team.",
  keywords: ["Hotel Sidh Vedantha careers", "Hotel jobs in Patna", "Hospitality careers in Patna"],
};

export default function CareersPage() {
  return (
    <main className="bg-background text-text-primary">
      <section className="relative isolate min-h-[58svh] overflow-hidden md:min-h-[72svh]">
        <Image
          alt="Hotel Sidh Vedantha, Patna"
          className="absolute inset-0 -z-10 size-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/hotel.png"
        />
        <span className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/25" />
        <span className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />
        <div className="page-shell flex min-h-[58svh] items-end pb-12 pt-32 md:min-h-[72svh] md:pb-20">
          <div className="max-w-[58rem] text-primary-foreground">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Join Our Team</p>
            <h1 className="mt-5 text-heading-xl sm:text-display-lg">Careers at Hotel Sidh Vedantha</h1>
            <p className="mt-6 max-w-[44rem] text-body-lg text-primary-foreground/82">
              We are currently welcoming applications for Chef, Housekeeping, and Service roles.
            </p>
          </div>
        </div>
      </section>

      <section className="luxury-ivory-section py-16 md:py-24">
        <div className="page-shell grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(24rem,1fr)] lg:gap-14">
          <div className="lg:col-span-2">
            <div className="max-w-[var(--container-readable)]">
              <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Current Openings</p>
              <h2 className="mt-4 text-heading-lg text-text-primary sm:text-heading-xl">Find your place on our hotel team.</h2>
              <p className="mt-5 text-body-lg text-text-secondary">
                Choose the role that best matches your experience and apply with your resume.
              </p>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {careerPositions.map((position) => (
                <article className="rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md" key={position.title}>
                  <p className="text-caption text-accent-hover">{position.department}</p>
                  <h3 className="mt-3 text-heading-sm text-text-primary">{position.title}</h3>
                </article>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">Join Our Team</p>
            <h2 className="mt-4 text-heading-lg text-text-primary">Build memorable guest experiences with us.</h2>
            <p className="mt-5 text-body-lg text-text-secondary">
              Share your details and resume. Our team can review your application for the position you select.
            </p>
            <div className="mt-7 rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-heading-sm text-text-primary">What to include</h3>
              <p className="mt-3 text-body-md text-text-secondary">
                Your full name, a phone number where we can reach you, your preferred position, and an up-to-date resume.
              </p>
            </div>
            <p className="mt-6 text-body-md text-text-secondary">
              You can also send your application to <a className="luxury-focus underline underline-offset-4" href={siteContact.careersEmailHref}>{siteContact.careersEmail}</a> or call HR at <a className="luxury-focus underline underline-offset-4" href={siteContact.careersPhoneHref}>{siteContact.careersPhoneDisplay}</a>.
            </p>
          </div>
          <CareerApplicationForm />
        </div>
      </section>
    </main>
  );
}
