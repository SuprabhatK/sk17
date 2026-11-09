"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  PRODUCTIVE_HOURS_PER_DAY,
  ESTIMATE_LOW,
  ESTIMATE_HIGH,
  hasRate,
  rateLabel,
  costRange,
  projectTypes,
  features,
  complexities,
  provided,
} from "@/lib/pricing";

export default function Estimator() {
  const [type, setType] = useState("business");
  const [picked, setPicked] = useState<Record<string, boolean>>({ form: true, seo: true });
  const [cx, setCx] = useState("standard");
  const [prov, setProv] = useState<Record<string, string>>({ design: "has", content: "has", feedback: "fast" });
  const [billing, setBilling] = useState<"fixed" | "hourly">("fixed");

  const calc = useMemo(() => {
    const base = projectTypes.find((p) => p.id === type)!.hours;
    const extra = features.filter((f) => picked[f.id]).reduce((s, f) => s + f.hours, 0);
    const mult = complexities.find((c) => c.id === cx)!.mult;
    const pct = provided.reduce((s, p) => s + (p.choices.find((c) => c.id === prov[p.id])?.pct ?? 0), 0);
    const hours = (base + extra) * mult * (1 + pct);
    return {
      base,
      extra,
      mult,
      pct,
      hours,
      lo: hours * ESTIMATE_LOW,
      hi: hours * ESTIMATE_HIGH,
      days: Math.ceil(hours / PRODUCTIVE_HOURS_PER_DAY),
    };
  }, [type, picked, cx, prov]);

  const t = projectTypes.find((p) => p.id === type)!;

  return (
    <div className="est">
      <div className="est-form">
        <div className="est-block">
          <h4>
            <b>1</b> What are you building?
          </h4>
          <div className="est-types">
            {projectTypes.map((p) => (
              <button key={p.id} className={type === p.id ? "on" : ""} onClick={() => setType(p.id)}>
                <strong>{p.name}</strong>
                <span>{p.hours} hrs base</span>
              </button>
            ))}
          </div>
          <p className="est-note">
            {t.note} <em>{t.ref}</em>
          </p>
        </div>

        <div className="est-block">
          <h4>
            <b>2</b> Which functionality do you need?
          </h4>
          <div className="est-feats">
            {features.map((f) => (
              <label key={f.id} className={picked[f.id] ? "on" : ""}>
                <input type="checkbox" checked={!!picked[f.id]} onChange={(e) => setPicked({ ...picked, [f.id]: e.target.checked })} />
                <span className="box" aria-hidden />
                <span className="txt">
                  <strong>{f.name}</strong>
                  <small>{f.note}</small>
                </span>
                <span className="hrs">+{f.hours}h</span>
              </label>
            ))}
          </div>
        </div>

        <div className="est-block">
          <h4>
            <b>3</b> How complex is it?
          </h4>
          <div className="est-seg">
            {complexities.map((c) => (
              <button key={c.id} className={cx === c.id ? "on" : ""} onClick={() => setCx(c.id)}>
                <strong>{c.name}</strong>
                <span>{c.note}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="est-block">
          <h4>
            <b>4</b> What can you provide?
          </h4>
          <div className="est-prov">
            {provided.map((p) => (
              <div key={p.id}>
                <h5>{p.title}</h5>
                <div className="est-seg small">
                  {p.choices.map((c) => (
                    <button key={c.id} className={prov[p.id] === c.id ? "on" : ""} onClick={() => setProv({ ...prov, [p.id]: c.id })}>
                      <strong>{c.label}</strong>
                      {c.pct > 0 && <span>+{Math.round(c.pct * 100)}% effort</span>}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="est-result">
        <p className="est-eyebrow">Your estimate</p>
        <div className="est-price">
          {hasRate ? (
            billing === "fixed" ? (
              <>{costRange(calc.lo, calc.hi)}</>
            ) : (
              <>
                {rateLabel()} <i>per hour</i>
              </>
            )
          ) : (
            <>
              {Math.round(calc.lo)} to {Math.round(calc.hi)} <i>hours</i>
            </>
          )}
        </div>
        <p className="est-sub">
          {hasRate
            ? billing === "fixed"
              ? "Fixed price, agreed in writing before I start."
              : `About ${Math.round(calc.lo)} to ${Math.round(calc.hi)} hours, billed weekly from a timesheet.`
            : "Typical effort for this scope. Pricing is shared after a short call, and it is negotiable."}
        </p>

        {hasRate && (
          <div className="est-toggle" role="tablist">
            <button className={billing === "fixed" ? "on" : ""} onClick={() => setBilling("fixed")}>
              Fixed price
            </button>
            <button className={billing === "hourly" ? "on" : ""} onClick={() => setBilling("hourly")}>
              Hourly
            </button>
          </div>
        )}

        <ul className="est-lines">
          <li>
            <span>Base: {t.name}</span>
            <b>{calc.base}h</b>
          </li>
          <li>
            <span>Functionality</span>
            <b>+{calc.extra}h</b>
          </li>
          <li>
            <span>Complexity</span>
            <b>×{calc.mult}</b>
          </li>
          <li>
            <span>Your inputs</span>
            <b>{calc.pct > 0 ? `+${Math.round(calc.pct * 100)}%` : "none"}</b>
          </li>
          <li className="sum">
            <span>Estimated effort</span>
            <b>{Math.round(calc.hours)}h</b>
          </li>
          <li>
            <span>Delivery time</span>
            <b>~{calc.days} working days</b>
          </li>
        </ul>

        <Link className="btn" href="/?s=contact">
          Get an exact quote <i>→</i>
        </Link>
        <p className="est-fine">
          This is an estimate to help you plan, and the price is negotiable. After a short call I confirm the scope and send a final quote.
          {hasRate && <> The rate is {rateLabel()}/hour.</>} The range allows for {Math.round((1 - ESTIMATE_LOW) * 100)}% under to {Math.round((ESTIMATE_HIGH - 1) * 100)}% over.
        </p>
      </aside>
    </div>
  );
}
