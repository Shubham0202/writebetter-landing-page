"use client";

import type { ReactNode } from "react";
import { m } from "motion/react";

type RevealTag = "div" | "li";

const MOTION_TAG: Record<RevealTag, typeof m.div | typeof m.li> = {
  div: m.div,
  li: m.li,
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
};

/** Fades content in once it scrolls into view. MotionProvider drops the movement for reduced-motion users. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const MotionTag = MOTION_TAG[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
