import { CSSProperties, RefObject } from "react";

import { twMerge } from "tailwind-merge";

export default function Container({
  children,
  className,
  ref,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  ref?: RefObject<HTMLDivElement>;
}) {
  return (
    <div
      style={style}
      ref={ref}
      className={twMerge(`max-w-7xl mx-auto px-6 md:px-12 xl:px-6`, className)}
    >
      {children}
    </div>
  );
}
