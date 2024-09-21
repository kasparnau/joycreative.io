import BackgroundLines from "@/public/assets/hero/bg-lines.svg";

export default function HeroBackground() {
  return (
    <div
      style={{ backgroundImage: `url('${BackgroundLines.src}')` }}
      className="absolute w-full h-full object-cover z-[-1]"
    />
  );
}
