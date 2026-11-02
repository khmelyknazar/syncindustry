/**
 * Один короткий абзац без переліку технологій: спочатку розбір
 * процесів, потім впровадження. Містить основні послуги природною мовою.
 */
export function HeroSupportingCopy() {
  return (
    <p
      className={[
        "max-w-[520px] text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)]",
        "text-[var(--color-text-secondary)]",
      ].join(" ")}
    >
      Розбираємо, як працює ваш бізнес, і впроваджуємо CRM, автоматизацію та
      AI-рішення: менше ручної роботи, більше контролю.
    </p>
  );
}
