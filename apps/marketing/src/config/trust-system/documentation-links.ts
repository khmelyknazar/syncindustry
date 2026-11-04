import { Building2, ShieldCheck } from "lucide-react";

import type { DocLink } from "@/types/trust";

/**
 * Real, navigable pages only. Add an entry the same day its page
 * ships, not before.
 */
export const documentationLinks: DocLink[] = [
  {
    title: "Як ми працюємо",
    description: "Як ми проєктуємо системи, за якими принципами працюємо і на чому будуємо.",
    href: "/company/engineering",
    icon: Building2,
  },
  {
    title: "Безпека",
    description: "Принципи безпеки CRM та інтеграцій і те, як захищені дані на цьому сайті.",
    href: "/company/security",
    icon: ShieldCheck,
  },
];
