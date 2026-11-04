import { CheckCircle2, Eye, Gauge, PauseCircle } from "lucide-react";

import type { PrincipleItem } from "@/types/trust";

/**
 * Real, verifiable practices used in this codebase, described in
 * plain language. Each line is checkable against the site itself
 * (this page included).
 */
export const engineeringPagePractices: PrincipleItem[] = [
  {
    icon: Eye,
    title: "Зручно користуватися з клавіатури",
    description:
      "Кожну кнопку й посилання видно під час вибору, тож сайтом можна керувати без миші.",
  },
  {
    icon: CheckCircle2,
    title: "Читабельно для всіх",
    description:
      "Контрастні кольори, зрозуміла структура сторінок і заголовків — це частина кожного елемента, а не пізня перевірка.",
  },
  {
    icon: Gauge,
    title: "Швидке завантаження",
    description:
      "Додаткові скрипти підвантажуються лише там, де потрібна інтерактивність: у формі, меню чи під час прокрутки.",
  },
  {
    icon: PauseCircle,
    title: "Повага до налаштувань людини",
    description:
      "Якщо у вашому пристрої вимкнено анімацію, сайт повністю її прибирає, а не просто сповільнює.",
  },
];
