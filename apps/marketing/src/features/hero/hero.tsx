import { Container } from "@/components/container";
import { HeroCtaGroup } from "@/features/hero/hero-cta-group";
import { HeroEyebrow } from "@/features/hero/hero-eyebrow";
import { HeroHeadline } from "@/features/hero/hero-headline";
import { HeroReassurance } from "@/features/hero/hero-reassurance";
import { HeroSupportingCopy } from "@/features/hero/hero-supporting-copy";
import { HeroBackdrop } from "@/features/hero/hero-backdrop";

const HEADLINE_ID = "hero-heading";

/**
 * v4: текст по центру на весь перший екран на спокійному фоні
 * (див. `HeroBackdrop`): без світіння й декоративних панелей.
 *
 * Висота: екран мінус sticky-хедер (h-16 = 4rem). `svh` — щоб на
 * мобільному адресний рядок браузера не ховав кнопки під фолдом.
 * Порядок вмісту = порядок уваги: що це → що саме → що робити далі.
 */
export function Hero() {
  return (
    <section
      aria-labelledby={HEADLINE_ID}
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-16 sm:py-24"
    >
      <HeroBackdrop />
      <Container className="flex flex-col items-center gap-6 text-center sm:gap-8">
        <HeroEyebrow>Консалтинг і автоматизація бізнесу</HeroEyebrow>
        <HeroHeadline id={HEADLINE_ID} />
        <HeroSupportingCopy />
        <HeroCtaGroup />
        <HeroReassurance />
      </Container>
    </section>
  );
}
