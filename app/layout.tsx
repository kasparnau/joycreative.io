import "@/styles/globals.css";
import "lenis/dist/lenis.css";

import Footer from "./(layout)/components/footer/footer";
import Header from "./(layout)/components/header/header";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Providers from "./(layout)/components/providers";
import { siteConfig } from "@/config/site";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Joy Creative",
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["UGC", "UEFN", "Game Development"],
  authors: [
    {
      name: "Joy Creative",
      url: "https://joycreative.io",
    },
  ],
  creator: "Joy Creative",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.openGraphImage,
        width: 1000,
        height: 1000,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
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
