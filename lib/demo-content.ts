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
  description: "Server promise, no reset.",
};

export const PERSISTENT_FALLBACK_CONTENT = {
  slug: "persistent-fallback",
  title: "Persistent fallback",
  subtitle: "Persistent fallback, no reset.",
  description: "Persistent fallback, no reset.",
};

export const DEMO_CONTENT = [
  CLIENT_PROMISE_CONTENT,
  SERVER_PROMISE_CONTENT,
  PERSISTENT_FALLBACK_CONTENT,
] as const;
