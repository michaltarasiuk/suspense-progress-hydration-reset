"use client";

import { use } from "react";
import { LoadedMeter } from "@/components/loaded-meter";
import { createClientDemoPromise } from "@/lib/demo-async-source";

export function PersistentGate() {
  const result = use(createClientDemoPromise("persistent"));
  return <LoadedMeter result={result} />;
}
