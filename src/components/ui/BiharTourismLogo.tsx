import Image from "next/image";

type BiharTourismLogoProps = {
  className?: string;
};

export function BiharTourismLogo({ className = "" }: Readonly<BiharTourismLogoProps>) {
  return (
    <div className={`relative size-32 shrink-0 overflow-hidden rounded-xl border border-border bg-white p-2 shadow-md md:size-36 ${className}`}>
      <Image
        alt="Bihar Tourism logo"
        className="object-contain"
        fill
        sizes="(min-width: 768px) 9rem, 8rem"
        src="/images/bihar-tourism-logo-transparent.png"
      />
    </div>
  );
}
