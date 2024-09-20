import "@/styles/globals.css";

import Footer from "./components/footer";
import { GeistSans } from "geist/font/sans";
import Header from "./components/header";
import Loader from "./(transition)/loader";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

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
    <html lang="en" className={`${font.className}`}>
      <body
        className={`min-h-screen bg-background text-foreground antialiased flex flex-col`}
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
