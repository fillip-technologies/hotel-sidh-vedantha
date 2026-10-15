import type { MetadataRoute } from "next";

import { getLandingPageHref, landingPages, productLandingPages } from "@/data/landingPages";
import rooms from "@/data/rooms.json";
import { siteContact } from "@/data/siteContact";

const staticPaths = [
  "",
  "/about-us",
  "/rooms",
  "/dining",
  "/experiences",
  "/gallery",
  "/contact-us",
  "/privacy-policy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...rooms.map((room) => `/rooms/${room.slug}`),
    ...[...landingPages, ...productLandingPages].map(getLandingPageHref),
  ];

  return paths.map((path) => ({
    url: `${siteContact.siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
