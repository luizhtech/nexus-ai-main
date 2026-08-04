"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/nexus/section";
import { Mockup, type MockupView } from "@/components/nexus/mockup";
import { demoTabs } from "@/constants/content";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function Demo() {
  const [active, setActive] = useState<string>(demoTabs[0]!.id);
  const current = demoTabs.find((t) => t.id === active) ?? demoTabs[0]!;

  return (
    <Section id="produto" rule>
      <div
        aria-hidden
        className="hairline-grid-fine pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_55%_50%_at_50%_20%,black,transparent)]"
      />

      <SectionHeader
        eyebrow="Demonstração"
        title="Quatro superfícies. Um único contexto."
        body="Cada tela lê o mesmo grafo. Trocar de contexto deixa de custar tempo."
        align="center"
      />

      <div
        role="tablist"
        aria-label="Superfícies do produto"
        className="mx-auto mt-14 flex w-full max-w-2xl flex-wrap justify-center gap-1 rounded-2xl border border-border bg-card/70 p-1.5 shadow-soft backdrop-blur-sm"
      >
        {demoTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`painel-${tab.id}`}
            onClick={() => setActive(tab.id)}
            className={cn(
              "relative flex-1 cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-300",
              active === tab.id
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active === tab.id ? (
              <motion.span
                layoutId="demo-tab"
                transition={{ duration: 0.45, ease }}
                className="absolute inset-0 rounded-xl bg-foreground shadow-soft"
              />
            ) : null}
            <span className="relative whitespace-nowrap">{tab.label}</span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`painel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="mt-16 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease }}
          >
            <h3 className="text-[1.7rem] leading-tight tracking-[-0.035em] md:text-[2rem]">
              {current.title}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              {current.body}
            </p>
            <ul className="mt-8 space-y-3.5">
              {current.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.12 + i * 0.07, ease }}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3" aria-hidden />
                  </span>
                  <span className="text-foreground/85">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`mock-${current.id}`}
            initial={{ opacity: 0, scale: 0.975, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.985, filter: "blur(12px)" }}
            transition={{ duration: 0.5, ease }}
            className="relative"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[image:var(--gradient-signal)] opacity-[0.09] blur-3xl"
            />
            <Mockup view={current.id as MockupView} className="relative" />
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
