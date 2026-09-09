import { Suspense, type ReactNode } from "react";
import { LoadingFallback } from "@/components/loading-fallback";
import type { FallbackPlacement } from "@/lib/demo-registry";

interface DemoSuspenseProps {
  placement: FallbackPlacement;
  children: ReactNode;
}

export function DemoSuspense({ placement, children }: DemoSuspenseProps) {
  const fallback = <LoadingFallback />;

  if (placement === "outside-suspense") {
    return (
      <>
        {fallback}
        <Suspense fallback={null}>{children}</Suspense>
      </>
    );
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
}
