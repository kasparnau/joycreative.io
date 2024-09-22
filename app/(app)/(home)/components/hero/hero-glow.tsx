"use client";

import {
  MotionValue,
  motion,
  useAnimation,
  useMotionTemplate,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

import Glows from "../glow-components";
import easings from "@/lib/easings";
import { data as loaderData } from "@/app/(layout)/components/page-transition";
import { useOpacityTransform } from "./hero";

export const data = {
  animLength: 2,
};

interface Props {
  springScrollProgress: MotionValue<any>;
}

const HeroGlow: React.FC<Props> = ({ springScrollProgress }) => {
  // Initial animation on page load
  const controls = useAnimation();
  const [initialAnimationFinished, setInitialAnimationFinished] =
    useState<boolean>(false);

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: data.animLength, delay: loaderData.animLength },
    });

    const timeout = setTimeout(
      () => {
        setInitialAnimationFinished(true);
      },
      (loaderData.animLength + data.animLength) * 1000,
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
        duration: data.animLength,
        delay: loaderData.animLength,
        ease: easings.easeInOutQuint,
      }}
    >
      <Glows.Bottom />
    </motion.div>
  );
};

export default HeroGlow;
