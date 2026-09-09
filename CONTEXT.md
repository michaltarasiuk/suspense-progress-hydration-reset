# Domain glossary

Terms used when navigating this repro.

## Demo variant

One of three URL routes (`/repro`, `/control`, `/persistent`) that exercises a different Suspense suspend trigger while sharing the same loading UI and delay.

## Suspense strategy

The suspend trigger for a demo variant: `browserClientPromise`, `serverPromiseProp`, or `clientPromiseOnly`. Selected from the demo registry; implemented by the suspense gate module.

## Fallback placement

Where the loading indicator renders relative to Suspense: `inside-suspense` (default fallback) or `outside-suspense` (persistent indicator, `fallback={null}`).

## Demo async source

The delayed promise every variant waits on. Server and client adapters share `DEMO_LOAD_DELAY_MS` so comparisons isolate suspend behavior, not timing.
