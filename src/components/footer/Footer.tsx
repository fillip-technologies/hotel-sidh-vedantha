import { FooterBottom } from "./FooterBottom";
import { FooterContact } from "./FooterContact";
import { FooterLinks } from "./FooterLinks";
import { FooterLogo } from "./FooterLogo";
import rooms from "@/data/rooms.json";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Rooms", href: "/rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact-us" },
];

const accommodationLinks = [
  ...rooms.map((room) => ({ label: room.title, href: `/rooms/${room.slug}` })),
  { label: "Book Your Stay", href: "/contact-us" },
];

export function Footer() {
  return (
    <footer className="luxury-ivory-section py-section text-text-primary">
      <div className="mx-auto w-[min(100%-(var(--spacing-shell)*2),var(--container-hero))]">
        <div className="footer-brand-frame bg-surface px-shell py-section">
          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
            <FooterLogo />
            <FooterLinks title="Quick Links" links={quickLinks} />
            <FooterLinks title="Accommodation" links={accommodationLinks} />
            <FooterContact />
          </div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}
