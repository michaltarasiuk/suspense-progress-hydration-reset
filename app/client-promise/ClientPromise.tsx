"use client";

import { use } from "react";
import { browser } from "react-dom";

import { Loaded } from "@/components/loaded";

let clientPromise: Promise<number> | undefined;

function getClientPromise() {
  clientPromise ??= new Promise<number>((resolve) => {
    window.setTimeout(() => resolve(1), 3000);
  });
  return clientPromise;
}

export function ClientPromise() {
  use(browser());
  use(getClientPromise());
  return <Loaded />;
}
