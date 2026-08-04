"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
  variant?: "blur" | "fade" | "scale";
};

export function Reveal({ children, delay = 0, className, variant = "blur" }: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : variant === "scale"
        ? { opacity: 0, scale: 0.965, filter: "blur(6px)" }
        : variant === "fade"
          ? { opacity: 0, y: 14 }
          : { opacity: 0, y: 22, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: reduce ? 0.2 : 0.85,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
