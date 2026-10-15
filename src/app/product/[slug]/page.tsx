import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LandingPage } from "@/components/landing";
import {
  getProductLandingPage,
  productLandingPages,
} from "@/data/landingPages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return productLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductLandingPage(slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  const title = page.metaTitle ?? `${page.title} | Hotel Sidh Vedantha Patna`;
  const description = page.metaDescription ?? page.description;

  return {
    title,
    description,
    keywords: page.keywords,
    alternates: { canonical: `/product/${page.slug}` },
    openGraph: {
      title,
      description,
      images: [page.image],
    },
  };
}

export default async function ProductLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProductLandingPage(slug);

  if (!page) {
    notFound();
  }

  return <LandingPage page={page} />;
}
