"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Section, SectionHeader } from "@/components/nexus/section";
import { Reveal } from "@/components/motion/reveal";
import { architectureLayers } from "@/constants/content";
import { cn } from "@/lib/utils";

const sources = ["GitHub", "Jira", "Slack"];
const targets = ["Vercel", "Web app", "API"];

/**
 * Premium architecture surface: an animated hub diagram (sources → Nexus →
 * surfaces) paired with the layer ledger. Hovering a node lights its edges.
 */
export function Architecture() {
  const [hot, setHot] = useState<string | null>(null);

  return (
    <Section id="arquitetura" tone="ink" rule>
      <div
        aria-hidden
        className="hairline-grid-ink-fine pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 size-[42rem] -translate-x-1/2 rounded-full bg-[image:var(--gradient-signal)] opacity-[0.10] blur-[140px]"
      />

      <SectionHeader
        tone="ink"
        eyebrow="Arquitetura"
        title="Um núcleo. Todas as pontas conectadas."
        body="O contexto sobe do repositório até a interface sem se degradar no caminho."
        align="center"
      />

      {/* Hub diagram */}
      <Reveal delay={0.1} variant="scale">
        <div
          className="relative mt-20 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]"
          onPointerLeave={() => setHot(null)}
        >
          <ul className="space-y-3">
            {sources.map((s) => (
              <Node key={s} label={s} side="left" hot={hot} setHot={setHot} />
            ))}
          </ul>

          <div className="relative mx-auto">
            <span
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-[image:var(--gradient-signal)] opacity-30 blur-3xl"
            />
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid size-32 place-items-center rounded-full border border-signal/35 bg-ink-elevated/70 text-center backdrop-blur-md md:size-36"
            >
              <div>
                <p className="font-display text-lg tracking-tight text-ink-foreground">Nexus</p>
                <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-signal">
                  grafo vivo
                </p>
              </div>
            </motion.div>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full border border-signal/20 pulse-soft"
            />
          </div>

          <ul className="space-y-3">
            {targets.map((t) => (
              <Node key={t} label={t} side="right" hot={hot} setHot={setHot} />
            ))}
          </ul>

          {/* Connector rails — decorative, desktop only */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden size-full md:block"
          >
            {[18, 50, 82].map((y) => (
              <g key={`l-${y}`}>
                <path
                  d={`M 26 ${y} C 38 ${y}, 40 50, 47 50`}
                  fill="none"
                  stroke="oklch(1 0 0 / 14%)"
                  strokeWidth="0.35"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d={`M 74 ${y} C 62 ${y}, 60 50, 53 50`}
                  fill="none"
                  stroke="oklch(1 0 0 / 14%)"
                  strokeWidth="0.35"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}
          </svg>
        </div>
      </Reveal>

      {/* Layer ledger */}
      <div className="relative mt-24 border-t border-ink-border">
        {architectureLayers.map((layer, i) => (
          <Reveal key={layer.tag} delay={i * 0.07}>
            <div className="group grid gap-4 border-b border-ink-border py-7 transition-colors duration-500 hover:bg-white/[0.03] md:grid-cols-[210px_1fr_auto] md:items-center md:gap-8 md:px-4">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-signal">
                {layer.tag}
              </p>
              <div>
                <h3 className="text-lg tracking-tight text-ink-foreground">{layer.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">{layer.body}</p>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-ink-border px-2.5 py-1 font-mono text-[0.58rem] text-ink-foreground/70 transition-colors duration-500 group-hover:border-signal/30 group-hover:text-ink-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Node({
  label,
  side,
  hot,
  setHot,
}: {
  label: string;
  side: "left" | "right";
  hot: string | null;
  setHot: (v: string | null) => void;
}) {
  const active = hot === label;
  return (
    <li
      onPointerEnter={() => setHot(label)}
      className={cn(
        "flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition-all duration-400",
        side === "right" && "md:flex-row-reverse md:text-right",
        active
          ? "border-signal/50 bg-white/[0.07] text-ink-foreground"
          : "border-ink-border bg-white/[0.025] text-ink-muted",
      )}
    >
      <span
        className={cn(
          "size-1.5 shrink-0 rounded-full transition-colors duration-400",
          active ? "bg-signal" : "bg-ink-muted/50",
        )}
      />
      <span className="flex-1 truncate">{label}</span>
    </li>
  );
}
