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

const Column = ({ column }: { column: number }) => {
  return (
    <div className="flex relative h-full w-full">
      {/* Rows of Boxes*/}
      {[...Array(data.numRows)].map((_, row) => {
        return (
          <motion.div
            key={`${column}-${row}`}
            className={`relative h-full w-full min-w-40`}
            {...anim()}
          />
        );
      })}
    </div>
  );
};

const Transition = () => {
  return (
    <motion.div
      id="transition"
      // Transition starts off with a black background to prevent screen flash from transition loading phase.
      initial={{ backgroundColor: "hsl(0 0% 0%)" }}
      animate={{ backgroundColor: "hsl(0 0% 0% / 0%)" }}
      transition={{ duration: 0.1 }}
      className="h-screen w-screen flex flex-col fixed z-50 top-0 left-0 pointer-events-none"
    >
      {/* Columns of Boxes*/}
      {[...Array(data.numColumns)].map((_, i) => (
        <Column key={i} column={i} />
      ))}
    </motion.div>
  );
};

export default function Loader({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Page content */}
      {children}

      {/* Page load transition */}
      <Transition />
    </>
  );
}
