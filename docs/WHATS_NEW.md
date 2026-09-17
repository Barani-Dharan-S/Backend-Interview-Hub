# What's New

## V25.0 — Learning Depth & Complete Interview Roadmap

- Expanded the Interview Roadmap beyond the original backend sequence through Coding Problems.
- Added the complete learning path covering React, JavaScript, Full Stack Development, Full-Stack Scenarios, Practical Labs, Docker, Kubernetes, CI/CD, Jenkins, GitHub Actions, Cloud & Deployment, Production Engineering, Deep Learning & Architecture, Internal Workings, and Distributed Systems.
- Kept the roadmap connected to existing routes so each stage can open its learning material directly.
- Preserved existing backend topic/subtopic navigation and question counts.
- Kept the UI and learning philosophy unchanged: learning-first, no scoring, no quizzes, no pass/fail.
- Established the V25 direction for deeper concept explanations, cross-stack connections, production reasoning, troubleshooting, and interview follow-up depth.

## V24.5 — Repository Quality & Documentation

- Reworked the main README around the current full-stack learning mission.
- Added a concise architecture guide.
- Added contribution and development guidance.
- Moved historical release notes/statistics into `docs/releases/`.
- Added a user-facing What's New page.
- Standardized project metadata for the current release.
- Added repository licensing information.

## Recent engineering improvements

### V24.4
Accessibility and focus management were strengthened across navigation, learning interactions, keyboard usage, mobile drawer behavior, and route changes.

### V24.3
Performance measurement was added so rendering, filtering, resource loading, long tasks, and large DOM costs can be observed before further optimization.

### V24.2
Learning pages were consolidated around shared `LearningPage` / `LearningCard` architecture and shared search behavior.

### V24.1
The application shell moved to URL-driven navigation, lazy-loaded routes, lightweight counts, and GitHub Pages deep-link fallback handling.

## V25.0.1 — Runtime polish
- Prevented first-paint theme flash with synchronous theme initialization in `index.html`.
- Added route-specific document titles and meta descriptions.
- Collapsed Backend Questions/Roadmap page and data loading into a single Suspense boundary.
- Enabled React StrictMode in the application entry point.
