"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import GlobeImg from "@/public/assets/achievements/globe.png";
import Image from "next/image";
import { easings } from "react-spring";
import { useRef } from "react";

export default function Globe() {
  const elementRef = useRef<HTMLDivElement | null>(null);

  // Scroll Animations
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const offset = useTransform(scrollYProgress, [0, 1], [0, 0], {
    ease: easings.easeInOutQuint,
  });
  const rotation = useTransform(scrollYProgress, [0, 1], [0, -0.1]);

  const motionTransform = useMotionTemplate`translateX(${offset}px) translateY(${offset}px) rotate(${rotation}turn) scale(${scale})`;

  return (
    <motion.div
      ref={elementRef}
      style={{
        transform: motionTransform,
      }}
    >
      <Image width={500} height={500} alt="" src={GlobeImg.src} />
    </motion.div>
  );
}
