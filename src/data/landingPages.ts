export type LandingPageData = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  gallery?: string[];
  ctaLabel?: string;
  audience: string;
  highlights: string[];
  sections: {
    title: string;
    body: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const sharedHotelFaqs = [
  {
    question: "How can I book with Hotel Sidh Vedantha?",
    answer:
      "You can share your dates through the enquiry form or call our team for availability, pricing, and booking support.",
  },
  {
    question: "Is the hotel suitable for both business and family stays?",
    answer:
      "Yes, the hotel supports business travellers, families, couples, event guests, and leisure visitors with rooms, dining, and event facilities.",
  },
  {
    question: "Where is Hotel Sidh Vedantha located?",
    answer:
      "Hotel Sidh Vedantha is located at Ramkrishna Nagar, New Bypass, Patna-800027.",
  },
];

const eventFaqs = [
  {
    question: "Can the venue be customized for my event?",
    answer:
      "Yes, seating, decor, dining, and event flow can be planned according to your occasion, guest count, and preferences.",
  },
  {
    question: "Do you provide food and catering support?",
    answer:
      "Yes, our team can help plan dining and catering arrangements for celebrations, meetings, and social gatherings.",
  },
  {
    question: "Can I schedule a venue visit?",
    answer:
      "Yes, you can request a venue walkthrough through the enquiry form or by calling the hotel team.",
  },
];

export const landingPages: LandingPageData[] = [
  {
    slug: "4-star-hotels-in-patna",
    title: "4 Star Hotels in Patna",
    eyebrow: "Premium City Stays",
    description:
      "Experience refined rooms, warm hospitality, dining, events, and everyday comfort at Hotel Sidh Vedantha in Patna.",
    image: "/images/Rooms/room 4-Premium/0Z8A8929.JPG",
    gallery: [
      "/images/Rooms/room 4-Premium/0Z8A8929.JPG",
      "/images/Rooms/room 4-Premium/0Z8A8932.JPG",
      "/images/Rooms/room 3-EXecutive/0Z8A9084.JPG",
      "/images/Rooms/room 2-Club/0Z8A8891.JPG",
      "/images/Rooms/room 5-extra/0Z8A8980.JPG"
    ],
    audience: "Business travellers, families, couples, and city guests",
    highlights: [
      "Premium rooms",
      "Multi-cuisine dining",
      "Banquet and event spaces",
      "High-speed WiFi",
      "Easy city access",
      "Professional service",
    ],
    sections: [
      {
        title: "Comfort with a polished hotel experience",
        body:
          "Hotel Sidh Vedantha brings together well-appointed rooms, attentive service, and practical amenities for travellers who want comfort without unnecessary complexity.",
      },
      {
        title: "Designed for stays, dining, and celebrations",
        body:
          "From short business visits to family stays and special events, the hotel is planned to support every part of your visit with ease.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
  {
    slug: "ring-ceremony-venue-in-patna",
    title: "Ring Ceremony Venue in Patna",
    eyebrow: "Engagement Celebrations",
    description:
      "Celebrate your ring ceremony with elegant venue settings, thoughtful hospitality, curated dining, and smooth event coordination.",
    image: "/images/ring-ceremony.png",
    gallery: [
      "/images/ring-ceremony.png",
      "/images/Rooms/room 5-extra/0Z8A8990.JPG",
      "/images/Rooms/room 5-extra/0Z8A8992.JPG",
      "/images/event.png"
    ],
    audience: "Couples, families, and engagement celebrations",
    highlights: [
      "Elegant banquet setup",
      "Decor-friendly spaces",
      "Custom dining support",
      "Family seating plans",
      "Photography corners",
      "Event coordination",
    ],
    sections: [
      {
        title: "A graceful beginning to forever",
        body:
          "Our event spaces create a warm and elegant backdrop for ring ceremonies, with flexible layouts for intimate gatherings and larger family celebrations.",
      },
      {
        title: "Dining, decor, and details handled with care",
        body:
          "From menu planning to seating and ambience, the team helps shape a celebration that feels personal, polished, and memorable.",
      },
    ],
    faqs: eventFaqs,
  },
  {
    slug: "couple-friendly-hotels-in-patna",
    title: "Couple Friendly Hotels in Patna",
    eyebrow: "Private Comfortable Stays",
    description:
      "Enjoy a calm, comfortable, and welcoming stay with refined rooms, dining, privacy, and warm service in Patna.",
    image: "/images/Rooms/room 4-Premium/0Z8A8932.JPG",
    gallery: [
      "/images/Rooms/room 4-Premium/0Z8A8932.JPG",
      "/images/Rooms/room 4-Premium/0Z8A8933.JPG",
      "/images/Rooms/room 3-EXecutive/0Z8A9093.JPG",
      "/images/Rooms/room 5-extra/0Z8A8994.JPG"
    ],
    audience: "Couples and leisure travellers",
    highlights: [
      "Private rooms",
      "Warm hospitality",
      "Comfortable bedding",
      "In-room dining support",
      "Easy booking",
      "Secure environment",
    ],
    sections: [
      {
        title: "A stay that feels easy and private",
        body:
          "Hotel Sidh Vedantha offers a polished environment for couples looking for comfort, discretion, and a peaceful city stay.",
      },
      {
        title: "Dining and comfort close at hand",
        body:
          "Enjoy restful rooms, convenient service, and dining options that make the stay feel relaxed from arrival to checkout.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
  {
    slug: "best-birthday-party-venue-in-patna",
    title: "Best Birthday Party Venue in Patna",
    eyebrow: "Celebrations & Parties",
    description:
      "Host birthdays with vibrant decor, elegant dining, family-friendly layouts, and a celebration-ready venue in Patna.",
    image: "/images/birthday-celebration.png",
    gallery: [
      "/images/birthday-celebration.png",
      "/images/Rooms/room 5-extra/0Z8A8997.JPG",
      "/images/Rooms/room 5-extra/0Z8A9004.JPG",
      "/images/event.png"
    ],
    audience: "Families, friends, and birthday celebrations",
    highlights: [
      "Party-ready venue",
      "Cake ceremony setup",
      "Custom dining",
      "Decor support",
      "Family seating",
      "Photo-friendly ambience",
    ],
    sections: [
      {
        title: "Celebrate with energy and elegance",
        body:
          "Our spaces are ideal for birthdays that need a joyful setting, comfortable seating, and easy dining for guests of all ages.",
      },
      {
        title: "Designed for memorable moments",
        body:
          "From cake-cutting to family dining and music-friendly arrangements, the venue can be shaped around your celebration plan.",
      },
    ],
    faqs: eventFaqs,
  },
  {
    slug: "best-hotels-in-patna",
    title: "Best Hotels in Patna",
    eyebrow: "Stay, Dine, Celebrate",
    description:
      "Discover a complete hotel experience in Patna with elegant rooms, dining, celebrations, meetings, and warm hospitality.",
    image: "/images/Rooms/room 3-EXecutive/0Z8A9084.JPG",
    gallery: [
      "/images/Rooms/room 3-EXecutive/0Z8A9084.JPG",
      "/images/Rooms/room 4-Premium/0Z8A8929.JPG",
      "/images/Rooms/room 2-Club/0Z8A8891.JPG",
      "/images/Rooms/room 1-Suite/0Z8A8778.JPG",
      "/images/Rooms/room 5-extra/0Z8A9005.JPG"
    ],
    audience: "Families, business guests, couples, and leisure travellers",
    highlights: [
      "Elegant rooms",
      "Restaurant dining",
      "Event spaces",
      "Corporate support",
      "Nearby landmarks",
      "Helpful staff",
    ],
    sections: [
      {
        title: "More than a place to sleep",
        body:
          "Hotel Sidh Vedantha is built for guests who want comfort, service, dining, and event support in one polished destination.",
      },
      {
        title: "A practical base for Patna visits",
        body:
          "With comfortable rooms and easy access around the city, the hotel is suitable for both short visits and planned celebrations.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
  {
    slug: "book-hotel",
    title: "Book Hotel in Patna",
    eyebrow: "Reservations",
    description:
      "Book your stay at Hotel Sidh Vedantha with comfortable rooms, helpful service, dining access, and easy reservation support.",
    image: "/images/Rooms/room 3-EXecutive/0Z8A9093.JPG",
    gallery: [
      "/images/Rooms/room 3-EXecutive/0Z8A9093.JPG",
      "/images/Rooms/room 2-Club/0Z8A8896.JPG",
      "/images/Rooms/room 4-Premium/0Z8A8932.JPG",
      "/images/Rooms/room 1-Suite/0Z8A8794.JPG"
    ],
    ctaLabel: "Request Booking",
    audience: "Guests ready to reserve rooms or plan visits",
    highlights: [
      "Executive Rooms",
      "Premium Rooms",
      "Club Rooms",
      "Vedantha Suite",
      "Breakfast options",
      "Booking support",
    ],
    sections: [
      {
        title: "Reserve the right stay for your visit",
        body:
          "Share your preferred dates, guest count, and room preference. Our team will help confirm availability and the best arrangement.",
      },
      {
        title: "Comfort planned around your schedule",
        body:
          "Whether you are arriving for business, family travel, or a celebration, we help coordinate a smooth stay experience.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
  {
    slug: "best-hotels-near-patna-airport",
    title: "Best Hotels Near Patna Airport",
    eyebrow: "Convenient City Access",
    description:
      "Stay at a comfortable Patna hotel with polished rooms, dining, event spaces, and convenient travel support around the city.",
    image: "/images/Rooms/room 2-Club/0Z8A8891.JPG",
    gallery: [
      "/images/Rooms/room 2-Club/0Z8A8891.JPG",
      "/images/Rooms/room 2-Club/0Z8A8901.jpg",
      "/images/Rooms/room 3-EXecutive/0Z8A9084.JPG",
      "/images/Rooms/room 5-extra/0Z8A9007.JPG"
    ],
    audience: "Airport travellers, business guests, and short-stay visitors",
    highlights: [
      "Taxi assistance",
      "Comfortable rooms",
      "Quick bookings",
      "Restaurant dining",
      "Business-friendly stay",
      "Family rooms",
    ],
    sections: [
      {
        title: "A smoother arrival and departure",
        body:
          "For guests moving through Patna, the hotel offers comfortable rooms, practical services, and helpful travel coordination.",
      },
      {
        title: "Rest, refresh, and continue easily",
        body:
          "Enjoy a calm stay with dining, WiFi, and service support before or after your journey.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
  {
    slug: "luxury-hotels-in-patna",
    title: "Luxury Hotels in Patna",
    eyebrow: "Refined Hospitality",
    description:
      "Experience elegant interiors, thoughtful rooms, dining, celebrations, and warm service at Hotel Sidh Vedantha.",
    image: "/images/Rooms/room 1-Suite/0Z8A8778.JPG",
    gallery: [
      "/images/Rooms/room 1-Suite/0Z8A8778.JPG",
      "/images/Rooms/room 1-Suite/0Z8A8799.JPG",
      "/images/Rooms/room 4-Premium/0Z8A8929.JPG",
      "/images/Rooms/room 5-extra/0Z8A9003.JPG"
    ],
    audience: "Guests seeking premium comfort and polished service",
    highlights: [
      "Luxury ambience",
      "Premium rooms",
      "Banquet spaces",
      "Signature dining",
      "Warm service",
      "Modern amenities",
    ],
    sections: [
      {
        title: "Luxury that feels warm, not distant",
        body:
          "The hotel combines refined presentation with approachable hospitality, making every stay feel comfortable and considered.",
      },
      {
        title: "For stays, events, and special occasions",
        body:
          "From room comfort to event planning, each experience is designed to feel polished, useful, and memorable.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
  {
    slug: "best-wedding-venue-in-patna",
    title: "Best Wedding Venue in Patna",
    eyebrow: "Weddings & Receptions",
    description:
      "Plan a graceful wedding celebration with elegant venues, curated dining, hospitality support, and memorable guest experiences.",
    image: "/images/wedding.png",
    gallery: [
      "/images/wedding.png",
      "/images/Rooms/room 5-extra/0Z8A9004.JPG",
      "/images/Rooms/room 1-Suite/0Z8A8809.JPG",
      "/images/event.png"
    ],
    audience: "Couples, families, wedding planners, and reception hosts",
    highlights: [
      "Wedding banquet",
      "Reception setup",
      "Custom catering",
      "Decor planning",
      "Guest room support",
      "Venue walkthrough",
    ],
    sections: [
      {
        title: "A venue for the big moments",
        body:
          "Hotel Sidh Vedantha offers elegant event spaces for ceremonies, receptions, and family gatherings that deserve a refined setting.",
      },
      {
        title: "Hospitality for every guest",
        body:
          "From dining to room coordination and event flow, the team helps make the celebration smooth for hosts and guests alike.",
      },
    ],
    faqs: eventFaqs,
  },
  {
    slug: "norton-classic-restaurant-in-patna",
    title: "Norton Classic Restaurant in Patna",
    eyebrow: "Dining Experience",
    description:
      "Enjoy a comfortable dining experience with flavourful dishes, warm service, and a relaxed restaurant setting in Patna.",
    image: "/images/cooking.png",
    gallery: [
      "/images/cooking.png",
      "/images/Rooms/room 5-extra/0Z8A8980.JPG",
      "/images/Rooms/room 5-extra/0Z8A8990.JPG",
      "/images/background-of-sidhvedanta.png"
    ],
    audience: "Hotel guests, families, couples, and dining visitors",
    highlights: [
      "Restaurant dining",
      "Family meals",
      "Fresh preparations",
      "Comfortable seating",
      "Event dining",
      "Room service support",
    ],
    sections: [
      {
        title: "Dining that completes the stay",
        body:
          "Norton Classic Restaurant brings together comforting flavours, attentive service, and an inviting setting for guests and visitors.",
      },
      {
        title: "For meals, meetings, and celebrations",
        body:
          "Whether you are dining with family or planning food for an event, our team helps shape a satisfying experience.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
  {
    slug: "corporate-event-venue-in-patna",
    title: "Corporate Event Venue in Patna",
    eyebrow: "Meetings & Conferences",
    description:
      "Host meetings, seminars, conferences, and corporate gatherings with flexible spaces, dining, and professional support.",
    image: "/images/event.png",
    gallery: [
      "/images/event.png",
      "/images/Rooms/room 5-extra/0Z8A8992.JPG",
      "/images/Rooms/room 5-extra/0Z8A8997.JPG",
      "/images/Rooms/room 3-EXecutive/0Z8A9101.JPG"
    ],
    audience: "Companies, teams, trainers, and business hosts",
    highlights: [
      "Meeting setup",
      "Conference support",
      "Dining packages",
      "WiFi access",
      "Professional service",
      "Flexible seating",
    ],
    sections: [
      {
        title: "A focused setting for productive events",
        body:
          "Our venue supports business meetings, training sessions, conferences, and formal gatherings with practical amenities and service support.",
      },
      {
        title: "From setup to service",
        body:
          "The team helps coordinate seating, food, timing, and guest requirements so your event can run smoothly.",
      },
    ],
    faqs: eventFaqs,
  },
  {
    slug: "affordable-hotels-in-patna",
    title: "Affordable Hotels in Patna",
    eyebrow: "Value With Comfort",
    description:
      "Stay comfortably in Patna with polished rooms, practical amenities, dining, and helpful service at Hotel Sidh Vedantha.",
    image: "/images/Rooms/room 2-Club/0Z8A8896.JPG",
    gallery: [
      "/images/Rooms/room 2-Club/0Z8A8896.JPG",
      "/images/Rooms/room 2-Club/0Z8A8906.JPG",
      "/images/Rooms/room 3-EXecutive/0Z8A9116.JPG",
      "/images/Rooms/room 5-extra/0Z8A9005.JPG"
    ],
    audience: "Budget-aware guests who still want comfort",
    highlights: [
      "Comfortable rooms",
      "Good value",
      "WiFi",
      "Restaurant access",
      "Helpful service",
      "Easy booking",
    ],
    sections: [
      {
        title: "Comfort without overcomplication",
        body:
          "The hotel gives guests a balanced stay with room comfort, essential amenities, and a polished hospitality experience.",
      },
      {
        title: "A practical choice for Patna",
        body:
          "Whether travelling for work, family, or an event, guests can enjoy a stay that feels reliable and well-supported.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
  {
    slug: "hotel-facilities-in-patna",
    title: "Hotel Facilities in Patna",
    eyebrow: "Facilities & Amenities",
    description:
      "Explore rooms, dining, event spaces, WiFi, gym access, travel support, and guest services at Hotel Sidh Vedantha.",
    image: "/images/Rooms/room 5-extra/0Z8A9003.JPG",
    gallery: [
      "/images/Rooms/room 5-extra/0Z8A9003.JPG",
      "/images/Rooms/room 5-extra/0Z8A9004.JPG",
      "/images/Rooms/room 5-extra/0Z8A9007.JPG",
      "/images/Rooms/room 4-Premium/0Z8A8940.JPG"
    ],
    audience: "Guests comparing facilities before booking",
    highlights: [
      "Rooms and suites",
      "Restaurant",
      "Banquet hall",
      "Gym",
      "Taxi service",
      "High-speed WiFi",
    ],
    sections: [
      {
        title: "Facilities for complete stays",
        body:
          "Hotel Sidh Vedantha supports room stays, dining, business needs, and special events with a convenient set of guest facilities.",
      },
      {
        title: "Everything guests need close by",
        body:
          "From restaurant dining to event spaces and essential services, the hotel is planned for everyday comfort and convenience.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
  {
    slug: "premium-rooms-in-patna",
    title: "Premium Rooms in Patna",
    eyebrow: "Premium Room Stays",
    description:
      "Book premium rooms with plush bedding, elegant comfort, WiFi, dining access, and warm hospitality at Hotel Sidh Vedantha.",
    image: "/images/Rooms/room 4-Premium/0Z8A8929.JPG",
    gallery: [
      "/images/Rooms/room 4-Premium/0Z8A8929.JPG",
      "/images/Rooms/room 4-Premium/0Z8A8932.JPG",
      "/images/Rooms/room 4-Premium/0Z8A8933.JPG",
      "/images/Rooms/room 4-Premium/0Z8A8940.JPG",
      "/images/Rooms/room 5-extra/0Z8A8994.JPG"
    ],
    audience: "Couples, business guests, families, and premium stay seekers",
    highlights: [
      "Plush bedding",
      "Premium bathroom",
      "High-speed WiFi",
      "Work desk",
      "Restaurant access",
      "Daily housekeeping",
    ],
    sections: [
      {
        title: "A room made for restful stays",
        body:
          "Premium rooms offer elevated comfort, warm lighting, refined essentials, and a calm setting for business or leisure visits.",
      },
      {
        title: "Stay with confidence",
        body:
          "From in-room amenities to dining and guest support, every detail is arranged for a smoother hotel experience.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
];

export const productLandingPages: LandingPageData[] = [
  {
    slug: "vedantha-suite-single-room",
    title: "Vedantha Suite Single Room",
    eyebrow: "Suite Booking",
    description:
      "Experience the Vedantha Suite with spacious comfort, refined privacy, premium amenities, and warm hotel service.",
    image: "/images/Rooms/room 1-Suite/0Z8A8778.JPG",
    gallery: [
      "/images/Rooms/room 1-Suite/0Z8A8778.JPG",
      "/images/Rooms/room 1-Suite/0Z8A8794.JPG",
      "/images/Rooms/room 1-Suite/0Z8A8799.JPG",
      "/images/Rooms/room 1-Suite/0Z8A8809.JPG",
      "/images/Rooms/room 1-Suite/0Z8A8813.JPG",
      "/images/Rooms/room 5-extra/0Z8A9004.JPG"
    ],
    ctaLabel: "Enquire for Suite",
    audience: "Guests looking for an elevated suite stay",
    highlights: [
      "Spacious suite",
      "King-size bed",
      "Separate living area",
      "Premium toiletries",
      "High-speed WiFi",
      "Dining support",
    ],
    sections: [
      {
        title: "A suite for longer, calmer stays",
        body:
          "The Vedantha Suite is crafted for guests who prefer more room to unwind, host, and rest with added privacy.",
      },
      {
        title: "Designed for elevated comfort",
        body:
          "Enjoy premium bedding, a separate living area, refined amenities, and the hospitality support of Hotel Sidh Vedantha.",
      },
    ],
    faqs: sharedHotelFaqs,
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function getProductLandingPage(slug: string) {
  return productLandingPages.find((page) => page.slug === slug);
}
