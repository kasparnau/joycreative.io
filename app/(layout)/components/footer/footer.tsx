import Container from "@/components/container";
import FooterBlur from "./footer-glow";
import FooterGradient from "@/public/assets/footer/footer-gradient.png";
import FooterSvg from "@/public/assets/footer/footer-text.svg";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/company/logo.svg";
import navLinks from "../../data/nav-links";

const NavLink = ({ name, url }: { name: string; url: string }) => (
  <Link
    href={url}
    className="hover:text-foreground text-foreground/80 transition-colors py-1 whitespace-nowrap"
  >
    {name}
  </Link>
);

const NavHeader = ({ children }: { children: React.ReactNode }) => (
  <p className="text-foreground text-md mb-4">{children}</p>
);

const Footer = () => {
  return (
    <footer
      className={`w-full relative overflow-hidden flex flex-col z-0 bg-cover`}
      style={{ backgroundImage: `url(${FooterGradient.src})` }}
    >
      {/* Radial Background Blur */}
      <FooterBlur />

      {/* Footer Content */}
      <Container className="w-full mt-8 flex flex-col md:flex-row md:justify-between">
        {/* Logo */}
        <a href="./" className="flex flex-col">
          <Image alt="Home" src={Logo} width={20} />
          <p className="text-md text-zinc-50 max-w-sm mt-5">
            Independent studio connecting hundreds of thousands of people around
            the world through UGC games.
          </p>
          <p className="text-sm mt-5 max-w-sm">
            Joy Creative, 3434228-7. All rights reserved.
          </p>
        </a>

        {/* Nav Links */}
        <div className="flex justify-between md:justify-normal md:gap-32 mt-16 md:mt-0">
          <div className="flex flex-col text-foreground">
            <NavHeader>Pages</NavHeader>
            {navLinks.map((link) => (
              <NavLink url={link.url} name={link.label} key={link.url} />
            ))}
          </div>
          <div className="flex flex-col text-foreground">
            <NavHeader>Legal</NavHeader>
            <NavLink url="/privacy" name="Privacy Policy" />
            <NavLink url="/terms" name="Terms of Service" />
          </div>
        </div>
      </Container>

      {/* Footer Text SVG */}
      <Container className="w-full mt-16 md:mt-32 pointer-events-none">
        <Image alt="" src={FooterSvg} className="w-full" />
      </Container>
    </footer>
  );
};

export default Footer;
