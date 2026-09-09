"use client";

import { use } from "react";
import { browser } from "react-dom";
import { LoadedMeter } from "@/components/loaded-meter";
import { createClientDemoPromise } from "@/lib/demo-async-source";
import { assertNever } from "@/lib/assert-never";
import type { DemoId, SuspenseStrategy } from "@/lib/demo-registry";

interface SuspenseGateProps {
  strategy: SuspenseStrategy;
  demoId: DemoId;
  dataPromise?: Promise<string>;
}

interface DemoIdGateProps {
  demoId: DemoId;
}

interface ServerPromiseGateProps {
  dataPromise: Promise<string>;
}

function BrowserClientPromiseGate({ demoId }: DemoIdGateProps) {
  use(browser());
  const result = use(createClientDemoPromise(demoId));
  return <LoadedMeter result={result} />;
}

function ClientPromiseGate({ demoId }: DemoIdGateProps) {
  const result = use(createClientDemoPromise(demoId));
  return <LoadedMeter result={result} />;
}

function ServerPromiseGate({ dataPromise }: ServerPromiseGateProps) {
  const result = use(dataPromise);
  return <LoadedMeter result={result} />;
}

export function SuspenseGate({
  strategy,
  demoId,
  dataPromise,
}: SuspenseGateProps) {
  switch (strategy) {
    case "browserClientPromise":
      return <BrowserClientPromiseGate demoId={demoId} />;
    case "clientPromiseOnly":
      return <ClientPromiseGate demoId={demoId} />;
    case "serverPromiseProp":
      return <ServerPromiseGate dataPromise={dataPromise!} />;
    default:
      return assertNever(strategy);
  }
}
