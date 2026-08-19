import type { MetadataRoute } from "next";

import { products } from "@/config/products";
import { siteConfig } from "@/config/site";
import { getAllCaseStudies } from "@/lib/case-study";

/**
 * Sitemap foundation. Real routes as of this pass: `/`, `/work` (+
 * its published case studies), `/contact`, `/product` (index) + all
 * five `/product/[slug]` detail pages including `/product/crm`,
 * generated from `products` so a sixth product added later needs no
 * sitemap edit, `/company/engineering`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyEntries = getAllCaseStudies().map((caseStudy) => ({
    url: new URL(`/work/${caseStudy.slug}`, siteConfig.url).toString(),
    lastModified: caseStudy.publishedAt ? new Date(caseStudy.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productEntries = products.map((product) => ({
    url: new URL(`/product/${product.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: product.slug === "crm" ? 0.9 : 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/product", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productEntries,
    {
      url: new URL("/work", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: new URL("/company/engineering", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: new URL("/contact", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...caseStudyEntries,
  ];
}
