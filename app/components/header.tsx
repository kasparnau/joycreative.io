"use client";

import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/company/logo.svg";
import { motion } from "framer-motion";
import useIsScrolled from "@/lib/is-scrolled-hook";

const HomeButton = ({ className }: { className?: string }) => {
  return (
    <Link key="/" href="/" className={className}>
      <motion.div
        initial={{ scale: 1.0 }}
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {/* Light theme*/}
        <div className="h-full flex items-center gap-2">
          <Image src={Logo} alt="Joy Creative" width={16} quality={100} />
          <p className="font-semibold">Joy Creative</p>
        </div>
      </motion.div>
    </Link>
  );
};
const Header = () => {
  const isScrolled = useIsScrolled();
  return (
    <header
      className={`w-full sticky top-0 z-20 flex justify-center items-center border-foreground/5 transition-colors backdrop-blur-lg
    ${isScrolled && `border-b bg-background/10`}
`}
    >
      <Container className="w-full">
        <div className="h-20 grid grid-cols-2 lg:grid-cols-3 w-full">
          <HomeButton className="justify-self-start flex items-center" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
