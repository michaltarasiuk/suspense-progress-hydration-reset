# suspense-fallback-progress-reset-on-hydration

Minimal repro: Suspense fallback Progress animation restarts when `use(browser())` + client-created promise suspend during SSR to hydration.

## Bug

When a client component inside `<Suspense>`:

1. calls `use(browser())` (suspends on server, fallback in HTML), then
2. calls `use(promise)` where the promise is created inside the client component,

the Progress animation restarts when React hydrates, even though loading is still in progress.

- **Expected:** One continuous Progress animation from first paint through load.
- **Actual:** Animation jumps back to frame 0 at hydration (fallback DOM remount / client-only suspend restart).

Two sequential `use()` calls alone do not cause the reset. The combination of SSR to hydration plus a client-born promise does.

## Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for navigation, then hard refresh a demo route.

## Routes

| Route         | Pattern                                      | Expected                            |
| ------------- | -------------------------------------------- | ----------------------------------- |
| `/`           | Home navigation                              | Links to all demos                  |
| `/repro`      | `use(browser())` + client Map promise        | Animation **restarts** at hydration |
| `/control`    | Server promise as prop, no `use(browser())`  | Smoother / no client-only restart   |
| `/persistent` | Progress outside Suspense, `fallback={null}` | Animation should **not** reset      |

## How to verify

1. Hard refresh `/repro`.
2. Watch the Progress bar from first paint through hydration (~1-2s in).
3. **Bug:** animation visibly restarts when JS hydrates, then keeps animating until the 3s timeout.
4. Compare `/control` and `/persistent`.
5. Optional: React DevTools - confirm fallback unmount/remount or new DOM node at hydration.

## Stack

- Next.js 16.3.4
- React 19.2.8
- [@base-ui/react](https://base-ui.com/llms.txt) Progress (indeterminate), styled with CSS Modules, no Tailwind

## Related

- [react `browser()` docs](https://react.dev/reference/react-dom/browser)
