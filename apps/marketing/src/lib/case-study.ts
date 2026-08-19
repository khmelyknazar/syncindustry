import type { Route } from "next";

import { caseStudies } from "@/config/case-studies";
import type { CaseStudy } from "@/types/case-study";

/** The one place `/work/${slug}` is written — no case study data
 * object carries its own `href`, so the URL structure can't drift
 * out of sync with the actual route file. Cast to `Route`: `slug` is
 * a runtime `string`, not a literal, so typedRoutes can't verify it
 * matches `/work/[slug]` at compile time the way a literal template
 * (`` `/work/${knownSlug}` `` written directly in JSX) can — this is
 * the same non-literal-href pattern the Next.js docs cast this way. */
export function caseStudyHref(slug: string): Route {
  return `/work/${slug}` as Route;
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

/** At most one featured case study — if more than one is marked
 * `featured: true`, this returns the first and that's a config bug
 * to fix in the data, not something the UI should silently paper
 * over by picking one at random. */
export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return caseStudies.find((item) => item.featured);
}

export function getNonFeaturedCaseStudies(): CaseStudy[] {
  const featured = getFeaturedCaseStudy();
  return caseStudies.filter((item) => item.slug !== featured?.slug);
}