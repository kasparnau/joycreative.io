"use client";

import CallToAction from "./components/call-to-action";
import Hero from "./components/hero";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="flex flex-col">
      <Hero />
      <CallToAction />
    </main>
  );
}
