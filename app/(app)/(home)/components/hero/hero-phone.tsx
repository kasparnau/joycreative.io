import { MotionValue, motion } from "framer-motion";

import HandHoldingImg from "@/public/assets/hero/hero-phone.png";
import Image from "next/image";
import easings from "@/lib/easings";
import { twMerge } from "tailwind-merge";

const HeroPhone = ({ opacity }: { opacity: MotionValue<number> }) => {
  return (
    <div
      className={twMerge(
        "absolute left-1/2 -translate-x-1/2 -bottom-12",
        "sm:left-auto sm:right-0 lg:-right-36 sm:-translate-x-0",
        "w-[267px] h-[393px] sm:w-[400px] sm:h-[590px]",
      )}
    >
      <motion.div
        className="w-full h-full"
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: easings.easeInOutQuint }}
        style={{ opacity: opacity }}
      >
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={HandHoldingImg.src}
          priority
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default HeroPhone;
