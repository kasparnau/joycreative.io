export const headerHeightVariant: HeaderHeightVariant = "md";

// Each variant needs a valid header height variant, which needs a matching viewport height variant.
export type HeaderHeightVariant = "md" | "lg";
export const headerHeightVariants: Record<HeaderHeightVariant, string> = {
  md: "h-16 md:h-20",
  lg: "h-20 md:h-24",
};

export const viewportHeightVariants: Record<HeaderHeightVariant, string> = {
  md: "h-[calc(100vh_-_4rem)] md:h-[calc(100vh_-_5rem)]",
  lg: "h-[calc(100vh_-_5rem)] md:h-[calc(100vh_-_6rem)]",
};
