import { Section, SectionHeader } from "@/components/nexus/section";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/content";

export function Faq() {
  return (
    <Section id="faq" rule>
      <div
        aria-hidden
        className="hairline-grid-fine pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_45%_50%_at_15%_30%,black,transparent)]"
      />

      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
        <SectionHeader
          eyebrow="Perguntas frequentes"
          title="O que os times perguntam antes."
          body="Se ficar alguma dúvida, nossa equipe de engenharia responde em até um dia útil."
          className="lg:sticky lg:top-32"
        />

        <Reveal>
          <Accordion type="single" collapsible className="w-full border-t border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="group gap-6 py-7 text-left text-[1.05rem] tracking-tight transition-colors hover:text-primary hover:no-underline md:text-lg">
                  <span className="flex items-start gap-5">
                    <span className="mt-1.5 font-mono text-[0.62rem] text-primary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pl-[3.1rem] pr-8 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
