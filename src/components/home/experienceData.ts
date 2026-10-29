import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Car,
  ChefHat,
  Landmark,
  PartyPopper,
  Sparkles,
} from "lucide-react";

export type ExperienceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  link: {
    label: string;
    href: string;
  };
  color: string;
};

export const experienceData: ExperienceItem[] = [
  {
    id: "luxury-stay",
    title: "Luxury Stay",
    description:
      "Choose from Executive, Premium, and Club Rooms, plus the Sidh Vedantha Suite, with room details tailored to each category.",
    image: "/images/2.png",
    icon: Sparkles,
    link: {
      label: "Explore Rooms",
      href: "/rooms",
    },
    color: "brand-gradient-bg",
  },
  {
    id: "fine-dining",
    title: "Fine Dining",
    description:
      "Norton Classic Restaurant serves breakfast, lunch, and dinner at the hotel.",
    image: "/images/cooking.png",
    icon: ChefHat,
    link: {
      label: "Discover Dining",
      href: "/dining",
    },
    color: "brand-gradient-bg",
  },
  {
    id: "celebrations",
    title: "Celebrations",
    description:
      "Banquet spaces are listed for weddings, birthdays, engagements, and other family occasions. Ask the team about arrangements for your date.",
    image: "/images/2.png",
    icon: PartyPopper,
    link: {
      label: "View Events",
      href: "/best-wedding-venue-in-patna",
    },
    color: "brand-gradient-bg",
  },
  {
    id: "business-meetings",
    title: "Business Meetings",
    description:
      "The Oasis is a 500 sq ft board room for business meetings. Contact the team about availability and meeting arrangements.",
    image: "/images/nn.png",
    icon: Building2,
    link: {
      label: "Explore Meeting Spaces",
      href: "/corporate-event-venue-in-patna",
    },
    color: "brand-gradient-bg",
  },
  {
    id: "hotel-facilities",
    title: "Hotel Facilities",
    description:
      "Explore the room categories, restaurant, event spaces, and guest facilities described on the hotel's website.",
    image: "/images/hotel.png",
    icon: Landmark,
    link: {
      label: "View Facilities",
      href: "/experiences",
    },
    color: "brand-gradient-bg",
  },
  {
    id: "travel-assistance",
    title: "Travel Assistance",
    description:
      "Taxi service is listed among the room amenities. Contact the hotel to discuss current availability and arrangements.",
    image: "/images/2.png",
    icon: Car,
    link: {
      label: "Know More",
      href: "/contact-us",
    },
    color: "brand-gradient-bg",
  },
];
