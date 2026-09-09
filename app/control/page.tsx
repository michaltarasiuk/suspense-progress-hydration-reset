import { Suspense } from "react";
import { LoadingFallback } from "@/components/loading-fallback";
import { SiteHeader } from "@/components/site-header";
import { createServerDemoPromise } from "@/lib/demo-async-source";
import s from "@/app/demo-page.module.css";
import { ControlGate } from "./control-gate";

export const dynamic = "force-dynamic";

const dataPromise = createServerDemoPromise("control");

export default function ControlPage() {
  return (
    <div className={s.root}>
      <SiteHeader
        title="Variant B"
        subtitle="Server promise prop, no use(browser())"
      />
      <div className={s.content}>
        <Suspense fallback={<LoadingFallback />}>
          <ControlGate dataPromise={dataPromise} />
        </Suspense>
      </div>
    </div>
  );
}
