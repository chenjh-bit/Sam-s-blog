import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource/noto-sans-sc/400.css";
import "@fontsource/noto-sans-sc/500.css";
import "@fontsource/noto-sans-sc/700.css";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { CursorGlow } from "@/components/cursor-glow";
import { Grain } from "@/components/grain";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Jinhao Chen — Robotics · Reinforcement Learning · Software",
  description:
    "Portfolio of Jinhao Chen: a software engineering undergrad teaching robots to find their way — reinforcement learning, multi-robot navigation, and sim-to-real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-background font-sans text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
        <CursorGlow />
        <Grain />
        <ScrollProgress />
      </body>
    </html>
  );
}
