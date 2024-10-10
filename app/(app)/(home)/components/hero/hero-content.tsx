import { MotionValue, motion } from "framer-motion";

import Container from "@/components/container";
import easings from "@/lib/easings";

interface Props {
  springScrollProgress: MotionValue<any>;
}
const HeroContent: React.FC<Props> = ({ springScrollProgress }) => {
  return (
    <Container className="pt-8 sm:pt-32 w-full flex items-center justify-center">
      <div className="w-full flex flex-col gap-2 text-5xl sm:text-7xl lg:text-[120px] font-bold">
        <motion.div
          className=""
          transition={{ duration: 0.3, ease: easings.easeInOutQuint }}
          initial={{ translateX: -1000, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
        >
          We make games
        </motion.div>
        <motion.div
          className="relative lg:left-[25%]"
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
          className={`relative lg:left-[30%] xl:left-[37%] mt-12
                      font-normal text-base sm:text-lg md:text-xl max-w-md text-muted-foreground`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: easings.easeInOutQuint }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          Independent studio connecting hundreds of thousands of people around
          the world through UGC games.
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroContent;
