import { Section, SectionHeader } from "@/components/nexus/section";
import { Reveal } from "@/components/motion/reveal";
import { benefits } from "@/constants/content";

/**
 * Quiet counterpoint to the card-heavy sections: a ruled two-column ledger.
 */
export function Benefits() {
  return (
    <Section id="beneficios" tone="tinted" rule>
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <SectionHeader
          eyebrow="Benefícios"
          title="O ganho não é escrever mais código. É esperar menos."
          body="Menos tempo parado entre etapas, menos retrabalho depois do merge."
          className="lg:sticky lg:top-32"
        />

        <ul className="grid gap-px overflow-hidden border-y border-border sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <li className="group h-full border-b border-border py-8 pr-6 transition-colors duration-500 sm:border-b-0 sm:px-7 sm:[&:nth-child(-n+2)]:border-b">
                <b.icon
                  className="size-5 text-primary transition-transform duration-500 group-hover:-translate-y-0.5"
                  aria-hidden
                />
                <h3 className="mt-6 text-base tracking-tight">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
