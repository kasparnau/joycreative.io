"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

import Container from "@/components/container";
import HeroPhone from "./hero-phone";
import Image from "next/image";
import { data as glowData } from "./hero-glow";
import { data as loaderData } from "@/app/(layout)/components/page-transition";
import platforms from "../../data/platforms";
import { twMerge } from "tailwind-merge";

const icons = platforms.map((platform) => (
  <Image
    src={platform.Icon}
    key={platform.label}
    alt={`${platform.label} Icon`}
    className="object-contain w-16 sm:w-20 lg:w-24 invert"
    quality={100}
  />
));

export const PlatformIcons = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={twMerge(
        "flex items-center justify-start gap-4 md:gap-8 lg:gap-24 flex-wrap",
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: glowData.animLength,
        delay: loaderData.animLength,
      }}
    >
      {icons}
    </motion.div>
  );
};

interface Props {
  springScrollProgress: MotionValue<any>;
}

const HeroBrands: React.FC<Props> = ({ springScrollProgress }) => {
  // Brand icons shouldn't be animated out.
  const opacity = useTransform(springScrollProgress, [0, 0.7], [1, 0]);

  return (
    <div className="w-full absolute bottom-0 z-[0]">
      <Container className="flex relative">
        <PlatformIcons className="w-full absolute bottom-4 hidden sm:flex" />
        <HeroPhone opacity={opacity} />
      </Container>
    </div>
  );
};

export default HeroBrands;
