import "@/styles/globals.css";

import Footer from "./components/footer";
import { GeistSans } from "geist/font/sans";
import Header from "./components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joy Creative",
  description: "Game development studio building future nostalgia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className}`}>
      <body
        className={`min-h-screen bg-background text-foreground antialiased flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
