"use client";

import { Card, CardContent } from "./achievements-card";
import { MotionValue, motion } from "framer-motion";

import AchievementsGlow from "./achievements-glow";

export default function AchievementsContent({
  transform,
  opacity,
}: {
  transform: MotionValue<any>;
  opacity: MotionValue<number>;
}) {
  return (
    <motion.div
      className="w-full relative"
      initial={{}}
      style={{
        transform,
      }}
    >
      {/* Glow. Animates into view on scroll. */}
      <AchievementsGlow opacity={opacity} />

      <div className="w-full grid lg:grid-cols-5 gap-6 mt-16 relative bg-background">
        <Card className="lg:col-span-5 h-96 md:h-auto">
          <CardContent
            title="5,000,000+"
            description="Total Hours Played"
            fact="Over 1000 consecutive years of joy!"
            large
          />
          <div className="h-full absolute -bottom-[150px] md:bottom-0 -z-10 opacity-100 md:opacity-100 -right-[180px] md:-right-[75px]">
            {/* <InteractiveEarth /> */}
          </div>
        </Card>
        <Card className="lg:col-span-3">
          <CardContent
            title="812,448"
            description="Peak Monthly Active Users"
            fact="More than the population of Iceland!"
          />
          <div className="absolute -bottom-28 lg:-bottom-20 right-[-75px]"></div>
        </Card>
        <Card className="lg:col-span-2">
          <CardContent
            title="9,665"
            description="Peak Concurrent Users"
            fact="Enough to fill 46 Boeing 737s!"
          />

          <div className="absolute bottom-[-75px] right-[-75px]"></div>
        </Card>
        {/* <div className="col-span-3 h-64 border border-muted rounded-card"></div>
        <div className="col-span-2 h-64 border border-muted rounded-card"></div> */}
      </div>
    </motion.div>
  );
}
