import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Pill({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "ink";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        tone === "ink"
          ? "border-ink-border bg-white/5 text-ink-foreground"
          : "border-border bg-card text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
