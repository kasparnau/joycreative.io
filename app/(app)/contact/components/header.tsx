import Headings from "@/components/headings";

export default function Head() {
  return (
    <div className="h-full flex flex-col gap-2">
      <Headings.h1>Get in touch</Headings.h1>
      <p className="font-normal text-base sm:text-lg md:text-xl max-w-md text-muted-foreground">
        {"We'll get back to you as soon as possible."}
      </p>
    </div>
  );
}
