import { Suspense } from "react";
import { LoadingFallback } from "@/components/loading-fallback";
import { SiteHeader } from "@/components/site-header";
import s from "@/app/demo-page.module.css";
import { ReproGate } from "./repro-gate";

export const dynamic = "force-dynamic";

export default function ReproPage() {
  return (
    <div className={s.root}>
      <SiteHeader
        title="Variant A"
        subtitle="use(browser()) + client-created promise"
      />
      <div className={s.content}>
        <Suspense fallback={<LoadingFallback />}>
          <ReproGate />
        </Suspense>
      </div>
    </div>
  );
}
