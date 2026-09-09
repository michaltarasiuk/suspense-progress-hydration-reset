import { Suspense } from "react";

import { Loading } from "@/components/loading";
import { SiteHeader } from "@/components/site-header";
import { ClientPromise } from "./ClientPromise";

import s from "@/app/demo-page.module.css";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className={s.root}>
      <SiteHeader
        title="browser() + client promise"
        subtitle="use(browser()) + client-created promise"
      />
      <div className={s.content}>
        <Suspense fallback={<Loading />}>
          <ClientPromise />
        </Suspense>
      </div>
    </div>
  );
}
