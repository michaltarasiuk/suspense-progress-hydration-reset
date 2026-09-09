export const CLIENT_PROMISE_CONTENT = {
  slug: "client-promise",
  title: "browser() + client promise",
  subtitle: "use(browser()) + window.setTimeout promise",
  description: "Progress animation resets at hydration.",
};

export const SERVER_PROMISE_CONTENT = {
  slug: "server-promise",
  title: "Server promise prop",
  subtitle: "Server promise, no reset.",
  description: "Server-created promise passed as prop. Animation stays smooth.",
};

export const LOADING_ONLY_CONTENT = {
  slug: "loading-only",
  title: "Loading only",
  subtitle: "No Suspense, direct render",
  description:
    "Loading component rendered directly. Animation should stay smooth through hydration.",
};

export const DEMO_CONTENT = [
  CLIENT_PROMISE_CONTENT,
  SERVER_PROMISE_CONTENT,
  LOADING_ONLY_CONTENT,
] as const;
