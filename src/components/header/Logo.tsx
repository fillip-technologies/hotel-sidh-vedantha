import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  isScrolled?: boolean;
};

const logos = [
  { src: "/images/2-whitee.png", shownWhenScrolled: false },
  { src: "/images/Hotel-siddha-vedantha-orgg.png", shownWhenScrolled: true },
];

export function Logo({ isScrolled = false }: Readonly<LogoProps>) {
  return (
    <Link
      aria-label="Hotel Sidh Vedantha home"
      className="luxury-focus relative inline-flex h-[var(--size-logo-header-height)] w-[var(--size-logo-header-width)] items-center"
      href="/"
    >
      {logos.map((logo) => (
        <Image
          alt=""
          className={`object-contain object-left transition-opacity duration-[var(--duration-slow)] ${isScrolled === logo.shownWhenScrolled ? "opacity-100" : "opacity-0"
            }`}
          fill
          key={logo.src}
          priority
          sizes="192px"
          src={logo.src}
        />
      ))}
    </Link>
  );
}
