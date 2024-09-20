"use client";

import {
  MotionValue,
  motion,
  useAnimation,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Container from "@/components/container";
import Glows from "./glow-components";
import HandHoldingImg from "@/public/assets/hero/holding-phone.png";
import PlatformIcons from "./platform-icons";
import easings from "@/lib/easings";
import { data as loaderData } from "@/app/(transition)/loader";
import { navHeight } from "@/app/components/header";
import { twMerge } from "tailwind-merge";

const useOpacityTransform = (springScrollProgress: MotionValue) =>
  useTransform(springScrollProgress, [0, 1], [1, 0]);

interface HeroGlowProps {
  springScrollProgress: MotionValue<any>;
}

interface HeroBorderProps {
  scrollYProgress: MotionValue<any>;
}

const HeroGlow: React.FC<HeroGlowProps> = ({ springScrollProgress }) => {
  const animLength = 3;

  // Initial animation on page load
  const controls = useAnimation();
  const [initialAnimationFinished, setInitialAnimationFinished] =
    useState<boolean>(false);

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: animLength, delay: loaderData.animLength },
    });

    const timeout = setTimeout(
      () => {
        setInitialAnimationFinished(true);
      },
      (loaderData.animLength + animLength + 1) * 1000,
    );

    return () => clearTimeout(timeout);
  });

  // Glow on scroll animation
  const translateYTransform = useTransform(
    springScrollProgress,
    [0, 1],
    ["0px", "300px"],
  );
  const translateY = useMotionTemplate`translateY(${translateYTransform})`;
  const opacity = useOpacityTransform(springScrollProgress);

  return (
    <motion.div
      className="w-full pt-32 absolute bottom-0 pointer-events-none"
      style={{
        opacity: initialAnimationFinished ? opacity : undefined,
        transform: translateY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: animLength,
        delay: loaderData.animLength,
        ease: easings.easeInOutQuint,
      }}
    >
      <Glows.Bottom />
    </motion.div>
  );
};

const HeroBorder: React.FC<HeroBorderProps> = ({ scrollYProgress }) => {
  // Border glow animation
  const borderWithTransform = useTransform(scrollYProgress, [0, 0.7], [100, 0]);
  const borderWidth = useMotionTemplate`${borderWithTransform}%`;

  return (
    <div className="w-full absolute bottom-0 flex justify-center">
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"
        style={{ width: borderWidth }}
      />
    </div>
  );
};

const HeroContent: React.FC<HeroGlowProps> = ({ springScrollProgress }) => {
  return (
    <Container className="sm:pt-32 w-full flex items-center justify-center">
      <div className="w-full flex flex-col">
        <motion.div
          className="text-5xl sm:text-7xl lg:text-[120px] font-bold"
          transition={{ duration: 0.3, ease: easings.easeInOutQuint }}
          initial={{ translateX: -1000, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
        >
          We make games
        </motion.div>
        <motion.div
          className="text-5xl sm:text-7xl lg:text-[120px] font-bold relative lg:left-[25%]"
          initial={{
            translateX: 1000,
            opacity: 0,
            ease: easings.easeInOutQuint,
          }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          people love.
        </motion.div>
        <motion.div
          className="text-md md:text-lg max-w-md text-muted-foreground relative lg:left-[30%] xl:left-[45%] mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: easings.easeInOutQuint }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          Independent creative studio building immersive Metaverse experiences
          for millions of players.
        </motion.div>
      </div>
    </Container>
  );
};

const HeroBrands: React.FC<HeroGlowProps> = ({ springScrollProgress }) => {
  const opacity = useOpacityTransform(springScrollProgress);

  return (
    <div className="w-full absolute bottom-0 z-[0]">
      <Container className="flex relative">
        <PlatformIcons />
        <motion.div
          className="h-[590px] absolute -bottom-12 right-0"
          initial={{ translateY: 50 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.3, ease: easings.easeInOutQuint }}
          style={{ opacity: opacity }}
        >
          <img
            className="object-cover h-[590px]"
            alt=""
            src={HandHoldingImg.src}
          />
        </motion.div>
      </Container>
    </div>
  );
};

// Container should fill the rest of the viewport height after the header
// Container should be capped after a certain point to account for large (1440p/2160p) displays.
const heroContainerSize = `h-[calc(100vh_-_${navHeight})] max-h-[1000px]`;

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
        heroContainerSize,
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
