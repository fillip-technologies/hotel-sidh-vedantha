import type { Metadata } from "next";

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
import { roomCardImages } from "@/data/homepageImages";

export const metadata: Metadata = {
  title: "Welcome to Hotel Sidh Vedantha – Best Hotel in Patna",
  description:
    "Experience luxury rooms, fine dining & elegant banquet spaces at Hotel Sidh Vedantha, one of the best hotels in Patna. Book your premium stay today.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <WelcomePopup />
      <Hero />
      <CelebrateEveryOccasion />
      <RoomsShowcase />
      <DiningMosaic />
       <Rooms imageOverrides={roomCardImages} />
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
