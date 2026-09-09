"use client";

import { use } from "react";
import { browser } from "react-dom";
import { LoadedMeter } from "@/components/loaded-meter";

const dataPromise = new Promise<string>((resolve) => {
  setTimeout(() => resolve("done"), 3000);
});

export function ReproGate() {
  use(browser());
  use(dataPromise);
  return <LoadedMeter />;
}
