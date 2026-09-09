import { DEMO_LIST } from "@/lib/demo-registry";

export const ACCORDION_ITEMS = [
  {
    title: "What is the bug?",
    kind: "paragraph",
    text: "When a client component inside Suspense calls use(browser()) and then use(promise) with a client-created promise, the Progress animation restarts at hydration even though loading is still in progress.",
  },
  {
    title: "How to verify",
    kind: "steps",
    items: [
      "Open Variant A and hard refresh.",
      "Watch the Progress bar from first paint through hydration.",
      "The animation should restart when JS hydrates.",
      "Compare Variant B and Variant C for contrast.",
    ],
  },
  {
    title: "What each variant tests",
    kind: "variants",
    items: DEMO_LIST.map((demo) => ({
      label: demo.label,
      description: demo.description,
      expected: demo.expected,
    })),
  },
] as const;
