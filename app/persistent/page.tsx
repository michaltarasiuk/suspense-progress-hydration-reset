import { Suspense } from "react";
import { LoadingFallback } from "@/components/loading-fallback";
import { SiteHeader } from "@/components/site-header";
import s from "@/app/demo-page.module.css";
import { PersistentGate } from "./persistent-gate";

export const dynamic = "force-dynamic";

export default function PersistentPage() {
  return (
    <div className={s.root}>
      <SiteHeader
        title="Variant C"
        subtitle="Fallback outside Suspense, fallback={null}"
      />
      <div className={s.contentColumn}>
        <LoadingFallback />
        <Suspense fallback={null}>
          <PersistentGate />
        </Suspense>
      </div>
    </div>
  );
}
