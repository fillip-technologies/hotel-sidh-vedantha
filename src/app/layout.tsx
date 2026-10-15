import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { MobileBookingBar } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BrandGradientDefs } from "@/components/ui/BrandGradientDefs";
import { seoKeywords } from "@/data/seoKeywords";
import { siteContact } from "@/data/siteContact";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContact.siteUrl),
  title: "Hotel Sidh Vedantha | Best Luxury 4 Star Hotel in Patna",
  description:
    "Hotel Sidh Vedantha is one of the best hotels in Patna, a luxury 4 star hotel with elegant rooms, fine dining, couple friendly stays, corporate event halls, and engagement and ring ceremony venues, with easy access to Patna Airport.",
  keywords: seoKeywords,
  openGraph: {
    title: "Hotel Sidh Vedantha | Best Luxury 4 Star Hotel in Patna",
    description:
      "Luxury rooms, fine dining, corporate events, and engagement celebrations at one of the top hotels in Patna.",
    siteName: "Hotel Sidh Vedantha",
    locale: "en_IN",
    type: "website",
  },
};

const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Hotel Sidh Vedantha",
  description:
    "Luxury 4 star hotel in Patna with rooms and suites, restaurant dining, corporate event halls, and engagement and ring ceremony venues.",
  telephone: siteContact.phoneHref.replace("tel:", ""),
  email: siteContact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "West Ramkrishna Nagar, New Bypass",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800027",
    addressCountry: "IN",
  },
  keywords: seoKeywords.join(", "),
  sameAs: siteContact.social.map((profile) => profile.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
        <BrandGradientDefs />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <MobileBookingBar />
      </body>
    </html>
  );
}
