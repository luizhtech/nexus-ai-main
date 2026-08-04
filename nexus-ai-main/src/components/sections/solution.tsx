import { Section, SectionHeader } from "@/components/nexus/section";
import { Reveal } from "@/components/motion/reveal";
import { solutionPillars } from "@/constants/content";

export function Solution() {
  return (
    <Section id="solucao" tone="tinted" rule>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-[image:var(--gradient-signal)] opacity-[0.07] blur-[120px]"
      />

      <SectionHeader
        eyebrow="A solução"
        title="Nexus transforma o seu sistema em conhecimento consultável."
        body="Em vez de mais uma ferramenta ao lado das outras, o Nexus se posiciona embaixo delas."
        align="center"
      />

      <ol className="relative mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
        {solutionPillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.1}>
            <li className="group relative h-full bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10">
              <span className="font-mono text-[0.62rem] tracking-[0.2em] text-primary/70">
                0{i + 1}
              </span>
              <h3 className="mt-8 text-xl tracking-tight transition-colors duration-300 group-hover:text-primary md:text-[1.4rem]">
                {pillar.title}
              </h3>
              <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[image:var(--gradient-signal)] transition-transform duration-700 group-hover:scale-x-100"
              />
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
