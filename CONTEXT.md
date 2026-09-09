# Domain glossary

Terms used when navigating this reproduction.

## Demo variant

One of three URL routes (`/repro`, `/control`, `/persistent`) that exercises a different Suspense suspend trigger while sharing the same loading UI and delay.

## Fallback placement

Where the loading indicator renders relative to Suspense: inside the boundary (default fallback) or outside it (persistent indicator with `fallback={null}`).

## Demo async source

The delayed promise every variant waits on. Server and client helpers share `DEMO_LOAD_DELAY_MS` so comparisons isolate suspend behavior, not timing.
