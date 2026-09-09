import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Suspense Progress animation reset on hydration",
  description:
    "Minimal reproduction: Suspense fallback Progress animation restarts when use(browser()) + client-created promise suspend during SSR to hydration.",
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
