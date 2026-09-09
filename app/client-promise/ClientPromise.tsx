"use client";

import { use, useState } from "react";
import { browser } from "react-dom";

import { Loaded } from "@/components/loaded";

export function ClientPromise() {
  use(browser());
  const [promise] = useState(
    () =>
      new Promise<number>((resolve) => {
        window.setTimeout(() => resolve(1), 3000);
      })
  );
  use(promise);
  return <Loaded />;
}
