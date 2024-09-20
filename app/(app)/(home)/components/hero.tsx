import { MotionValue, useScroll, useSpring, useTransform } from "framer-motion";

import HeroBorder from "./hero-border";
import HeroBrands from "./hero-brands";
import HeroContent from "./hero-content";
import HeroGlow from "./hero-glow";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";
import { viewportHeight } from "@/lib/viewport-height";

export const useOpacityTransform = (springScrollProgress: MotionValue) =>
  useTransform(springScrollProgress, [0, 1], [1, 0]);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress and scroll progress with spring for animation purposes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end 0.3"],
  });

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 100,
  });

  return (
    <div
      // Minimum height accounting for the header navbar height of 80px
      className={twMerge(
        "w-full flex flex-col relative overflow-hidden",
        viewportHeight,
      )}
      ref={containerRef}
    >
      <HeroContent springScrollProgress={springScrollProgress} />
      <HeroGlow springScrollProgress={springScrollProgress} />
      <HeroBrands springScrollProgress={springScrollProgress} />
      <HeroBorder scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default Hero;
