"use client";

import { use } from "react";
import { browser } from "react-dom";
import { LoadedMeter } from "@/components/loaded-meter";
import { createClientDemoPromise } from "@/lib/demo-async-source";

export function ReproGate() {
  use(browser());
  const result = use(createClientDemoPromise("repro"));
  return <LoadedMeter result={result} />;
}
