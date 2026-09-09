import { Loading } from "@/components/loading";
import { SiteHeader } from "@/components/site-header";
import { LOADING_ONLY_CONTENT } from "@/lib/demo-content";

import s from "@/app/demo-page.module.css";

export default function Page() {
  return (
    <div className={s.root}>
      <SiteHeader
        title={LOADING_ONLY_CONTENT.title}
        subtitle={LOADING_ONLY_CONTENT.subtitle}
      />
      <div className={s.content}>
        <Loading />
      </div>
    </div>
  );
}
