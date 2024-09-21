"use client";

import { useEffect, useState } from "react";

const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolled(scrollPosition > 50);
  }, [scrollPosition]);

  return isScrolled;
};

export default useIsScrolled;
