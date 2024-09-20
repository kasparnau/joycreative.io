"use client";

import easings from "@/lib/easings";
import { motion } from "framer-motion";

export const data = {
  animLength: 2,
  numColumns: 3,
  numRows: 8,
};

const variants = (colors: string[]) => {
  return {
    initial: { opacity: 1 },
    enter: { opacity: 0, backgroundColor: colors },
  };
};

const anim = () => {
  const getRandomColor = () =>
    Math.random() > 0.5 ? "hsl(0 0% 0%)" : "hsl(0 100% 50%)";

  return {
    initial: "initial",
    animate: "enter",
    variants: variants([...Array(5)].map((_) => getRandomColor())),
    transition: {
      ease: easings.easeInOutQuint,
      duration: data.animLength,
      delay: 0.01 * Math.floor(Math.random() * 100),
    },
  };
};

const Row = ({ i }: { i: number }) => {
  return (
    <div className="flex relative h-full w-full">
      {[...Array(data.numRows)].map((_, j) => {
        return (
          <motion.div
            key={i}
            className={`relative h-full w-full`}
            {...anim()}
          />
        );
      })}
    </div>
  );
};

const Transition = () => {
  return (
    <div className="h-screen w-screen flex flex-col fixed z-50 top-0 left-0 pointer-events-none">
      {[...Array(data.numColumns)].map((_, i) => (
        <Row key={i} i={i} />
      ))}
    </div>
  );
};

export default function Loader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Transition />
      {children}
    </>
  );
}
