"use client";

import { useCallback, useEffect, useState } from "react";
import { Bolt } from "./Bolt";

/** The lightning-bolt logo doubles as the light/dark theme toggle. */
export default function ThemeBolt() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // reading the theme the pre-paint script chose; this must happen after mount to avoid a hydration mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggle = useCallback(() => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setDark(next === "dark");
  }, []);

  const label = dark ? "Switch to light theme" : "Switch to dark theme";
  return (
    <button className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      <Bolt className="h-7 w-7" />
    </button>
  );
}
