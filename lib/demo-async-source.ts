export const DEMO_LOAD_DELAY_MS = 3000;

const clientPromises = new Map<string, Promise<string>>();

function createDelayedPromise(delayMs: number) {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("done"), delayMs);
  });
}

export function createServerDemoPromise(
  _key: string,
  delayMs = DEMO_LOAD_DELAY_MS
) {
  return createDelayedPromise(delayMs);
}

export function createClientDemoPromise(
  key: string,
  delayMs = DEMO_LOAD_DELAY_MS
) {
  const cached = clientPromises.get(key);
  if (cached) {
    return cached;
  }

  const promise = createDelayedPromise(delayMs);
  clientPromises.set(key, promise);
  return promise;
}
