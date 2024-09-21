import { RefObject } from "react";

export default function Container({
  children,
  className,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  ref?: RefObject<HTMLDivElement>;
}) {
  return (
    <div
      ref={ref}
      className={`max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ${className || ""}`}
    >
      {children}
    </div>
  );
}
