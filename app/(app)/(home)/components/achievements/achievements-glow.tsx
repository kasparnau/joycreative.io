"use client";

import { MotionValue, motion } from "framer-motion";

export default function AchievementsGlow({
  opacity,
}: {
  opacity: MotionValue<number>;
}) {
  return (
    // Radial glow that fades into view on scroll
    // The bottom half is masked out
    <motion.div
      className="absolute w-full h-[800px] z-[-1] -top-24 pointer-events-none"
      style={{
        background:
          "radial-gradient(65% 45% at 50% 50%, rgb(255, 0, 71) 35%, rgba(0, 0, 0, 0) 100%)",
        mask: "linear-gradient(to top, rgb(0 0 0 / 0%) 50%, rgb(0 0 0) 100%)",
        opacity,
      }}
    />
  );
}
