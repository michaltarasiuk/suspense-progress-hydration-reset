import { Suspense } from "react";

import { Loading } from "@/components/loading";
import { SiteHeader } from "@/components/site-header";
import { PERSISTENT_FALLBACK_CONTENT } from "@/lib/demo-content";
import { PersistentFallback } from "./PersistentFallback";

import s from "@/app/demo-page.module.css";

export const dynamic = "force-dynamic";

const promise = new Promise((resolve) => {
  setTimeout(() => resolve(1), 3000);
});

export default function Page() {
  return (
    <div className={s.root}>
      <SiteHeader
        title={PERSISTENT_FALLBACK_CONTENT.title}
        subtitle="Fallback outside Suspense, fallback={null}"
      />
      <div className={s.contentColumn}>
        <Loading />
        <Suspense fallback={null}>
          <PersistentFallback promise={promise} />
        </Suspense>
      </div>
    </div>
  );
}
