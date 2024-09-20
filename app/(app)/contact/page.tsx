import { getViewportHeight } from "@/app/components/header";
import { twMerge } from "tailwind-merge";

export default function Contact({}) {
  return <main className={twMerge("w-full", getViewportHeight())}></main>;
}
