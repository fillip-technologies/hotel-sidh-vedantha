import Image from "next/image";

type ExperienceImageProps = {
  alt: string;
  image: string;
  isActive: boolean;
};

export function ExperienceImage({ alt, image, isActive }: ExperienceImageProps) {
  return (
    <Image
      alt={alt}
      className={`size-full object-cover transition-transform duration-[700ms] ease-in-out ${
        isActive ? "scale-[1.08]" : "scale-100"
      }`}
      fill
      sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 86vw"
      src={image}
    />
  );
}
