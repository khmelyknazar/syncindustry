import { Blocks, Boxes, Building2, Users, Workflow } from "lucide-react";
import type { Route } from "next";

import type { Product } from "@/types/product";

/**
 * THE single source of truth for product metadata across the site.
 * `config/navigation.ts` re-exports this array as `productNavItems`
 * (unchanged name, unchanged shape for its two existing consumers —
 * the mega-menu and Hero's system visualization); `features/solutions`
 * reads the same array directly for the richer fields. There is no
 * second copy anywhere — a status change, a new icon, or a corrected
 * description happens here once.
 *
 * All five products are now `"available"` (business decision — no
 * longer Latent per Product Architecture v2 §4). `businessProblem`
 * and `capabilities` stay CRM-only: nobody has supplied that level of
 * detail for the other four yet, and inventing it would be exactly
 * the fabricated-capability problem this project has avoided
 * everywhere else. `ecosystemRole` (already honest, already written)
 * is what their new `/product/[slug]` pages render.
 *
 * Each `href` is cast `as Route`: typedRoutes validates *static*
 * literals like `/product` against `Route` automatically, but for a
 * *dynamic*-segment literal (`/product/crm` matching `/product/[slug]`)
 * the check only fires when the literal is written directly inline in
 * JSX — a literal stored in this array first widens to the `href`
 * field's declared type, losing that inference. The cast is the
 * documented Next.js pattern for exactly this case; the slug still
 * has to match a real `/product/[slug]` page for the route to work.
 */
export const products: Product[] = [
  {
    slug: "crm",
    title: "CRM",
    description: "Продажі, ліди та воронки в одній системі.",
    icon: Users,
    status: "available",
    href: "/product/crm" as Route,
    businessProblem:
      "Дані про ліди, клієнтів і задачі розкидані по чатах, таблицях і головах менеджерів — рішення приймаються без повної картини.",
    capabilities: [
      "Ліди",
      "Клієнти",
      "Угоди",
      "Задачі",
      "Комунікація",
      "Воронка продажів",
      "Звітність",
      "Інтеграції",
    ],
  },
  {
    slug: "erp",
    title: "ERP",
    description: "Фінанси, ресурси та операційне управління.",
    icon: Boxes,
    status: "comingSoon",
    href: "/product/erp" as Route,
    ecosystemRole:
      "Розширює той самий Core фінансовими й ресурсними даними — без окремого логіну чи міграції.",
  },
  {
    slug: "automation",
    title: "Business Automation",
    description: "Автоматизація повторюваних бізнес-процесів.",
    icon: Workflow,
    status: "available",
    href: "/product/automation" as Route,
    ecosystemRole:
      "З'єднує дані CRM, ERP та зовнішніх сервісів у наскрізні автоматизовані процеси.",
  },
  {
    slug: "internal-systems",
    title: "Internal Systems",
    description: "Внутрішні портали й корпоративні кабінети.",
    icon: Building2,
    status: "available",
    href: "/product/internal-systems" as Route,
    ecosystemRole:
      "Внутрішні інструменти команди на тому самому фундаменті — не окрема система з нуля.",
  },
  {
    slug: "integrations",
    title: "Integrations",
    description: "Підключення до інструментів, якими вже користуєтесь.",
    icon: Blocks,
    status: "available",
    href: "/product/integrations" as Route,
    ecosystemRole: "З'єднує екосистему Sync Industry з інструментами, що вже працюють у бізнесі.",
  },
];

