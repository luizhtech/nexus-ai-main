"use client";

import { cn } from "@/lib/utils";
import { useRef, type ReactNode } from "react";

/**
 * Card with a pointer-following highlight. Purely decorative; degrades to a
 * static card when the pointer is absent or motion is reduced.
 */
export function SpotlightCard({
  children,
  className,
  tone = "light",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "ink";
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.PointerEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as never}
      onPointerMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-500",
        tone === "ink"
          ? "border-ink-border bg-ink-elevated/60 hover:border-signal/40"
          : "border-border bg-card hover:border-primary/30 hover:shadow-lift",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden"
        style={{
          background:
            tone === "ink"
              ? "radial-gradient(320px circle at var(--mx) var(--my), color-mix(in oklab, var(--signal) 18%, transparent), transparent 70%)"
              : "radial-gradient(320px circle at var(--mx) var(--my), color-mix(in oklab, var(--primary) 8%, transparent), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}
