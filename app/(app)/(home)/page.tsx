"use client";

import Achievements from "./components/achievements";
import CallToAction from "./components/call-to-action";
import Hero from "./components/hero";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  // Custom smooth scrolling w/ Lenis
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  // Home Page
  return (
    <main className="flex flex-col">
      <Hero />
      <Achievements />
      <CallToAction />
    </main>
  );
}
