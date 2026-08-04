import { Section, SectionHeader } from "@/components/nexus/section";
import { SpotlightCard } from "@/components/nexus/spotlight-card";
import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/constants/content";

/**
 * One hero quote plus two supporting quotes — asymmetric, not a 3-up grid.
 */
export function Testimonials() {
  const [lead, ...rest] = testimonials;

  return (
    <Section id="depoimentos" tone="tinted" rule>
      <SectionHeader eyebrow="Depoimentos" title="Quem já mudou o próprio fluxo." />

      <div className="mt-16 grid gap-4 lg:grid-cols-[1.25fr_1fr]">
        {lead ? (
          <Reveal>
            <SpotlightCard className="flex h-full flex-col justify-between p-9 md:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-10 -top-10 size-40 rounded-full bg-[image:var(--gradient-signal)] opacity-[0.08] blur-3xl"
              />
              <p className="text-pretty font-display text-2xl leading-[1.3] tracking-[-0.025em] text-foreground md:text-[1.9rem]">
                “{lead.quote}”
              </p>
              <Byline name={lead.name} role={lead.role} large />
            </SpotlightCard>
          </Reveal>
        ) : null}

        <ul className="grid gap-4">
          {rest.map((t, i) => (
            <Reveal key={t.name} delay={0.1 + i * 0.09}>
              <SpotlightCard as="li" className="flex h-full flex-col justify-between p-7">
                <p className="text-pretty text-[0.95rem] leading-relaxed text-foreground/90">
                  “{t.quote}”
                </p>
                <Byline name={t.name} role={t.role} />
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Byline({ name, role, large }: { name: string; role: string; large?: boolean }) {
  return (
    <div className={large ? "mt-12 flex items-center gap-3.5" : "mt-7 flex items-center gap-3"}>
      <span
        aria-hidden
        className="grid size-9 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-signal)] font-mono text-xs text-ink"
      >
        {name.charAt(0)}
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{name}</p>
        <p className="truncate text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
