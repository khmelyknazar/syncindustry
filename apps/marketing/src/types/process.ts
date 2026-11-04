/**
 * Named `ProcessStage`, not `ProcessStep` — `@/types/trust` already
 * exports a `ProcessStep` for the Trust System's reflexive "how this
 * project itself was built" list (5 stages, 2 fields each). This is
 * a different, richer model for the client-facing engagement
 * workflow (6 stages, business-outcome fields per stage) — reusing
 * the name would make two unrelated shapes look interchangeable.
 */
export interface ProcessStage {
  index: number;
  /** Zero-padded stage number as shown, e.g. "01". */
  code: string;
  /** Назва кроку українською, зрозуміла без технічних знань. */
  title: string;
  description: string;
  businessGoal: string;
  stageResult: string;
  clientReceives: string;
  /** Omitted only for the final stage — Scale has no "next stage" to
   * gate; it restarts the cycle for the next module instead. */
  transitionCriterion?: string;
  /** Нижній рядок картки останнього кроку замість критерію переходу:
   * картка лишається такою ж за будовою, як і решта п'ять. */
  cycleNote?: string;
}
