export type DemoId = "repro" | "control" | "persistent";

export type SuspenseStrategy =
  "browserClientPromise" | "serverPromiseProp" | "clientPromiseOnly";

export type FallbackPlacement = "inside-suspense" | "outside-suspense";

export type DemoLayout = "center" | "column";

export interface DemoEntry {
  id: DemoId;
  href: `/${DemoId}`;
  label: string;
  title: string;
  pageTitle: string;
  subtitle: string;
  description: string;
  strategy: SuspenseStrategy;
  fallbackPlacement: FallbackPlacement;
  layout: DemoLayout;
}

export const DEMOS: Record<DemoId, DemoEntry> = {
  repro: {
    id: "repro",
    href: "/repro",
    label: "Variant A",
    title: "browser() + client promise",
    pageTitle: "Variant A",
    subtitle: "use(browser()) + client-created promise",
    description: "Progress animation resets at hydration.",
    strategy: "browserClientPromise",
    fallbackPlacement: "inside-suspense",
    layout: "center",
  },
  control: {
    id: "control",
    href: "/control",
    label: "Variant B",
    title: "Server promise prop",
    pageTitle: "Variant B",
    subtitle: "Server promise prop, no use(browser())",
    description: "Server promise, no reset.",
    strategy: "serverPromiseProp",
    fallbackPlacement: "inside-suspense",
    layout: "center",
  },
  persistent: {
    id: "persistent",
    href: "/persistent",
    label: "Variant C",
    title: "Persistent fallback",
    pageTitle: "Variant C",
    subtitle: "Fallback outside Suspense, fallback={null}",
    description: "Persistent fallback, no reset.",
    strategy: "clientPromiseOnly",
    fallbackPlacement: "outside-suspense",
    layout: "column",
  },
};

export const DEMO_LIST = [
  DEMOS.repro,
  DEMOS.control,
  DEMOS.persistent,
] as const;
