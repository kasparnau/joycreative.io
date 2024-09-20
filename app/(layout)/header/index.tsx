import Container from "@/components/container";
import HomeButton from "./home-button";
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Border: React.FC = () => {
  return (
    <div className="w-full absolute bottom-0 flex justify-center">
      <div
        className="h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        style={{ width: "50%" }}
      />
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
    href={href}
  >
    {children}
  </Link>
);

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
          <div className="flex items-center justify-self-center">
            <div className="border border-primary/10 rounded-full flex gap-6 px-7 py-2">
              <NavLink href="/#games">Work</NavLink>
              <NavLink href="/#achievements">Achievements</NavLink>
              <NavLink href="/#collaborate">Collaborate</NavLink>
              <NavLink href="/contact">Support</NavLink>
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
