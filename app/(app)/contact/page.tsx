import { getHeaderPadding } from "@/app/components/header";
import { twMerge } from "tailwind-merge";

export default function Contact({}) {
  return <main className={twMerge("w-full", getHeaderPadding())}>HEY!</main>;
}
