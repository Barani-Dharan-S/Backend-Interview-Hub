# V24.1 — Application Shell & Performance Foundation

## Goal
Improve initial-load behavior and navigation without changing the learning content or visual design.

## Changes
- Replaced eager page imports in `App.jsx` with `React.lazy` + `Suspense`.
- Added lightweight `src/data/counts.js` so Header/Sidebar no longer import full lesson/lab datasets for count badges.
- Added URL-driven navigation using the browser History API (`src/router.js`). Routes are shareable and Back/Forward works.
- Backend topic/subtopic navigation is represented in query parameters.
- Added a small lazy backend roadmap/questions boundary so the 1MB+ backend dataset is not part of the application shell.
- Removed the custom pointer-driven sidebar scrollbar; the sidebar now uses native scrolling.
- Added `aria-current="page"` to active navigation items.
- Added Escape-to-close behavior for the mobile sidebar.
- Added `aria-expanded`/`aria-controls` to question disclosures.

## Intentionally deferred
- Generic `LearningPage` consolidation (V24.2).
- Shared search utility (V24.2).
- Memoization/virtualization measurement pass (V24.3).
- Broader accessibility/focus-trap audit (V24.4).
- Repository/docs cleanup (V24.5).

## Philosophy
No scores, quizzes, mastery tracking, or UI redesign. V24 is a code-quality and performance learning exercise for the hub itself.
