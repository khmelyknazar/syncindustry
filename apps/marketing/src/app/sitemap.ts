import type { MetadataRoute } from "next";

import { products } from "@/config/products";
import { siteConfig } from "@/config/site";
import { getAllCaseStudies } from "@/lib/case-study";

const abs = (path: string) => new URL(path, siteConfig.url).toString();

/**
 * Sitemap: лише сторінки, які реально існують і мають бути в індексі.
 * `lastModified` вказуємо тільки там, де є справжня дата (кейси);
 * для решти Google сам визначає свіжість.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyEntries: MetadataRoute.Sitemap = getAllCaseStudies().map(
    (caseStudy) => ({
      url: abs(`/work/${caseStudy.slug}`),
      ...(caseStudy.publishedAt
        ? { lastModified: new Date(caseStudy.publishedAt) }
        : {}),
    }),
  );

  // TODO: відфільтрувати продукти зі статусом "скоро" після перегляду config/products.ts
  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: abs(`/product/${product.slug}`),
  }));

  return [
    { url: abs("/") },
    { url: abs("/product") },
    ...productEntries,
    { url: abs("/work") },
    ...caseStudyEntries,
    { url: abs("/company/engineering") },
    { url: abs("/contact") },
  ];
}
