import { DemoList } from "./demo-list";
import { DetailsAccordion } from "./details-accordion";
import { HomeSection } from "./home-section";
import s from "./page.module.css";

export default function HomePage() {
  return (
    <main className={s.main}>
      <h1 className={s.title}>
        Suspense fallback Progress animation reset on hydration
      </h1>
      <p className={s.lead}>
        Minimal repro for reporting upstream. Hard refresh a demo and watch the
        Progress animation through hydration.
      </p>

      <HomeSection id="demos-heading" title="Demos">
        <DemoList />
      </HomeSection>

      <HomeSection id="details-heading" title="Details">
        <DetailsAccordion />
      </HomeSection>
    </main>
  );
}
