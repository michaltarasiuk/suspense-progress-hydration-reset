"use client";

import { use } from "react";
import { LoadedMeter } from "@/components/loaded-meter";

interface ControlGateProps {
  dataPromise: Promise<string>;
}

export function ControlGate({ dataPromise }: ControlGateProps) {
  const result = use(dataPromise);
  return <LoadedMeter result={result} />;
}
