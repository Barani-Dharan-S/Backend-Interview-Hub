# V24.3 — Performance Measurement & Large-List Rendering

## Purpose

V24.3 establishes a measurable performance baseline before introducing heavier rendering optimizations.
The existing UI and learning content are preserved.

## What changed

- Added opt-in development performance diagnostics with `?perf=1`.
- Added first-contentful-paint observation when supported by the browser.
- Added long-task reporting when supported.
- Added runtime resource timing for JavaScript and data/fetch resources.
- Added route shell commit timing.
- Added search/filter timing for Backend Questions and shared LearningPage tracks.
- Added rendered-card DOM counts for large-list visibility.
- Added React `useDeferredValue` to keep search input responsive while filtering.
- Added a Vite build-time `performance-report.json` containing JS chunk sizes, gzip sizes, entry/dynamic-entry flags, module counts, and asset sizes.

## Large-list strategy

No blanket virtualization or pagination was introduced in V24.3.
The application first measures actual DOM and interaction costs. This avoids adding scrolling complexity where it is not needed and keeps the learning experience unchanged.

## How to measure locally

Run the app normally, then open the dev server with:

`http://localhost:5173/Backend-Interview-Hub/?perf=1`

Use the browser console to inspect `[perf]` entries and the resource table.

For a production bundle baseline:

`npm run build`

Then inspect:

`dist/performance-report.json`

and the Vite chunk-size output.

## Acceptance checks

- Existing routes continue to work.
- UI structure and styling remain unchanged.
- Search remains functionally identical.
- No scores, progress tracking, quizzes, or gamification were added.
- No content-count inflation was added.
