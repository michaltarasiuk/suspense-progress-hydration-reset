import { Suspense } from "react";
import { LoadingFallback } from "@/components/loading-fallback";
import { SiteHeader } from "@/components/site-header";
import s from "@/app/demo-page.module.css";
import { ControlGate } from "./control-gate";

export const dynamic = "force-dynamic";

const dataPromise = new Promise<string>((resolve) => {
  setTimeout(() => resolve("done"), 3000);
});

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
