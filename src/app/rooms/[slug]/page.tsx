import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RoomDetailPage } from "@/components/rooms/RoomDetailPage";
import rooms from "@/data/rooms.json";

type RoomPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    return {
      title: "Room Not Found",
    };
  }

  return {
    title: `${room.title} | Hotel Sidh Vedantha Patna`,
    description: room.description,
  };
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    notFound();
  }

  const otherRooms = rooms.filter((item) => item.slug !== room.slug);

  return <RoomDetailPage room={room} otherRooms={otherRooms} />;
}
