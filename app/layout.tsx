import "@/styles/globals.css";
import "lenis/dist/lenis.css";

import Footer from "./(layout)/components/footer/footer";
import Header from "./(layout)/components/header/header";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Providers from "./(layout)/components/providers";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Joy Creative",
  description:
    "Joy Creative is an independent creative studio building digital experiences and pushing the boundaries of what's possible.",
  icons: {
    icon: "/logo.png",
  },
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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
