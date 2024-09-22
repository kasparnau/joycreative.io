import BackgroundLines from "@/public/assets/hero/bg-lines.svg";

export default function HeroBackground() {
  return (
    <div
      style={{ backgroundImage: `url('${BackgroundLines.src}')` }}
      className="hidden sm:block absolute top-0 w-full h-full object-cover bg-center z-[-1]"
    />
  );
}
