"use client";

import { useEffect, useState } from "react";

import CallToAction from "./components/call-to-action";
import Hero from "./components/hero";
import Lenis from "lenis";

export default function Home() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <main className="flex flex-col">
      <Hero />
      <CallToAction />
    </main>
  );
}
