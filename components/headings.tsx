// Centralized location for headings to help me with consistency.
// They are divs and not actual CSS headings on purpose.

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Config = { [key: string]: string };
export type Heading = { children?: ReactNode; className?: string };

const config: Config = {
  h1: "text-4xl sm:text-5xl md:text-7xl font-medium text-foreground tracking-tight",
  h2: "text-lg md:text-xl font-medium text-foreground",
  h3: "text-md md:text-lg text-muted-foreground leading-8",
};

const MakeBuildHeading = (style: string) => {
  function BuildHeading({ children, className }: Heading) {
    return <div className={twMerge(style, className)}>{children}</div>;
  }

  return BuildHeading;
};

const Headings: { [key: string]: React.FC<Heading> } = Object.fromEntries(
  Object.entries(config).map(([tag, style]) => [tag, MakeBuildHeading(style)]),
);

export default Headings;
