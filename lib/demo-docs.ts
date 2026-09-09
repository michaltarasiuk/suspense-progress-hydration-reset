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
      "Open /repro directly (not via client navigation from /).",
      "DevTools: Network > Disable cache; Performance > CPU 4x slowdown.",
      "Hard refresh and watch the Progress bar for a jump ~1-2s in (hydration).",
      "Compare with /control and /persistent using the same hard refresh method.",
    ],
  },
] as const;
