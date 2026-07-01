import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "./Header";
import Footer from "@/components/home/Footer";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import CursorSpotlight from "@/components/effects/CursorSpotlight";
import CommandPalette from "@/components/command/CommandPalette";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Elmuzayn — Software Engineer",
  description:
    "Frontend engineer building polished, performant, and resilient products. Selected work, systems thinking, and contact.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ali Elmuzayn — Software Engineer",
    description:
      "Frontend engineer building polished, performant, and resilient products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full scroll-smooth",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
      )}
    >
      <body className="relative min-h-full bg-background font-sans text-foreground selection:bg-accent/30">
        <BackgroundGrid />
        <CursorSpotlight />
        <Header />
        <main id="top" className="relative z-10">
          {children}
        </main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
