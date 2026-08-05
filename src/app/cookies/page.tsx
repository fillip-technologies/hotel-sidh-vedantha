import type { Metadata } from "next";

import { SimpleContentPage } from "@/components/content";

export const metadata: Metadata = {
  title: "Cookies | Hotel Sidh Vedantha Patna",
  description:
    "Cookie information for Hotel Sidh Vedantha website visitors.",
};

export default function CookiesPage() {
  return (
    <SimpleContentPage
      description="This page explains the basic use of cookies and similar technologies on the Hotel Sidh Vedantha website."
      eyebrow="Legal"
      title="Cookies"
      sections={[
        {
          title: "What Cookies Do",
          body:
            "Cookies help websites remember basic preferences, improve browsing experience, and understand how visitors use pages.",
        },
        {
          title: "How We May Use Cookies",
          body:
            "We may use cookies or similar tools for website performance, analytics, form experience, and service improvement.",
        },
        {
          title: "Managing Cookies",
          body:
            "You can control or delete cookies through your browser settings. Some website features may work differently if cookies are disabled.",
        },
      ]}
    />
  );
}
