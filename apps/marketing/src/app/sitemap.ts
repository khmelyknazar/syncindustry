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

  // Сторінки зі статусом "скоро" закриті від індексу (див. сторінку
  // продукту), тож у sitemap їх немає: інакше він суперечив би robots.
  const productEntries: MetadataRoute.Sitemap = products
    .filter((product) => product.status === "available")
    .map((product) => ({ url: abs(`/product/${product.slug}`) }));

  return [
    { url: abs("/") },
    { url: abs("/product") },
    ...productEntries,
    { url: abs("/work") },
    ...caseStudyEntries,
    { url: abs("/company/engineering") },
    { url: abs("/company/security") },
    { url: abs("/contact") },
  ];
}
