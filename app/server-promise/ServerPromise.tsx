"use client";

import { use } from "react";

import { Loaded } from "@/components/loaded";

export function ServerPromise({ promise }: { promise: Promise<unknown> }) {
  use(promise);
  return <Loaded />;
}
