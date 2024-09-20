import FortniteLogo from "@/public/assets/brands/fortnite.png";
import MinecraftLogo from "@/public/assets/brands/minecraft.png";
import RobloxLogo from "@/public/assets/brands/roblox.png";

export const platforms = [
  {
    label: "Roblox",
    Icon: RobloxLogo,
  },
  {
    label: "Fortnite",
    Icon: FortniteLogo,
  },
  {
    label: "Minecraft",
    Icon: MinecraftLogo,
  },
];

export type Platform = (typeof platforms)[number];
