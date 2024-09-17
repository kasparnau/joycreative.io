import Container from "@/components/container";
import FooterBlur from "./footer-blur";
import FooterSvg from "@/public/assets/footer-text.svg";
import Image from "next/image";
import Logo from "@/public/assets/logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className={`w-full relative overflow-hidden flex flex-col z-0`}>
        {/* Radial Background Blur */}
        <FooterBlur />

        {/* Footer Content */}
        <Container className="w-full mt-8 grid">
          {/* Logo */}
          <a href="./" className="flex flex-col gap-5 font-semibold">
            <Image alt="" src={Logo} width={20} />
            <p className="text-sm font-semibold">Creating future nostalgia</p>
          </a>
        </Container>

        {/* Footer Text SVG */}
        <Container className="w-full mt-32 pointer-events-none">
          <Image alt="" src={FooterSvg} className="w-full" />
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
