"use client";

import { useEffect } from "react";

/** Cards that get the bubble hover effect (keep in sync with app/bubble.css). */
const SELECTOR = ".glass, .plan, .flow li, .trust div, .facts div, .pg-stats div, .stats-row div, .acc, .tile";

const rnd = (a: number, b: number) => a + Math.random() * (b - a);

/**
 * Each time the pointer enters a card, the bubble gets a fresh random start point on the card's edge
 * (side, position, size and a small colour shift), so it never appears in the same place twice.
 */
export default function BubbleHover() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const onOver = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(SELECTOR);
      if (!card) return;
      const from = e.relatedTarget as Node | null;
      if (from && card.contains(from)) return; // moving between children of the same card
      const side = Math.floor(Math.random() * 4);
      const t = rnd(8, 92);
      const [x, y] = side === 0 ? [t, 0] : side === 1 ? [100, t] : side === 2 ? [t, 100] : [0, t];
      card.style.setProperty("--bx", x.toFixed(1) + "%");
      card.style.setProperty("--by", y.toFixed(1) + "%");
      card.style.setProperty("--bs", Math.round(rnd(150, 250)) + "px");
      card.style.setProperty("--bh", Math.round(rnd(-35, 35)) + "deg");
    };
    document.addEventListener("pointerover", onOver, { passive: true });
    return () => document.removeEventListener("pointerover", onOver);
  }, []);
  return null;
}
