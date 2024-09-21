"use client";

import { MotionValue, motion } from "framer-motion";

export default function AchievementsGlow({
  opacity,
}: {
  opacity: MotionValue<number>;
}) {
  return (
    <motion.div
      className="absolute w-full h-[800px] z-[-1] -top-72 pointer-events-none"
      style={{
        background:
          "radial-gradient(55% 20% at 50% 50%, hsl(347 77% 50%) 0%, hsl(0 0% 0% / 0%) 100%)",
        opacity,
      }}
    />
  );
}
