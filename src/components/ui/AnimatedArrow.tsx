import { ArrowRight } from "lucide-react";

export function AnimatedArrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-4 transition-transform duration-slow group-hover:translate-x-1 group-focus-visible:translate-x-1"
    />
  );
}
