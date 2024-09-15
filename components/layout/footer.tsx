import Container from "@/components/container";
import FooterSvg from "@/public/assets/footer-text.svg";
import Image from "next/image";
import Logo from "@/public/assets/logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className={`w-full relative overflow-hidden flex flex-col z-0`}>
        {/* Radial Background Blur */}
        <div
          className="absolute h-[900px] top-[-450px] z-[-1] opacity-20 w-full"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgb(255 0 92 / 80%) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Footer Content */}
        <Container className="w-full mt-8 grid">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <Image alt="" src={Logo} width={20} />
            <p className="text-sm font-semibold">Creating future nostalgia</p>
          </div>
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
