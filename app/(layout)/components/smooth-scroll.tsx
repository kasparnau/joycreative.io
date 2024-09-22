"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";
import usePrefersReducedMotionHook from "./prefers-reduced-motion";

const Smooth = ({ children }: { children?: ReactNode }) => (
  <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
    {children}
  </ReactLenis>
);

function SmoothScrolling({ children }: { children?: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotionHook();
  const Comp = prefersReducedMotion ? "div" : Smooth;

  return <Comp>{children}</Comp>;
}

export default SmoothScrolling;
