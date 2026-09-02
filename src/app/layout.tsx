import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { MobileBookingBar } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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
  title: "Hotel Sidh Vedantha, Patna | Luxury Stays & Banquets",
  description:
    "Luxury accommodation in Patna with elegant rooms and suites, fine dining, banquet venues for weddings and celebrations, and warm, personal hospitality.",
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
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <MobileBookingBar />
      </body>
    </html>
  );
}
