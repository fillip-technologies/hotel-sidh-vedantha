import { AmenitiesSection } from "@/components/amenities";
import { FinalCTA } from "@/components/cta";
import { CelebrateEveryOccasion } from "@/components/events";
import { DiningMosaic } from "@/components/dining";
import { FAQSection } from "@/components/faq";
import { GallerySection } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { ExperienceSection, WelcomePopup } from "@/components/home";
import { BiharPlacesCarousel } from "@/components/places";
import { Rooms, RoomsShowcase } from "@/components/rooms";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <WelcomePopup />
      <Hero />
      <CelebrateEveryOccasion />
      <RoomsShowcase />
      <DiningMosaic />
       <Rooms />
       <BiharPlacesCarousel />
        <AmenitiesSection />
         <ExperienceSection />
      {/* <DiningExperience /> */}
      
      <GallerySection />
     
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
