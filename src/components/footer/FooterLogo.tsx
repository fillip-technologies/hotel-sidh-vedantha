import { FooterSocial } from "./FooterSocial";
import { Logo } from "@/components/header";

export function FooterLogo() {
  return (
    <section aria-label="Hotel Sidh Vedantha">
      <Logo isScrolled />
      <div className="mt-6 inline-flex rounded-full border border-border bg-background px-4 py-2 text-caption text-text-secondary shadow-xs">
        Boutique Luxury Hotel
      </div>
      <p className="mt-6 max-w-[var(--container-narrow)] text-body-sm text-text-secondary">
        A refined stay shaped by calm design, thoughtful hospitality, and
        memorable moments in the heart of Patna.
      </p>
      <FooterSocial />
    </section>
  );
}
