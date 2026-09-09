import { DemoShell } from "@/components/demo-shell";
import { DemoSuspense } from "@/components/demo-suspense";
import { createGateDataPromise } from "@/lib/demo-async-source";
import { DEMOS } from "@/lib/demo-registry";
import { SuspenseGate } from "@/lib/suspense-gate";

export const dynamic = "force-dynamic";

export default function ControlPage() {
  const demo = DEMOS.control;

  return (
    <DemoShell id={demo.id}>
      <DemoSuspense placement={demo.fallbackPlacement}>
        <SuspenseGate
          strategy={demo.strategy}
          demoId={demo.id}
          dataPromise={createGateDataPromise(demo.id, demo.strategy)}
        />
      </DemoSuspense>
    </DemoShell>
  );
}
