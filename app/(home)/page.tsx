import Link from "next/link";

import s from "./page.module.css";

const DEMOS = [
  {
    slug: "client-promise",
    title: "browser() + client promise",
    description: "Progress animation resets at hydration.",
  },
  {
    slug: "server-promise",
    title: "Server promise prop",
    description: "Server promise, no reset.",
  },
  {
    slug: "persistent-fallback",
    title: "Persistent fallback",
    description: "Persistent fallback, no reset.",
  },
] as const;

export default function Page() {
  return (
    <main className={s.main}>
      <h1 className={s.title}>
        Suspense Progress animation reset on hydration
      </h1>
      <p className={s.lead}>
        Minimal reproduction for reporting upstream. Hard refresh a demo and
        watch the Progress animation through hydration.
      </p>

      <section className={s.section} aria-labelledby="demos-heading">
        <h2 className={s.sectionTitle} id="demos-heading">
          Demos
        </h2>
        <ul className={s.list}>
          {DEMOS.map((demo) => (
            <li className={s.item} key={demo.slug}>
              <div className={s.itemInner}>
                <Link href={`/${demo.slug}`} className={s.link}>
                  <span className={s.demoTitle}>{demo.title}</span>
                </Link>
                <p className={s.description}>{demo.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
