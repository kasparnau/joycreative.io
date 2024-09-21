"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { RefObject } from "react";

export default function CardGlow({
  gradient,
  cardRef,
}: {
  gradient: cardGradientKey;
  cardRef: RefObject<HTMLDivElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="absolute w-full h-full z-[-1]"
      style={{
        background: cardGradients[gradient],
      }}
    />
  );
}

export const cardGradients = {
  total_hours_played:
    "radial-gradient(100% 100% at 60% 100%, rgb(47 47 47 / 50%) 0%, rgb(0, 0, 0) 100%)",
  peak_monthly_active_users:
    "radial-gradient(100% 100% at 100% 0%, rgb(47 47 47 / 50%) 0%, rgb(0, 0, 0) 100%)",
  peak_concurrent_users:
    "radial-gradient(100% 100% at 0% 0%, rgb(47 47 47 / 50%) 0%, rgb(0, 0, 0) 100%)",
};

export type cardGradientKey = keyof typeof cardGradients;
