"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

import Container from "@/components/container";
import HeroPhone from "./hero-phone";
import Image from "next/image";
import { data as glowData } from "./hero-glow";
import { data as loaderData } from "@/app/components/page-transition";
import platforms from "../../data/platforms";

const icons = platforms.map((platform, IDX) => (
  <Image
    src={platform.Icon}
    key={platform.label}
    alt={`${platform.label} Icon`}
    className="object-contain w-20 lg:w-24 invert"
    quality={100}
  />
));

const PlatformIcons = () => {
  return (
    <motion.div
      className="w-full absolute bottom-4 hidden sm:block z-[0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: glowData.animLength,
        delay: loaderData.animLength,
      }}
    >
      <div className="flex items-center justify-start gap-4 md:gap-8 lg:gap-24 flex-wrap">
        {icons}
      </div>
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
        <PlatformIcons />
        <HeroPhone opacity={opacity} />
      </Container>
    </div>
  );
};

export default HeroBrands;
