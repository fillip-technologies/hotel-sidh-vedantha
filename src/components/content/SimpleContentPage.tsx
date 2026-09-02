import Link from "next/link";

import { siteContact } from "@/data/siteContact";

type SimpleContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: {
    title: string;
    body: string;
  }[];
};

export function SimpleContentPage({
  description,
  eyebrow,
  sections,
  title,
}: Readonly<SimpleContentPageProps>) {
  return (
    <main className="bg-background text-text-primary">
      <section className="luxury-ivory-section px-shell pb-16 pt-32 md:pb-24">
        <div className="mx-auto max-w-[var(--container-readable)] text-center">
          <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-heading-xl text-text-primary sm:text-display-lg">
            {title}
          </h1>
          <p className="mt-6 text-body-lg text-text-secondary">{description}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="page-shell grid gap-5">
          {sections.map((section) => (
            <article
              className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
              key={section.title}
            >
              <h2 className="text-heading-md text-text-primary">{section.title}</h2>
              <p className="mt-4 text-body-md text-text-secondary">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="luxury-dark-section px-shell py-16 md:py-20">
        <div className="mx-auto grid max-w-[var(--container-page)] gap-6 text-primary-foreground md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Contact
            </p>
            <h2 className="mt-4 text-heading-lg">Need help from our team?</h2>
            <p className="mt-4 text-body-md text-primary-foreground/72">
              {siteContact.address} · {siteContact.phoneDisplay} · {siteContact.email}
            </p>
          </div>
          <Link
            className="luxury-focus btn btn-primary"
            href="/contact-us"
          >
            Contact Hotel
          </Link>
        </div>
      </section>
    </main>
  );
}
