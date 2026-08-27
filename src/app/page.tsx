import { AmenitiesSection } from "@/components/amenities";
import { CelebrateEveryOccasion } from "@/components/events";
import { DiningExperience } from "@/components/dining";
import { FAQSection } from "@/components/faq";
import { GallerySection } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { ExperienceSection, WelcomePopup } from "@/components/home";
import { BiharPlacesCarousel } from "@/components/places";
import { Rooms } from "@/components/rooms";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <WelcomePopup />
      <Hero />
      <CelebrateEveryOccasion />
      <DiningExperience />
      <Rooms />
      
      <AmenitiesSection />
      <BiharPlacesCarousel />
      <GallerySection />
      <ExperienceSection />
      <FAQSection />
    </main>
  );
}
