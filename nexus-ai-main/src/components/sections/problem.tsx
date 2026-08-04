import { Section, SectionHeader } from "@/components/nexus/section";
import { SpotlightCard } from "@/components/nexus/spotlight-card";
import { Reveal } from "@/components/motion/reveal";
import { problems } from "@/constants/content";

export function Problem() {
  return (
    <Section id="problema" className="pt-24 md:pt-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <SectionHeader
          eyebrow="O problema"
          title={
            <>
              O código cresce rápido.
              <br />
              <span className="text-muted-foreground">O contexto se perde antes.</span>
            </>
          }
          body="Nenhum time perde velocidade por falta de talento. Perde por falta de contexto na hora certa."
          className="lg:sticky lg:top-32"
        />

        <ul className="grid gap-4">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <SpotlightCard as="li" className="h-full p-7 md:p-8">
                <div className="flex items-start gap-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/70 text-primary">
                    <item.icon className="size-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg tracking-tight">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-24 max-w-2xl text-balance text-center font-display text-2xl leading-snug tracking-[-0.03em] text-foreground md:text-[2.1rem]">
          O problema não é encontrar quem sabe. É depender de uma pessoa para que o trabalho continue.”.
        </p>
      </Reveal>
    </Section>
  );
}
