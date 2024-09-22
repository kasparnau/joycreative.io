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
    <>
      <motion.div
        className="absolute w-full h-[600px] z-[-1] -top-16 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgb(255, 0, 71) 35%, rgba(0, 0, 0, 0) 100%)",
          mask: "linear-gradient(to top, rgb(0 0 0 / 0%) 49%, rgb(0 0 0) 50%)",
          opacity,
        }}
      />
      <motion.div
        className="absolute w-full h-[300px] z-[-2] top-8 pointer-events-none"
        style={{
          background:
            "radial-gradient(100% 50% at 50% 50%, rgb(255, 0, 71) 0%, rgba(0, 0, 0, 0) 100%)",
          mask: "linear-gradient(to top, rgb(0 0 0 / 0%) 49%, rgb(0 0 0) 50%)",
          opacity,
        }}
      />
    </>
  );
}
