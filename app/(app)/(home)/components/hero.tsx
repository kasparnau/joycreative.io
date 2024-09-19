"use client";

import {
  MotionValue,
  easeOut,
  inView,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Container from "@/components/container";
import Glows from "./glow-components";
import HandHoldingImg from "@/public/assets/holding-phone.png";
import { useRef } from "react";

const useOpacityTransform = (springScrollProgress: MotionValue) =>
  useTransform(springScrollProgress, [0, 1], [1, 0]);

interface HeroGlowProps {
  springScrollProgress: MotionValue<any>;
}

const HeroGlow: React.FC<HeroGlowProps> = ({ springScrollProgress }) => {
  // Smooth transform animation
  const translateYTransform = useTransform(
    springScrollProgress,
    [0, 1],
    ["0px", "300px"],
  );
  const translateY = useMotionTemplate`translateY(${translateYTransform})`;

  // Smooth offset animation
  const opacity = useOpacityTransform(springScrollProgress);

  return (
    <motion.div
      className="h-full w-full pt-32 absolute bottom-0"
      style={{
        opacity: opacity,
        transform: translateY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5, delay: 1, easing: "easeOut" }}
    >
      <Glows.Bottom />
    </motion.div>
  );
};

interface HeroBorderProps {
  scrollYProgress: MotionValue<any>;
}

const HeroBorder: React.FC<HeroBorderProps> = ({ scrollYProgress }) => {
  // Smooth bottom border animation
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
  const opacity = useOpacityTransform(springScrollProgress);

  return (
    <>
      <Container className="w-full flex items-center justify-between pt-24">
        <div className="w-full flex flex-col">
          <motion.div
            className="text-4xl sm:text-7xl lg:text-[120px] font-bold text-nowrap"
            transition={{ duration: 0.3 }}
            initial={{ translateX: -1000, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
          >
            We make games
          </motion.div>
          <motion.div
            className="text-4xl sm:text-7xl lg:text-[120px] font-bold text-nowrap relative lg:left-[33%]"
            initial={{ translateX: 1000, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            people love.
          </motion.div>
          <motion.div
            className="text-md md:text-lg max-w-sm text-muted-foreground relative lg:left-[50%] mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            Independent game studio building immersive Metaverse experiences for
            millions of players.
          </motion.div>
        </div>
      </Container>
      <motion.div
        className=" absolute right-0 xl:right-36 -bottom-10"
        initial={{ translateY: 50 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 0.3 }}
        style={{ opacity: opacity }}
      >
        <img
          className="w-[400px] min-w-[400px]"
          alt=""
          src={HandHoldingImg.src}
        />
      </motion.div>
    </>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress and scroll progress with spring for animation purposes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 100,
  });

  return (
    <div
      // Minimum height is accounting for the header navbar height of 80px
      className="w-full flex flex-col relative overflow-hidden pt-8 min-h-[calc(100vh_-_80px)]"
      ref={containerRef}
    >
      <HeroContent springScrollProgress={springScrollProgress} />
      <HeroGlow springScrollProgress={springScrollProgress} />
      <HeroBorder scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default Hero;
