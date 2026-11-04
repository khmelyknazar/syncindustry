/**
 * Deliberately not `@/types/trust`'s `PrincipleItem` (icon + title +
 * description) — this section's editorial layout needs a short
 * `statement` distinct from a longer `explanation`, plus an explicit
 * `businessConsequence`, none of which `PrincipleItem` carries.
 */
export interface EngineeringPrincipleProof {
  index: number;
  code: string;
  /** Короткий заголовок українською, зрозумілий без технічних знань. */
  statement: string;
  explanation: string;
  /** Always starts with "→" in the copy — the arrow is the non-color
   * signal that this line is a consequence, not restating the
   * explanation (never rely on color alone). */
  businessConsequence: string;
}
