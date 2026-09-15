# V24.2 — Shared Learning Architecture & Search

V24.2 builds on the verified V24.1 routing/performance baseline. This release is a maintainability refactor: no content expansion and no UI redesign.

## Goals
- Remove duplicated learning-page implementations.
- Establish one reusable LearningPage/LearningCard implementation.
- Standardize search behavior across learning pages, practical labs, and backend questions.
- Preserve the existing visual language and learning-first UX.
- Improve accordion accessibility in the shared learning cards and practical labs.
- Keep topic datasets lazy by continuing to import them from route-level page modules.

## Changes
- Added `src/components/LearningPage.jsx`.
- Added `src/utils/search.js` with shared `matchesQuery()` behavior.
- Refactored Docker, Kubernetes, CI/CD, Jenkins, GitHub Actions, Cloud, Production Engineering, Deep Dive, Internal Workings, and Distributed Systems pages into configuration-driven wrappers.
- Reused existing dataset-specific fields through a shared renderer; no learning content was intentionally changed.
- Replaced `JSON.stringify(item)` search on refactored learning tracks with explicit searchable fields.
- Updated `Questions.jsx` to use the shared search utility.
- Updated `PracticalLabs.jsx` to use the shared search utility and disclosure ARIA attributes.
- Memoized shared learning cards and stabilized the toggle callback so unchanged cards can skip re-rendering.
- Version bumped to `24.2.0`.

## Deliberately deferred
- Full repository documentation cleanup.
- Deep accessibility/focus audit.
- Bundle-size measurement and virtualization/pagination decisions.
- Bookmarking and print/PDF export.
- Additional learning content.

## Learning philosophy
This release keeps the project learning-first. It adds no scoring, quizzes, mastery tracking, or evaluation mechanics.
