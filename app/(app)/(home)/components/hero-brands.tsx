import { MotionValue, motion } from "framer-motion";

import Container from "@/components/container";
import HandHoldingImg from "@/public/assets/hero/holding-phone.png";
import Image from "next/image";
import easings from "@/lib/easings";
import platforms from "../data/platforms";
import { useMemo } from "react";
import { useOpacityTransform } from "./hero";

const PlatformIcons = () => {
  const icons = useMemo(
    () =>
      platforms.map((platform, IDX) => (
        <Image
          src={platform.Icon}
          key={platform.label}
          alt={`${platform.label} Icon`}
          className="object-contain w-32 lg:w-48 invert"
          quality={100}
        />
      )),
    [],
  );

  return (
    <motion.div
      className="w-full opacity-60 absolute bottom-4 hidden lg:block z-[0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: easings.easeInOutQuint }}
    >
      <div className="flex items-center justify-start gap-16 flex-wrap">
        {icons}
      </div>
    </motion.div>
  );
};

interface Props {
  springScrollProgress: MotionValue<any>;
}

const HeroBrands: React.FC<Props> = ({ springScrollProgress }) => {
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
          <Image
            className="object-cover h-[590px]"
            width={400}
            height={590}
            alt=""
            src={HandHoldingImg.src}
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroBrands;
