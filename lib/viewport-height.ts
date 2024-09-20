// Viewport height taking into account the header/navbar size.
// Height should be capped after a certain point to account for large (1440p/2160p) displays.

import { navHeight } from "@/app/(layout)/header";

export const viewportHeight = `h-[calc(100vh_-_${navHeight})] max-h-[1000px]`;
