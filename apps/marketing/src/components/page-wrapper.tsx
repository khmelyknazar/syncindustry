"use client";

import { pageTransitionVariants } from "@axioma/design-system/motion";
import { m } from "motion/react";
import { useEffect, useState, type PropsWithChildren } from "react";


import { useReducedMotionVariants } from "@/hooks/use-reduced-motion";

/**
 * The shell every route's content renders into.
 *
 * Two responsibilities, deliberately kept together:
 * 1. **Landmark** — renders the `<main id="main-content">` that
 *    `SkipLink` targets and that assistive tech uses to jump past
 *    repeated nav (WCAG 2.1 AA, 2.4.1).
 * 2. **Page transition** — the fade + 8px slide from Design System
 *    §8.3 ("Page transition: motion-slow, ease-emphasis"), applied
 *    once per route mount. Uses `m` (not `motion`) to stay inside the
 *    `MotionProvider`'s `LazyMotion` bundle.
 *
 * Route groups compose this once in their segment layout (e.g. a
 * future `(marketing)/layout.tsx`) — individual pages never re-wrap
 * their content in another PageWrapper.
 */
/**
 * Перший показ сторінки (серверний HTML і гідрація) рендериться вже
 * видимим: початкова `opacity: 0` затримувала б LCP і давала б
 * порожній екран, поки не завантажиться JS. Анімація переходу
 * граває лише при наступних переходах між сторінками в межах сайту.
 */
let hasHydrated = false;

export function PageWrapper({ children }: PropsWithChildren) {
  const variants = useReducedMotionVariants(pageTransitionVariants);
  const [isFirstPaint] = useState(() => !hasHydrated);
  useEffect(() => {
    hasHydrated = true;
  }, []);

  return (
    <m.main
      id="main-content"
      initial={isFirstPaint ? false : "initial"}
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </m.main>
  );
}
