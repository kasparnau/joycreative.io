import { ReactNode } from "react";

const Glows = {
  MiddleDim: () => (
    <div
      className="absolute w-[1400px] h-[600px] z-[1] opacity-40 bottom-[-430px]"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgb(167 0 37) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    />
  ),
  MiddleBright: () => (
    <div
      className="absolute w-full max-w-[1400px] h-[600px] bottom-0 flex items-center justify-between"
      style={{
        background:
          "radial-gradient(50% 100% at 50% 100%, rgb(255 0 80 / 40%) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    />
  ),
  Bottom: ({ children }: { children?: ReactNode }) => (
    <div
      className="absolute h-[400px] md:h-[500px] left-0 right-0 bottom-0 z-[2]"
      // Sides
      style={{
        mask: "linear-gradient(rgb(0 0 0 / 0%) 50%, rgb(0, 0, 0) 100%)",
        background:
          "radial-gradient(60% 70% at 50% 50%, rgb(0 0 0 / 0%) 70%, rgb(255 0 35 / 20%) 90%, rgb(255, 0, 80) 100%)",
      }}
    >
      {/* Middle Bright */}
      <div
        className="absolute h-[300px] z-[3] right-0 left-0 bottom-0"
        style={{
          background:
            "radial-gradient(50% 32% at 50% 100%, rgb(255, 0, 92) 0%, rgb(255 0 40 / 20%) 70%, rgb(255 0 45 / 10%) 80%, rgb(255 255 255 / 0%) 100%)",
        }}
      />
      {/* Middle Dim */}
      <div
        className="absolute z-[2]"
        style={{
          top: "100px",
          bottom: "0px",
          left: "0px",
          right: "0px",
          mask: "radial-gradient(90% 90% at 50% 70%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 50%, rgb(0, 0, 0) 100%)",
          background:
            "linear-gradient(rgb(255 255 255 / 0%) 0%, rgb(255, 0, 92) 100%)",
        }}
      />
      {/* Sides  */}
      <div
        className="absolute z-[0]"
        style={{
          top: "200px",
          bottom: "0px",
          left: "0px",
          right: "0px",
          mask: "radial-gradient(50% 130% at 50% 30%, rgb(0 0 0 / 50%) 0%, rgb(0 0 0 / 35%) 65%, rgb(0 0 0 / 100%) 100%) add",
          background:
            "linear-gradient(rgb(255 255 255 / 0%) 0%, rgb(255 0 68 / 70%) 100%)",
        }}
      />
    </div>
  ),
};

export type Glow = (typeof Glows)[keyof typeof Glows];

export default Glows;
