"use client";

import { Github, Menu } from "lucide-react";

import Border from "./header-border";
import { Button } from "@/components/button";
import Container from "@/components/container";
import HomeButton from "./header-home-button";
import Link from "next/link";
import NavLink from "./header-link";
import headerLinks from "../data/header-links";
import { twMerge } from "tailwind-merge";
import useIsScrolled from "@/lib/is-scrolled-hook";

const sizeVariants = {
  md: "h-16 md:h-20",
};
export const variant = "md";

// ? Explanation
// The header is fixed position.
// The purpose of this is to help page content start after the header.
// I went with fixed instead of sticky due to limitations with filling the viewport.
export const headerPaddingVariants = {
  md: "pt-16 md:pt-20",
};
export const getHeaderPadding = () => headerPaddingVariants[variant];
// ---------------------------

const Header = () => {
  const isScrolled = useIsScrolled();

  return (
    <header
      className={twMerge(
        `w-full fixed top-0 z-20 flex justify-center items-center backdrop-blur-md`,
        sizeVariants[variant],
        isScrolled ? "bg-black/50" : "bg-transparent",
      )}
    >
      <Container className="w-full">
        <div className={`flex justify-between lg:grid lg:grid-cols-3 w-full`}>
          {/* Home button */}
          <HomeButton className="justify-self-start flex items-center" />

          {/* List of page links */}
          <div className="hidden lg:flex items-center justify-self-center">
            <div className="border border-primary/20 rounded-full flex gap-6 px-7 py-2">
              {headerLinks.map((headerLink) => (
                <NavLink key={headerLink.url} href={headerLink.url}>
                  {headerLink.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="justify-self-end">
            {/* Contact button on desktop*/}
            <div className="h-full items-center gap-4 hidden lg:flex">
              <Link
                href="https://github.com/kasparnau/joycreative.io"
                target="_blank"
              >
                <Github className="text-muted-foreground hover:text-foreground transition-colors" />
              </Link>

              <Button asChild variant="glass" className="rounded-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            {/* Hamburger menu for mobile */}
            <div className="lg:hidden flex items-center justify-self-end h-full">
              <Menu size={30} />
            </div>
          </div>
        </div>
      </Container>

      {/* Faint border on the bottom edge */}
      <Border />
    </header>
  );
};

export default Header;
