import type { Metadata } from "next";

import { Rooms } from "@/components/rooms";

export const metadata: Metadata = {
  title: "Rooms & Suites | Hotel Sidh Vedantha Patna",
  description:
    "Explore Executive Rooms, Club Rooms, Premium Rooms, and the Vedantha Suite at Hotel Sidh Vedantha Patna.",
};

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-background pt-24 text-text-primary">
      <Rooms />
    </main>
  );
}
