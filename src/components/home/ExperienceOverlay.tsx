type ExperienceOverlayProps = {
  isActive: boolean;
};

export function ExperienceOverlay({ isActive }: ExperienceOverlayProps) {
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-0 bg-primary transition-opacity duration-[700ms] ease-in-out ${
        isActive ? "opacity-45" : "opacity-70"
      }`}
    />
  );
}
