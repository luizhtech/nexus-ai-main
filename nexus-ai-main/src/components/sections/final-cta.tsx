import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/nexus/section";
import { Mockup } from "@/components/nexus/mockup";

export function FinalCta() {
  return (
    <section
      id="cta"
      aria-label="Comece a usar o Nexus"
      className="surface-ink noise relative overflow-hidden px-6 py-36 md:px-10 md:py-44"
    >
      <div
        aria-hidden
        className="hairline-grid-ink-fine pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_65%_at_35%_50%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-18rem] left-1/3 size-[46rem] -translate-x-1/2 rounded-full bg-[image:var(--gradient-signal)] opacity-[0.16] blur-[150px]"
      />
      <span aria-hidden className="absolute inset-x-0 top-0 h-px rule-x-ink" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <Eyebrow tone="ink">Comece hoje</Eyebrow>
          <h2 className="mt-7 text-balance text-[2.6rem] leading-[0.98] tracking-[-0.045em] text-ink-foreground sm:text-6xl lg:text-[4.2rem]">
            Dê ao seu time o contexto que ele já deveria ter.
          </h2>
          <p className="mt-7 max-w-sm text-pretty text-base leading-relaxed text-ink-muted">
            Primeira revisão assistida em menos de dez minutos.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="signal-ink" size="xl" asChild>
              <a href="#topo" className="group">
                Criar conta gratuita
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="quiet-ink" size="xl" asChild>
              <a href="#topo">Falar com engenharia</a>
            </Button>
          </div>

          <p className="mt-7 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-ink-muted/80">
            14 dias grátis · SSO incluso · cancele quando quiser
          </p>
        </Reveal>

        <Reveal delay={0.15} variant="scale">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[image:var(--gradient-signal)] opacity-[0.12] blur-3xl"
            />
            <Mockup view="insights" className="relative" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
