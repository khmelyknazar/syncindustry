import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

interface PageSeoInput {
  /** Without the brand: the layout title template appends it. */
  title: string;
  description: string;
  /** Route path, e.g. "/product" — used to build canonical + OG URLs. */
  path: string;
  index?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  ogImage = siteConfig.ogImage,
  ogImageAlt = siteConfig.name,
}: PageSeoInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  // OG/Twitter don't use the layout title template, so add the brand here.
  const socialTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index, follow: index },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage],
    },
  };
}
