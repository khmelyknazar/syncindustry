/**
 * Спокійний фон hero: рівна темна поверхня й дуже тонка сітка.
 * Без світіння, розмиття, плаваючих «скляних» панелей і вигаданого
 * інтерфейсу — саме вони найбільше нагадують типовий згенерований
 * лендинг. Шар декоративний (`aria-hidden`).
 */
export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 select-none opacity-[0.28]"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-border-default) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-default) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        backgroundPosition: "center top",
      }}
    />
  );
}
