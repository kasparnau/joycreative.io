"use client";

import {
  MotionValue,
  motion,
  useMotionTemplate,
  useTransform,
} from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<any>;
}

const HeroBorder: React.FC<Props> = ({ scrollYProgress }) => {
  // Border glow animation
  const borderWithTransform = useTransform(scrollYProgress, [0, 0.7], [100, 0]);
  const borderWidth = useMotionTemplate`${borderWithTransform}%`;

  return (
    <div className="w-full absolute bottom-0 flex justify-center">
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{ width: borderWidth }}
      />
    </div>
  );
};
export default HeroBorder;
