import type { LucideIcon } from "lucide-react";

type ExperienceIconProps = {
  icon: LucideIcon;
};

export function ExperienceIcon({ icon: Icon }: ExperienceIconProps) {
  return (
    <span className="brand-gradient-border inline-flex size-11 items-center justify-center rounded-full border bg-surface text-accent-hover">
      <Icon className="size-5" aria-hidden="true" />
    </span>
  );
}
