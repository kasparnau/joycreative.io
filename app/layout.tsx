import "@/styles/globals.css";

import Footer from "./components/footer";
import Header from "./components/header";
import Loader from "./components/page-transition";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Joy Creative",
  description:
    "Joy Creative is an independent creative studio building digital experiences and pushing the boundaries of what's possible.",
};

const font = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          `min-h-screen bg-background text-foreground antialiased flex flex-col`,
          font.className,
        )}
      >
        <Loader>
          <Header />
          {children}
          <Footer />
        </Loader>
      </body>
    </html>
  );
}
