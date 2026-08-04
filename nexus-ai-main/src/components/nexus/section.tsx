import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

type Tone = "light" | "ink" | "tinted";

const toneClass: Record<Tone, string> = {
  light: "bg-background text-foreground",
  tinted: "bg-secondary/50 text-foreground",
  ink: "surface-ink noise",
};

export function Section({
  id,
  tone = "light",
  className,
  children,
  ariaLabel,
  rule = false,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  /** Hairline divider at the top edge — used to chain light sections. */
  rule?: boolean;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "relative overflow-hidden px-6 py-28 md:px-10 md:py-40",
        toneClass[tone],
        className,
      )}
    >
      {rule ? (
        <span
          aria-hidden
          className={cn("absolute inset-x-0 top-0 h-px", tone === "ink" ? "rule-x-ink" : "rule-x")}
        />
      ) : null}
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[0.66rem] uppercase tracking-[0.24em]",
        tone === "ink" ? "text-signal" : "text-primary",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "size-1.5 rounded-full",
          tone === "ink" ? "bg-signal" : "bg-primary",
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="mt-7 text-balance text-[2.1rem] leading-[1.03] tracking-[-0.04em] sm:text-5xl md:text-[3.4rem]">
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-7 max-w-xl text-pretty text-base leading-relaxed md:text-[1.05rem]",
            align === "center" && "mx-auto",
            tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}
