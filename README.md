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

Open the dev URL printed in the terminal (often [http://localhost:3000](http://localhost:3000) or `:3001`).

## Routes

| Route         | Pattern                                      | Expected                            |
| ------------- | -------------------------------------------- | ----------------------------------- |
| `/`           | Home navigation                              | Links to all demos                  |
| `/repro`      | `use(browser())` + client Map promise        | Animation **restarts** at hydration |
| `/control`    | Server promise as prop, no `use(browser())`  | Smoother / no client-only restart   |
| `/persistent` | Progress outside Suspense, `fallback={null}` | Animation should **not** reset      |

## How to verify

The reset only shows on a **full page load** of `/repro`, not when clicking through from `/`.

1. Open `/repro` directly in the address bar.
2. Open DevTools:
   - **Network:** enable "Disable cache"
   - **Performance:** set CPU to **4x slowdown** (makes the hydration jump easier to see)
3. Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows/Linux).
4. Watch the indeterminate Progress bar from first paint. Around 1-2s in (when JS hydrates), the bar should **jump back** to the start of its slide animation.
5. Hard refresh `/control` and `/persistent` the same way for comparison. B should stay smooth; C should not reset either.
6. Optional checks:
   - **View page source** on `/repro`: "Loading" should appear in the HTML before JS runs.
   - **Elements panel:** the progress indicator node may unmount and remount at hydration.
   - **React DevTools:** confirm fallback unmount/remount at hydration.

### Common false negatives

- **Client navigation** from `/` to Variant A: no SSR animation to compare, so no visible reset.
- **No CPU throttling:** on a fast machine hydration happens quickly and the jump is easy to miss.
- **`prefers-reduced-motion`:** OS setting may disable the CSS animation entirely.

## Stack

- Next.js 16.3.4
- React 19.2.8
- [@base-ui/react](https://base-ui.com/llms.txt) Progress (indeterminate), styled with CSS Modules, no Tailwind

## Related

- [react `browser()` docs](https://react.dev/reference/react-dom/browser)
