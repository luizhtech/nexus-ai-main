import { Section, SectionHeader } from "@/components/nexus/section";
import { SpotlightCard } from "@/components/nexus/spotlight-card";
import { Reveal } from "@/components/motion/reveal";
import { features } from "@/constants/content";
import { cn } from "@/lib/utils";

/**
 * Asymmetric bento: two lead modules get room to breathe, the remaining
 * six sit on a tighter ledger grid. Breaks the uniform 4-card rhythm.
 */
export function Features() {
  const [lead, second, ...rest] = features;

  return (
    <Section id="funcionalidades" tone="tinted" rule>
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionHeader
          eyebrow="Funcionalidades"
          title="Módulos independentes sobre o mesmo índice."
          body="Ative apenas o que faz sentido agora. Todos leem o mesmo grafo de contexto."
        />
        <Reveal delay={0.15}>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
            08 módulos · 01 índice
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 lg:grid-cols-3">
        {[lead, second].map((f, i) =>
          f ? (
            <Reveal key={f.title} delay={i * 0.08} className={i === 0 ? "lg:col-span-2" : ""}>
              <SpotlightCard className="h-full overflow-hidden p-8 md:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[image:var(--gradient-signal)] opacity-[0.07] blur-3xl"
                />
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-background text-primary transition-transform duration-500 group-hover:-translate-y-0.5">
                  <f.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-7 text-xl tracking-tight md:text-2xl">{f.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </SpotlightCard>
            </Reveal>
          ) : null,
        )}
      </div>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.06}>
            <SpotlightCard
              as="li"
              className={cn("h-full p-7", i === rest.length - 1 && "lg:col-span-1")}
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary">
                  <f.icon className="size-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[0.95rem] tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
