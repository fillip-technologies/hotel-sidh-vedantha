import type { MetadataRoute } from "next";

import { siteContact } from "@/data/siteContact";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteContact.siteUrl}/sitemap.xml`,
  };
}
