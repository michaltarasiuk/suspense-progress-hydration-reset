import { DemoList } from "./demo-list";
import { DetailsAccordion } from "./details-accordion";
import { HomeSection } from "./home-section";
import s from "./page.module.css";

export default function HomePage() {
  return (
    <main className={s.main}>
      <h1 className={s.title}>Suspense fallback spinner reset on hydration</h1>
      <p className={s.lead}>
        Minimal repro for reporting upstream. Each demo uses Base UI Progress
        for loading and Meter for the loaded state. Hard refresh a route and
        watch the animation from first paint through hydration.
      </p>

      <HomeSection
        id="demos-heading"
        title="Demos"
        hint="Click a demo to open it."
      >
        <DemoList />
      </HomeSection>

      <HomeSection id="details-heading" title="Details">
        <DetailsAccordion />
      </HomeSection>
    </main>
  );
}
