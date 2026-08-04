"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mockup } from "@/components/nexus/mockup";

const ease = [0.16, 1, 0.3, 1] as const;

/** Cinematic staggered entrance for the hero copy block. */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 26, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease } },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 55, damping: 22 });
  const sy = useSpring(py, { stiffness: 55, damping: 22 });

  const rotateY = useTransform(sx, [0, 1], [7, -7]);
  const rotateX = useTransform(sy, [0, 1], [-5, 6]);
  const driftX = useTransform(sx, [0, 1], [14, -14]);
  const driftY = useTransform(sy, [0, 1], [10, -10]);
  const glowX = useTransform(sx, [0, 1], ["36%", "64%"]);
  const glowY = useTransform(sy, [0, 1], ["26%", "56%"]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mockY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);
  const mockScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.94]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div
      id="topo"
      ref={ref}
      onPointerMove={onMove}
      className="surface-ink noise relative flex min-h-dvh flex-col justify-center overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pt-40"
    >
      {/* Atmosphere: grid, aurora, pointer-tracked light, horizon fade */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hairline-grid-ink-fine absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_30%,black,transparent)]" />
        <div className="absolute inset-x-0 top-0 h-px rule-x-ink" />
        <motion.div
          style={{ left: glowX, top: glowY }}
          className="absolute size-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[140px]"
        >
          <div className="size-full rounded-full bg-[image:var(--gradient-signal)] opacity-30" />
        </motion.div>
        <div className="absolute -left-40 top-1/4 size-[30rem] rounded-full bg-primary/20 opacity-40 blur-[150px]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <motion.div
        style={{ y: copyY, opacity: fade }}
        className="relative mx-auto w-full max-w-5xl text-center"
      >
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={rise} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-white/5 px-3.5 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-signal backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-mint pulse-soft" />
              Nexus 2.0 · disponível hoje
            </span>
          </motion.div>

          <motion.h1
            variants={rise}
            className="mx-auto mt-8 max-w-4xl text-balance text-[3rem] leading-[0.96] tracking-[-0.045em] text-ink-foreground sm:text-7xl lg:text-[5.6rem]"
          >
            A camada de inteligência da sua{" "}
            <span className="text-signal-gradient">engenharia</span>.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mx-auto mt-8 max-w-lg text-pretty text-base leading-relaxed text-ink-muted md:text-lg"
          >
            Contexto real de código, decisões e entrega — devolvido ao time em tempo real.
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button variant="signal-ink" size="xl" asChild>
              <a href="#cta" className="group">
                Começar gratuitamente
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="quiet-ink" size="xl" asChild>
              <a href="#produto">
                <PlayCircle className="size-4" /> Ver o produto
              </a>
            </Button>
          </motion.div>

          <motion.p
            variants={rise}
            className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted/80"
          >
            14 dias grátis · sem cartão · SOC 2 Type II
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: mockY, scale: mockScale, perspective: 1600 }}
        initial={{ opacity: 0, y: 90, filter: "blur(18px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.3, delay: 0.35, ease }}
        className="relative mx-auto mt-16 w-full max-w-6xl md:mt-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-12 -top-6 h-24 rounded-full bg-[image:var(--gradient-signal)] opacity-25 blur-[70px]"
        />
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative"
        >
          <Mockup view="review" className="shadow-glow" />

          {/* Floating context chips — depth cues around the product surface */}
          <motion.div
            style={{ x: driftX, y: driftY }}
            className="pointer-events-none absolute right-full top-1/4 mr-5 hidden 2xl:block"
          >
            <FloatChip icon={Timer} label="Review em 3m 12s" />
          </motion.div>
          <motion.div
            style={{ x: driftY, y: driftX }}
            className="pointer-events-none absolute left-full top-16 ml-5 hidden 2xl:block"
          >
            <FloatChip icon={Sparkles} label="182 arquivos" />
          </motion.div>
          <motion.div
            style={{ x: driftX, y: driftY }}
            className="pointer-events-none absolute bottom-20 left-full ml-5 hidden 2xl:block"
          >
            <FloatChip icon={ShieldCheck} label="0 regressões" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function FloatChip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="glass-ink flex items-center gap-2 rounded-full px-3.5 py-2 font-mono text-[0.62rem] text-ink-foreground/85 shadow-lift">
      <Icon className="size-3.5 text-signal" />
      {label}
    </span>
  );
}
