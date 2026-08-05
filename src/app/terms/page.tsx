import type { Metadata } from "next";

import { SimpleContentPage } from "@/components/content";

export const metadata: Metadata = {
  title: "Terms | Hotel Sidh Vedantha Patna",
  description:
    "Terms and guest information for Hotel Sidh Vedantha bookings, enquiries, and website use.",
};

export default function TermsPage() {
  return (
    <SimpleContentPage
      description="These terms provide simple guidance for website use, enquiries, reservations, and hotel services."
      eyebrow="Legal"
      title="Terms"
      sections={[
        {
          title: "Website Use",
          body:
            "The information on this website is provided for general hotel, room, dining, and event enquiries. Availability, pricing, and offers may change.",
        },
        {
          title: "Bookings",
          body:
            "Room and event bookings are confirmed only after availability, pricing, and guest requirements are verified by the hotel team.",
        },
        {
          title: "Guest Responsibility",
          body:
            "Guests are expected to provide accurate information, follow hotel policies, and present valid identification when required.",
        },
        {
          title: "Changes",
          body:
            "Hotel Sidh Vedantha may update website information, policies, services, and terms as needed.",
        },
      ]}
    />
  );
}
