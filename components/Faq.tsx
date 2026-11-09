"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

/** Simple accordion: one question open at a time. */
export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((x, i) => (
        <div key={x.q} className={`acc ${open === i ? "open" : ""}`}>
          <button className="acc-h" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <span className="acc-t">
              <b>{x.q}</b>
            </span>
            <i aria-hidden>+</i>
          </button>
          <div className="acc-b">
            <div>
              <p>{x.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
