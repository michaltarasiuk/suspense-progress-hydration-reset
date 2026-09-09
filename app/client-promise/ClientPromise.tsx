"use client";

import { use } from "react";
import { browser } from "react-dom";

import { Loaded } from "@/components/loaded";

const promise = new Promise((resolve) => {
  setTimeout(() => resolve(1), 3000);
});

export function ClientPromise() {
  use(browser());
  use(promise);
  return <Loaded />;
}
