import ConicalGradient from "./conical-gradient.jpg";
import Container from "@/components/container";
import Headings from "@/components/headings";
import HeroBackground from "../../(home)/components/hero-background";
import { getViewportHeightWithoutHeader } from "@/app/(layout)/components/header";
import { twMerge } from "tailwind-merge";

const ThanksPage = () => {
  return (
    <main
      className={twMerge(
        "w-full max-h-[1000px] flex",
        getViewportHeightWithoutHeader(),
      )}
    >
      <HeroBackground />

      <Container className="flex flex-col items-center mt-32 gap-4 text-center py-8">
        <div className="text-5xl md:text-7xl lg:text-[120px] font-black text-white">
          <p>THANK YOU!</p>
        </div>
        <Headings.h3>
          We have received your message and will get back to you shortly.
        </Headings.h3>
      </Container>
    </main>
  );
};
export default ThanksPage;
