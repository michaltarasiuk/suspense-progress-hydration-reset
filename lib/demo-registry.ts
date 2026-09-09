export const DEMO_LIST = [
  {
    href: "/repro",
    label: "Variant A",
    title: "browser() + client promise",
    description: "Progress animation resets at hydration.",
  },
  {
    href: "/control",
    label: "Variant B",
    title: "Server promise prop",
    description: "Server promise, no reset.",
  },
  {
    href: "/persistent",
    label: "Variant C",
    title: "Persistent fallback",
    description: "Persistent fallback, no reset.",
  },
] as const;
