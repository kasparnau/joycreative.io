import FortniteLogo from "@/public/assets/brands/fortnite.png";
import MinecraftLogo from "@/public/assets/brands/minecraft.png";
import RobloxLogo from "@/public/assets/brands/roblox.png";

const platforms = [
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

export default platforms;
export type Platform = (typeof platforms)[number];
