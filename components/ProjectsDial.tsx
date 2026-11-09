"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const STEP = 16; // degrees between markers (same as the home dial)

export type DialItem = { id: string; label: string };

/**
 * Dial for the scrolling projects page. The wheel turns to the next marker (same easing as the home page)
 * when the section in view changes, and clicking a marker glides to that section.
 */
export default function ProjectsDial({ items }: { items: DialItem[] }) {
  const dialRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const box = document.querySelector<HTMLElement>(".pg");
    const dial = dialRef.current;
    if (!box || !dial) return;

    let current = -1; // index the wheel is turning toward
    let raf = 0;
    let labelTimer: gsap.core.Tween | null = null;

    const turnTo = (next: number, instant: boolean) => {
      const from = current < 0 ? next : current;
      current = next;
      const dur = instant ? 0 : 1.1 + 0.25 * Math.abs(next - from);
      gsap.to(dial, { rotation: -next * STEP, duration: dur, ease: "power3.inOut", overwrite: "auto" });
      labelTimer?.kill();
      if (instant) setActive(next);
      else labelTimer = gsap.delayedCall(0.5, () => setActive(next));
    };

    const compute = (instant = false) => {
      raf = 0;
      const boxTop = box.getBoundingClientRect().top;
      const tops = items.map((it) => {
        const el = document.getElementById(it.id);
        return el ? el.getBoundingClientRect().top - boxTop + box.scrollTop : 0;
      });
      tops[0] = 0;
      const y = box.scrollTop + box.clientHeight * 0.38;
      let idx = 0;
      for (let k = 0; k < tops.length; k++) if (tops[k] <= y) idx = k;
      if (box.scrollTop + box.clientHeight >= box.scrollHeight - 4) idx = items.length - 1;
      if (idx !== current) turnTo(idx, instant);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => compute());
    };

    compute(true);
    box.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const late = setTimeout(onScroll, 700); // images finish loading and change heights
    return () => {
      box.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(late);
      labelTimer?.kill();
      if (raf) cancelAnimationFrame(raf);
      gsap.killTweensOf(dial);
    };
  }, [items]);

  const go = (id: string) => {
    const box = document.querySelector<HTMLElement>(".pg");
    const el = document.getElementById(id);
    if (!box || !el) return;
    const top = id === items[0].id ? 0 : el.getBoundingClientRect().top - box.getBoundingClientRect().top + box.scrollTop - 76;
    box.scrollTo({ top, behavior: "smooth" });
  };

  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <nav className="pdial" aria-label="Jump to a section">
      <div className="dial" ref={dialRef}>
        <div className="ring" />
        {items.map((it, i) => (
          <button
            key={it.id}
            className={`marker ${i === active ? "on" : ""}`}
            style={{ transform: `rotate(${i * STEP}deg) translateX(var(--R))` }}
            onClick={() => go(it.id)}
            aria-label={`Go to ${it.label}`}
            title={it.label}
          >
            <b />
            <span>{pad(i)}</span>
          </button>
        ))}
      </div>
      <p className="pdial-name" key={active}>
        {items[active]?.label}
      </p>
    </nav>
  );
}
