"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const STEP = 16; // degrees between markers (same as the home dial)

// the bubble's colour travels through these hue-rotate stops as the page scrolls (purple -> pink -> blue -> teal)
const HUE_STOPS = [0, 45, -40, -90];
const lerpStops = (p: number) => {
  const t = Math.min(0.9999, Math.max(0, p)) * (HUE_STOPS.length - 1);
  const i = Math.floor(t);
  return HUE_STOPS[i] + (HUE_STOPS[i + 1] - HUE_STOPS[i]) * (t - i);
};

export type DialItem = { id: string; label: string };

/**
 * Dial for the scrolling projects page. The wheel turns to the next marker (home-page easing) when the
 * section in view changes, and the half-hidden bubble at the edge makes one smooth 360 degree turn
 * and shifts colour as you scroll down the whole page.
 */
export default function ProjectsDial({ items }: { items: DialItem[] }) {
  const dialRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const box = document.querySelector<HTMLElement>(".pg");
    const dial = dialRef.current;
    const blob = blobRef.current;
    if (!box || !dial || !blob) return;

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

    // scroll progress (0 to 1) drives the bubble; values are eased every frame so it glides
    const target = { rot: 0, hue: 0, scale: 1 };
    const cur = { rot: 0, hue: 0, scale: 1 };
    const progress = () => {
      const max = box.scrollHeight - box.clientHeight;
      return max > 0 ? Math.min(1, Math.max(0, box.scrollTop / max)) : 0;
    };
    const setTargets = () => {
      const p = progress();
      target.rot = p * 360;
      target.hue = lerpStops(p);
      target.scale = 1 + 0.1 * Math.sin(p * Math.PI * 2);
    };
    const tick = () => {
      cur.rot += (target.rot - cur.rot) * 0.075;
      cur.hue += (target.hue - cur.hue) * 0.075;
      cur.scale += (target.scale - cur.scale) * 0.075;
      blob.style.transform = `rotate(${cur.rot.toFixed(2)}deg) scale(${cur.scale.toFixed(3)})`;
      blob.style.filter = `hue-rotate(${cur.hue.toFixed(1)}deg)`;
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
      setTargets();
      if (!raf) raf = requestAnimationFrame(() => compute());
    };

    setTargets();
    Object.assign(cur, target);
    compute(true);
    gsap.ticker.add(tick);
    box.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const late = setTimeout(onScroll, 700); // images finish loading and change heights
    return () => {
      box.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      gsap.ticker.remove(tick);
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
    <>
      {/* small bubble, only a sliver visible at the screen edge, like the home page */}
      <div className="pblob" aria-hidden>
        <div className="blob" ref={blobRef}>
          {Array.from({ length: 9 }).map((_, i) => (
            <i key={i} style={{ ["--i" as string]: i }} />
          ))}
        </div>
      </div>

      <nav className="pdial" aria-label="Jump to a section">
        <div className="orbit" />
        <div className="lens" />
        <div className="dial" ref={dialRef}>
          <div className="ring" />
          <div className="ticks" />
          <div className="ticks major" />
          <div className="ring3" />
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
    </>
  );
}
