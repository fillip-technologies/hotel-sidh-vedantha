import Link from "next/link";

import { AnimatedArrow } from "@/components/ui/AnimatedArrow";

type ExperienceCTAProps = {
  href: string;
  label: string;
  tone?: "light" | "dark";
};

export function ExperienceCTA({ href, label, tone = "dark" }: ExperienceCTAProps) {
  return (
    <Link
      className={`luxury-focus brand-gradient-link group inline-flex items-center gap-2 rounded-sm text-button ${
        tone === "light" ? "text-primary-foreground" : "text-text-primary"
      }`}
      href={href}
    >
      {label}
      <AnimatedArrow />
    </Link>
  );
}
