import { twMerge } from "tailwind-merge";
import { viewportHeight } from "@/lib/viewport-height";

export default function Contact({}) {
  return <main className={twMerge("w-full", viewportHeight)}></main>;
}
