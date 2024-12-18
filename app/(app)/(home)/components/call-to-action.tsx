import { Button } from "@/components/button";
import Container from "@/components/container";
import CtaGraphic from "@/public/assets/cta/cta-graphic.svg";
import Glows from "./glow-components";
import Headings from "@/components/headings";
import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div
      id="collaborate"
      className="w-full flex items-center justify-center overflow-hidden relative mt-32"
    >
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
            Have a great idea & want to bring it to life? Drop a message — we're
            open to collaborate.
          </Headings.h3>
          <div className="flex gap-5 mt-2">
            <Button asChild>
              <Link href="/contact">Let's work together</Link>
            </Button>
            <Button asChild variant="glass">
              <Link href="/contact">Learn more</Link>
            </Button>
          </div>
        </div>

        {/* Graphic of game development */}
        <div className="relative h-[595px] w-full">
          <Image
            alt=""
            width={1200}
            height={595}
            src={CtaGraphic.src}
            className="z-[1] min-w-[1200px] absolute left-0"
          />
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
