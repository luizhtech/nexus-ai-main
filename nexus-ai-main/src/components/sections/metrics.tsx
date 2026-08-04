"use client";

import { Section, Eyebrow } from "@/components/nexus/section";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { metrics } from "@/constants/content";

const series = [
  [22, 34, 30, 46, 52, 61, 70, 78, 86],
  [18, 26, 40, 38, 55, 62, 71, 80, 92],
  [30, 28, 44, 50, 48, 66, 74, 82, 90],
  [70, 74, 80, 84, 88, 90, 93, 96, 98],
];

/**
 * Results ledger: oversized animated figures with a discreet sparkline.
 * Deliberately not a card grid — a single ruled band.
 */
export function Metrics() {
  return (
    <Section id="resultados" tone="ink">
      <div
        aria-hidden
        className="hairline-grid-ink-fine pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/4 size-[34rem] rounded-full bg-[image:var(--gradient-signal)] opacity-[0.08] blur-[130px]"
      />

      <div className="relative grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <Reveal>
          <Eyebrow tone="ink">Resultados</Eyebrow>
          <h2 className="mt-7 text-balance text-[2.1rem] leading-[1.03] tracking-[-0.04em] text-ink-foreground sm:text-5xl">
            Números medidos, não prometidos.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-sm leading-relaxed text-ink-muted lg:justify-self-end">
            Amostra agregada de 90 equipes ao longo de doze meses de operação contínua.
          </p>
        </Reveal>
      </div>

      <dl className="relative mt-16 grid grid-cols-1 border-t border-ink-border sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.09}>
            <div className="group h-full border-b border-ink-border px-1 py-9 transition-colors duration-500 sm:px-6 lg:border-r lg:last:border-r-0">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <p className="font-display text-5xl tracking-[-0.05em] text-ink-foreground md:text-6xl">
                  <Counter value={m.value} />
                </p>
                <p className="mt-4 text-sm leading-snug text-ink-foreground/85">{m.label}</p>
                <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted">
                  {m.detail}
                </p>
                <Sparkline points={series[i] ?? series[0]!} />
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}

function Sparkline({ points }: { points: number[] }) {
  const d = points
    .map((p, i) => `${(i / (points.length - 1)) * 100},${34 - (p / 100) * 30}`)
    .join(" ");

  return (
    <svg
      aria-hidden
      viewBox="0 0 100 36"
      preserveAspectRatio="none"
      className="mt-6 h-9 w-full opacity-55 transition-opacity duration-500 group-hover:opacity-100"
    >
      <polyline
        points={d}
        fill="none"
        stroke="var(--signal)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
