"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Animated numeric counter. Parses a display string like "62%", "4.1×" or
 * "99.98%" and animates only the numeric part, preserving prefix/suffix.
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const match = value.match(/^([^\d-]*)(-?[\d.]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = Number(match?.[2] ?? 0);
  const suffix = match?.[3] ?? "";
  const decimals = (match?.[2]?.split(".")[1] ?? "").length;

  const [display, setDisplay] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce || !match) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target, match]);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      <span className="tabular-nums">
        {prefix}
        {display.toFixed(decimals)}
      </span>
      {suffix}
    </span>
  );
}
