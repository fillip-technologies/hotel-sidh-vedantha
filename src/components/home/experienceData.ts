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
      "Elegant rooms designed for peaceful nights, modern comfort, and effortless relaxation.",
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
      "Fresh ingredients, live kitchen experiences, and flavours crafted with passion.",
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
      "Beautiful venues for weddings, birthdays, ring ceremonies and unforgettable celebrations.",
    image: "/images/2.png",
    icon: PartyPopper,
    link: {
      label: "View Events",
      href: "/events",
    },
    color: "brand-gradient-bg",
  },
  {
    id: "business-meetings",
    title: "Business Meetings",
    description:
      "Professional meeting spaces designed for conferences, corporate lunches and successful collaborations.",
    image: "/images/nn.png",
    icon: Building2,
    link: {
      label: "Explore Meeting Spaces",
      href: "/meetings",
    },
    color: "brand-gradient-bg",
  },
  {
    id: "explore-patna",
    title: "Explore Patna",
    description:
      "Stay close to iconic attractions, shopping, culture, and the city's most loved destinations.",
    image: "/images/background-of-sidhvedanta.png",
    icon: Landmark,
    link: {
      label: "Discover Patna",
      href: "/patna",
    },
    color: "brand-gradient-bg",
  },
  {
    id: "travel-assistance",
    title: "Travel Assistance",
    description:
      "Airport pickup, local transportation, travel support, and seamless guest assistance.",
    image: "/images/2.png",
    icon: Car,
    link: {
      label: "Know More",
      href: "/contact",
    },
    color: "brand-gradient-bg",
  },
];
