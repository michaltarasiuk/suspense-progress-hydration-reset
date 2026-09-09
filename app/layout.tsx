import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Suspense Progress animation reset on hydration",
  description:
    "Minimal reproduction: Suspense fallback Progress animation restarts when use(browser()) + client-created promise suspend during SSR to hydration.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
