"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Bot, Check, FileText, GitPullRequest, ScanLine, Upload } from "lucide-react";
import { Section, SectionHeader } from "@/components/nexus/section";
import { Reveal } from "@/components/motion/reveal";
import { steps } from "@/constants/content";

const pipeline = [
  { icon: Upload, label: "Código enviado", meta: "push · feature/billing" },
  { icon: ScanLine, label: "Nexus analisa", meta: "grafo + convenções" },
  { icon: Bot, label: "Detecta riscos", meta: "3 impactos cruzados" },
  { icon: Check, label: "Sugere correções", meta: "aplicáveis inline" },
  { icon: FileText, label: "Atualiza docs", meta: "2 páginas afetadas" },
  { icon: GitPullRequest, label: "Abre a PR", meta: "pronta para revisão" },
];

/**
 * Split section: onboarding timeline on the left, live agent pipeline on the
 * right. The pipeline animates in sequence to show the product working.
 */
export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <Section id="como-funciona" rule>
      <div
        aria-hidden
        className="hairline-grid-fine pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_50%_45%_at_80%_40%,black,transparent)]"
      />

      <SectionHeader
        eyebrow="Como funciona"
        title="Da conexão ao primeiro review em uma tarde."
        body="Sem migração, sem congelar sprint, sem reescrever processo."
      />

      <div className="mt-20 grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <ol className="relative">
          <span
            aria-hidden
            className="absolute bottom-6 left-[17px] top-3 w-px bg-gradient-to-b from-primary/40 via-border to-transparent"
          />
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.09}>
              <li className="group relative flex gap-6 pb-12 last:pb-0">
                <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full border border-primary/25 bg-background font-mono text-[0.65rem] text-primary transition-all duration-500 group-hover:border-primary group-hover:shadow-soft">
                  {s.step}
                </span>
                <div className="min-w-0 pt-1">
                  <h3 className="text-lg tracking-tight">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.15} variant="scale">
          <div className="surface-ink noise relative overflow-hidden rounded-3xl border border-ink-border p-6 md:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[image:var(--gradient-signal)] opacity-[0.12] blur-3xl"
            />
            <div className="relative flex items-center justify-between gap-4">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-signal">
                agente em execução
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/15 px-2.5 py-1 font-mono text-[0.6rem] text-mint">
                <span className="size-1.5 rounded-full bg-mint pulse-soft" /> ao vivo
              </span>
            </div>

            <ol className="relative mt-7 space-y-2.5">
              {pipeline.map((p, i) => (
                <motion.li
                  key={p.label}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: -14, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.6, delay: i * 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-4 rounded-2xl border border-ink-border bg-white/[0.03] px-4 py-3.5 transition-colors duration-500 hover:border-signal/40 hover:bg-white/[0.06]"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-ink-border bg-ink-elevated/80 text-signal">
                    <p.icon className="size-4" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-ink-foreground">{p.label}</p>
                    <p className="truncate font-mono text-[0.6rem] text-ink-muted">{p.meta}</p>
                  </div>
                  <span className="font-mono text-[0.58rem] text-ink-muted">
                    0{i + 1}
                  </span>
                  {i < pipeline.length - 1 ? (
                    <ArrowDown
                      aria-hidden
                      className="absolute -bottom-2.5 left-8 size-3 text-ink-border"
                    />
                  ) : null}
                </motion.li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
