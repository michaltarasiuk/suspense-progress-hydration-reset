import { Suspense } from "react";

import s from "@/app/demo-page.module.css";
import { Loading } from "@/components/loading";
import { SiteHeader } from "@/components/site-header";

import { PersistentPromise } from "./PersistentFallback";

export const dynamic = "force-dynamic";

const promise = new Promise((resolve) => {
  setTimeout(() => resolve(1), 3000);
});

export default function Page() {
  return (
    <div className={s.root}>
      <SiteHeader
        title="Persistent fallback"
        subtitle="Fallback outside Suspense, fallback={null}"
      />
      <div className={s.contentColumn}>
        <Loading />
        <Suspense fallback={null}>
          <PersistentPromise promise={promise} />
        </Suspense>
      </div>
    </div>
  );
}
