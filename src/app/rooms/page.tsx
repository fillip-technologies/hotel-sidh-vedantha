import type { Metadata } from "next";

import { Rooms } from "@/components/rooms";

export const metadata: Metadata = {
  title: "Rooms & Suites - Hotel Sidh Vedantha",
  description:
    "Explore Executive Rooms, Club Rooms, Premium Rooms, and the Vedantha Suite at Hotel Sidh Vedantha, a luxury 4 star hotel in Patna ideal for couples, families, and business guests.",
  keywords: ["4 star hotels in Patna", "Luxury hotels in Patna", "Hotels in Patna", "Couple Friendly hotels in Patna"],
};

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-background pt-24 text-text-primary">
      <Rooms />
    </main>
  );
}
