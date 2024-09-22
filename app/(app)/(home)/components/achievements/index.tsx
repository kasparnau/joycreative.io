"use client";

import {
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import AchievementsContent from "./achievements-content";
import AchievementsHead from "./achievements-head";
import Container from "@/components/container";
import { easings } from "react-spring";
import { useRef } from "react";

export default function Achievements() {
  // Animate glow and transform on scroll
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 0.6"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [50, 0], {
    ease: easings.easeInOutQuint,
  });
  const motionYOffset = useMotionTemplate`translateY(${yOffset}px)`;

  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  //

  return (
    <Container
      className="w-full mt-32 sm:mt-64 mb-16 sm:mb-32 flex flex-col relative"
      ref={containerRef}
    >
      <AchievementsHead />
      <AchievementsContent transform={motionYOffset} opacity={glowOpacity} />
    </Container>
  );
}
