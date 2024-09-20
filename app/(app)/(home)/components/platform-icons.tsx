import Container from "@/components/container";
import Image from "next/image";
import platforms from "../data/platforms";
import { useMemo } from "react";

const PlatformIcons = () => {
  const icons = useMemo(
    () =>
      platforms.map((platform, IDX) => (
        <Image
          src={platform.Icon}
          key={platform.label}
          alt={`${platform.label} Icon`}
          className="object-contain w-32 lg:w-48 invert"
          quality={100}
        />
      )),
    [],
  );

  return (
    <div className="w-full opacity-60 absolute bottom-4 hidden lg:block z-[0]">
      <div className="flex items-center justify-start gap-16 flex-wrap">
        {icons}
      </div>
    </div>
  );
};

export default PlatformIcons;
