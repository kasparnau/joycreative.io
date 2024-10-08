"use client";

import { Card, CardContent } from "./achievements-card";
import { MotionValue, motion } from "framer-motion";

import AchievementsGlow from "./achievements-glow";
import InteractiveEarth from "./achievements-globe";

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

      <div className="w-full grid lg:grid-cols-5 gap-5 mt-16 relative bg-background">
        <Card
          className="lg:col-span-5 h-96 md:h-auto"
          gradient="total_hours_played"
        >
          <CardContent
            title="32,200,000+"
            description="Total Minutes Played"
            fact="Over 32 million minutes of joy."
            large
          />
          <div className="h-full w-[500px] absolute bottom-[-150px] md:bottom-[-10px] opacity-100 md:opacity-100 right-[-180px] md:right-[50px]">
            <InteractiveEarth />
          </div>
        </Card>
        <Card className="lg:col-span-3" gradient="peak_monthly_active_users">
          <CardContent
            title="818,385"
            description="Total Plays"
            fact="Players from all around the world!"
          />
          <div className="absolute -bottom-28 lg:-bottom-20 right-[-75px]"></div>
        </Card>
        <Card className="lg:col-span-2" gradient="peak_concurrent_users">
          <CardContent
            title="9,665"
            description="Peak Concurrent Users"
            fact="That's a stadium sized audience!"
          />

          <div className="absolute bottom-[-75px] right-[-75px]"></div>
        </Card>
      </div>
    </motion.div>
  );
}
