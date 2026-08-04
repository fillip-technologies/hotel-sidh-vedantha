type FloatingGlowProps = {
  className?: string;
};

export function FloatingGlow({ className = "" }: FloatingGlowProps) {
  return (
    <span
      aria-hidden="true"
      className={`brand-gradient-fill pointer-events-none absolute rounded-full opacity-15 blur-3xl ${className}`}
    />
  );
}
