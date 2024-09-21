"use client";

import { MotionValue, useScroll, useSpring, useTransform } from "framer-motion";

import HeroBackground from "./hero-background";
import HeroBorder from "./hero-border";
import HeroBrands from "./hero-platforms";
import HeroContent from "./hero-content";
import HeroGlow from "./hero-glow";
import { getHeaderPadding } from "@/app/components/header";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";

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
    <div className={"w-full h-screen relative max-h-[1000px]"}>
      <HeroBackground />

      <div
        // Minimum height accounting for the header navbar height of 80px
        className={twMerge(
          "h-full flex flex-col relative overflow-hidden",
          getHeaderPadding(),
        )}
        ref={containerRef}
      >
        <HeroContent springScrollProgress={springScrollProgress} />
        <HeroGlow springScrollProgress={springScrollProgress} />
        <HeroBrands springScrollProgress={springScrollProgress} />
        <HeroBorder scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};

export default Hero;
