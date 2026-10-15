export type LandingPageKind = "stay" | "room" | "event" | "dining";

export type LandingPageFaq = {
  question: string;
  answer: string;
};

export type LandingPageData = {
  slug: string;
  /** Overrides the <title> tag; falls back to "{title} | Hotel Sidh Vedantha Patna". */
  metaTitle?: string;
  /** Overrides the meta description; falls back to `description`. */
  metaDescription?: string;
  title: string;
  eyebrow: string;
  description: string;
  keywords: string[];
  kind: LandingPageKind;
  image: string;
  gallery: string[];
  ctaLabel?: string;
  audience: string;
  intro: {
    title: string;
    paragraphs: string[];
  };
  highlights: {
    title: string;
    body: string;
  }[];
  sections: {
    title: string;
    body: string;
    image: string;
    points: string[];
  }[];
  faqs: LandingPageFaq[];
};

const img = {
  hotel: "/images/hotel.png",
  hero: "/images/new-hero.png",
  about: "/images/about.webp",
  team: "/images/team.webp",
  event: "/images/event.png",
  wedding: "/images/wedding.png",
  ring: "/images/ring-ceremony.png",
  birthday: "/images/birthday-celebration.png",
  cooking: "/images/cooking.png",
  breakfast: "/images/brekfast.jpg",
  lunch: "/images/lunch.jpg",
  dinner: "/images/dinner.jpg",
  suite1: "/images/Rooms/room 1-Suite/0Z8A8778.JPG",
  suite2: "/images/Rooms/room 1-Suite/0Z8A8794.JPG",
  suite3: "/images/Rooms/room 1-Suite/0Z8A8799.JPG",
  suite4: "/images/Rooms/room 1-Suite/0Z8A8809.JPG",
  suite5: "/images/Rooms/room 1-Suite/0Z8A8813.JPG",
  suite6: "/images/Rooms/room 1-Suite/0Z8A8824.JPG",
  club1: "/images/Rooms/room 2-Club/0Z8A8891.JPG",
  club2: "/images/Rooms/room 2-Club/0Z8A8896.JPG",
  club3: "/images/Rooms/room 2-Club/0Z8A8901.jpg",
  club4: "/images/Rooms/room 2-Club/0Z8A8906.JPG",
  exec1: "/images/Rooms/room 3-EXecutive/0Z8A9084.JPG",
  exec2: "/images/Rooms/room 3-EXecutive/0Z8A9093.JPG",
  exec3: "/images/Rooms/room 3-EXecutive/0Z8A9101.JPG",
  exec4: "/images/Rooms/room 3-EXecutive/0Z8A9116.JPG",
  premium1: "/images/Rooms/room 4-Premium/0Z8A8929.JPG",
  premium2: "/images/Rooms/room 4-Premium/0Z8A8932.JPG",
  premium3: "/images/Rooms/room 4-Premium/0Z8A8933.JPG",
  premium4: "/images/Rooms/room 4-Premium/0Z8A8940.JPG",
  lounge: "/images/Rooms/room 5-extra/0Z8A8980.JPG",
  twinDoor: "/images/Rooms/room 5-extra/0Z8A8990.JPG",
  seating: "/images/Rooms/room 5-extra/0Z8A8992.JPG",
  towelSwan: "/images/Rooms/room 5-extra/0Z8A8997.JPG",
  teaTray: "/images/Rooms/room 5-extra/0Z8A9003.JPG",
  workDesk: "/images/Rooms/room 5-extra/0Z8A9004.JPG",
  rosePetals: "/images/Rooms/room 5-extra/0Z8A9005.JPG",
  deskTv: "/images/Rooms/room 5-extra/0Z8A9007.JPG",
};

const rateFaq: LandingPageFaq = {
  question: "What is the room rate at Hotel Sidh Vedantha?",
  answer:
    "Rates depend on the room category, your dates, and the number of guests. Call us or send an enquiry and our reservations team will share the best available rate for your stay.",
};

const checkInFaq: LandingPageFaq = {
  question: "What are the check-in and check-out timings?",
  answer:
    "Check-in begins from 12:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be arranged subject to availability. A valid government photo ID is required at check-in.",
};

const locationFaq: LandingPageFaq = {
  question: "Where is Hotel Sidh Vedantha located?",
  answer:
    "Hotel Sidh Vedantha is at West Ramkrishna Nagar, New Bypass, Patna-800027, with easy road access to the city centre, railway stations, and Patna Airport.",
};

const venueVisitFaq: LandingPageFaq = {
  question: "Can I visit the venue before booking?",
  answer:
    "Yes. Call or send an enquiry to schedule a walkthrough. Our events team will show you the space and discuss layouts, menus, and decor for your date.",
};

const cateringFaq: LandingPageFaq = {
  question: "Do you provide food and decoration for events?",
  answer:
    "Yes. Our kitchen prepares custom menus for every event, and decor, stage, and seating can be coordinated according to your theme, guest count, and budget.",
};

const eventRateFaq: LandingPageFaq = {
  question: "What does it cost to book the venue?",
  answer:
    "Event pricing depends on the date, guest count, menu, and decor you choose. Share your requirements and we will send the best package for your celebration.",
};

export const landingPages: LandingPageData[] = [
  {
    slug: "4-star-hotels-in-patna",
    metaTitle: "4 Star Hotels in Patna at Hotel Sidh Vedantha Luxury Stay",
    metaDescription:
      "Hotel Sidh Vedantha offers a premium stay among 4 star hotels in Patna. Enjoy luxury rooms, modern amenities, and comfort for business and leisure travelers.",
    title: "4 Star Hotels in Patna",
    eyebrow: "Premium City Stays",
    description:
      "Looking for 4 star hotels in Patna? Hotel Sidh Vedantha offers refined rooms and a suite, the Norton Classic Restaurant, banquet spaces, and warm hospitality on New Bypass.",
    keywords: ["4 star hotels in Patna", "4 star hotel in Patna", "Luxury hotels in Patna", "Best hotels in Patna", "Hotels in Patna"],
    kind: "stay",
    image: img.premium1,
    gallery: [img.premium1, img.suite3, img.exec1, img.club1, img.lounge],
    audience: "Business travellers, families, couples, and wedding guests",
    intro: {
      title: "A 4 star hotel in Patna built around comfort",
      paragraphs: [
        "When you compare 4 star hotels in Patna, look beyond the room itself. Hotel Sidh Vedantha brings together well-appointed rooms and suites, in-house dining at Norton Classic Restaurant, event spaces, and attentive service at one address on New Bypass.",
        "Business travellers, families, couples, and wedding guests choose us for the same reason: a polished 4 star experience that still feels warm and personal, from the first call to check-out.",
      ],
    },
    highlights: [
      { title: "Four room categories", body: "Executive, Club, and Premium Rooms plus the Vedantha Suite, each with quality bedding and en-suite bathrooms." },
      { title: "Norton Classic Restaurant", body: "Breakfast, lunch, and dinner in-house, with Indian favourites and room-service support." },
      { title: "Banquet & event spaces", body: "Elegant venues for engagements, weddings, birthdays, and corporate meetings." },
      { title: "High-speed WiFi", body: "Reliable connectivity in rooms for work calls, streaming, and staying in touch." },
      { title: "Easy city access", body: "On New Bypass, Patna, with convenient road links to the city and the airport." },
      { title: "Attentive service", body: "A trained team for check-in, travel help, and every special request." },
    ],
    sections: [
      {
        title: "What makes a stay feel 4 star",
        body: "Quiet rooms, plush bedding, spotless bathrooms, and staff who remember your preferences. Every room is prepared to the same standard, whether you stay one night or a week.",
        image: img.premium2,
        points: ["Premium toiletries and fresh linen", "Tea and coffee setup in every room", "Work desk and smart TV"],
      },
      {
        title: "Stay, dine, and celebrate in one place",
        body: "Move from a restful room to a family dinner or a ring ceremony without leaving the hotel. That convenience makes Hotel Sidh Vedantha a practical 4 star hotel in Patna for occasions and group stays.",
        image: img.event,
        points: ["In-house multi-cuisine restaurant", "Event halls with custom layouts", "Room blocks for family and wedding guests"],
      },
    ],
    faqs: [
      {
        question: "Is Hotel Sidh Vedantha a 4 star hotel in Patna?",
        answer: "Hotel Sidh Vedantha offers a 4 star hotel experience in Patna, with premium rooms and a suite, an in-house restaurant, event spaces, and professional service.",
      },
      rateFaq,
      checkInFaq,
      locationFaq,
    ],
  },
  {
    slug: "best-hotels-in-patna",
    metaTitle: "Best Hotels in Patna | Luxury Stay at Hotel Sidh Vedantha",
    metaDescription:
      "Looking for the Best Hotels in Patna? Experience luxury rooms, delicious dining, elegant banquet halls, and exceptional hospitality at Hotel Sidh Vedantha.",
    title: "Best Hotels in Patna",
    eyebrow: "Stay, Dine, Celebrate",
    description:
      "Hotel Sidh Vedantha is one of the best hotels in Patna, with elegant rooms, Norton Classic Restaurant, event venues, corporate support, and warm hospitality.",
    keywords: ["Best hotels in Patna", "Top Hotel in Patna", "Patna Top Hotels", "Hotels in Patna", "Luxury hotels in Patna"],
    kind: "stay",
    image: img.exec1,
    gallery: [img.exec1, img.premium1, img.club1, img.suite1, img.rosePetals],
    audience: "Families, business guests, couples, and leisure travellers",
    intro: {
      title: "Why guests call us one of the best hotels in Patna",
      paragraphs: [
        "The best hotels in Patna get the basics right every time: clean, quiet rooms, good food, and staff who genuinely help. Hotel Sidh Vedantha is built on exactly that, with four room categories, Norton Classic Restaurant, and event spaces under one roof.",
        "Whether you are visiting for work, attending a family function, or planning a celebration of your own, our team shapes the stay around your schedule so you can focus on why you came to Patna.",
      ],
    },
    highlights: [
      { title: "Elegant rooms & suite", body: "Executive, Club, and Premium Rooms and the spacious Vedantha Suite." },
      { title: "Restaurant dining", body: "Norton Classic Restaurant serves breakfast, lunch, and dinner daily." },
      { title: "Event spaces", body: "Venues for engagements, weddings, birthdays, and business events." },
      { title: "Corporate support", body: "Meeting setups, WiFi, and room blocks for visiting teams." },
      { title: "Helpful staff", body: "Travel guidance, taxi assistance, and quick responses to requests." },
      { title: "Central connectivity", body: "Located on New Bypass for easy movement around the city." },
    ],
    sections: [
      {
        title: "More than a place to sleep",
        body: "For guests comparing the best hotels in Patna, Hotel Sidh Vedantha is built for those who want comfort, service, dining, and event support in one polished destination.",
        image: img.suite3,
        points: ["Spacious rooms with plush bedding", "Daily housekeeping", "Room service support"],
      },
      {
        title: "A practical base for every Patna visit",
        body: "Short business trips, family visits, and wedding stays all run more smoothly when rooms, food, and venues are in one place and the team knows your plans in advance.",
        image: img.workDesk,
        points: ["Work-friendly desks and WiFi", "Taxi and travel assistance", "Local sightseeing guidance"],
      },
    ],
    faqs: [
      {
        question: "What makes Hotel Sidh Vedantha one of the best hotels in Patna?",
        answer: "Guests value our comfortable room categories, in-house Norton Classic Restaurant, event spaces for celebrations and meetings, convenient New Bypass location, and warm, personal service.",
      },
      rateFaq,
      checkInFaq,
      locationFaq,
    ],
  },
  {
    slug: "luxury-hotels-in-patna",
    metaTitle: "Hotel Sidh Vedantha, Luxury Hotels in Patna",
    metaDescription:
      "Looking for Luxury Hotels in Patna? Hotel Sidh Vedantha offers elegant stays, premium dining, and luxury accommodation in Patna for a comfortable experience.",
    title: "Luxury Hotels in Patna",
    eyebrow: "Refined Hospitality",
    description:
      "Among luxury hotels in Patna, Hotel Sidh Vedantha offers elegant interiors, premium rooms, the Vedantha Suite, signature dining, and celebration venues with warm service.",
    keywords: ["Luxury hotels in Patna", "4 star hotels in Patna", "Best hotels in Patna", "Top Hotel in Patna"],
    kind: "stay",
    image: img.suite1,
    gallery: [img.suite1, img.suite3, img.suite5, img.premium1, img.towelSwan],
    audience: "Guests seeking premium comfort and polished service",
    intro: {
      title: "Luxury that feels warm, not distant",
      paragraphs: [
        "True luxury is in the details: soft lighting, plush bedding, a quiet room, and a team that anticipates what you need. That is the standard we set at Hotel Sidh Vedantha, one of the luxury hotels in Patna designed for both restful stays and grand occasions.",
        "From the separate living area of the Vedantha Suite to curated menus for your celebration, every experience is designed to feel refined, personal, and memorable.",
      ],
    },
    highlights: [
      { title: "Vedantha Suite", body: "A 620 sq ft suite with a king-size bed and separate living area." },
      { title: "Premium rooms", body: "Plush bedding, warm lighting, and luxurious en-suite bathrooms." },
      { title: "Signature dining", body: "Norton Classic Restaurant with Indian and multi-cuisine favourites." },
      { title: "Celebration venues", body: "Elegant spaces for engagements, weddings, and receptions." },
      { title: "Thoughtful touches", body: "Welcome amenities, premium toiletries, and turndown details." },
      { title: "Personal service", body: "A dedicated team for every request during your stay." },
    ],
    sections: [
      {
        title: "Rooms designed for slow mornings",
        body: "Rich wood finishes, calm colour palettes, and comfortable seating make every room a place to unwind. The Vedantha Suite adds space to host, work, or simply relax.",
        image: img.suite5,
        points: ["King-size beds in suites", "Premium bathroom amenities", "Smart TV and high-speed WiFi"],
      },
      {
        title: "For stays, events, and special occasions",
        body: "From room comfort to event planning, each experience is designed to feel polished and memorable, which is why families choose us for milestone celebrations in Patna.",
        image: img.wedding,
        points: ["Decor-ready banquet spaces", "Custom celebration menus", "Rooms for visiting family"],
      },
    ],
    faqs: [
      {
        question: "Is Hotel Sidh Vedantha a luxury hotel in Patna?",
        answer: "Yes. The hotel offers premium rooms, the Vedantha Suite, signature dining, and elegant event venues, with the attentive service guests expect from luxury hotels in Patna.",
      },
      rateFaq,
      checkInFaq,
      locationFaq,
    ],
  },
  {
    slug: "couple-friendly-hotels-in-patna",
    metaTitle: "Couple Friendly Hotels in Patna - Hotel Sidh Vedantha",
    metaDescription:
      "Traveling with your partner should feel peaceful and comfortable. Hotel Sidh Vedantha offers a calm stay where two adults can relax without stress.",
    title: "Couple Friendly Hotels in Patna",
    eyebrow: "Private Comfortable Stays",
    description:
      "One of the couple friendly hotels in Patna, Hotel Sidh Vedantha offers private rooms, romantic room setups, in-room dining, and discreet, respectful service.",
    keywords: ["Couple Friendly hotels in Patna", "Hotels for couples in Patna", "Hotels in Patna", "Luxury hotels in Patna"],
    kind: "stay",
    image: img.premium2,
    gallery: [img.premium2, img.rosePetals, img.towelSwan, img.suite3, img.dinner],
    audience: "Couples and leisure travellers",
    intro: {
      title: "A couple friendly hotel in Patna that respects your privacy",
      paragraphs: [
        "Finding couple friendly hotels in Patna should not be stressful. At Hotel Sidh Vedantha, couples are welcome with valid government photo ID, and our team offers the same discreet, respectful service to every guest.",
        "Choose a Premium Room or the Vedantha Suite, add a romantic room setup for an anniversary or birthday, and enjoy dinner in your room or at Norton Classic Restaurant.",
      ],
    },
    highlights: [
      { title: "Private, secure rooms", body: "Quiet rooms with secure access and discreet service." },
      { title: "Romantic room setups", body: "Rose petals, towel art, and cake arrangements on request." },
      { title: "In-room dining", body: "Enjoy meals from Norton Classic Restaurant in your room." },
      { title: "Simple check-in", body: "Couples welcome with valid government photo ID." },
      { title: "Premium comfort", body: "Plush bedding, warm lighting, and en-suite bathrooms." },
      { title: "Easy booking", body: "Call or send an enquiry for the best rate on your dates." },
    ],
    sections: [
      {
        title: "A stay that feels easy and private",
        body: "For guests searching for hotels for couples in Patna, Hotel Sidh Vedantha offers a polished environment with comfort, discretion, and a peaceful city stay.",
        image: img.rosePetals,
        points: ["Respectful, non-judgemental service", "Do-not-disturb privacy", "Secure, well-managed property"],
      },
      {
        title: "Celebrate anniversaries and birthdays",
        body: "Tell us about your occasion when you book. Our team can prepare a decorated room, arrange a cake, or plan a quiet dinner so the evening feels special.",
        image: img.towelSwan,
        points: ["Room decoration on request", "Cake and dinner arrangements", "Late check-out subject to availability"],
      },
    ],
    faqs: [
      {
        question: "Is Hotel Sidh Vedantha a couple friendly hotel in Patna?",
        answer: "Yes. Couples are welcome with valid government photo ID for both guests. Our reservations team will confirm the ID requirements when you book.",
      },
      {
        question: "Can you decorate the room for an anniversary or birthday?",
        answer: "Yes. Romantic room setups with flowers, towel art, and cake can be arranged on request. Please share your plans at least a day in advance.",
      },
      rateFaq,
      checkInFaq,
    ],
  },
  {
    slug: "best-hotels-near-patna-airport",
    metaTitle: "Best Hotels Near Patna Airport | Hotel Sidh Vedantha",
    metaDescription:
      "Looking for the best hotels near Patna Airport? Stay at Hotel Sidh Vedantha for comfortable rooms, modern amenities, warm hospitality, and easy access.",
    title: "Best Hotels Near Patna Airport",
    eyebrow: "Convenient City Access",
    description:
      "Searching for the best hotels near Patna Airport? Hotel Sidh Vedantha on New Bypass offers comfortable rooms, taxi assistance, dining, and easy airport access.",
    keywords: ["Best Hotels Near Patna Airport", "Patna Hotels Near Airport", "Hotels in Patna", "Best hotels in Patna"],
    kind: "stay",
    image: img.club1,
    gallery: [img.club1, img.club3, img.exec1, img.deskTv, img.teaTray],
    audience: "Airport travellers, business guests, and short-stay visitors",
    intro: {
      title: "A smoother arrival and departure in Patna",
      paragraphs: [
        "Flights rarely land at convenient hours. When you compare Patna hotels near airport, choose a place that makes the first and last night of your trip easy. Hotel Sidh Vedantha on New Bypass offers comfortable rooms, taxi assistance, and a team that plans around your flight times.",
        "Rest after a long journey, grab a meal at Norton Classic Restaurant, and head out refreshed for meetings, weddings, or sightseeing across Patna.",
      ],
    },
    highlights: [
      { title: "Taxi assistance", body: "Airport and station transfers arranged on request." },
      { title: "Flight-friendly timings", body: "Early check-in and late check-out subject to availability." },
      { title: "Comfortable rooms", body: "Quiet rooms with quality bedding for a proper rest." },
      { title: "Restaurant dining", body: "Hot meals at Norton Classic Restaurant or in your room." },
      { title: "Business-ready", body: "Work desks and high-speed WiFi for last-minute tasks." },
      { title: "Easy road access", body: "New Bypass location with quick links across Patna." },
    ],
    sections: [
      {
        title: "Built for travellers on a schedule",
        body: "Share your flight details when you book and our team will help with transfers, timing, and a room that is ready when you arrive.",
        image: img.deskTv,
        points: ["Taxi booking assistance", "Wake-up calls on request", "Tea and coffee setup in room"],
      },
      {
        title: "Rest, refresh, and continue easily",
        body: "For travellers comparing Patna hotels near airport, we offer comfortable rooms, practical services, and helpful travel coordination before or after your journey.",
        image: img.exec2,
        points: ["Quiet, restful rooms", "In-house restaurant", "Help with local travel plans"],
      },
    ],
    faqs: [
      {
        question: "Is Hotel Sidh Vedantha convenient for Patna Airport?",
        answer: "Yes. The hotel is on New Bypass with easy road access to Patna Airport, and our team can arrange a taxi for your arrival or departure.",
      },
      {
        question: "Can I check in early after a morning flight?",
        answer: "Early check-in is arranged based on room availability. Share your flight time while booking so we can plan for your arrival.",
      },
      rateFaq,
      locationFaq,
    ],
  },
  {
    slug: "affordable-hotels-in-patna",
    metaTitle: "Affordable Hotels in Patna | Hotel Sidh Vedantha",
    metaDescription:
      "Looking for affordable hotels in Patna? Stay at Hotel Sidh Vedantha for comfortable rooms, modern amenities, quality dining, and warm hospitality.",
    title: "Affordable Hotels in Patna",
    eyebrow: "Value With Comfort",
    description:
      "Looking for affordable hotels in Patna without giving up comfort? Hotel Sidh Vedantha offers clean rooms, WiFi, restaurant dining, and helpful service at great value.",
    keywords: ["Affordable hotels in Patna", "Hotels in Patna", "Best hotels in Patna", "Couple Friendly hotels in Patna"],
    kind: "stay",
    image: img.club2,
    gallery: [img.club2, img.club4, img.exec4, img.twinDoor, img.teaTray],
    audience: "Value-conscious guests who still want comfort",
    intro: {
      title: "Great value among hotels in Patna",
      paragraphs: [
        "Affordable should never mean uncomfortable. Hotel Sidh Vedantha offers clean, well-kept rooms, reliable WiFi, and an in-house restaurant, so you get a dependable hotel stay in Patna at a fair price.",
        "Our Club Rooms with twin beds are a popular choice for friends, colleagues, and families, and extra beds can be arranged for larger groups.",
      ],
    },
    highlights: [
      { title: "Club Rooms", body: "Twin-bed rooms with tea and coffee makers and extra-bed options." },
      { title: "Clean & well kept", body: "Daily housekeeping and fresh linen throughout your stay." },
      { title: "High-speed WiFi", body: "Stay connected for work and entertainment at no fuss." },
      { title: "Restaurant access", body: "Affordable meals at Norton Classic Restaurant." },
      { title: "Group friendly", body: "Room blocks for families, teams, and wedding guests." },
      { title: "Best rate on call", body: "Speak to reservations for the best rate on your dates." },
    ],
    sections: [
      {
        title: "Comfort without overspending",
        body: "Every room includes the essentials that matter: comfortable beds, a clean bathroom, WiFi, and tea and coffee, so your budget goes further without compromising on rest.",
        image: img.club4,
        points: ["Twin or double bedding", "Tea and coffee maker", "Extra bed on request"],
      },
      {
        title: "A practical choice for Patna",
        body: "Whether travelling for work, family, or an event, guests enjoy a stay that feels reliable, well-supported, and conveniently located on New Bypass.",
        image: img.exec4,
        points: ["Taxi assistance", "Helpful front desk", "Easy access across the city"],
      },
    ],
    faqs: [
      {
        question: "Which is the most affordable room at Hotel Sidh Vedantha?",
        answer: "Our Club Rooms are a popular value choice with twin beds and essential amenities. Contact us for the best rate on your dates.",
      },
      rateFaq,
      checkInFaq,
      locationFaq,
    ],
  },
  {
    slug: "hotel-facilities-in-patna",
    metaTitle: "Best Hotel Facilities in Patna | Hotel Sidh Vedantha",
    metaDescription:
      "Discover the Best Hotel Facilities in Patna at Hotel Sidh Vedantha, with luxury rooms, free Wi-Fi, parking, gym, restaurant, room service, and modern amenities.",
    title: "Hotel Facilities in Patna",
    eyebrow: "Facilities & Amenities",
    description:
      "Explore hotel facilities in Patna at Hotel Sidh Vedantha: rooms and suites, Norton Classic Restaurant, banquet halls, high-speed WiFi, gym, taxi service, and guest support.",
    keywords: ["Hotel facilities in Patna", "Hotels in Patna", "4 star hotels in Patna", "Best Hotels for Corporate Events in Patna"],
    kind: "stay",
    image: img.teaTray,
    gallery: [img.teaTray, img.workDesk, img.deskTv, img.premium4, img.event],
    audience: "Guests comparing facilities before booking",
    intro: {
      title: "Everything you need, under one roof",
      paragraphs: [
        "Good hotel facilities in Patna make a stay effortless. At Hotel Sidh Vedantha, rooms, dining, event spaces, and guest services are planned together so you rarely need to step out unless you want to.",
        "Here is what you can expect during your stay, whether you are visiting for business, a family function, or a weekend break.",
      ],
    },
    highlights: [
      { title: "Rooms & suites", body: "Executive, Club, Premium Rooms and the Vedantha Suite." },
      { title: "Norton Classic Restaurant", body: "Multi-cuisine dining with breakfast, lunch, and dinner." },
      { title: "Banquet halls", body: "Event spaces for weddings, engagements, and conferences." },
      { title: "Gym", body: "Keep up your fitness routine while you travel." },
      { title: "Taxi service", body: "Airport, station, and city travel arranged on request." },
      { title: "High-speed WiFi", body: "Reliable internet for work calls and streaming." },
    ],
    sections: [
      {
        title: "In-room facilities",
        body: "Every room is set up for comfort and practicality, with amenities that work for both business travellers and families.",
        image: img.deskTv,
        points: ["Work desk and ergonomic chair", "Smart TV and mini fridge", "Tea and coffee maker with refreshments"],
      },
      {
        title: "Facilities for events and business",
        body: "Our banquet and meeting spaces come with seating layouts, catering, and coordination support for celebrations and corporate gatherings.",
        image: img.event,
        points: ["Flexible seating layouts", "In-house catering", "Room blocks for event guests"],
      },
    ],
    faqs: [
      {
        question: "What facilities does Hotel Sidh Vedantha offer?",
        answer: "Guests enjoy four room categories, Norton Classic Restaurant, banquet and meeting spaces, high-speed WiFi, gym access, taxi assistance, room service support, and daily housekeeping.",
      },
      rateFaq,
      checkInFaq,
      locationFaq,
    ],
  },
  {
    slug: "book-hotel",
    title: "Book Hotel in Patna",
    eyebrow: "Reservations",
    description:
      "Book your hotel in Patna directly with Hotel Sidh Vedantha. Choose from Executive, Club, Premium Rooms and the Vedantha Suite, and contact us for the best rate.",
    keywords: ["Book hotel in Patna", "Hotels in Patna", "Best hotels in Patna", "Luxury hotels in Patna"],
    kind: "stay",
    image: img.exec2,
    gallery: [img.exec2, img.club2, img.premium2, img.suite2, img.lounge],
    ctaLabel: "Request Booking",
    audience: "Guests ready to reserve rooms or plan visits",
    intro: {
      title: "Book directly for the best rate",
      paragraphs: [
        "Booking a hotel in Patna directly with us is the simplest way to get the best rate and the right room. Share your dates, guest count, and room preference, and our reservations team will confirm availability quickly.",
        "Direct guests also get personal help with early check-in, airport transfers, extra beds, and special occasions.",
      ],
    },
    highlights: [
      { title: "Executive Rooms", body: "380 sq ft with a king-size bed, ideal for business stays." },
      { title: "Club Rooms", body: "340 sq ft with two single beds and extra-bed options." },
      { title: "Premium Rooms", body: "420 sq ft with plush bedding and a refined ambience." },
      { title: "Vedantha Suite", body: "620 sq ft with a king bed and separate living area." },
      { title: "Breakfast options", body: "Add breakfast at Norton Classic Restaurant to your stay." },
      { title: "Booking support", body: "Talk to a real person for dates, rates, and requests." },
    ],
    sections: [
      {
        title: "Reserve the right stay for your visit",
        body: "Tell us why you are travelling and we will suggest the room that fits: a quiet Executive Room for work, a Club Room for friends, or the Vedantha Suite for a special stay.",
        image: img.suite2,
        points: ["Quick availability confirmation", "Best rate on direct booking", "Flexible support for changes"],
      },
      {
        title: "Comfort planned around your schedule",
        body: "Whether you are arriving for business, family travel, or a celebration, we help coordinate transfers, meals, and timings for a smooth stay.",
        image: img.lounge,
        points: ["Airport and station taxi help", "Early check-in on request", "Group and wedding room blocks"],
      },
    ],
    faqs: [
      {
        question: "How do I book a room at Hotel Sidh Vedantha?",
        answer: "Call our reservations team or submit the enquiry form on this page with your dates and guest count. We will confirm availability and share the best rate.",
      },
      rateFaq,
      checkInFaq,
      locationFaq,
    ],
  },
  {
    slug: "hotels-in-patna",
    title: "Hotels in Patna",
    eyebrow: "Stay in Patna",
    description:
      "Compare hotels in Patna and choose Hotel Sidh Vedantha for elegant rooms, restaurant dining, banquet spaces, and warm hospitality on New Bypass.",
    keywords: ["Hotels in Patna", "Best hotels in Patna", "Luxury hotels in Patna", "4 star hotels in Patna", "Patna Hotels Near Airport"],
    kind: "stay",
    image: img.club2,
    gallery: [img.club2, img.exec1, img.premium1, img.suite2, img.cooking],
    audience: "Business travellers, families, couples, and event guests",
    intro: {
      title: "Choosing between hotels in Patna?",
      paragraphs: [
        "There are many hotels in Patna, but few bring rooms, dining, and celebration venues together as smoothly as Hotel Sidh Vedantha. Guests can stay, dine, meet, and celebrate in one place, with a single team looking after every detail.",
        "Located at West Ramkrishna Nagar on New Bypass, the hotel is a practical base for business visits, family trips, weddings, and journeys to and from Patna Airport.",
      ],
    },
    highlights: [
      { title: "Executive to suite rooms", body: "Four room categories for every kind of trip." },
      { title: "Norton Classic Restaurant", body: "In-house dining from breakfast to dinner." },
      { title: "Banquet & event halls", body: "Venues for engagements, weddings, and meetings." },
      { title: "High-speed WiFi", body: "Stay connected in every room." },
      { title: "Taxi assistance", body: "Transfers to the airport, stations, and city." },
      { title: "Helpful front desk", body: "Local guidance and support throughout your stay." },
    ],
    sections: [
      {
        title: "A complete stay among hotels in Patna",
        body: "Hotel Sidh Vedantha combines well-appointed rooms, in-house dining, and event spaces, so guests can stay, dine, meet, and celebrate in one place.",
        image: img.premium3,
        points: ["Rooms for solo, couple, and family stays", "In-room dining support", "Daily housekeeping"],
      },
      {
        title: "Well connected on New Bypass",
        body: "Our New Bypass location keeps you connected to the city centre, railway stations, and Patna Airport, with our team ready to arrange your travel.",
        image: img.hotel,
        points: ["Easy road access", "Taxi arrangements", "Guidance for nearby attractions"],
      },
    ],
    faqs: [rateFaq, checkInFaq, locationFaq],
  },
  {
    slug: "top-hotel-in-patna",
    metaTitle: "Top Hotel in Patna | Hotel Sidh Vedantha",
    metaDescription:
      "Discover Hotel Sidh Vedantha, a Top Hotel in Patna offering comfortable rooms, modern amenities, elegant dining, and exceptional hospitality.",
    title: "Top Hotel in Patna",
    eyebrow: "Patna Top Hotels",
    description:
      "Hotel Sidh Vedantha is a top hotel in Patna for luxury rooms, fine dining, weddings, engagements, and corporate events, with personal service on New Bypass.",
    keywords: ["Top Hotel in Patna", "Patna Top Hotels", "Best hotels in Patna", "Luxury hotels in Patna"],
    kind: "stay",
    image: img.suite3,
    gallery: [img.suite3, img.suite4, img.premium2, img.club3, img.wedding],
    audience: "Guests who expect premium comfort and polished service",
    intro: {
      title: "Why we are counted among Patna top hotels",
      paragraphs: [
        "A top hotel in Patna has to deliver on every front: rooms, food, events, and service. Hotel Sidh Vedantha brings refined interiors, restful rooms, attentive staff, and dependable service together for stays and occasions of every size.",
        "From overnight business trips to ring ceremonies and corporate meetings, guests trust us because the experience is consistent every time they return.",
      ],
    },
    highlights: [
      { title: "Luxury rooms & suite", body: "Four room categories including the Vedantha Suite." },
      { title: "Signature dining", body: "Norton Classic Restaurant for every meal of the day." },
      { title: "Wedding & engagement venue", body: "Decor-ready spaces for family celebrations." },
      { title: "Corporate events", body: "Meetings, conferences, and team dinners handled end to end." },
      { title: "Warm hospitality", body: "A team trained to make every arrival feel personal." },
      { title: "Convenient location", body: "New Bypass address with easy airport access." },
    ],
    sections: [
      {
        title: "Consistency guests can rely on",
        body: "Refined interiors, restful rooms, attentive staff, and dependable service make Hotel Sidh Vedantha a trusted choice for stays and occasions in Patna.",
        image: img.suite4,
        points: ["Spotless rooms every day", "Responsive guest support", "Personal attention for repeat guests"],
      },
      {
        title: "One address for stays and celebrations",
        body: "From overnight business trips to ring ceremonies and corporate meetings, the hotel brings rooms, dining, and venues together under one roof.",
        image: img.wedding,
        points: ["Venue and room packages", "Custom menus for events", "Coordination from one team"],
      },
    ],
    faqs: [
      {
        question: "Is Hotel Sidh Vedantha a top hotel in Patna?",
        answer: "Hotel Sidh Vedantha is counted among Patna top hotels by guests for its premium rooms, signature dining, celebration venues, and consistent, personal service.",
      },
      rateFaq,
      checkInFaq,
      locationFaq,
    ],
  },
  {
    slug: "premium-rooms-in-patna",
    metaTitle: "Best Club Rooms in Patna for a Premium Stay",
    metaDescription:
      "Discover the best club rooms in Patna at Hotel Sidh Vedantha, offering spacious interiors, modern amenities, comfort, and a relaxing stay experience.",
    title: "Premium Rooms in Patna",
    eyebrow: "Premium Room Stays",
    description:
      "Book Premium Rooms in Patna at Hotel Sidh Vedantha: 420 sq ft with plush bedding, a luxurious en-suite bathroom, WiFi, and dining access. Contact us for the best rate.",
    keywords: ["Premium rooms in Patna", "Luxury hotels in Patna", "4 star hotels in Patna", "Couple Friendly hotels in Patna"],
    kind: "room",
    image: img.premium1,
    gallery: [img.premium1, img.premium2, img.premium3, img.premium4, img.rosePetals],
    audience: "Couples, business guests, and premium stay seekers",
    intro: {
      title: "Premium Rooms made for restful stays",
      paragraphs: [
        "Our Premium Rooms in Patna offer 420 sq ft of calm, elegant space with plush king-size or twin bedding, warm lighting, and a luxurious en-suite bathroom.",
        "They are a favourite with couples on a weekend break and business guests who want a little more comfort, backed by the dining and service of Hotel Sidh Vedantha.",
      ],
    },
    highlights: [
      { title: "420 sq ft", body: "Generous space to relax, work, and unpack properly." },
      { title: "Plush bedding", body: "King-size or twin beds with premium linen." },
      { title: "En-suite bathroom", body: "A luxurious bathroom with premium toiletries." },
      { title: "High-speed WiFi", body: "Reliable internet for work and streaming." },
      { title: "Work desk", body: "A proper desk and chair for calls and laptop work." },
      { title: "Daily housekeeping", body: "Fresh linen and a tidy room every day." },
    ],
    sections: [
      {
        title: "Elegant, calm, and comfortable",
        body: "Warm lighting, rich finishes, and quality bedding create a room that feels restful from the moment you walk in.",
        image: img.premium3,
        points: ["Up to 2 guests", "King-size or twin beds", "Tea and coffee setup"],
      },
      {
        title: "Stay with confidence",
        body: "From in-room amenities to dining and guest support, every detail is arranged for a smoother hotel experience.",
        image: img.premium4,
        points: ["Room service support", "Smart TV", "Premium toiletries"],
      },
    ],
    faqs: [
      {
        question: "How many guests can stay in a Premium Room?",
        answer: "Premium Rooms are designed for up to 2 guests with a choice of king-size or twin bedding.",
      },
      rateFaq,
      checkInFaq,
      locationFaq,
    ],
  },
  {
    slug: "ring-ceremony-venue-in-patna",
    metaTitle: "Hotels for Engagement in Patna | Hotel Sidh Vedantha",
    metaDescription:
      "Make your engagement memorable at Hotel Sidh Vedantha, one of the best hotels for engagement in Patna, offering elegant venues, dining and hospitality.",
    title: "Ring Ceremony Venue in Patna",
    eyebrow: "Engagement Celebrations",
    description:
      "Looking for a ring ceremony venue in Patna? Hotel Sidh Vedantha offers elegant decor-ready spaces, curated menus, and rooms for family guests for your engagement.",
    keywords: ["Ring ceremony venue in Patna", "Hotels for engagement in Patna", "Best hotel for engagement in Patna", "Hotels for couples in Patna"],
    kind: "event",
    image: img.ring,
    gallery: [img.ring, img.event, img.wedding, img.cooking, img.suite1],
    ctaLabel: "Plan My Ring Ceremony",
    audience: "Couples, families, and engagement celebrations",
    intro: {
      title: "A graceful beginning to forever",
      paragraphs: [
        "Your ring ceremony is the first celebration of a lifelong journey. As a ring ceremony venue in Patna, Hotel Sidh Vedantha gives you an elegant setting, a menu your family will remember, and a team that handles every detail on the day.",
        "Choose an intimate family gathering or a larger celebration. We shape the stage, seating, decor, and food around your plans and your guest list.",
      ],
    },
    highlights: [
      { title: "Elegant banquet setup", body: "A graceful space for the ring exchange and family moments." },
      { title: "Decor-friendly venue", body: "Floral, stage, and theme decor arranged to your style." },
      { title: "Custom menus", body: "Veg and non-veg menus planned with our chefs." },
      { title: "Family seating plans", body: "Layouts for elders, families, and friends." },
      { title: "Photography corners", body: "Beautiful backdrops for photos and videos." },
      { title: "Rooms for guests", body: "Stay options for the couple and visiting family." },
    ],
    sections: [
      {
        title: "Designed around the ring exchange",
        body: "As a ring ceremony venue in Patna, our event spaces create a warm and elegant backdrop for engagements, with flexible layouts for intimate gatherings and larger family celebrations.",
        image: img.ring,
        points: ["Stage and backdrop setup", "Sound for music and announcements", "Coordinated event timing"],
      },
      {
        title: "Dining, decor, and details handled with care",
        body: "From menu planning to seating and ambience, the team helps shape a celebration that feels personal, polished, and memorable.",
        image: img.cooking,
        points: ["Welcome drinks and snacks", "Buffet or served menus", "Cake and dessert counters"],
      },
    ],
    faqs: [
      {
        question: "How many guests can attend a ring ceremony at the hotel?",
        answer: "We host both intimate family ring ceremonies and larger engagement functions. Share your guest count and we will suggest the right space and layout.",
      },
      venueVisitFaq,
      cateringFaq,
      eventRateFaq,
    ],
  },
  {
    slug: "hotels-for-engagement-in-patna",
    title: "Hotels for Engagement in Patna",
    eyebrow: "Engagement & Ring Ceremony",
    description:
      "Looking for the best hotel for engagement in Patna? Host your engagement with elegant decor, curated menus, a dedicated events team, and rooms for family guests.",
    keywords: ["Hotels for engagement in Patna", "Best hotel for engagement in Patna", "Ring ceremony venue in Patna", "Hotels for couples in Patna"],
    kind: "event",
    image: img.wedding,
    gallery: [img.wedding, img.ring, img.event, img.suite1, img.dinner],
    ctaLabel: "Plan My Engagement",
    audience: "Couples, families, and engagement celebrations",
    intro: {
      title: "The best hotel for engagement in Patna, planned your way",
      paragraphs: [
        "Among hotels for engagement in Patna, Hotel Sidh Vedantha stands out for one reason: everything happens in one place. The venue, the food, the decor, and the rooms for your relatives are all handled by one experienced team.",
        "That means fewer vendors to chase, fewer surprises on the day, and more time for you to enjoy the celebration with your families.",
      ],
    },
    highlights: [
      { title: "Engagement stage", body: "Stage, backdrop, and seating designed around your theme." },
      { title: "Decor-friendly banquet", body: "Floral and lighting decor arranged to your taste." },
      { title: "Custom menus", body: "Traditional and multi-cuisine menus from our kitchen." },
      { title: "Rooms for family", body: "Room blocks for the couple and visiting relatives." },
      { title: "Event coordination", body: "One point of contact from planning to the last guest." },
      { title: "Photo-ready spaces", body: "Beautiful corners for portraits and family photos." },
    ],
    sections: [
      {
        title: "One venue, one team, zero stress",
        body: "Choose a layout for an intimate family engagement or a larger celebration, with decor, stage, and seating arranged around your plans.",
        image: img.event,
        points: ["Venue walkthrough before booking", "Theme and decor planning", "Day-of coordination"],
      },
      {
        title: "Celebrate and stay together",
        body: "Book rooms for visiting relatives and the couple alongside the venue, so guests can celebrate, dine, and rest without travelling across the city.",
        image: img.suite1,
        points: ["Group room bookings", "Suite for the couple", "Breakfast for staying guests"],
      },
    ],
    faqs: [
      {
        question: "Why choose Hotel Sidh Vedantha for an engagement in Patna?",
        answer: "You get the venue, catering, decor coordination, and rooms for your guests in one place, managed by one team, which makes planning simpler and the day smoother.",
      },
      venueVisitFaq,
      cateringFaq,
      eventRateFaq,
    ],
  },
  {
    slug: "best-wedding-venue-in-patna",
    metaTitle: "Luxury Banquet Hall in Patna | Hotel Sidh Vedantha",
    metaDescription:
      "Discover a Luxury Banquet Hall in Patna at Hotel Sidh Vedantha, perfect for weddings, birthdays, receptions, corporate events, and special celebrations.",
    title: "Best Wedding Venue in Patna",
    eyebrow: "Weddings & Receptions",
    description:
      "Plan your wedding or reception at one of the best wedding venues in Patna. Hotel Sidh Vedantha offers elegant spaces, custom menus, decor support, and rooms for guests.",
    keywords: ["Best wedding venue in Patna", "Hotels for engagement in Patna", "Ring ceremony venue in Patna", "Luxury hotels in Patna"],
    kind: "event",
    image: img.wedding,
    gallery: [img.wedding, img.event, img.ring, img.cooking, img.suite3],
    ctaLabel: "Plan My Wedding",
    audience: "Couples, families, and wedding planners",
    intro: {
      title: "A venue for the big moments",
      paragraphs: [
        "Your wedding deserves a setting that feels as special as the day itself. Hotel Sidh Vedantha is one of the best wedding venues in Patna for receptions, pre-wedding functions, and family gatherings.",
        "Our team helps you plan the layout, decor, and menu, and coordinates rooms for your relatives so every guest feels looked after.",
      ],
    },
    highlights: [
      { title: "Elegant venues", body: "Spaces for receptions, sangeet, haldi, and mehendi." },
      { title: "Decor coordination", body: "Stage, floral, and lighting decor to match your theme." },
      { title: "Wedding menus", body: "Traditional Bihari and multi-cuisine spreads." },
      { title: "Guest rooms", body: "Room blocks for families and baraat guests." },
      { title: "Bridal suite", body: "The Vedantha Suite for the couple to get ready and rest." },
      { title: "Event management", body: "A coordinator to manage timings and vendors." },
    ],
    sections: [
      {
        title: "Every function, beautifully hosted",
        body: "Hotel Sidh Vedantha offers elegant event spaces for ceremonies, receptions, and family gatherings that deserve a refined setting.",
        image: img.event,
        points: ["Reception and sangeet layouts", "Stage and entry decor", "Music and lighting support"],
      },
      {
        title: "Hospitality for every guest",
        body: "From dining to room coordination and event flow, the team helps make the celebration smooth for hosts and guests alike.",
        image: img.suite3,
        points: ["Welcome desk for guests", "Group check-in support", "Breakfast for staying guests"],
      },
    ],
    faqs: [
      {
        question: "Which wedding functions can be hosted at the hotel?",
        answer: "We host receptions, engagements, ring ceremonies, sangeet, haldi, mehendi, and family dinners, with layouts planned around each function.",
      },
      venueVisitFaq,
      cateringFaq,
      eventRateFaq,
    ],
  },
  {
    slug: "best-birthday-party-venue-in-patna",
    metaTitle: "Best Birthday Party Venue in Patna | Hotel Sidh Vedantha",
    metaDescription:
      "Celebrate at the Best Birthday Party Venue in Patna, Hotel Sidh Vedantha, with elegant banquet halls, delicious food, stylish décor, and modern amenities.",
    title: "Best Birthday Party Venue in Patna",
    eyebrow: "Celebrations & Parties",
    description:
      "Host your celebration at the best birthday party venue in Patna. Hotel Sidh Vedantha offers themed decor, cake ceremonies, custom menus, and family-friendly spaces.",
    keywords: ["Best birthday party venue in Patna", "Hotels in Patna", "Couple Friendly hotels in Patna"],
    kind: "event",
    image: img.birthday,
    gallery: [img.birthday, img.event, img.cooking, img.towelSwan, img.dinner],
    ctaLabel: "Plan My Party",
    audience: "Families, friends, and birthday celebrations",
    intro: {
      title: "Celebrate with energy and elegance",
      paragraphs: [
        "From a child's first birthday to a milestone 50th, the best birthday party venue in Patna should be easy to book and fun to celebrate in. Hotel Sidh Vedantha gives you a party-ready space, food everyone will enjoy, and a team that sets it all up for you.",
        "Tell us your theme and guest count, and we will plan the decor, cake ceremony, and menu around your celebration.",
      ],
    },
    highlights: [
      { title: "Party-ready venue", body: "Spaces for small family parties and larger celebrations." },
      { title: "Cake ceremony setup", body: "A dedicated cake table and backdrop." },
      { title: "Themed decor", body: "Balloons, florals, and themes for kids and adults." },
      { title: "Custom menus", body: "Kids' favourites, snacks, and full dinner buffets." },
      { title: "Music friendly", body: "Space for music, games, and dancing." },
      { title: "Photo backdrops", body: "Beautiful corners for birthday photos." },
    ],
    sections: [
      {
        title: "Designed for memorable moments",
        body: "From cake-cutting to family dining and music-friendly arrangements, the venue can be shaped around your celebration plan.",
        image: img.birthday,
        points: ["Theme decor planning", "Cake and dessert counters", "Seating for all ages"],
      },
      {
        title: "Food everyone will love",
        body: "Our kitchen plans menus for every age group, from kid-friendly snacks to full buffets for the grown-ups.",
        image: img.cooking,
        points: ["Veg and non-veg options", "Snacks and mocktail counters", "Served or buffet formats"],
      },
    ],
    faqs: [
      {
        question: "Can you arrange themed birthday decor?",
        answer: "Yes. Share your theme, colours, and guest count, and our team will coordinate the decor, cake table, and backdrop.",
      },
      venueVisitFaq,
      cateringFaq,
      eventRateFaq,
    ],
  },
  {
    slug: "corporate-event-venue-in-patna",
    metaTitle: "Corporate Event Venue in Patna | Hotel Sidh Vedantha",
    metaDescription:
      "Host successful corporate events at Hotel Sidh Vedantha, a premium corporate event venue in Patna with elegant spaces, modern facilities, and great service.",
    title: "Corporate Event Venue in Patna",
    eyebrow: "Meetings & Conferences",
    description:
      "Host meetings, seminars, conferences, and corporate gatherings at a corporate event venue in Patna with flexible spaces, dining packages, WiFi, and rooms for teams.",
    keywords: ["Corporate event venue in Patna", "Best Hotels for Corporate Events in Patna", "Hotels in Patna", "Top Hotel in Patna"],
    kind: "event",
    image: img.event,
    gallery: [img.event, img.workDesk, img.exec3, img.lunch, img.club1],
    ctaLabel: "Plan My Corporate Event",
    audience: "Companies, teams, trainers, and business hosts",
    intro: {
      title: "A focused setting for productive events",
      paragraphs: [
        "A good corporate event venue in Patna lets you concentrate on the agenda, not the logistics. Hotel Sidh Vedantha supports business meetings, training sessions, seminars, and formal dinners with practical amenities and a team that keeps everything on schedule.",
        "Outstation colleagues can stay on site in Executive and Club Rooms, so multi-day programmes run without travel delays.",
      ],
    },
    highlights: [
      { title: "Meeting setups", body: "Boardroom, classroom, and theatre-style layouts." },
      { title: "Conference support", body: "Presentation setup and event coordination." },
      { title: "Dining packages", body: "Tea breaks, working lunches, and gala dinners." },
      { title: "High-speed WiFi", body: "Reliable internet for presentations and calls." },
      { title: "Rooms for teams", body: "Executive and Club Rooms for visiting staff." },
      { title: "Professional service", body: "Staff who keep sessions running on time." },
    ],
    sections: [
      {
        title: "From setup to service",
        body: "The team helps coordinate seating, food, timing, and guest requirements so your event can run smoothly from registration to the final session.",
        image: img.exec3,
        points: ["Registration desk support", "Scheduled tea and lunch breaks", "On-site coordinator"],
      },
      {
        title: "Meals that keep teams energised",
        body: "Working lunches, snack breaks, and team dinners are planned by our kitchen to suit your schedule and budget.",
        image: img.lunch,
        points: ["Buffet and plated options", "Veg and non-veg menus", "Team dinner packages"],
      },
    ],
    faqs: [
      {
        question: "What corporate events can you host?",
        answer: "We host meetings, conferences, training sessions, product launches, seminars, and corporate dinners, with seating and catering planned to your agenda.",
      },
      venueVisitFaq,
      cateringFaq,
      eventRateFaq,
    ],
  },
  {
    slug: "best-hotels-for-corporate-events-in-patna",
    title: "Best Hotels for Corporate Events in Patna",
    eyebrow: "Corporate Events & Meetings",
    description:
      "Plan conferences, meetings, training sessions, and corporate dinners at one of the best hotels for corporate events in Patna, with rooms for visiting teams.",
    keywords: ["Best Hotels for Corporate Events in Patna", "Corporate event venue in Patna", "Hotels in Patna", "Top Hotel in Patna"],
    kind: "event",
    image: img.event,
    gallery: [img.event, img.exec1, img.workDesk, img.dinner, img.club2],
    ctaLabel: "Plan My Corporate Event",
    audience: "Companies, HR teams, trainers, and business hosts",
    intro: {
      title: "Why companies choose us for events in Patna",
      paragraphs: [
        "The best hotels for corporate events in Patna offer more than a hall. At Hotel Sidh Vedantha, your event space, catering, and accommodation for visiting teams are managed together, so your programme runs on time and your guests are well looked after.",
        "From quarterly reviews and dealer meets to training workshops and award nights, our team adapts the setup to your agenda.",
      ],
    },
    highlights: [
      { title: "Conference & meeting halls", body: "Spaces for small board meetings and larger conferences." },
      { title: "Flexible seating layouts", body: "Theatre, classroom, cluster, and U-shape setups." },
      { title: "Corporate dining packages", body: "Tea breaks, working lunches, and dinners." },
      { title: "High-speed WiFi", body: "Stable connectivity for presentations and calls." },
      { title: "Rooms for outstation teams", body: "Executive and Club Rooms on site." },
      { title: "Dedicated coordination", body: "A single contact for your whole event." },
    ],
    sections: [
      {
        title: "Events that run on schedule",
        body: "Seating, presentation setup, tea breaks, and meals are coordinated by our team so your conference, launch, or training day runs smoothly.",
        image: img.workDesk,
        points: ["Pre-event planning call", "Setup ready before arrival", "On-site support all day"],
      },
      {
        title: "Meet, dine, and stay in one venue",
        body: "Visiting colleagues can stay in Executive and Club Rooms on site, making Hotel Sidh Vedantha a practical choice for multi-day corporate events in Patna.",
        image: img.exec1,
        points: ["Corporate room rates on request", "Airport and station transfers", "Team dinners at Norton Classic"],
      },
    ],
    faqs: [
      {
        question: "Can you host multi-day corporate events with stays?",
        answer: "Yes. We combine meeting spaces, meals, and room blocks for visiting teams, so multi-day programmes can run from one location.",
      },
      venueVisitFaq,
      cateringFaq,
      eventRateFaq,
    ],
  },
  {
    slug: "norton-classic-restaurant-in-patna",
    title: "Norton Classic Restaurant in Patna",
    eyebrow: "Dining Experience",
    description:
      "Dine at Norton Classic Restaurant in Patna at Hotel Sidh Vedantha. Enjoy breakfast, lunch, and dinner with Indian and multi-cuisine dishes, family dining, and event catering.",
    keywords: ["Norton Classic Restaurant in Patna", "Hotels in Patna", "Hotels for couples in Patna", "Luxury hotels in Patna"],
    kind: "dining",
    image: img.cooking,
    gallery: [img.cooking, img.breakfast, img.lunch, img.dinner, img.teaTray],
    ctaLabel: "Reserve a Table",
    audience: "Hotel guests, families, couples, and dining visitors",
    intro: {
      title: "Dining that completes the stay",
      paragraphs: [
        "Norton Classic Restaurant in Patna brings comforting flavours, attentive service, and an inviting setting to Hotel Sidh Vedantha. Hotel guests and outside diners alike enjoy freshly prepared Indian favourites and multi-cuisine dishes.",
        "Join us for a relaxed family meal, a quiet dinner for two, or let our chefs plan the menu for your celebration or corporate event.",
      ],
    },
    highlights: [
      { title: "Breakfast", body: "Parathas, poha, omelettes, and fresh fruit to start the day." },
      { title: "Lunch", body: "Thalis, curries, dal, and rice for a hearty midday meal." },
      { title: "Dinner", body: "Curries, biryani, tandoori breads, and desserts." },
      { title: "Family dining", body: "Comfortable seating for families and groups." },
      { title: "Event catering", body: "Custom menus for celebrations and meetings." },
      { title: "Room service", body: "Enjoy restaurant dishes in your room." },
    ],
    sections: [
      {
        title: "Fresh food, prepared with care",
        body: "Our kitchen prepares every dish fresh, balancing traditional Bihari and North Indian flavours with popular multi-cuisine favourites.",
        image: img.lunch,
        points: ["Vegetarian and non-vegetarian menus", "Fresh daily preparations", "Chef's desserts"],
      },
      {
        title: "For meals, meetings, and celebrations",
        body: "Whether you are dining with family or planning food for an event, our team helps shape a satisfying experience.",
        image: img.dinner,
        points: ["Group and family dining", "Birthday and anniversary dinners", "Corporate lunch packages"],
      },
    ],
    faqs: [
      {
        question: "Is Norton Classic Restaurant open to outside guests?",
        answer: "Yes. Outside guests are welcome to dine with us. For larger groups, we recommend calling ahead to reserve a table.",
      },
      {
        question: "Do you serve both vegetarian and non-vegetarian food?",
        answer: "Yes. The menu includes vegetarian and non-vegetarian dishes across breakfast, lunch, and dinner.",
      },
      cateringFaq,
      locationFaq,
    ],
  },
];

export const productLandingPages: LandingPageData[] = [
  {
    slug: "vedantha-suite-single-room",
    metaTitle: "Suite Single Room – Hotel Sidh Vedantha",
    metaDescription:
      "Enjoy a comfortable stay at Hotel Sidh Vedantha with a well-appointed Suite Single Room, modern amenities, a relaxing ambiance, and personalized hospitality.",
    title: "Vedantha Suite Single Room",
    eyebrow: "Suite Booking",
    description:
      "Book the Vedantha Suite at Hotel Sidh Vedantha, one of the luxury hotels in Patna: 620 sq ft with a king-size bed, separate living area, and premium amenities.",
    keywords: ["Vedantha Suite", "Luxury suites in Patna", "Luxury hotels in Patna", "4 star hotels in Patna", "Hotels for couples in Patna"],
    kind: "room",
    image: img.suite1,
    gallery: [img.suite1, img.suite2, img.suite3, img.suite4, img.suite5, img.suite6],
    ctaLabel: "Enquire for Suite",
    audience: "Guests looking for an elevated suite stay",
    intro: {
      title: "A suite for longer, calmer stays",
      paragraphs: [
        "The Vedantha Suite is our finest room: 620 sq ft with a king-size bed, a separate living area, and a luxurious en-suite bathroom. It is crafted for guests who want more room to unwind, host, and rest with added privacy.",
        "Couples celebrating an occasion, families on a longer visit, and executives who like to work from a proper sitting area all find the suite a comfortable home in Patna.",
      ],
    },
    highlights: [
      { title: "620 sq ft suite", body: "Our most spacious room category." },
      { title: "King-size bed", body: "Premium bedding for deep, restful sleep." },
      { title: "Separate living area", body: "Space to relax, host, or work." },
      { title: "Premium toiletries", body: "A luxurious en-suite bathroom." },
      { title: "High-speed WiFi", body: "Reliable internet throughout the suite." },
      { title: "Dining support", body: "Meals from Norton Classic Restaurant in your suite." },
    ],
    sections: [
      {
        title: "Designed for elevated comfort",
        body: "Enjoy premium bedding, a separate living area, refined amenities, and the hospitality support of Hotel Sidh Vedantha.",
        image: img.suite3,
        points: ["Up to 4 guests", "Separate living and sleeping areas", "Smart TV and work desk"],
      },
      {
        title: "Perfect for special occasions",
        body: "Celebrate an anniversary, host family before a wedding, or enjoy a longer stay with the extra space and privacy of the suite.",
        image: img.suite5,
        points: ["Romantic setups on request", "Ideal as a bridal suite", "In-suite dining"],
      },
    ],
    faqs: [
      {
        question: "How many guests can stay in the Vedantha Suite?",
        answer: "The Vedantha Suite comfortably accommodates up to 4 guests, with a king-size bed and a separate living area.",
      },
      rateFaq,
      checkInFaq,
      locationFaq,
    ],
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function getProductLandingPage(slug: string) {
  return productLandingPages.find((page) => page.slug === slug);
}

export function getRelatedLandingPages(page: LandingPageData, count = 3) {
  const others = [...landingPages, ...productLandingPages].filter((item) => item.slug !== page.slug);
  const sameKind = others.filter((item) => item.kind === page.kind);
  const rest = others.filter((item) => item.kind !== page.kind);

  return [...sameKind, ...rest].slice(0, count);
}

export function getLandingPageHref(page: LandingPageData) {
  return productLandingPages.includes(page) ? `/product/${page.slug}` : `/${page.slug}`;
}
