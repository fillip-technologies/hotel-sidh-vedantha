type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  id: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  titleClassName = "text-heading-xl text-text-primary md:text-display-lg xl:text-display-xl",
}: SectionHeadingProps) {
  return (
    <div>
      <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
        {eyebrow}
      </p>
      <h2
        className={`mt-5 ${titleClassName}`}
        id={id}
      >
        {title}
      </h2>
      <p className="mt-6 text-body-lg text-text-secondary">{description}</p>
    </div>
  );
}
