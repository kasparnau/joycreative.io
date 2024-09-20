import Container from "@/components/container";
import CtaGraphic from "@/public/assets/cta-graphic.svg";
import Glows from "./glow-components";
import Headings from "@/components/headings";

const CallToAction = () => {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden relative mt-64">
      {/* Layered Glow Effect */}
      {/* CTA should be on z-2 to be over the blur*/}
      <Glows.MiddleDim />
      <Glows.MiddleBright />
      <Glows.Bottom />

      <Container className="w-full flex-col lg:flex-row flex items-center gap-x-32 gap-y-16">
        {/* Call to Action */}
        <div className="flex flex-col w-full gap-5 relative z-[2]">
          <Headings.h1 className="text-nowrap">
            Looking to <br />
            collaborate?
          </Headings.h1>
          <Headings.h3 className="max-w-sm">
            Have a great idea & want to bring it to life? Drop a message — we'll
            help you out.
          </Headings.h3>
          <div className="flex gap-2 mt-2">
            <button className="rounded-card px-5 py-2 bg-foreground hover:bg-foreground/90 transition-colors text-muted w-fit text-md font-medium shadow-extra">
              Let's work together
            </button>
            <button className="rounded-card px-5 py-2 bg-foreground/10 text-foreground w-fit text-md font-medium">
              Learn more
            </button>
          </div>
        </div>

        {/* Graphic of game development */}
        <div className="relative h-[600px] w-full">
          <img
            alt=""
            src={CtaGraphic.src}
            className="z-[1] min-w-[1200px] absolute left-0"
          />
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
