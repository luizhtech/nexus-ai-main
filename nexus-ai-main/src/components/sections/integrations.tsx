import { Section, SectionHeader } from "@/components/nexus/section";
import { Reveal } from "@/components/motion/reveal";
import { integrations } from "@/constants/content";
import { ArrowUpRight } from "lucide-react";

/**
 * Ledger of integrations — a ruled list instead of yet another card grid.
 */
export function Integrations() {
  return (
    <Section id="integracoes" rule>
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Integrações"
          title="Encaixa no stack que seu time já escolheu."
          body="OAuth com escopo mínimo, sincronização incremental e revogação a qualquer momento."
          className="lg:sticky lg:top-32"
        />

        <ul className="border-t border-border">
          {integrations.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.07}>
              <li className="group flex items-start justify-between gap-6 border-b border-border py-7 transition-colors duration-500 hover:border-primary/40">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.62rem] text-primary/70">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg tracking-tight transition-colors duration-300 group-hover:text-primary">
                      {it.name}
                    </h3>
                  </div>
                  <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {it.body}
                  </p>
                </div>
                <ArrowUpRight
                  aria-hidden
                  className="mt-1 size-4 shrink-0 text-muted-foreground/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
