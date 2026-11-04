import { Blocks, Boxes, Building2, Sparkles, Users, Workflow } from "lucide-react";
import type { Route } from "next";

import type { Product } from "@/types/product";

/**
 * THE single source of truth for product metadata across the site.
 * `config/navigation.ts` re-exports this array as `productNavItems`;
 * `features/solutions` reads it directly. Тексти базуються лише на
 * підтвердженій інформації про компанію: нічого не вигадано.
 *
 * Href має `as Route`: для dynamic-сегментів typedRoutes не виводить
 * літерал, якщо він зберігається в масиві.
 */
export const products: Product[] = [
  {
    slug: "crm",
    title: "CRM",
    seoTitle: "Розробка CRM під процеси вашого бізнесу",
    seoDescription:
      "Клієнти, задачі, комунікація та історія взаємодії в одній системі, спроєктованій під те, як ви працюєте.",
    h1: "CRM, спроєктована під ваші бізнес-процеси",
    description: "Клієнти, задачі й комунікація в одній системі під ваші процеси.",
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
    slug: "automation",
    title: "Автоматизація бізнес-процесів",
    seoTitle: "Автоматизація бізнес-процесів для компаній",
    seoDescription:
      "Прибираємо ручне перенесення даних і загублені дедлайни. Спочатку розбираємо ваші процеси, потім автоматизуємо те, що справді цього потребує.",
    h1: "Автоматизація бізнес-процесів без ручної рутини",
    description: "Прибираємо ручне перенесення даних і загублені дедлайни.",
    icon: Workflow,
    status: "available",
    href: "/product/automation" as Route,
    businessProblem:
      "Працівники вручну переносять дані між Telegram, таблицями та сервісами, а задачі й дедлайни губляться.",
    capabilities: [
      "Повторювані операції",
      "Нагадування та дедлайни",
      "Обробка вхідної інформації",
      "Робота з документами",
      "Робочі сценарії",
    ],
  },
  {
    slug: "integrations",
    title: "Інтеграції",
    seoTitle: "Інтеграція CRM з месенджерами та сервісами",
    seoDescription:
      "Об'єднуємо CRM, месенджери, таблиці та документи, щоб уся історія роботи з клієнтом була в одному місці.",
    h1: "Інтеграція CRM, месенджерів і сервісів",
    description: "Об'єднуємо CRM, месенджери, таблиці та документи.",
    icon: Blocks,
    status: "available",
    href: "/product/integrations" as Route,
    businessProblem:
      "Інформація розкидана між Telegram, таблицями та різними сервісами, тому немає єдиної історії взаємодії з клієнтом.",
    capabilities: [
      "CRM",
      "Telegram, Viber і WhatsApp в одному місці",
      "Таблиці",
      "Документи",
    ],
  },
  {
    slug: "ai",
    title: "AI-рішення",
    seoTitle: "AI-автоматизація бізнесу: документи, повідомлення, дані",
    seoDescription:
      "Розпізнавання документів, структуризація інформації та аналіз повідомлень: менше ручної роботи з даними.",
    h1: "AI-автоматизація роботи з документами та даними",
    description: "Розпізнавання документів, структуризація інформації та аналіз повідомлень.",
    icon: Sparkles,
    status: "available",
    href: "/product/ai" as Route,
    businessProblem:
      "Документи й повідомлення доводиться обробляти вручну, а потрібні дані шукати серед різних джерел.",
    capabilities: [
      "Розпізнавання документів",
      "Структуризація інформації",
      "Аналіз повідомлень",
      "Робота з даними",
    ],
  },
  {
    slug: "internal-systems",
    title: "Внутрішні системи",
    seoTitle: "Внутрішні системи для бізнесу",
    seoDescription:
      "Системи для роботи з клієнтами, задачами, послугами та даними: керівник бачить повну картину роботи.",
    h1: "Внутрішні системи для управління бізнесом",
    description: "Внутрішні портали й кабінети для роботи команди.",
    icon: Building2,
    status: "available",
    href: "/product/internal-systems" as Route,
    businessProblem:
      "Інформація розкидана між різними сервісами, і керівник не бачить повної картини роботи.",
    capabilities: ["Клієнти", "Задачі", "Послуги", "Комунікації", "Дані"],
  },
  {
    slug: "erp",
    title: "ERP",
    description: "Облік фінансів, ресурсів і операцій.",
    icon: Boxes,
    status: "comingSoon",
    href: "/product/erp" as Route,
  },
];
