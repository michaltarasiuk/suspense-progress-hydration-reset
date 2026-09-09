export const ACCORDION_ITEMS = [
  {
    title: "What is the bug?",
    kind: "paragraph",
    text: "When a client component inside Suspense calls use(browser()) then use(promise) with a client-created promise, the Progress animation restarts at hydration even though loading is still in progress.",
  },
  {
    title: "How to verify",
    kind: "steps",
    items: [
      "Hard refresh Variant A and watch the Progress bar.",
      "Compare with Variants B and C.",
    ],
  },
] as const;
