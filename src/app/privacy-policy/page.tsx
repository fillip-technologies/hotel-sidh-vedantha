import type { Metadata } from "next";

import { SimpleContentPage } from "@/components/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Hotel Sidh Vedantha Patna",
  description:
    "Privacy Policy for Hotel Sidh Vedantha covering guest enquiries, bookings, and contact information.",
};

export default function PrivacyPolicyPage() {
  return (
    <SimpleContentPage
      description="This page explains how Hotel Sidh Vedantha handles information shared through enquiries, bookings, calls, and website forms."
      eyebrow="Legal"
      title="Privacy Policy"
      sections={[
        {
          title: "Information We Collect",
          body:
            "We may collect your name, phone number, email address, booking details, event requirements, and messages when you contact us or submit an enquiry.",
        },
        {
          title: "How We Use Information",
          body:
            "Your information is used to respond to enquiries, confirm bookings, coordinate room stays, plan events, and provide guest support.",
        },
        {
          title: "Data Sharing",
          body:
            "We do not sell personal information. Details may be shared only with hotel team members or service partners when needed to complete your request.",
        },
        {
          title: "Contact",
          body:
            "For privacy-related questions, please contact Hotel Sidh Vedantha through the official phone number or email listed on this website.",
        },
      ]}
    />
  );
}
