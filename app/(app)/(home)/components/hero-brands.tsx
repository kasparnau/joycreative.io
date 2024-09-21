import { MotionValue, motion } from "framer-motion";

import Container from "@/components/container";
import HeroPhone from "./hero-phone";
import Image from "next/image";
import easings from "@/lib/easings";
import platforms from "../data/platforms";
import { useOpacityTransform } from "./hero";

const icons = platforms.map((platform, IDX) => (
  <Image
    src={platform.Icon}
    key={platform.label}
    alt={`${platform.label} Icon`}
    className="object-contain w-32 lg:w-40 invert"
    quality={100}
  />
));

const PlatformIcons = () => {
  return (
    <motion.div
      className="w-full absolute bottom-4 hidden lg:block z-[0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1, delay: 1, ease: easings.easeInOutQuint }}
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
  // Brand icons shouldn't be animated out.
  const opacity = useOpacityTransform(springScrollProgress);

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
