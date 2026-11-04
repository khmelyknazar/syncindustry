import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navigationCta, secondaryCta } from "@/config/navigation";

/**
 * Answers "what do I do next" — the fifth thing a Hero must convey.
 * Обидва CTA читаються з `config/navigation.ts`. Головна дія більша
 * (`xl`, зі світінням) і першою в порядку фокусу; друга — контурна,
 * щоб не конкурувати. На мобільному кнопки на всю ширину: велика
 * зона натискання під великий палець.
 */
export function HeroCtaGroup() {
  return (
    <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
      <Button asChild variant="primary" size="xl" className="group">
        <Link href={navigationCta.href}>
          {navigationCta.label}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-[var(--motion-instant)] group-hover:translate-x-0.5"
          />
        </Link>
      </Button>
      <Button asChild variant="secondary" size="xl">
        <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
      </Button>
    </div>
  );
}
