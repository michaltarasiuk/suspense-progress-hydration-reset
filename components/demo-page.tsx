import { Suspense } from "react";
import { DemoShell } from "@/components/demo-shell";
import { LoadingFallback } from "@/components/loading-fallback";
import { createGateDataPromise } from "@/lib/demo-async-source";
import { SuspenseGate } from "@/lib/suspense-gate";
import { DEMOS, type DemoId } from "@/lib/demo-registry";

interface DemoPageProps {
  id: DemoId;
}

export function DemoPage({ id }: DemoPageProps) {
  const demo = DEMOS[id];
  const dataPromise = createGateDataPromise(id, demo.strategy);
  const fallbackOutside = demo.fallbackPlacement === "outside-suspense";

  return (
    <DemoShell id={id}>
      {fallbackOutside && <LoadingFallback />}
      <Suspense fallback={fallbackOutside ? null : <LoadingFallback />}>
        <SuspenseGate
          strategy={demo.strategy}
          demoId={id}
          dataPromise={dataPromise}
        />
      </Suspense>
    </DemoShell>
  );
}
