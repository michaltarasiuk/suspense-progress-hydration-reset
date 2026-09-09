import { Suspense } from "react";

import { Loading } from "@/components/loading";
import { SiteHeader } from "@/components/site-header";
import { SERVER_PROMISE_CONTENT } from "@/lib/demo-content";
import { ServerPromise } from "./ServerPromise";

import s from "@/app/demo-page.module.css";

export const dynamic = "force-dynamic";

function createServerPromise() {
  return new Promise<unknown>((resolve) => {
    setTimeout(() => resolve(1), 3000);
  });
}

export default function Page() {
  const promise = createServerPromise();

  return (
    <div className={s.root}>
      <SiteHeader
        title={SERVER_PROMISE_CONTENT.title}
        subtitle={SERVER_PROMISE_CONTENT.subtitle}
      />
      <div className={s.content}>
        <Suspense fallback={<Loading />}>
          <ServerPromise promise={promise} />
        </Suspense>
      </div>
    </div>
  );
}
