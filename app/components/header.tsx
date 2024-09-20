import Border from "./header-border";
import Container from "@/components/container";
import HomeButton from "./header-home";
import { Menu } from "lucide-react";
import NavLink from "./header-link";
import headerLinks from "../data/header-links";
import { twMerge } from "tailwind-merge";

// 🤷🏻 This is so we can scale our pages to take up exactly the remaining viewport height after the header.
// We need to expose variants for Tailwind to generate utility classes.
export const viewportVariants = {
  md: `h-[calc(100vh_-_6rem)] max-h-[1000px]`,
};

export function getViewportHeight() {
  return viewportVariants[variant];
}

const variants = {
  md: "h-24",
};

export const variant = "md";
// ---------------------------

const Header = () => {
  return (
    <header
      className={twMerge(
        `w-full sticky top-0 z-20 flex justify-center items-center border-foreground/5 transition-colors backdrop-blur-lg`,
        variants[variant],
      )}
    >
      <Container className="w-full">
        <div className={`grid grid-cols-2 lg:grid-cols-3 w-full`}>
          <HomeButton className="justify-self-start flex items-center" />
          <div className="hidden lg:flex items-center justify-self-center">
            <div className="border border-primary/10 rounded-full flex gap-6 px-7 py-2">
              {headerLinks.map((headerLink) => (
                <NavLink key={headerLink.url} href={headerLink.url}>
                  {headerLink.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-self-end">
            <Menu size={30} />
          </div>
        </div>
      </Container>

      {/* Faint border on the bottom edge */}
      <Border />
    </header>
  );
};

export default Header;
