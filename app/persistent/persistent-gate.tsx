"use client";

import { use } from "react";
import { LoadedMeter } from "@/components/loaded-meter";

const dataPromise = new Promise<string>((resolve) => {
  setTimeout(() => resolve("done"), 3000);
});

export function PersistentGate() {
  use(dataPromise);
  return <LoadedMeter />;
}
