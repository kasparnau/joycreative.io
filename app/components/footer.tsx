import Container from "@/components/container";
import FooterBlur from "./footer-glow";
import FooterGradient from "@/public/assets/footer/footer-gradient.png";
import FooterSvg from "@/public/assets/footer/footer-text.svg";
import Image from "next/image";
import Logo from "@/public/assets/company/logo.svg";

const Footer = () => {
  return (
    <footer
      className={`w-full relative overflow-hidden flex flex-col z-0 bg-cover`}
      style={{ backgroundImage: `url(${FooterGradient.src})` }}
    >
      {/* Radial Background Blur */}
      <FooterBlur />

      {/* Footer Content */}
      <Container className="w-full mt-8 grid">
        {/* Logo */}
        <a href="./" className="flex flex-col gap-5">
          <Image alt="" src={Logo} width={20} />
          <p className="text-md text-zinc-50 max-w-xs">
            Independent creative studio building digital experiences and pushing
            boundaries.
          </p>
        </a>
      </Container>

      {/* Footer Text SVG */}
      <Container className="w-full mt-32 pointer-events-none">
        <Image alt="" src={FooterSvg} className="w-full" />
      </Container>
    </footer>
  );
};

export default Footer;
