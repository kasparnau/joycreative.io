import { MotionValue, motion } from "framer-motion";

import HandHoldingImg from "@/public/assets/hero/hero-phone.png";
import Image from "next/image";
import easings from "@/lib/easings";

const HeroPhone = ({ opacity }: { opacity: MotionValue<number> }) => {
  return (
    <motion.div
      className="h-[540px] sm:h-[590px] absolute -bottom-12 sm:-right-36"
      initial={{ translateY: 50, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: easings.easeInOutQuint }}
      style={{ opacity: opacity }}
    >
      <Image
        priority
        className="object-cover h-[590px]"
        width={400}
        height={590}
        alt=""
        src={HandHoldingImg.src}
      />
    </motion.div>
  );
};

export default HeroPhone;
