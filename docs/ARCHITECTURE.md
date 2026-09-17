# Architecture Overview

## Application model

Backend Interview Hub is a client-side React application. There is no application server or database in the runtime path.

```text
Browser
  │
  ├── React application shell
  │      ├── Header
  │      ├── Sidebar
  │      └── Route content
  │
  ├── URL-driven router
  │
  ├── Lazy route chunks
  │
  └── Learning data
         ├── Backend questions
         ├── Learning tracks
         ├── Labs
         └── Scenario material
```

## Routing

`src/router.js` owns URL-to-view resolution. Navigation state is represented in the URL so pages can be refreshed, shared, and revisited with browser Back/Forward behavior.

Backend question filters use query parameters rather than requiring all navigation state to live only in React component state.

## Shared learning architecture

The learning tracks use a common rendering layer:

```text
Track configuration
      ↓
LearningPage
      ↓
LearningCard
      ↓
Lesson content
```

This keeps interaction behavior, search, accordion semantics, and accessibility fixes in one place while individual tracks provide their own data/configuration.

## Data loading

Large learning datasets are kept out of the initial application shell where practical. The shell uses lightweight count metadata, while route-level content can be loaded when its area is opened.

This avoids the original startup pattern where every dataset was imported before the first useful UI could render.

## Search

Shared search behavior lives in `src/utils/search.js` so questions, lessons, and labs do not each implement unrelated filtering rules.

Search is intentionally field-based rather than serializing an entire object on every keystroke.

## Performance

Performance instrumentation lives in `src/utils/performance.js` and can be enabled during development with `?perf=1`.

The instrumentation is intended to answer questions such as:

- How quickly does meaningful content appear?
- Which route/data resources are loaded?
- How expensive is filtering?
- How large is the rendered DOM?
- Where are long tasks occurring?

Optimization decisions should be based on these measurements rather than assumptions.

## Accessibility

The application uses semantic navigation and explicit interaction state for expandable content. The mobile navigation manages keyboard focus, Escape behavior, and focus restoration. Route changes move focus to the new page heading where appropriate.

Keyboard operation should not depend on pointer-only interactions.

## Deployment

```text
Git push
   ↓
GitHub Actions
   ↓
npm ci
   ↓
npm run build
   ↓
GitHub Pages artifact
   ↓
GitHub Pages deployment
```

The Vite base path is configured for the repository name. `404.html` supports client-side deep links on GitHub Pages.

## Design principles

1. Keep the application client-side and simple to deploy.
2. Prefer shared components over duplicated page implementations.
3. Load large data only when it is needed.
4. Measure performance before introducing complexity.
5. Preserve keyboard and assistive-technology access.
6. Keep learning content separate from presentation logic.
7. Treat labs and scenarios as learning tools, not evaluations.
8. Optimize for conceptual depth and production reasoning rather than question-count growth.
