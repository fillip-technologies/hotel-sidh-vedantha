import { RoomDetailPage } from "@/components/rooms/RoomDetailPage";
import type { LandingPageData } from "@/data/landingPages";
import { landingPages, productLandingPages } from "@/data/landingPages";

type RoomPageContent = {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  longDescription: string;
  size: string;
  occupancy: string;
  bed: string;
  image: string;
  gallery: string[];
  highlights: string[];
  idealFor: string[];
  inclusions: string[];
  policies: string[];
  roomSpecificAmenities: string[];
  popularAmenities: string[];
  startingPrice?: string;
  bookingBenefits?: string[];
  view?: string;
  tourVideo?: string;
  reviews?: {
    title: string;
    quote: string;
    context: string;
  }[];
};

const defaultGallery = [
  "/images/2.png",
  "/images/background-of-sidhvedanta.png",
  "/images/event.png",
  "/images/cooking.png",
];

export function LandingPage({ page }: Readonly<{ page: LandingPageData }>) {
  const allPages = [...landingPages, ...productLandingPages];
  const relatedPages = allPages
    .filter((item) => item.slug !== page.slug)
    .slice(0, 3)
    .map(toRoomPageContent);

  return <RoomDetailPage room={toRoomPageContent(page)} otherRooms={relatedPages} />;
}

function toRoomPageContent(page: LandingPageData): RoomPageContent {
  const gallery = unique([page.image, ...(page.gallery ?? defaultGallery)]).slice(0, 6);

  return {
    slug: page.slug,
    title: page.title,
    shortTitle: page.title,
    description: page.description,
    longDescription: page.description,
    size: page.highlights[0] ?? "Premium Experience",
    occupancy: page.audience,
    bed: page.highlights[1] ?? "Warm Hospitality",
    image: page.image,
    gallery,
    highlights: page.highlights,
    idealFor: [page.audience],
    inclusions: page.highlights,
    policies: page.faqs.map((faq) => faq.question),
    roomSpecificAmenities: page.sections.map((section) => section.title),
    popularAmenities: page.highlights,
    startingPrice: "Contact for Best Rate",
    bookingBenefits: page.highlights.slice(0, 3),
    view: page.eyebrow,
    reviews: [
      {
        title: "Guest Experience",
        context: page.audience,
        quote: page.sections[0]?.body ?? page.description,
      },
      {
        title: "Hotel Sidh Vedantha",
        context: page.eyebrow,
        quote: page.sections[1]?.body ?? page.description,
      },
    ],
  };
}

function unique(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}
