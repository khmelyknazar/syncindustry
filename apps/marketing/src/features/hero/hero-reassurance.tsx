import { Send } from "lucide-react";

import { telegramContact } from "@/config/contact";

/**
 * Рядок під кнопками: знімає страх «мене одразу почнуть продавати»
 * (формулювання вже використовується на /contact і в фінальному CTA)
 * та дає найпростіший альтернативний шлях — написати в Telegram без
 * форми. Telegram-посилання з'являється лише якщо канал заданий у
 * `config/contact.ts`.
 */
export function HeroReassurance() {
  return (
    <div className="flex flex-col items-center gap-2 text-[13px] text-[var(--color-text-secondary)] sm:flex-row sm:gap-3">
      <p>Перша розмова — про вашу задачу, а не про продаж.</p>
      {telegramContact && (
        <>
          <span aria-hidden="true" className="hidden text-[var(--color-text-disabled)] sm:inline">
            ·
          </span>
          <a
            href={telegramContact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] font-medium",
              "text-[var(--color-text-link)] hover:underline",
              "transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
            ].join(" ")}
          >
            <Send aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
            Або напишіть у Telegram
          </a>
        </>
      )}
    </div>
  );
}
