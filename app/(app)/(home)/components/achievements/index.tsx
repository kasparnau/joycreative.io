"use client";

import { useMotionTemplate, useScroll, useTransform } from "framer-motion";

import AchievementsContent from "./achievements-content";
import AchievementsHead from "./achievements-head";
import Container from "@/components/container";
import { useRef } from "react";

export default function Achievements() {
  // Animate glow and transform on scroll
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 0.35], [100, 0]);
  const motionYOffset = useMotionTemplate`translateY(${yOffset}px)`;

  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);
  //

  return (
    <Container
      className="w-full mt-64 mb-32 flex flex-col relative"
      ref={containerRef}
    >
      <AchievementsHead />
      <AchievementsContent transform={motionYOffset} opacity={glowOpacity} />
    </Container>
  );
}
