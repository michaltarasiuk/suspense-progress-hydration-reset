import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Suspense fallback spinner reset on hydration",
  description:
    "Minimal repro: Suspense fallback spinner CSS animation restarts when use(browser()) + client-created promise suspend during SSR to hydration.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
