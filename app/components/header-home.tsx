"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/company/logo.svg";
import { motion } from "framer-motion";

const HomeButton = ({ className }: { className?: string }) => {
  return (
    <Link key="/" href="/" className={className}>
      <motion.div
        initial={{ scale: 1.0 }}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <div className="h-full flex items-center gap-2">
          <Image src={Logo} alt="Joy Creative" width={20} quality={100} />
          <p className="font-semibold text-lg">Joy Creative</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default HomeButton;
