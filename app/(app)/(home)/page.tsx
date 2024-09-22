import Achievements from "./components/achievements/achievements";
import CallToAction from "./components/call-to-action";
import Hero from "./components/hero/hero";

// Home Page
export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Achievements />
      <CallToAction />
    </main>
  );
}
