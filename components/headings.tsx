// Centralized location for headings to help me with consistency.
// They are divs and not actual CSS headings on purpose.

import { ReactNode } from "react";

type Config = { [key: string]: string };
export type Heading = { children?: ReactNode; className?: string };

const config: Config = {
  h1: "text-6xl font-medium tracking-tight text-nowrap",
  h2: "text-lg max-w-sm text-muted-foreground leading-8",
};

const MakeHeading = (style: string) => {
  return ({ children, className }: Heading) => (
    <div className={`${style} ${className || ""}`}>{children}</div>
  );
};

const Headings: { [key: string]: React.FC<Heading> } = Object.fromEntries(
  Object.entries(config).map(([tag, style]) => [tag, MakeHeading(style)]),
);

export default Headings;