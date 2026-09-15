# V24.4 — Accessibility & Focus Engineering

## Goal
Improve keyboard, screen-reader, focus, and mobile navigation behavior without changing the visual UI or learning content.

## Changes
- Added skip-to-main-content link.
- Added route heading focus so navigation announces the new page context.
- Added mobile navigation focus management: focus enters the drawer, Escape closes it, focus returns to the menu trigger.
- Added a keyboard focus trap while the mobile navigation drawer is open.
- Added explicit site-navigation landmark and navigation labels.
- Added `aria-current`/existing navigation semantics consistently through the sidebar.
- Added explicit button types to interactive controls.
- Added `aria-pressed` to learning level filters.
- Added tab semantics and `aria-selected` to lesson/lab selectors.
- Added polite result-count updates for learning lists.
- Added search input semantics with `type=search`.
- Added focus-visible styling and reduced-motion support.
- Added explicit question/lesson answer IDs for accordion relationships.
- Added clearer expand/collapse accessible names.

## Preserved
- Existing UI design and styling direction.
- Existing learning content and counts.
- Existing routing and performance work from V24.1–V24.3.
- No scores, quizzes, evaluations, or gamification.

## Learning principle
Accessibility is treated as part of production engineering: the same content should remain understandable and operable with keyboard, screen reader, and mobile interaction.
