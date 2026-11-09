"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ESTIMATE_LOW,
  ESTIMATE_HIGH,
  standardIncluded,
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
    };
  }, [type, picked, cx, prov]);

  const t = projectTypes.find((p) => p.id === type)!;
  const selected = features.filter((f) => picked[f.id]).length;
  const cxName = complexities.find((c) => c.id === cx)!.name;
  const included = [...standardIncluded, ...features.filter((f) => picked[f.id]).map((f) => f.name)];
  const shown = included.slice(0, 8);

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
                <span>Best for {p.bestFor.toLowerCase()}</span>
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
        <p className="est-eyebrow">{hasRate ? "Your estimate" : "Your project"}</p>
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
            <>{t.name}</>
          )}
        </div>
        <p className="est-sub">
          {hasRate
            ? billing === "fixed"
              ? "Fixed price, agreed in writing before I start."
              : "Billed weekly from a timesheet, with regular updates."
            : "Here is what your project includes. Pricing is shared after a short call, and it is negotiable."}
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
            <span>Project type</span>
            <b>{t.name}</b>
          </li>
          <li>
            <span>Functionality</span>
            <b>{selected === 0 ? "None added" : `${selected} selected`}</b>
          </li>
          <li>
            <span>Complexity</span>
            <b>{cxName}</b>
          </li>
          <li>
            <span>What you provide</span>
            <b>{calc.pct > 0 ? "I help with some" : "All ready"}</b>
          </li>
          <li className="sum">
            <span>Next step</span>
            <b>A short call to confirm</b>
          </li>
        </ul>

        <p className="est-incl-h">Included in your project</p>
        <ul className="est-incl">
          {shown.map((x) => (
            <li key={x}>{x}</li>
          ))}
          {included.length > shown.length && <li className="more">and {included.length - shown.length} more</li>}
        </ul>

        <Link className="btn" href="/?s=contact">
          Get an exact quote <i>→</i>
        </Link>
        <p className="est-fine">
          This is an estimate to help you plan, and the price is negotiable. After a short call I confirm the scope and send a final quote.
          {hasRate && <> The rate is {rateLabel()}/hour.</>} The final quote depends on the confirmed scope.
        </p>
      </aside>
    </div>
  );
}
