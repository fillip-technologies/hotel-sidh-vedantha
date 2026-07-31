import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  isScrolled?: boolean;
};

export function Logo({ isScrolled = false }: Readonly<LogoProps>) {
  return (
    <Link
      aria-label="Hotel Sidh Vedantha home"
      className="luxury-focus inline-flex h-[var(--size-logo-header-height)] w-[var(--size-logo-header-width)] items-center overflow-hidden"
      href="/"
    >
      <Image
        alt="Hotel Sidh Vedantha"
        className="h-full w-full object-cover object-left"
        height={850}
        priority
        src={isScrolled ? "/images/LOGO2.png" : "/images/LOGO.png"}
        width={1600}
      />
    </Link>
  );
}
