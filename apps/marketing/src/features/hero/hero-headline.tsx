/**
 * The page's single H1. Формулювання з брифу позиціонування:
 * «Перетворюємо складні бізнес-процеси на злагоджені цифрові системи».
 * Основне позиціонування («Консалтинг і автоматизація бізнесу»)
 * винесено в HeroEyebrow над заголовком.
 *
 * Центрований заголовок на всю ширину: `text-balance` розподіляє
 * слова по рядках рівно, без «сироти» в останньому рядку.
 */
export function HeroHeadline({ id }: { id: string }) {
  return (
    <h1
      id={id}
      className={[
        "max-w-[1040px] text-balance",
        "text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)]",
        "font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]",
        "sm:text-[length:var(--font-display-lg-size)] sm:leading-[var(--font-display-lg-line)]",
        "xl:text-[length:var(--font-display-xl-size)] xl:leading-[var(--font-display-xl-line)]",
      ].join(" ")}
    >
      Перетворюємо складні бізнес-процеси на злагоджені цифрові системи.
    </h1>
  );
}
