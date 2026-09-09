import { Suspense } from "react";

import { Loading } from "@/components/loading";
import { SiteHeader } from "@/components/site-header";
import { ServerPromise } from "./ServerPromise";

import s from "@/app/demo-page.module.css";

export const dynamic = "force-dynamic";

const promise = new Promise((resolve) => {
  setTimeout(() => resolve(1), 3000);
});

export default function Page() {
  return (
    <div className={s.root}>
      <SiteHeader
        title="Server promise prop"
        subtitle="Server promise prop, no use(browser())"
      />
      <div className={s.content}>
        <Suspense fallback={<Loading />}>
          <ServerPromise promise={promise} />
        </Suspense>
      </div>
    </div>
  );
}
