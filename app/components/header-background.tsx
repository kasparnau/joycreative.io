"use client";

import { twMerge } from "tailwind-merge";
import useIsScrolled from "@/lib/is-scrolled-hook";

// ? Explanation: Why is this separate from the header?

// To be able to keep the main header file SSR and
// access header padding functionality from other SSR components.
// We get more control this way for dynamically animating the header background.

export default function HeaderBackground() {
  const isScrolled = useIsScrolled();

  return (
    <div
      className={twMerge(
        "absolute z-[-1] w-full h-full backdrop-blur-md transition-colors",
        isScrolled ? "bg-black/50" : "bg-transparent",
      )}
    />
  );
}
