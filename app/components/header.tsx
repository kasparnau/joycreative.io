import Border from "./header-border";
import Container from "@/components/container";
import HomeButton from "./header-home";
import NavLink from "./header-link";
import headerLinks from "../data/header-links";
import { twMerge } from "tailwind-merge";

// 🤷🏻 This is exposed for our hero page to dynamically fill the rest of the viewport. 🤔
export const navHeight = "6rem";

const Header = () => {
  return (
    <header
      className={twMerge(
        `w-full sticky top-0 z-20 flex justify-center items-center border-foreground/5 transition-colors backdrop-blur-lg`,
        `h-[${navHeight}]`,
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
          <div className="flex items-center justify-self-end">HAMBURGER</div>
        </div>
      </Container>

      {/* Faint border on the bottom edge */}
      <Border />
    </header>
  );
};

export default Header;
